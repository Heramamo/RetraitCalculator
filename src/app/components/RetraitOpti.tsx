import { Plan } from '@/types/retrait'
import { moderateSclae, scale, verticaleScale } from '@/utils/responsive'
import { AntDesign } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import { formatAmount } from './Input'

interface Props {
    retraits:Plan | null
}
const RetraitOpti = ({retraits}:Props) => {
    const montans:string[] | undefined = retraits?.retraits.map((e)=>formatAmount(e.montant.toString()) + " AR")
    console.log(montans)
  return (
    <View style={{backgroundColor:"#97f5cc33", padding:10, gap:verticaleScale(10)}}>
       <View style={{flexDirection:"row", alignItems:"center", gap:scale(10)}}>
            <View style={{backgroundColor:"#005D42", borderRadius:20,alignSelf:"center", alignItems:"center", flexDirection:"row", padding:scale(10), gap:scale(10)}}>
                <AntDesign size={moderateSclae(12)} name='check-circle' color="#fff"/>
                <Text style={{fontSize:moderateSclae(12), color:"#fff"}}>SOLUTION LA MOINS CHÈRE</Text>
            </View>
            <View>
                <Text style={{color:"#005D42"}}>{retraits?.retraits.length}  retrait(s) optimisé(s)</Text>
            </View>
       </View>
       <View style={{backgroundColor:"#fff", borderRadius:20,paddingHorizontal:scale(10), paddingVertical:verticaleScale(20)}}>
            <View style={{justifyContent:"center", alignItems:"center"}}>
                {
                montans && <Text style={{fontSize:moderateSclae(20)}}>{montans.join(" + ")}</Text>
                }
            </View>
       </View>
    </View>
  )
}

export default RetraitOpti