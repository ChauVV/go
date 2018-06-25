
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import { width, height } from 'utils/globalStyles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const blackMenuColor = '#585858'
const redColor = '#D33234'

// Ionicons
export const icCheck = <Ionicons name='md-checkmark' size={width(9)} color={'white'} />
export const icBack = <Ionicons name='ios-arrow-back' size={width(9)} color={blackMenuColor} />
export const icCustomBack = <Ionicons name='ios-arrow-back' size={width(9)} color={'#FEFEFE'} />
export const icMenu = <Ionicons name='md-menu' size={width(6)} color={blackMenuColor} />
export const icMenuActive = <Ionicons name='md-menu' size={width(6)} color={redColor} />
export const icSearch = <Ionicons name='ios-search-outline' style={{ top: height(0) }} size={width(4.5)} color={'#aeadad'} />
export const icClose = <Ionicons name='ios-close-outline' style={{ top: height(0) }} size={width(7)} color={'#aeadad'} />
export const icCloseMD = <Ionicons name='md-close' size={width(8)} color={'black'} />

// SimpleLineIcons
export const icHome = <SimpleLineIcons name='home' size={width(6)} color={blackMenuColor} />
export const icHomeActive = <SimpleLineIcons name='home' size={width(6)} color={redColor} />

// Feather
export const icSend = <Feather name='share' size={width(6)} color={blackMenuColor} />
export const icReceive = <Feather name='download' size={width(6)} color={blackMenuColor} />
export const icSendActive = <Feather name='share' size={width(6)} color={redColor} />
export const icReceiveActive = <Feather name='download' size={width(6)} color={redColor} />
export const icCalendar = <Feather name='calendar' size={width(12)} color={blackMenuColor} />
export const icShoppingCart = <Feather name='shopping-cart' size={width(12)} color={blackMenuColor} />
export const icAdd = <Feather name='plus' size={width(9)} color={blackMenuColor} />

// FontAwesome
export const iconQrCode = <FontAwesome name="qrcode" size={width(10)} color={redColor}/>
export const iconQrCodeSmall = <FontAwesome name="qrcode" size={width(6.5)} color={redColor}/>
export const icAddressBook = <FontAwesome name="address-book-o" size={width(8.5)} color={redColor} />

// EvilIcons
export const icMinus = <EvilIcons name={'minus'} size = {width(4)} color={'#d1191b'}/>
export const icPlus = <EvilIcons name={'plus'} size={width(4)} color={'#42a711'} />
export const icCloseEvil = <EvilIcons name={'close-o'} size = {width(4)} color={'#d1191b'}/>

// MaterialIcons
export const icTransform = <MaterialIcons name='transform' size={width(3)} color={'#FFA500'} />
