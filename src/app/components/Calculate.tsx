import operateurs from "@/data/data.json"
import { optimiseWithdrawal } from '@/utils/optimisation'
import { moderateSclae, scale, verticaleScale } from '@/utils/responsive'
import { Entypo } from '@expo/vector-icons'
import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Input from './Input'
const Calculate = () => {
       const [value, setValue] = useState("")
    const calcul = ()=>{
        if (value == "")
            console.log("error")
        console.log(value)
        const unformatAmount = (text: string) => text.replace(/\s/g, '');
        const total = unformatAmount(value)
        const a = optimiseWithdrawal(Number(total), operateurs[0])
        console.log(a)
    }
    return (
        <View >
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Entypo name='dot-single' color="#047857"size={moderateSclae(50)}  style={{marginRight:scale(-10)}}/>
                <Text>OPTIMISER VOTRE RETRAIT MOBILE MONEY</Text>
            </View>
            <Input setValue={setValue} value={value}/>
            <TouchableOpacity style={{alignSelf:"center",paddingHorizontal:scale(25), paddingVertical:verticaleScale(15),backgroundColor:"#047857", justifyContent:"center", alignItems:"center", borderRadius:15}} onPress={()=>calcul()}>
                <Text style={{fontSize:moderateSclae(20), color:"#fff"}}>Optimiser mon retrait </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Calculate