import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, FlatList, Dimensions, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { addMovieToFavorite, removeMovieToFavorite } from '../store/actions/MoviesActions'
import { Rating } from 'react-native-ratings';


const FavoritesScreen = ({ FavoriteMoviesArr, navigation }) => {
  const [favoriteMoviesState , setFavoriteMovies] = useState(FavoriteMoviesArr);
  const [textValue, onChangeText] = useState('');
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  const stringMDTb = 'https://image.tmdb.org/t/p/w200'
  const searchMode = (text) => {
  let tempMoviesSearchArr = [];
  let tempMovieTitle;
  for (let i = 0; i < FavoriteMoviesArr.length; i++) {
    tempMovieTitle = FavoriteMoviesArr[i].item.title
    var res = tempMovieTitle.toLowerCase();
    if (res.indexOf(text) !== -1) {
      tempMoviesSearchArr.push(FavoriteMoviesArr[i]);
    }
  }
  setFavoriteMovies(tempMoviesSearchArr);
}

    const noMoviesAdd = (
        <View style={{ alignItems: 'center', marginTop: '50%' }} >
          <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Oops... 😶</Text>
          <Text style={{ color: 'white', fontSize: 19 }}>You Don't Seem To Have Found Any Movies</Text>
          <Text style={{ color: 'white', fontSize: 19 }}>Go Back And Find Some Movies</Text>
        </View>
    )


    return (

      <View style={{ backgroundColor: '#1a1818', width: '100%', height: '100%', paddingTop: 50 }}>
        <Text style={{ color: 'white', fontSize: 30, marginBottom: 10, marginLeft: '10%' }}>Favorite Movies</Text>

        <View style={{ alignItems: 'center' }}>
          <TextInput
            clearTextOnFocus={true}
            style={{ height: 40, paddingLeft: 40, borderColor: 'transparent', borderWidth: 1, backgroundColor: '#2D3850', borderRadius: 10, width: '80%', fontSize: 17, textAlignVertical: 'center', color: 'white', }}
            onChangeText={text => {
              onChangeText(text)
              searchMode(text)
            }}
            value={textValue}
            placeholder={'Look for your movie?'}
          />
          <   AntDesign name="search1" size={22} color="white" style={{ position: 'absolute', top: '24%', left: '13%' }} />
        </View>
        {FavoriteMoviesArr.length === 0 && noMoviesAdd}

        <View style={{ marginTop: 20, marginLeft: 21, paddingBottom: 100 }} >
          <FlatList
            data={favoriteMoviesState}
            horizontal={false}
            inverted
            renderItem={(item) => {
              let yearReleaseDate = item.item.item.release_date.substring(0, 4);
              return (
                <View style={{ flexDirection: 'row', backgroundColor: '#1a1818', width: screenWidth * 0.80, marginLeft: 25, borderRadius: 1, margin: 3, height: screenHeight * 0.251, marginTop: 13, marginBottom: 15 }}
                >
                  <TouchableOpacity onPress={() => navigation.navigate('Movie', { item: item.item })}>
                    <View>
                      <Image
                        source={{ uri: stringMDTb + item.item.item.poster_path }}
                        style={{ width: screenWidth * 0.35, height: screenHeight * 0.27, borderRadius: 1 }}
                      />
                    </View>
                  </TouchableOpacity>

                  <View style={{ height: screenHeight * 0.25, width: screenWidth * 0.43, marginLeft: 10 }}>
                    <Text style={{ color: 'white', fontSize: 22 }}>{item.item.item.title}</Text>
                    <View style={{ position: 'absolute', top: screenHeight * 0.06 }}>
                      <Text style={{ color: 'white', fontSize: 16, marginTop: 58 }}>Year ({yearReleaseDate})</Text>
                      <Text style={{ color: 'white', fontSize: 16 }}>Popularity - {item.item.item.popularity}</Text>
                      <Text style={{ color: 'white', fontSize: 16 }}>Voted - {item.item.item.vote_count}</Text>



                      <View style={{ flexDirection: "row", marginLeft: 0, marginTop: 4 }}>
                        <Rating
                          type='custom'
                          ratingCount={5}
                          imageSize={60}
                          ratingColor='#1a1818'
                          ratingBackgroundColor='white'
                          imageSize={15}
                          readonly={true}
                          startingValue={item.item.item.vote_average / 2}
                        />
                        <Text style={{ fontSize: 14, color: 'white', paddingLeft: 25, fontWeight: 'bold', position: 'absolute', marginLeft: 60, bottom: 0 }}>{item.item.item.vote_average} / 10 TMDb</Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
            keyExtractor={item => item.id}
          />

        </View>


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



  export default connect(mapStateToProps, null)(FavoritesScreen);

