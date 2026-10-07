import { moderateSclae, scale, verticaleScale } from '@/utils/responsive'
import { Text, TextInput, View } from 'react-native'
import { formatAmount } from './Input'

interface Props{
    value:Number,
    name:string
}

const TotalDisplay = ({value, name}:Props) => {
  return (
    <View style={{padding:10}}>
          <View style={{backgroundColor:"#F9F9FF"}}>
                <Text style={{fontSize:moderateSclae(18), paddingHorizontal:scale(15), paddingVertical:verticaleScale(5), color:"#3E4943"}}>Montant du retrait</Text>
                <View style={{padding:scale(10),flexDirection:"row", alignItems:"center"}}>
                    <TextInput keyboardType='numeric' value={formatAmount(value.toString()) + " AR"} style={{ fontSize:moderateSclae(30), flex:1}} placeholder='EX: 60 000' readOnly/>
                     <View style={{alignItems:"center"}}>
                         <Text style={{fontSize:moderateSclae(22)}}>{name}</Text>
                     </View>
                </View>
          </View>
          
        </View>
  )
}

export default TotalDisplay