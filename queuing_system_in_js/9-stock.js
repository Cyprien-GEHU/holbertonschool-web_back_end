import { createClient } from 'redis';
import { promisify } from "util";
import express from 'express';


const app = express();
const client = createClient();
const gAsync = promisify(client.get).bind(client);
const sAsync = promisify(client.set).bind(client);

client.on("connect", () => {
    console.log("Redis client connected to the server");
})

client.on("error", (err) => {
    console.log(`Redis client not connected to the server:${err.message}`);
})

const listProducts = [
    { id: 1, name: "Suitcase 250", price: 50, stock: 4 },
    { id: 2, name: "Suitcase 450", price: 100, stock: 10 },
    { id: 3, name: "Suitcase 650", price: 350, stock: 2 },
    { id: 4, name: "Suitcase 1050", price: 550, stock: 5 }
]

function getItemById(id) {
    return listProducts.find((product) => product.id === id);
}

function reserveStockById(itemId, stock) {
    return sAsync(`item.${itemId}`, stock);
}

async function getCurrentReservedStockById(itemId) {
    const stock = await gAsync(`item.${itemId}`);
    return stock ? parseInt(stock) : 0;
}

app.get("/list_products", (req, res) => {
    const listItem = listProducts.map((item) => ({
        itemId: item.id,
        itemName: item.name,
        price: item.price,
        initialAvailableQuantity: item.stock
    }))
    res.json(listItem)
})

app.listen(1245, () => {
    console.log(`Server running on port 1245`)
})

app.get("/list_products/:itemId", async (req, res) => {
    const item_Id = parseInt(req.params.itemId);
    const item = getItemById(item_Id);

    if (!item) {
        return res.json({status: "Product not found"});
    }

    const Stock = await getCurrentReservedStockById(item_Id);
    const currentQuantity = Stock > 0 ? item.stock - Stock : item.stock;

    res.json({
        itemId: item.id,
        itemName: item.name,
        price: item.price,
        initialAvailableQuantity: item.stock,
        currentQuantity
    });
});

app.get("/reserve_product/:itemId", async (req, res) => {
    const itemId = parseInt(req.params.itemId);
    const item = getItemById(itemId);

    if (!item) {
        return res.json({status: "Product not found"});
    }

    const Stock = await getCurrentReservedStockById(itemId);
    const currentQuantity = Stock > 0 ? item.stock - Stock : item.stock;

    if (currentQuantity  < 1)
        return res.json({status: "Not engouth quantity available", itemId})

    const ReservationStock = Stock > 0 ? Stock +1 : 1;
    await reserveStockById(item, ReservationStock);
    res.json({status: "Reservation comfirmed", itemId})
});