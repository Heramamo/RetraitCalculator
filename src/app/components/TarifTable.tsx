import operateurs from '@/data/data.json'
import { getOperatorOption } from '@/data/operators'
import { moderateSclae, scale, verticaleScale } from '@/utils/responsive'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    operator: number
}

const format = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")

const TarifTable = ({ operator }: Props) => {
    const option = getOperatorOption(operator)
    const paliers = (op
        ?? operateurs[0]).paliers

    return (
        <View style={style.container}>
            <View style={[style.header, { backgroundColor: option.borderColor }]}>
                <Text style={[style.headerCell, { flex: 3 }]}>MONTANT (AR)</Text>
                <Text style={[style.headerCell, { flex: 2, textAlign: "right" }]}>FRAIS (AR)</Text>
            </View>

            {paliers.map((p, i) => (
                <View key={`${p.min}-${p.max}`} style={[style.row, i % 2 === 1 && style.rowAlt]}>
                    <Text style={[style.cell, { flex: 3 }]}>
                        {format(p.min)} - {format(p.max)}
                    </Text>
                    <Text style={[style.cell, style.frais, { flex: 2, color: option.borderColor }]}>
                        {format(p.frais)}
                    </Text>
                </View>
            ))}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginHorizontal: scale(15),
        marginVertical: verticaleScale(10),
        borderRadius: 12,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#E4E8E6",
        backgroundColor: "#fff"
    },
    header: {
        flexDirection: "row",
        paddingHorizontal: scale(12),
        paddingVertical: verticaleScale(10)
    },
    headerCell: {
        color: "#fff",
        fontSize: moderateSclae(13),
        fontWeight: "700"
    },
    row: {
        flexDirection: "row",
        paddingHorizontal: scale(12),
        paddingVertical: verticaleScale(8),
        borderTopWidth: 1,
        borderTopColor: "#F0F2F1"
    },
    rowAlt: {
        backgroundColor: "#F7F9F8"
    },
    cell: {
        fontSize: moderateSclae(14),
        color: "#3E4943"
    },
    frais: {
        textAlign: "right",
        fontWeight: "600"
    }
})

export default TarifTable
