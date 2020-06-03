import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#1a1818', width: '100%', height: '100%', paddingTop: 50 }}>
      <View style={styles.header}>
      <Text style={styles.hellowText}>Hello!</Text>
      <Text style={styles.userNameText}>Jhon Dwe</Text>
      </View>
        <View style={styles.imageDiv}>
        <Image
            style={styles.imageStyle}
            source={{ uri: 'https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg' }}
          />
        </View>
      <View style={styles.text3}>
        <View style={{ }}>
          <View style={styles.flex1}>
            <Button
              onPress={() => navigation.navigate('MostPopular')}
              title="Most Popular"
              color='#323232'
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View style={styles.flex2} >
            <Button
              onPress={() => navigation.navigate('Favorite')}
              title="Favorite Movies"
              color="#045e5e"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      </View>
    </View>
  )

};

const styles = StyleSheet.create({
  hellowText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: '28%'
  },
  userNameText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    // fontWeight: 'bold',
    marginTop: '1%'
  },
  header: {
    flex: 1.2
  },
  imageDiv: {
    flex: 2.5,
    alignItems: 'center'
  },
  text3: {
    flex: 1
  },
  Button: {
    width: '40%'
  },
  imageStyle: {
    borderColor: 'white',
    borderWidth: 10,
    borderRadius: 150,
    width: 190,
    height: 190,
    marginTop: 80
    
  }

});



export default DashboardScreen;

