import { Dimensions, View } from 'react-native'
import colors from '../constants/colors'
import { Note } from '../constants/interfaces'
import { RootState } from '../redux'
import { useDispatch, useSelector } from 'react-redux'

const width = Dimensions.get('screen').width
export function NotesBlock() {
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
        backgroundColor: colors[themeColor].bg,
        width: '100%',
        borderTopRightRadius: width * 0.07,
        borderTopLeftRadius: width * 0.07,
      }}
    ></View>
  )
}
