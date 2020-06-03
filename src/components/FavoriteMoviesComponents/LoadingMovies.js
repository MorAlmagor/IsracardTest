import React from "react";
import { Text, StyleSheet, View, FlatList, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native";


const LoadingMovies = () => {

  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);

  return (
    <ScrollView>
      <View style={{ backgroundColor: '#1a1818', paddingBottom: 20, paddingTop: 15, paddingLeft: 10 }}>
        <Text style={{ fontSize: 21, color: 'white' }}>Loading...</Text>
        <View >
        <FlatList
          data={[1,2,3,4]}
          horizontal={true}
          renderItem={(item) => {
            return (
              <View style={{ backgroundColor: 'grey', flex: 1, flexDirection: 'column', alignItems: 'center', width: screenWidth * 0.35, borderRadius: 1, margin: 3, height: screenHeight * 0.25, marginTop: 7 }}
                    containerStyle={{ padding: 0, width: 160 }}
                  >
                            
                <Text style={{ fontSize: 17, color: 'white', paddingTop: 3, position: 'relative' }}>{item.item.title}</Text>
                  </View>
            );
          }}
          keyExtractor={(index) => String(index)}
        />
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default LoadingMovies;

