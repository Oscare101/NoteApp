import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native'
import colors from '../constants/colors'
import { Ionicons } from '@expo/vector-icons'
import { Note } from '../constants/interfaces'
import { GetPalette } from '../functions/functions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux'
import { updateNotes } from '../redux/notes'

const width = Dimensions.get('screen').width

export function MainHeader(props: any) {
  const themeColor = 'light'
  const notes: Note[] = useSelector((state: RootState) => state.notes)

  const distach = useDispatch()

  function CreateNote() {
    const newNote: Note = {
      id: new Date().getTime().toString(),
      color: GetPalette(themeColor)[0],
      title: '',
      created: new Date().getTime().toString(),
      lastUpdated: new Date().getTime().toString(),
      password: '',
      data: '',
      isArchived: false,
      archivedDate: '',
    }
    distach(updateNotes([...notes, newNote]))
  }

  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: width * 0.05,
        marginBottom: width * 0.05,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '92%',
        }}
      >
        <Text
          style={{ color: colors[themeColor].main, fontSize: width * 0.07 }}
        >
          My notes
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            props.navigation.navigate('NoteScreen')
          }}
        >
          <Ionicons
            name="ellipsis-vertical"
            size={width * 0.07}
            color={colors[themeColor].main}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '92%',
          marginTop: width * 0.05,
        }}
      >
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.8}
          style={{
            height: width * 0.1,
            width: width * 0.92 * 0.48,
            backgroundColor: colors[themeColor].buttonAccent,
            borderRadius: width * 0.1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: '4%',
          }}
        >
          <Text
            style={{ color: colors[themeColor].card, fontSize: width * 0.05 }}
          >
            Search
          </Text>
          <Ionicons
            name="search-outline"
            size={width * 0.05}
            color={colors[themeColor].card}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={CreateNote}
          activeOpacity={0.8}
          style={{
            height: width * 0.1,
            width: `${(100 * 0.92) / 2}%`,
            backgroundColor: colors[themeColor].card,
            borderRadius: width * 0.1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: '4%',
            borderWidth: 2,
            borderColor: colors[themeColor].buttonAccent,
          }}
        >
          <Text
            style={{
              color: colors[themeColor].buttonAccent,
              fontSize: width * 0.05,
            }}
          >
            Create
          </Text>
          <Ionicons
            name="add"
            size={width * 0.05}
            color={colors[themeColor].buttonAccent}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
