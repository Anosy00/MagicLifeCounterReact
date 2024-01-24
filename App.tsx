import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
var leftLife: number = 20;
let rightLife: number = 20;
export default function App() {
  return (
    <View style={[styles.container]}>
      <View style={[styles.leftSide, styles.lifeArea]}>
        <Pressable style={styles.button}></Pressable>
        <Pressable style={styles.button}></Pressable>
        <Text style={styles.lifeTotalText}>{leftLife}</Text>
        
      </View>
      <View style={[styles.rightSide, styles.lifeArea]}>
        <Text style={styles.lifeTotalText}>{rightLife}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: "100%"
  },

  leftSide: {
    backgroundColor: 'green',
    width: '50%',
    height: '100%'
  },
  rightSide: {
    backgroundColor: 'red',
    width: '50%',
    height: '100%'
  },
  lifeArea: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  lifeTotalText:{
    fontSize: 60,
    position: 'absolute',
    maxWidth: 100
  },
  button:{
    backgroundColor: 'black',
    width: "100%",
    height: "100%"
  }
});

