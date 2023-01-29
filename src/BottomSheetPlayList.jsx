import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, {useCallback, useMemo, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function BottomSheetPlayList({open}) {
  // ref
  const sheetRef = useRef(null);
  console.log(sheetRef);
  
  open && sheetRef.current.snapToIndex(1)


  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  const handleRefresh = useCallback(() => {
    console.log('handleRefresh');
  }, []);

  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );

  const renderItem = useCallback(
    ({item}) => <View style={styles.itemContainer}></View>,
    [],
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backgroundStyle={{backgroundColor: '#eee'}}
        handleStyle={{
          shadowOffset: [{width: 10, height: 12}],
          shadowRadius: 10,
          shadowColor: '#000000',
          shadowOpacity: 0,
          elevation: 1,
          height: 25,
          borderBottomColor: 'red',
        }}>
        <BottomSheetFlatList
          data={data}
          keyExtractor={i => i}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
          refreshing={false}
          onRefresh={handleRefresh}
        />
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    // position: 'absolute',
    // bottom: 0,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  itemContainer: {
    width: '100%',
    height: 40,
    backgroundColor: '#eee',
  },
});
