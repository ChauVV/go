import { Dimensions, StyleSheet, Platform } from 'react-native'

const CORE_RATIO = 667 / 375
const MYWIDTH = Dimensions.get('window').width
const MYHEIGHT = Dimensions.get('window').height
const MYSCALE = CORE_RATIO / (MYHEIGHT / MYWIDTH)
const guidelineBaseWidth = 375
const guidelineBaseHeight = 667

export const width = num => MYWIDTH * (num / 100)
export const height = num => MYHEIGHT * (num / 100)
export const scale = (size) => MYWIDTH / guidelineBaseWidth * size
export const verticalScale = (size) => MYHEIGHT / guidelineBaseHeight * size
export const heightScale = num => MYHEIGHT * (num * MYSCALE / 100)
const ISIOS = Platform.OS === 'ios'

export const FONT = {
  ROBOTO: 'Roboto-Light',
  ROBOTO_BOLD: 'Roboto-Bold'
}

export const txtDefault = {
  color: 'black',
  fontSize: ISIOS ? width(4) : width(3.8),
  backgroundColor: 'transparent',
  fontFamily: FONT.ROBOTO,
  top: 0
}

const styles = StyleSheet.create({
  backgroundDefault: {
    flex: 1,
    backgroundColor: 'white'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
    width: '100%'
  }
})

export default styles
