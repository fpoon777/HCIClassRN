import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width

import ImageData from './imageData';

export default function HomePage({navigation}) {
  // TODO - navigate to the image page

  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>
        Welcome to the Image Gallery!
      </Text>
      {/* TODO - add a flatlist here */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  imageContainer:{
    flex: 1,
    flexDirection: 'row',
    margin: 1,
    height:width/3,
  },
  imageThumbnail: {
    height: width/3,
    width: width/3,
  }
});
