import { Dimensions, Text, View } from 'react-native'
import colors from '../constants/colors'
import { useEffect } from 'react'
import { MMKV } from 'react-native-mmkv'
import { useDispatch } from 'react-redux'
import { updateNotes } from '../redux/notes'

const storage = new MMKV()
const width = Dimensions.get('screen').width

export default function LaunchScreen({ navigation }: any) {
  const themeColor = 'light'
  const dispatch = useDispatch()

  async function GetData() {
    const data = await storage.getString('notes')
    console.log('data', data)

    if (data && JSON.parse(data)?.length) {
      dispatch(updateNotes(JSON.parse(data)))
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'MainScreen' }],
    })
  }

  useEffect(() => {
    GetData()
  }, [])

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors[themeColor].card,
      }}
    >
      <Text style={{ fontSize: width * 0.1, color: colors[themeColor].main }}>
        Note
      </Text>
    </View>
  )
}
