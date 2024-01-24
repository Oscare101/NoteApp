import {
  Dimensions,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import colors from '../constants/colors'
import { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { updateNotes } from '../redux/notes'
import { Note } from '../constants/interfaces'
import { RootState } from '../redux'
import { GetPalette } from '../functions/functions'

const width = Dimensions.get('screen').width

export default function NoteScreen({ navigation, route }: any) {
  const themeColor: any = 'light'
  const notes: Note[] = useSelector((state: RootState) => state.notes)

  const [title, setTitle] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [color, setColor] = useState<string>(GetPalette(themeColor)[0])
  const [titleFocus, setTitleFocus] = useState<boolean>(false)

  const distach = useDispatch()

  useEffect(() => {
    const foundNote = notes.find((n: Note) => n.id === route.params.note.id)

    console.log(foundNote)

    // distach(updateNotes())
  }, [text, title])

  const header = (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: width * 0.05,
        paddingBottom: width * 0.05,
        backgroundColor: colors[themeColor].palette[color].bg,
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
        <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
          <Ionicons
            name="chevron-back-outline"
            size={width * 0.07}
            color={colors[themeColor].main}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
          <Ionicons
            name="ellipsis-vertical"
            size={width * 0.07}
            color={colors[themeColor].main}
          />
        </TouchableOpacity>
      </View>
      {titleFocus ? (
        <TextInput
          value={title}
          onChangeText={(value: string) => setTitle(value)}
          selectionColor={colors[themeColor].palette[color].accent}
          onBlur={() => setTitleFocus(false)}
          style={{
            color: colors[themeColor].main,
            fontSize: width * 0.07,
            width: '92%',
          }}
          placeholder="No title"
        />
      ) : (
        <TouchableOpacity
          style={{ width: '92%' }}
          activeOpacity={0.8}
          onPress={() => setTitleFocus(true)}
        >
          <Text
            numberOfLines={1}
            style={{
              color: colors[themeColor].main,
              fontSize: width * 0.07,
              width: '92%',
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  )

  return (
    <View
      style={{
        backgroundColor: colors[themeColor].bg,
        flex: 1,
      }}
    >
      <StatusBar
        barStyle={themeColor === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors[themeColor].palette[color].bg}
      />
      {header}
      <TextInput
        value={text}
        onChangeText={(value: string) => setText(value)}
        multiline
        selectionColor={colors[themeColor].palette[color].accent}
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          textAlignVertical: 'top',
          lineHeight: width * 0.06,
          fontSize: width * 0.04,
          padding: width * 0.03,
        }}
      />
    </View>
  )
}
