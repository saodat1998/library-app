import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    //Array of Item to add
    this.items = [
      { 'img': require("../assets/images/bridge.jpeg"), 'title': 'What money is and whats wrong with it' },
      { 'img': require("../assets/images/bridge.jpeg"), 'title': 'What money is and whats wrong with it' },
      { 'img': require("../assets/images/bridge.jpeg"), 'title': 'What money is and whats wrong with it' },
      { 'img': require("../assets/images/bridge.jpeg"), 'title': 'What money is and whats wrong with it' },
      { 'img': require("../assets/images/bridge.jpeg"), 'title': 'What money is and whats wrong with it' },
    ];
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/bridge.jpeg')}
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <BottomText />
          </View>

          {this.items.map((i, key) => (
            <View key={key}>
              <View style={styles.welcomeContainer}>
                <Images url={i.img}/>
              </View>
              <View key={key} style={styles.item}>
                <Text style={styles.text}>{i.title}</Text>
                <View style={styles.separator} />
              </View>
            </View>
          ))}

        </ScrollView>

      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

function BottomText() {

  const learnMoreButton = (
    <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
      Learn more
      </Text>
  );

  return (
    <Text style={styles.developmentModeText}>
      What money is and what's wrong with it? {learnMoreButton}
    </Text>
  );
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function Images(url) {
  return (
    <Image
    source={url.url}
    style={styles.welcomeImage}
  />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: "100%",
    height: 200,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },

});
