import airtel from "@/assets/images/airtel.png"
import mvola from "@/assets/images/mvola.png"
import orange from "@/assets/images/orange.png"
import { moderateSclae, scale, verticaleScale } from '@/utils/responsive'
import { Dispatch, SetStateAction, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    setOperator: Dispatch<SetStateAction<number>>
}
const Operator = ({ setOperator }: Props) => {
    const OPTIONS: { id: number, label: string, operator: string, image:any, borderColor:string }[] = [
        { id: 1, label: 'MVola', operator: 'Yas', image:mvola, borderColor:"#047857" },
        { id: 2, label: 'Orange Money', operator: 'Orange', image:orange, borderColor:"#EA580C" },
        { id: 3, label: 'Airtel Money', operator: 'Airtel', image:airtel, borderColor:"#93000A" },
    ]
    const [selectedId, setSelectedId] = useState(0)
    return (
        <View style={style.container}>
            
            <Text style={{fontSize:moderateSclae(18)}}>OPERATEUR MOBILE MONEY</Text>
            <View style={style.operatorContainer}>
                {OPTIONS.map((item)=>{
                const isSelected = item.id == selectedId
                return(
                    <TouchableOpacity style={style.operatorBtn} key={item.id} onPress={()=>{setSelectedId(item.id); setOperator(item.id)}}>
                        <View style={[style.operatorItem, isSelected && style.selectedItem, isSelected && {borderColor:item.borderColor}]} >
                            <Image source={item.image} style={{width:scale(50), height:scale(50)}} resizeMode="contain"/>
                            <Text>{item.label}</Text>
                          
                        </View>
                    </TouchableOpacity>
                )
            })}
            </View>
        </View>
      


    )
}

const style = StyleSheet.create({
    container:{
        paddingVertical:verticaleScale(10)
    },
    operatorContainer:{
        flexDirection:"row",
        gap:scale(10),
        paddingVertical:verticaleScale(5)
    },
    operatorItem:{
        alignItems:"center"
    },
    selectedItem:{
        borderWidth:1,
        borderRadius:10
    },
    operatorBtn:{
        width:scale(100),
        height:scale(100)

    }
})

export default Operator