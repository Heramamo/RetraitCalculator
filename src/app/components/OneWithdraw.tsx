import { Plan } from '@/types/retrait'
import { moderateSclae, scale, verticaleScale } from '@/utils/responsive'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'
import { formatAmount } from './Input'

interface Props {
    retraits: Plan | null
}

const OneWithdraw = ({ retraits }: Props) => {
    const retrait = retraits?.retraits[0]
    const montant = retrait?.montant ?? 0
    const frais = retrait?.frais ?? 0
    return (
        <View style={{ gap: 10 }}>
            <View style={{ flexDirection: "row", justifyContent: "center", gap: scale(10), alignItems: "center" }}>
                <View style={style.item}>
                    <MaterialIcons name="payments" size={moderateSclae(28)} color="#005D42" />
                    <Text style={style.titleItem}>Montant</Text>
                    <Text style={style.textItem}>{formatAmount(montant.toString())} Ar</Text>
                </View>
                <View style={style.item}>
                    <MaterialIcons name="receipt" size={moderateSclae(28)} color="#6E7A73" />
                    <Text style={style.titleItem}>Frais du retrait</Text>
                    <Text style={style.textItem}>{formatAmount(frais.toString())} Ar</Text>
                </View>
            </View>
            <View style={{ backgroundColor: "#fff", paddingHorizontal: scale(15), paddingVertical: verticaleScale(10), flexDirection: "row", alignItems: "center", gap: scale(8) }}>
                <MaterialIcons name="check-circle" size={moderateSclae(20)} color="#005D42" />
                <Text style={{ fontSize: moderateSclae(15), color: "#005D42" }}>
                    Un seul retrait. Déjà le meilleur tarif.
                </Text>
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

export default OneWithdraw