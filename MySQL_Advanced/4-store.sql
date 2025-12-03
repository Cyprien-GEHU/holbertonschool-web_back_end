--  create a trigger decreases the quantity of an item 

CREATE TRIGGER decrease
AFTER INSERT ON orders
FOR EACH ROW UPDATE items
SET quantity = quantity - NEW.Number
WHERE name = NEW.item_name; 
