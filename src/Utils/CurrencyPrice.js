const CurrencyPrice = (price, currency) => {
  return price.toLocaleString('pt-br', {
    style: 'currency',
    currency
  })
}

export default CurrencyPrice;