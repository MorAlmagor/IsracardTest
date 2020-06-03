import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native";
import axios from 'axios';
import LoadingMovies from './LoadingMovies'
import { connect } from 'react-redux';


const MostPopular = ({navigation, FavoriteMoviesArr}) => {

  const stringMDTb = 'https://image.tmdb.org/t/p/w200'
  const [movies, setMoviesData] = useState(false);
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);

  if (movies === false) {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f23a85ad3d65e712ab0822d95252d032&language=en-US&page=1`)
      .then((res) => {
        if (movies === false) {
        setMoviesData(res.data.results)
        }
      })
      .catch((err) => {
        console.log(err);
        navigation.navigate('Login');
      });
  }

  if(movies === false) {
    return <LoadingMovies />
  } else {
    return (
      <ScrollView>
        <View style={{ backgroundColor: '#1a1818', paddingBottom: 20, paddingTop: 40, paddingLeft: 10}}>
          <Text style={{ fontSize: 21, color: 'white'}}>Most Popular</Text>
          <View >
            <FlatList
              data={movies}
              horizontal={true}
              renderItem={(item) => {
                let stylex = '#1a1818'
                let favoriteMovieArrLength = FavoriteMoviesArr.length
                if (favoriteMovieArrLength > 0) {
                  for (let i = 0; i < favoriteMovieArrLength; i++) {
                    if (item.item.id === FavoriteMoviesArr[i].item.id) {
                      stylex= 'green'
                    }
                  }
                };

                return (
                  <View style={{ backgroundColor: '#1a1818', flex: 1, flexDirection: 'column', alignItems: 'center', width: screenWidth * 0.35, borderRadius: 1, margin: 3, height: screenHeight * 0.25, marginTop: 7}}
                    containerStyle={{ padding: 0, width: 160 }}
                  >
                    <TouchableOpacity onPress={() => navigation.navigate('Movie', {item})}>
                      <View style={{ borderColor: stylex, borderWidth: 2}}>
                        <Image
                          source={{ uri: stringMDTb + item.item.poster_path }}
                          style={{ width: screenWidth * 0.35, height: screenHeight * 0.25, borderRadius: 1 }}
                        />
                      </View>
                    </TouchableOpacity>            
                <Text style={{ fontSize: 17, color: 'white', paddingTop: 3, position: 'relative' }}>{item.item.title}</Text>
                  </View>
                );
              }}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView>
    ); 
  }
 
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

export default connect(mapStateToProps, mapDispatchToProps)(MostPopular);


