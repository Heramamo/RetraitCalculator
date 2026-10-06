import logo from '@/assets/images/logos.png'
import { Image } from 'expo-image'
import { StyleSheet, Text, View } from 'react-native'
const Header = () => {
  return (
    <View style={style.container}>
      <Image source={logo} style={{width:50, height:50}} resizeMode="contain"/>
      <View>
        <Text style={{fontSize:20}}>Retraits</Text>
        <Text style={{fontSize:12}}>Calculateur</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        gap:0,
        padding:10
    }
})

export default Header