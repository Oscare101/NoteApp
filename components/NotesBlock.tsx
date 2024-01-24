import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import colors from '../constants/colors'
import { Note } from '../constants/interfaces'
import { RootState } from '../redux'
import { useDispatch, useSelector } from 'react-redux'

const width = Dimensions.get('screen').width
export function NotesBlock(props: any) {
  const themeColor = 'light'
  const notes: Note[] = useSelector((state: RootState) => state.notes)
  const dispatch = useDispatch()

  function RenderNoteItem({ item }: any) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          props.navigation.navigate('NoteScreen', { note: item })
        }}
        style={{
          width: '48%',
          borderWidth: 1,
          borderColor: colors[themeColor].palette[item.color].accent,
          margin: '1%',
          borderRadius: width * 0.05,
          // padding: '5%',
          overflow: 'hidden',
          height: width * 0.4,
        }}
      >
        <View
          style={{
            width: '100%',
            backgroundColor: colors[themeColor].palette[item.color].accent,
            padding: width * 0.02,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              fontSize: width * 0.05,
              color: colors[themeColor].main,
              opacity: item.title ? 1 : 0.5,
            }}
          >
            {item.title || 'No title'}
          </Text>
        </View>
        <View style={{ flex: 1, padding: '5%' }}>
          <Text
            style={{
              fontSize: width * 0.03,
              color: colors[themeColor].main,
              opacity: item.title ? 1 : 0.5,
            }}
          >
            {item.text || 'no text yet'}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

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
        <>
          <FlatList
            style={{ width: '100%' }}
            data={notes}
            renderItem={RenderNoteItem}
            numColumns={2}
          />
        </>
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
