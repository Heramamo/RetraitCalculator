import { moderateSclae, scale, verticaleScale } from '@/utils/responsive'
import { Entypo } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import Input from './Input'

const Calculate = () => {
    return (
        <View >
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Entypo name='dot-single' color="#047857"size={moderateSclae(50)}  style={{marginRight:scale(-10)}}/>
                <Text>OPTIMISER VOTRE RETRAIT MOBILE MONEY</Text>
            </View>
            <Input/>
            <TouchableOpacity style={{alignSelf:"center",paddingHorizontal:scale(25), paddingVertical:verticaleScale(15),backgroundColor:"#047857", justifyContent:"center", alignItems:"center", borderRadius:15}}>
                <Text style={{fontSize:moderateSclae(20), color:"#fff"}}>Optimiser mon retrait </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Calculate