import { Dimensions, Text, View } from 'react-native'
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
        justifyContent: 'center', // check this
        backgroundColor: colors[themeColor].bg,
        width: '100%',
        borderTopRightRadius: width * 0.07,
        borderTopLeftRadius: width * 0.07,
      }}
    >
      {notes && notes.length ? (
        <></>
      ) : (
        <>
          <Text
            style={{
              // fontFamily: 'Sono_Bold',
              fontWeight: '300',
              letterSpacing: width * 0.012,
              fontSize: width * 0.05,
              color: colors[themeColor].main,
              opacity: 0.5,
            }}
          >
            Create your first note
          </Text>
        </>
      )}
    </View>
  )
}
