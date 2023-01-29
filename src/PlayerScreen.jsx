import React, {useState} from 'react';
import {Button, Dimensions} from 'react-native';
import {Image, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import BottomSheetPlayList from './BottomSheetPlayList';

const width = Dimensions.get('window').width;

export default function PlayerScreen() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        translucent={false}
        backgroundColor="white"
        showHideTransition={'slide'}
        hidden={false}
      />
      <View style={styles.parent}>
        <View style={styles.imageStyle}>
          <Image
            source={require('../assets/images/image1.jpg')}
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          />
        </View>
        <Button title="click" onPress={() => setIsOpen(true)} />
        <BottomSheetPlayList open={isOpen} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  parent: {
    flex: 1,
    alignItems: 'center',
  },
  imageStyle: {
    width: width - 40,
    height: width - 40,
    resizeMode: 'cover',
    borderRadius: 40,
    shadowRadius: 1,
    shadowOffset: {width: 10, height: 10},
    elevation: 10,
    shadowColor: '#000',
    overflow: 'hidden',
  },
});
