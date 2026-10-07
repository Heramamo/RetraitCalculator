import logo from '@/assets/images/logos.png'
import { moderateSclae, scale } from '@/utils/responsive'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const Header = () => {
  const router = useRouter()
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={()=>router.push('/(tabs)')}>
         <Image source={logo} style={{width:scale(50), height:scale(50)}} resizeMode="contain"/>
      </TouchableOpacity>
      <View>
        <Text style={{fontSize:moderateSclae(20)}}>Retraits</Text>
        <Text style={{fontSize:moderateSclae(12)}}>Calculator</Text>
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