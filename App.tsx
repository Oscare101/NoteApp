import 'react-native-gesture-handler'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { StatusBar } from 'react-native'
import { MMKV } from 'react-native-mmkv'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigation from './navigation/MainNavigation'
import colors from './constants/colors'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { Note } from './constants/interfaces'
import { RootState } from './redux'
import { useDispatch, useSelector } from 'react-redux'

const storage = new MMKV()

export default function App() {
  // const bottomSheetModalRef = useRef<BottomSheetModal>(null)
  // const snapPoints = useMemo(() => ['25%', '50%'], [])

  // callbacks
  // const handlePresentModalPress = useCallback(() => {
  //   bottomSheetModalRef.current?.present()
  // }, [])
  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log('handleSheetChanges', index)
  // }, [])

  function AppComponent() {
    const themeColor: any = 'light'
    const notes: Note[] = useSelector((state: RootState) => state.notes)

    useEffect(() => {
      console.log('create')

      console.log(JSON.stringify(notes))

      storage.set('notes', JSON.stringify(notes))
    }, [notes])

    return (
      <>
        <StatusBar
          barStyle={themeColor === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={colors[themeColor].card}
        />
      </>
    )
  }

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <AppComponent />
          <MainNavigation />
        </NavigationContainer>
        {/* <BottomSheetModalProvider>
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
            <IconBlock />
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider> */}
      </GestureHandlerRootView>
    </Provider>
  )
}
