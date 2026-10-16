import { ScrollView } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Calculate from '../components/Calculate'
import Header from '../components/Header'

const index = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
          <Header/>
          <Calculate/>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default index
