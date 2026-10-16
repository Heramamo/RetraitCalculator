import { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { moderateSclae, scale, verticaleScale } from '@/utils/responsive'
import { getOperatorOption } from '@/data/operators'
import { Entypo } from '@expo/vector-icons'
import Header from '../components/Header'
import SelectOperator from '../components/SelectOperator'
import TarifTable from '../components/TarifTable'

const tarif = () => {
    const [operator, setOperator] = useState(1)
    const option = getOperatorOption(operator)

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                    <Header/>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Entypo name='dot-single' color={option.borderColor} size={moderateSclae(50)} style={{ marginRight: scale(-10) }} />
                        <Text>TARIFS DES RETRAITS MOBILE MONEY</Text>
                    </View>
                    <SelectOperator operator={operator} setOperator={setOperator} />
                    <TarifTable operator={operator} />
                    <View style={{ height: verticaleScale(20) }} />
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default tarif
