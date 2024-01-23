import { Dimensions, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux'
import { Note } from '../constants/interfaces'
import colors from '../constants/colors'
import { Ionicons } from '@expo/vector-icons'
import { MainHeader } from '../components/MainHeader'
import { NotesBlock } from '../components/NotesBlock'

const width = Dimensions.get('screen').width

export default function MainScreen({ navigation }: any) {
  const themeColor = 'light'
  const notes: Note[] = useSelector((state: RootState) => state.notes)
  const dispatch = useDispatch()

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors[themeColor].card,
      }}
    >
      <MainHeader />
      <NotesBlock />
    </View>
  )
}
