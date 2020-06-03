import React, { useState } from "react";
import * as TMDb from '../utilities/srtings/theMovieDB';
import { Text, StyleSheet, View, ImageBackground, Dimensions, ScrollView, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Rating } from 'react-native-ratings';
import AddListButton from '../components/Buttons/addToFavorite'; 



 

const MovieScreen = ({navigation}) => {
  
  const [addButton, setaddButton] = useState(false)
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  const SelectedMovieDATA = navigation.state.params.item
  const fullReleaseDate = SelectedMovieDATA.item.release_date
  const yearReleaseDate = fullReleaseDate.substring(0, 4);

  
  
  return (
    <View>
      <LinearGradient
            colors={['rgba(0,0,0,0.1)', '#1a1818']}
            style={{
              position: 'absolute',
              zIndex: 2,
              left: 0,
              right: 0,
              top:0,
              height: screenHeight * 0.41,
            }}
          />
    <Image
      source={{ uri: TMDb.MDTbPosterBaseUrl + SelectedMovieDATA.item.backdrop_path}}
      style={{ width: screenWidth, height: screenHeight * 0.4, marginTop: 1}}
     />
     <Image
      source={{ uri: TMDb.MDTbPosterBaseUrl + SelectedMovieDATA.item.poster_path }}
      style={{ width: screenWidth * 0.27, height: screenHeight * 0.25, marginTop: screenHeight * 0.172, marginLeft: screenHeight * 0.035 , zIndex: 6, position: 'absolute'}}
     />
    <View style={{backgroundColor: '#1a1818', height: screenHeight, width: screenWidth + 5 }}>
      <View style={{ height: 0, width: screenWidth + 5, zIndex: 3 ,flex: 1}} >
      <Text style={{ fontSize: 25, color: 'white', paddingLeft: 25, marginTop: 20}}>{SelectedMovieDATA.item.title} ({yearReleaseDate})</Text>
      <View style={{ flexDirection:"row", marginLeft: 25, marginTop: 7 }}>
        <Rating
          type='custom'
          ratingCount={5}
          imageSize={60}
          ratingColor='#1a1818'
          ratingBackgroundColor='white'
          imageSize={15}
          readonly={true}
          startingValue={SelectedMovieDATA.item.vote_average/2}
        />
        <Text style={{ fontSize: 14, color: 'white', paddingLeft: 25, fontWeight: 'bold', position: 'absolute', marginLeft: 60, bottom: 0 }}>{SelectedMovieDATA.item.vote_average} / 10 TMDb</Text>
        <AddListButton data={SelectedMovieDATA} navigation={navigation} />
      </View>
      <Text style={{ fontSize: 20, color: 'white', paddingLeft: 25, marginTop: 25, fontWeight: 'bold' }}>Storyline</Text>
      <Text style={{ fontSize: 15, color: 'white', paddingLeft: 25, marginTop: 15, paddingRight: 15}}>{SelectedMovieDATA.item.overview}</Text>
      </View>
    </View>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});


export default MovieScreen;
