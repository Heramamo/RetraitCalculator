import logo from '@/assets/images/logos.png'
import { moderateSclae, scale } from '@/utils/responsive'
import { Image } from 'expo-image'
import { StyleSheet, Text, View } from 'react-native'
const Header = () => {
  return (
    <View style={style.container}>
      <Image source={logo} style={{width:scale(50), height:scale(50)}} resizeMode="contain"/>
      <View>
        <Text style={{fontSize:moderateSclae(20)}}>Retraits</Text>
        <Text style={{fontSize:moderateSclae(12)}}>Calculateur</Text>
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