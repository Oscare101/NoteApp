import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { MMKV } from 'react-native-mmkv'

const storage = new MMKV()

export default function App() {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    const key = storage.getNumber('key')
    if (key) {
      setCount(key)
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <StatusBar style="auto" />

      <Button
        title="+1"
        onPress={() => {
          const newCount = count + 1
          setCount(newCount)
          storage.set('key', newCount)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
