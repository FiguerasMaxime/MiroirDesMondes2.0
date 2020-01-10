import React from 'react';
import { Text, Button, StyleSheet, View, ActivityIndicator } from 'react-native';
import LottieView from "lottie-react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Page from './Components/Page';//AIDE : Import ta page à la place 


class Loader extends React.Component {

  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }

  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={styles.loader}
          source={require('./assets/loading.json')}
        />
      </View>
    )
  }

}

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      loaded: true
    }
  }


  componentWillMount() {
    setTimeout(() => {
      this.setState({
        loaded: false
      })
    }, 1500)
  }


  render() {
    return (

      <View style={styles.container}>
        {this.state.loaded ?
          <Loader /> // Class Loader
          :
          //Ce qui charge après le loader est ici
          <LinearGradient
            colors={['#40407A', '#A72196']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: 900,
            }}
          />
        } 
        <Page/>
      </View>

    ); //AIDE : Change le <Page/> avec ta page avec les personnages
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    position: 'absolute',
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  loader: {
    width: 300,
    height: 300,
    flex: 1,
    backgroundColor: '#eee',
  }
});