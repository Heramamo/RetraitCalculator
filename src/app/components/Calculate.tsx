import { moderateSclae, scale } from '@/utils/responsive'
import { Entypo } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import Input from './Input'

const Calculate = () => {
    return (
        <View >
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Entypo name='dot-single' color="#047857"size={moderateSclae(50)}  style={{marginRight:scale(-10)}}/>
                <Text>OPTIMISER VOTRE RETRAIT MOBILE MONEY</Text>
            </View>
            <Input/>
        </View>
    )
}

export default Calculate