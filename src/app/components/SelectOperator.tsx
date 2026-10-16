import { OPERATOR_OPTIONS, getOperatorOption } from '@/data/operators'
import { moderateSclae, scale, verticaleScale } from '@/utils/responsive'
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    operator: number
    setOperator: (id: number) => void
}

const SelectOperator = ({ operator, setOperator }: Props) => {
    const [open, setOpen] = useState(false)
    const selected = getOperatorOption(operator)

    return (
        <View style={style.container}>
            <Text style={style.label}>OPÉRATEUR MOBILE MONEY</Text>

            <TouchableOpacity
                style={[style.select, { borderColor: selected.borderColor }]}
                onPress={() => setOpen(o => !o)}
                activeOpacity={0.8}
            >
                <View style={style.selectLeft}>
                    <Image source={selected.image} style={{ width: scale(32), height: scale(32) }} resizeMode="contain" />
                    <Text style={[style.selectText, { color: selected.borderColor }]}>{selected.label}</Text>
                </View>
                <AntDesign name={open ? 'caretup' : 'caretdown'} size={moderateSclae(14)} color={selected.borderColor} />
            </TouchableOpacity>

            {open && (
                <View style={style.dropdown}>
                    {OPERATOR_OPTIONS.map(item => {
                        const isSelected = item.id === operator
                        return (
                            <TouchableOpacity
                                key={item.id}
                                style={[style.option, isSelected && { backgroundColor: item.borderColor + "15", borderColor: item.borderColor }]}
                                onPress={() => { setOperator(item.id); setOpen(false) }}
                                activeOpacity={0.8}
                            >
                                <Image source={item.image} style={{ width: scale(28), height: scale(28) }} resizeMode="contain" />
                                <Text style={[style.optionText, isSelected && { color: item.borderColor, fontWeight: '600' }]}>{item.label}</Text>
                                {isSelected && <AntDesign name="check" size={moderateSclae(14)} color={item.borderColor} />}
                            </TouchableOpacity>
                        )
                    })}
                </View>
            )}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: scale(15),
        paddingVertical: verticaleScale(10)
    },
    label: {
        fontSize: moderateSclae(16),
        color: "#3E4943",
        marginBottom: verticaleScale(8)
    },
    select: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1.5,
        borderRadius: 12,
        paddingHorizontal: scale(12),
        paddingVertical: verticaleScale(10),
        backgroundColor: "#fff"
    },
    selectLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: scale(8)
    },
    selectText: {
        fontSize: moderateSclae(16),
        fontWeight: '600'
    },
    dropdown: {
        marginTop: verticaleScale(6),
        borderWidth: 1,
        borderColor: "#E4E8E6",
        borderRadius: 12,
        backgroundColor: "#fff",
        overflow: "hidden"
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        gap: scale(10),
        paddingHorizontal: scale(12),
        paddingVertical: verticaleScale(10),
        borderBottomWidth: 1,
        borderBottomColor: "#F0F2F1"
    },
    optionText: {
        flex: 1,
        fontSize: moderateSclae(15),
        color: "#3E4943"
    }
})

export default SelectOperator
