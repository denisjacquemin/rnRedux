// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../actions';

class AppContainer extends Component {
  state: {
    recipeCount: number;
  };

  constructor(props) {
    super(props)
    this.state = {
      recipeCount: 0
    }
  }

  incrementRecipeCount() {
    this.setState({
      recipeCount: this.state.recipeCount + 1
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!!
        </Text>
        <Text>
          Recipe Count: {this.state.recipeCount}
        </Text>
        <Button
          onPress= { ()=> {this.incrementRecipeCount()} }
          title="Add recipe"
          color="#841584"
        />
        <Text style={styles.instructions}>
          To get started, edit AppContainer
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
  )}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(() => { return {} }, mapDispatchToProps)(AppContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
