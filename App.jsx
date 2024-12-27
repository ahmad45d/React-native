import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from './style1'; 
function App() {
  return (
    <View style={styles.viewStyle}>
      <View>
        <Text style={styles.textStyle}>Hii Buddy</Text>
      </View>
      <View>
        <Text style={styles.textStyle}>Hii Buddy</Text>
      </View>
      <View>
        <Button
          title="Learn More"
          color="#841584"
          onPress={() => console.log("Hii")}
        />
      </View>
    </View>
  );
}


export default App;