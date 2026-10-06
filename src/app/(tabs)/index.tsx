import { View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Calculate from '../components/Calculate'
import Header from '../components/Header'

const index = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Header/>
          <Calculate/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default index