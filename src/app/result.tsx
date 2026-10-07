import { RootState } from '@/store/store'
import { useRouter } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { moderateSclae, scale, verticaleScale } from '@/utils/responsive'
import Header from './components/Header'
import MultipleWithdraw from './components/MultipleWithdraw'
import OneWithdraw from './components/OneWithdraw'
import RetraitOpti from './components/RetraitOpti'
import TotalDisplay from './components/TotalDisplay'

const result = () => {
  const retraits = useSelector((state:RootState)=>state.retraits)
  const name = useSelector((state:RootState)=>state.operator)
  const router = useRouter()
  return (
    <SafeAreaProvider>
      <SafeAreaView>
          <View>
              <Header/>
              <TotalDisplay name={name ? name : ""} value={retraits ? retraits.retraits.reduce((acc, it)=>acc+it.montant,0) : 0 }/>
              <RetraitOpti retraits={retraits}/>
              {
                retraits?.retraits.length == 1 ? <OneWithdraw retraits={retraits}/> : <MultipleWithdraw retraits={retraits}/>
              }
              <TouchableOpacity style={{marginTop:verticaleScale(20), alignSelf:"center",paddingHorizontal:scale(25), paddingVertical:verticaleScale(15),backgroundColor:"#047857", justifyContent:"center", alignItems:"center", borderRadius:15}} onPress={()=>router.push('/(tabs)')}>
                  <Text style={{fontSize:moderateSclae(20), color:"#fff"}}>Nouveau calcul </Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default result