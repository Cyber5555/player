import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import BottomSheetPlayList from "./BottomSheetPlayList";



export default function PlayerScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parent}>
        <BottomSheetPlayList />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  parent: {
    paddingHorizontal: 20
  }
})