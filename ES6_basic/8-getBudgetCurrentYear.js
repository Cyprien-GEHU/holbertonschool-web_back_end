function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const y = getCurrentYear();
  const budget = {
    [`income-${y}`]: income,
    [`gdp-${y}`]: gdp,
    [`capita-${y}`]: capita,
  };
  return budget;
}
