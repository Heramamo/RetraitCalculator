import operateurs from "@/data/data.json"
import { setRetraits } from "@/store/store"
import { optimiseWithdrawal } from '@/utils/optimisation'
import { moderateSclae, scale, verticaleScale } from '@/utils/responsive'
import { Entypo } from '@expo/vector-icons'
import { useRouter } from "expo-router"
import { useState } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from "react-redux"
import Input from './Input'
export const operators = operateurs
const Calculate = () => {
       const [value, setValue] = useState("")
       const [idOp, setIdOp] = useState<number>(1)
       const [loading, setLoading] = useState(false)
       const router = useRouter()
       const dispatch = useDispatch()
    const calcul = async ()=>{
        if (value == "")
            return
        setLoading(true)
        await new Promise(resolve => setTimeout(resolve, 50))
        const unformatAmount = (text: string) => text.replace(/\s/g, '');
        const total = unformatAmount(value)
        const a = optimiseWithdrawal(Number(total), operateurs[idOp - 1])
        setLoading(false)
        if (!a)
            return
        dispatch(setRetraits({retraits:a, operator:operateurs[idOp -1].nom, idOp:idOp}))
        router.push('/result')

    }
    return (
        <View >
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Entypo name='dot-single' color="#047857"size={moderateSclae(50)}  style={{marginRight:scale(-10)}}/>
                <Text>OPTIMISER VOTRE RETRAIT MOBILE MONEY</Text>
            </View>
            <Input setValue={setValue} value={value} operator={idOp} setOperator={setIdOp}/>
            <TouchableOpacity disabled={loading} style={{alignSelf:"center",paddingHorizontal:scale(25), paddingVertical:verticaleScale(15),backgroundColor:"#047857", justifyContent:"center", alignItems:"center", borderRadius:15}} onPress={()=>calcul()}>
                {loading
                    ? <ActivityIndicator color="#fff" />
                    : <Text style={{fontSize:moderateSclae(20), color:"#fff"}}>Optimiser mon retrait </Text>}
            </TouchableOpacity>
        </View>
    )
}

export default Calculate