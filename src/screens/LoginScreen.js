import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#1a1818', width: '100%', height: '100%', paddingTop: 50 }}>
      <View style={styles.header}>
        <Text style={styles.hellowText}>Welcome Stranger!</Text>
        <Text style={styles.userNameText}>Please log in to continue</Text>
        <Text style={styles.userNameText}>to the awesomness</Text>
      </View>
      <View style={styles.imageDiv}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/unValiduser.png')}
        />
      </View>
      <View style={styles.text3}>
        <View style={{}}>
          <View style={styles.flex1}>
            <Button
              onPress={() => navigation.navigate('Favorite')}
              title="Connect with FaceBook"
              color="#3A63BF"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View style={styles.flex2} >
            <Button
              onPress={() => navigation.navigate('MostPopular')}
              title="Sign in with Google+"
              color='#C94131'
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
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: '28%'
  },
  userNameText: {
    fontSize: 20,
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



export default LoginScreen;

