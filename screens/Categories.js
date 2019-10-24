import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
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

export default class Categories extends React.Component {
  constructor() {
    super();
    //Array of Item to add
    this.items = [
      { 'img': require("../assets/images/money.jpg"), 'title': 'What money is and whats wrong with it What money is and whats wrong with it' },
      { 'img': require("../assets/images/bridge.jpeg"), 'title': 'What money is and whats wrong with it' },
      { 'img': require("../assets/images/making.jpg"), 'title': 'What money is and whats wrong with it' },
      { 'img': require("../assets/images/money.jpg"), 'title': 'What money is and whats wrong with it' },
      { 'img': require("../assets/images/bridge.jpeg"), 'title': 'What money is and whats wrong with it' },
      { 'img': require("../assets/images/making.jpg"), 'title': 'What money is and whats wrong with it' },
    ];
    this.cats = [
        {'name': 'Finance', img: '', slug: 'finance'},
        {'name': 'Economics', img: '', slug: 'economics'},
        {'name': 'Finance', img: '', slug: 'finance'},
        {'name': 'Economics', img: '', slug: 'economics'},
    ]
  }
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      headerStyle: {
        height: 50,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
      },
      headerTitle: (
        <View style={styles.appMainTitle}>
          <Text style={styles.center}>It is Categories page</Text>
        </View>
      ),
      headerLeft: (
        <View style={styles.invisibleBlock}>
          <TouchableOpacity
            activeOpacity={0.8} style={styles.svgStyle} onPress={() => {
              navigation.goBack();
            }}>

          </TouchableOpacity>
        </View>
      ),
      headerRight: (<View style={styles.invisibleBlock}></View>),
    }
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.row}>
            {this.cats.map((i, key) => (
              <View key={key} style={styles.col}>
              <TouchableOpacity
            activeOpacity={0.8} style={styles.svgStyle} onPress={() => {
                navigation.navigate("Home")
            }}>
              <View key={key} style={styles.imgCont}>
                <View style={styles.welcomeContainer}>
                <Ionicons name="md-arrow-round-forward" size={64} color="green" />
                </View>
                <View style={styles.cl}>
                  <Text style={styles.textTitle}>{i.name}</Text>
                </View>
              </View>
              </TouchableOpacity>
              </View>
            ))}
          </View>

        </ScrollView>

      </View>
    );
  }
}



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
      style={styles.image}
    />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appMainTitle: {
    flex: 1,
    justifyContent: 'center'
  },
  invisibleBlock: {
    width: 30
  },
  center: {
    textAlign: 'center'
  },
  textTitle: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'left',
    textAlign: 'center'
  },
  
  contentContainer: {
    paddingTop: 30,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    paddingHorizontal: 20,
    flexWrap: 'wrap',
  },
  col:{
    width: '50%',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  
  imgCont: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    margin: 10,
  }

});
