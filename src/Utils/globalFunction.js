import moment from 'moment'
import jaLocale from 'moment/locale/ja'
import enLocale from 'moment/locale/en-au'
import I18n from 'react-native-i18n'
import io from 'socket.io-client'
import { EventRegister } from 'react-native-event-listeners'
import { KEYSTORE, LOCALE } from 'utils/globalConstants'
import { Linking } from 'react-native'
import store from 'react-native-simple-store'
import settings from 'controller/settings'
var socket
/**
* NAME: convertTimestampToDateTime
* PARAMS: timestamp
* Convert from timeStamp to MM/DD h:mma
*/
export const convertTimestampToDateTime = (strTimestamp) => {
  let strTime = moment(strTimestamp * 1000).format('MM/DD h:mma')
  return strTime
}
/**
* NAME: convertTimestampToDate
* PARAMS: timestamp
* Convert from timeStamp to MM/DD h:mma
*/
export const convertTimestampToDate = (strTimestamp) => {
  let strTime = moment(strTimestamp * 1000).format('YYYY-MM-DD')
  return strTime
}

/**
* NAME: convertDateFormat
* PARAMS: date
* Convert from timeStamp to MM/DD h:mma
*/
export const convertDateFormat = (dateFormat) => {
  const date = new Date(dateFormat)
  let strTime = moment(date).format('YYYY/MM/DD')
  return strTime
}

/**
* NAME: convertTimestampToDateTime
* PARAMS: timestamp
* Convert from timeStamp to MM/DD h:mma
*/
export const convertTimestampToYearDateTime = (strTimestamp) => {
  let strTime = moment(strTimestamp * 1000).format('MM/DD/YY h:mm a')
  return strTime
}

export const convertTimestampToTextDateTime = (strTimestamp, locale) => {
  let strTime
  if (locale === LOCALE.EN) {
    //  moment().locale('en', enLocale)
    moment.updateLocale('en', enLocale, {
      monthsShort: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]
    })
    strTime = moment(strTimestamp * 1000).format('DD MMM YYYY H:mm a')
  } else {
    //  moment().locale('ja', jaLocale)
    moment.updateLocale('ja', jaLocale, {
      monthsShort: [
        '1月', '2月', '3月', '4月', '5月', '6月',
        '7月', '8月', '9月', '10月', '11月', '12月'
      ]
    })
    strTime = moment(strTimestamp * 1000).format('YYYY年 MMM DD日 H:mm a')
  }
  return strTime
}
/**
* NAME: validateAddress
* PARAMS: strAddress
* Validate address from users input
* RULE: A-F, a-f, 0-9, x
*/
export const validateAddress = (strAddress) => {
  var reg = ''
  if (countDots(strAddress, '\\x') > 1) {
    reg = /^([A-Fa-f0-9_]+)$/
  } else {
    reg = /^([A-Fa-f0-9_x]+)$/
  }

  return reg.test(strAddress)
}

/**
* NAME: countDots
* PARAMS: strString, strLetter
* Count dots in string receive from user input
*/
export const countDots = (strString, strLetter) => {
  return (strString.match(RegExp(strLetter, 'g')) || []).length
}

/**
* NAME: sortArray
* PARAMS: arrSort
* Sort array id from user input
*/
export const sortArray = (arrSort) => {
  return arrSort.sort((a, b) => (a.id < b.id) ? 1 : -1)
}

/**
* NAME: validateMnemonic
* PARAMS: strMnemonic
* Validate mnemonic type from users input
* RULE: A-Z, a-z, space
*/
export const validateMnemonic = (strMnemonic) => {
  var reg = /^[a-zA-Z\s]*$/
  return reg.test(strMnemonic)
}

/**
* NAME: validateNumber
* PARAMS: strNumber
* Validate number type from users input
* RULE: 0-9, _
*/
export const validateNumber = (strNumber) => {
  var reg = /^([0-9_.]+)$/
  return reg.test(strNumber)
}

/**
* NAME: validateSpace
* PARAMS: strString
* Remove all space if string contain all space
*/
export const validateSpace = (strString) => {
  return /\S/.test(strString)
}

export const keyExtractor = (item, index) => {
  return index
}

export const convertObjectToArray = (objConvert) => {
  return Object.keys(objConvert).map(function (key) { return objConvert[key] })
}

/**
* NAME: convertWeiToBalance
* PARAMS: strValue, iDecimal
* Convert value from wei value to format value
*/
export const convertWeiToBalance = (strValue, iDecimal = 18) => {
  return parseInt(strValue) / Math.pow(10, iDecimal)
}

