import { View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'

const tarif = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View>
                    <Header/>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default tarif