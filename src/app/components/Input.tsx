import { moderateSclae, scale, verticaleScale } from '@/utils/responsive';
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import Operator from './Operator';

const Input = () => {
    const [value, setValue] = useState("")
    const [operator, setOperator] = useState("")
      const formatAmount = (text: string) => {
    const cleanNumber = text.replace(/[^0-9]/g, ''); 
    return cleanNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ' '); 
  };
  return (
    <View style={{padding:10}}>
      <Text style={{fontSize: moderateSclae(25), paddingHorizontal:scale(10), paddingVertical:verticaleScale(5)}}>Combien voulez-vous retirer ?</Text>
      <View style={{backgroundColor:"#F9F9FF"}}>
            <Text style={{fontSize:moderateSclae(18), paddingHorizontal:scale(15), paddingVertical:verticaleScale(5), color:"#3E4943"}}>Montant du retrait</Text>
            <View style={{padding:scale(10),flexDirection:"row", alignItems:"center"}}>
                <TextInput keyboardType='numeric' style={{ fontSize:moderateSclae(30), flex:1}} placeholder='EX: 60 000' value={value} onChangeText={(text)=>setValue(formatAmount(text))}/>
                <Text style={{fontSize:moderateSclae(20)}}>Ar</Text>
            </View>
      </View>
      <Operator setOperator={setOperator}/>
    </View>
  )
}


export default Input