/**
* NAME: convertBalanceToWei
* PARAMS: strValue, iDecimal
* Convert value from balance value to wei value
*/
export const convertBalanceToWei = (strValue, iDecimal = 18) => {
  return strValue * Math.pow(10, iDecimal)
}

/**
* NAME: showAlert
* PARAMS: THIS, strMessage, isError
* Show alert for HB application
*/
export const showAlert = (THIS, strMessage, isError) => {
  THIS.showAlert(strMessage, isError)
}

/**
* NAME: formatNumber
* PARAMS: strNumber, isFiatMoney
* RULE Format Number of HB Wallet:
* - FiatMoney : 2 decimal
* - CryptoMoney: Base on number decimal (maximum 8 decimal)
*/
export const formatNumber = (strNumber, isFiatMoney = false, precisionFiat = 2) => {
  // lien quan den lay max trong send
  strNumber = Number(strNumber).toFixed(10).replace(/\.?0+$/, '')
  let dotsCountStr = countDots(strNumber.toString(), '\\.')
  if (dotsCountStr === 1) {
    let arrNum = strNumber.toString().split('.')
    if (arrNum[1].length > 2) {
      arrNum[1] = arrNum[1].substring(0, 8)
    }
    strNumber = arrNum.join('.')
  }

  let stringNumber = Number(strNumber).toFixed(8).replace(/\.?0+$/, '')
  let dotsCount = countDots(stringNumber, '\\.')
  let precision = null
  if (dotsCount === 1) {
    let decimalCount = stringNumber.length - stringNumber.indexOf('.') - 1
    decimalCount = decimalCount <= 2 ? 2 : decimalCount
    precision = decimalCount > 8 ? 8 : decimalCount
  } else {
    precision = 2
  }
  let value = I18n.toNumber(stringNumber,
    { separator: '.', precision: isFiatMoney ? precisionFiat : precision, delimiter: ',' })
  return value === 'NaN' ? '...' : value
}

export const formatNumberNotRound = (strNumber, isFiatMoney = false) => {
  let stringNumber = Number(strValue).toFixed(8).replace(/\.?0+$/, '')
  let dotsCount = countDots(stringNumber, '\\.')
  let precision = null
  if (dotsCount === 1) {
    let decimalCount = stringNumber.length - stringNumber.indexOf('.') - 1
    decimalCount = decimalCount <= 2 ? 2 : decimalCount
    precision = decimalCount > 8 ? 8 : decimalCount
  } else {
    precision = 2
  }
  let value = I18n.toNumber(stringNumber,
    { separator: '.', precision: isFiatMoney ? 2 : precision, delimiter: '' })
  return value
}

export const formatNumberWithPrecision = (strNumber, precision) => {
  let stringNumber = Number(strNumber).toFixed(8).replace(/\.?0+$/, '')
  let value = I18n.toNumber(stringNumber,
    { separator: '.', precision: precision, delimiter: ',' })
  return value
}
export const formatNumberWithPrecisionWithOutDelimiter = (strNumber, precision) => {
  let stringNumber = Number(strNumber).toFixed(8).replace(/\.?0+$/, '')
  let value = I18n.toNumber(stringNumber,
    { separator: '.', precision: precision, delimiter: '' })
  return value
}

export const activeWebSocket = async (setJbcBalanceData, setTransactionHistory, setSendingProcess, arrExchangeRate) => {
  let cardETHAddress = 'text'

  socket = io.connect(settings.socket.url, {
    transports: ['websocket'],
    query: {
      token: settings.socket.key,
      address: [cardETHAddress]
    }
  })

  socket.on('connect', () => {
    socket.emit('room', [cardETHAddress])
  })

  socket.on('event', async (event) => {
    console.log(event)
  })
}

export const pushNotification = async (isSent, value, symbol, setJbcBalanceData) => {
  const language = await store.get(KEYSTORE.LANGUAGE)
  console.log(language)
  // call here setProSerData
  EventRegister.emit('loadingInitialSend')
}

export const detectLinking = (url) => {
  console.log(url)
  Linking.canOpenURL(url).then(isSupport => {
    if (!isSupport) {
      console.log(`Linking url wrong` + url)
    } else {
      return Linking.openURL(url)
    }
  }).catch(err => console.error('An error occurred', err))
}

export const _keyExtractor = (item, index) => index.toString()

export const validateURL = (str) => {
  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i') // fragment locator
  return pattern.test(str)
}
export function getCurrentTimestamp () {
  return new Date().getTime()
}

export const mapToJson = (map) => {
  return JSON.stringify([...map])
}

export const jsonToMap = (jsonStr) => {
  return new Map(JSON.parse(jsonStr))
}
