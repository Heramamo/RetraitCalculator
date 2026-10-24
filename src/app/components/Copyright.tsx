import { moderateSclae } from '@/utils/responsive'
import { StyleSheet, Text } from 'react-native'

const Copyright = () => (
    <Text style={styles.text}>© Heriniaina Ramamonjitiana</Text>
)

const styles = StyleSheet.create({
    text: {
        color: '#6E7A73',
        fontSize: moderateSclae(12),
        paddingHorizontal: 16,
        paddingVertical: 12,
        textAlign: 'center'
    }
})

export default Copyright