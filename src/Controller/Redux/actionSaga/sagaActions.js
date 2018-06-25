import key from '../lib/constants'

export function getCoinPrice (symbol, date) {
  return {
    type: key.GET_COIN_PRICE,
    payload: symbol,
    date
  }
}

export function setSagaCoinPrice (coinPrice) {
  return {
    type: key.SET_SAGA_COIN_PRICE,
    payload: coinPrice
  }
}
