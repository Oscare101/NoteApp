import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import colors from '../constants/colors'
import { Ionicons } from '@expo/vector-icons'

const width = Dimensions.get('screen').width

export function MainHeader() {
  const themeColor = 'light'
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
        <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
          <Ionicons
            name="ellipsis-vertical"
            size={width * 0.07}
            color={colors[themeColor].main}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
