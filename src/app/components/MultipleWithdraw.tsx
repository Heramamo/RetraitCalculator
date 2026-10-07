import { RootState } from '@/store/store'
import { Plan } from '@/types/retrait'
import { OneWithdrawal } from '@/utils/optimisation'
import { moderateSclae, scale, verticaleScale } from '@/utils/responsive'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { operators } from './Calculate'
interface Props {
    retraits: Plan | null,

}

const MultipleWithdraw = ({ retraits }: Props) => {
    const id = useSelector((state: RootState) => state.idOp)
    const total = retraits ? retraits.retraits.reduce((acc, it) => acc + it.montant, 0) : 0
    console.log(total)
    const oneWiwdrath = OneWithdrawal(total, operators[id - 1].paliers)
    const fraisTotal = retraits ? retraits.fraisTotal : 0
    const benef = oneWiwdrath  ? oneWiwdrath - fraisTotal : 0
    return (
        <View style={{gap:10}}>
            <View style={{ flexDirection: "row", justifyContent: "center", gap: scale(10), alignItems: "center" }}>
                <View style={style.item}>
                    <MaterialIcons name="receipt" size={moderateSclae(28)} color="#6E7A73" />
                    <Text style={style.titleItem}>Frais Totaux</Text>
                    <Text style={style.textItem}>{retraits?.fraisTotal} Ar</Text>
                </View>
                <View style={style.item}>
                    <MaterialIcons name="trending-up" size={moderateSclae(28)} color="#005D42" />
                    <Text style={style.titleItem}>Gain Net</Text>
                    <Text style={[style.textItem, { color: "#005D42" }]}>+{benef} Ar</Text>
                </View>
                <View style={style.item}>
                    <MaterialIcons name="payments" size={moderateSclae(28)} color="#6E7A73" />
                    <Text style={style.titleItem}>1 seul retrait</Text>
                    <Text style={[style.textItem, { textAlign: "center", textDecorationLine: "line-through", color: "#6E7A73" }]}>{oneWiwdrath}Ar</Text>
                </View>
            </View>
            <View style={{ backgroundColor: "#fff", paddingHorizontal: scale(15), paddingVertical: verticaleScale(10), flexDirection: "row", alignItems: "center", gap: scale(8) }}>
                    <MaterialIcons name="trending-up" size={moderateSclae(20)} color="#005D42" />
                    <Text style={{fontSize:moderateSclae(15), color:"#005D42"}}>Vous économisez {benef} Ar (soit {((benef * 100) / fraisTotal).toFixed(0)}% de frais en moins)</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    item: {
        backgroundColor: "#fff",
        paddingHorizontal: scale(15),
        paddingVertical: verticaleScale(15),
        alignItems: "center",
        borderRadius: 10
    },
    titleItem: {
        fontSize: moderateSclae(15)
    },
    textItem: {
        fontSize: moderateSclae(20)
    }
})

export default MultipleWithdraw