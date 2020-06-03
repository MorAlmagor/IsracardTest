import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MovieScreen from "./src/screens/MovieScreen";
import LoginScreen from "./src/screens/LoginScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import MostPopularMovies from "./src/screens/MostPopularMovies";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import { store } from './src/store/storeMenu';
import { Provider } from 'react-redux';
import React from 'react';

const navigator = createStackNavigator(
  {
    Home: DashboardScreen,
    Login: LoginScreen,
    Movie: MovieScreen,
    MostPopular: MostPopularMovies,
    Favorite: FavoritesScreen
  },
  {

    initialRouteName: "Login",
    headerMode: 'none',
    defaultNavigationOptions: {
      headerShown: false,
      title: "App"
    }
  }
);



const App = createAppContainer(navigator);
export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
