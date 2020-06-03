import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native";
import axios from 'axios';
import MostPopular from '../components/FavoriteMoviesComponents/MostPopular';
import TopRated from '../components/FavoriteMoviesComponents/TopRated';
import UpComing from '../components/FavoriteMoviesComponents/UpComing';

const MostPopularMovies = ({navigation}) => {
  
  
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);

  return (
    <ScrollView> 
      <MostPopular navigation={navigation} />
      <TopRated navigation={navigation}/>
      <UpComing navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default MostPopularMovies;


