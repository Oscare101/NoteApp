import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { MMKV } from 'react-native-mmkv'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const storage = new MMKV()

export default function App() {
  const [count, setCount] = useState<number>(0)

  const bottomSheetModalRef = useRef<BottomSheetModal>(null)
  const snapPoints = useMemo(() => ['25%', '50%'], [])

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

  useEffect(() => {
    const key = storage.getNumber('key')
    if (key) {
      setCount(key)
    }
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
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
          <Button
            title="Open"
            onPress={() => {
              bottomSheetModalRef.current?.present()
            }}
          />
        </View>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eee',
  },
})
