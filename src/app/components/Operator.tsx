import { EvilIcons } from '@expo/vector-icons'
import { Dispatch, SetStateAction, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


interface Props {
    setOperator: Dispatch<SetStateAction<string>>
}
const Operator = ({ setOperator }: Props) => {
    const OPTIONS: { id: number, label: string, operator: string }[] = [
        { id: 1, label: 'MVola', operator: 'Yas' },
        { id: 2, label: 'Orange Money', operator: 'Orange' },
        { id: 3, label: 'Airtel Money', operator: 'Airtel' },
    ]
    const [selectedId, setSelectedId] = useState(0)
    return (
        <View style={style.container}>
            
            <Text>OPERATEUR MOBILE MONEY</Text>
            <View>
                {OPTIONS.map((item)=>{
                const isSelected = item.id == selectedId
                return(
                    <TouchableOpacity style={style.operatorBtn} key={item.id} onPress={()=>setSelectedId(item.id)}>
                        <View style={style.operatorItem} >
                            <Text>{item.label}</Text>
                            {isSelected && <EvilIcons name='check'/>}
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
        
    },
    operatorItem:{

    },
    operatorBtn:{}
})

export default Operator