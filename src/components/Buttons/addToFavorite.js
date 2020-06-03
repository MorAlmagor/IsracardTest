import React, { useState } from "react";
import { Text, StyleSheet, View, ImageBackground, Dimensions, ScrollView, Image } from "react-native";
import { MaterialIcons,  MaterialCommunityIcons } from '@expo/vector-icons'; 
import { connect } from 'react-redux';
import {addMovieToFavorite, removeMovieToFavorite} from '../../store/actions/MoviesActions'
import { withNavigation } from 'react-navigation';

const AddListButton = ({navigation, data, FavoriteMoviesArr, OnAddToFavorite, OnRemoveFavorite}) => {

  console.log('navigation btn')
  console.log(navigation)
  

  const [bool, setBool] = useState(false)
  let favoriteMovieArrLength = FavoriteMoviesArr.length
  for(let i = 0; i < favoriteMovieArrLength; i++) {
    if (favoriteMovieArrLength > 0) {
      if (data.item.id === FavoriteMoviesArr[i].item.id && bool === false ) {
        console.log('true')
        setBool(true)
      }
    }
  };

  const addMovieToFavorite = (movieData) => {
    OnAddToFavorite(movieData);
    setBool(true);
    
  }

  const removeMovieToFavorite = (movieId) => {
    OnRemoveFavorite(movieId);
    setBool(false);
    
  }
  
  let buttonColor = 'white'
  let buttonText = 'Add to Favorite'
  let icon = (
    <MaterialIcons name="playlist-add" size={48} color="white" onPress={() => addMovieToFavorite(data)} />
  );

  if (bool === true) {
    buttonColor = 'green'
    buttonText = 'Favorite Movie' 
    icon = (
      <MaterialCommunityIcons onPress={() => removeMovieToFavorite(data.item.id)} name="playlist-check" size={48} color="green" />
    );
  }
  removeMovieToFavorite
  return (
    <View style={{ fontSize: 25, color: buttonColor, paddingLeft: 25, fontWeight: 'bold', position: 'absolute', marginLeft: 290, bottom: 0, color: 'black' }}>
        {icon}
        <Text style={{color: buttonColor, position: 'absolute',marginLeft: 20, top: 43 , right: 0, width: 95}} >{buttonText}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

const mapStateToProps = (state) => {
  return {
    FavoriteMoviesArr: state.movie.favoriteMovies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    OnAddToFavorite: (movie) => dispatch(addMovieToFavorite(movie)),
    OnRemoveFavorite: (movieID) => dispatch(removeMovieToFavorite(movieID))
  };
};

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(AddListButton));
