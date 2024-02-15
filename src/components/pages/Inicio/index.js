import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Peliculas from '../Peliculas';
import Series from '../Series';
import {styles} from '../../styles/inicio'

export default function Inicio(props) {
  const { navigation } = props;

  const iraPeliculas = () => {
    navigation.navigate(Peliculas);
  }

  const iraSeries = () => {
    navigation.navigate(Series);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader} >
        <Text style={styles.title}>DEMO Streaming</Text>
        <View style={styles.nav}>
          <Text style={styles.navItem}>Log in</Text>
          <Text style={styles.navItem2}>Start your free trial</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Titles</Text>
      </View>

      <View style={styles.sectionSeriesPeliculas}>
        <TouchableOpacity style={styles.button} onPress={iraSeries}>
          <Text style={styles.sectionTitleSeriesPeliculas}>Series</Text>
          <Text style={styles.sectionText}>Popular Series</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionSeriesPeliculas}>
        <TouchableOpacity style={styles.button} onPress={iraPeliculas}>
          <Text style={styles.sectionTitleSeriesPeliculas}>Movies</Text>
          <Text style={styles.sectionText}>Popular Movies</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.appStoreButton}>
          <Text style={styles.microsoftText}>appStore</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googlePlayButton}>
          <Text style={styles.googlePlayText}>googlePlay</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.microsoftButton}>
          <Text style={styles.microsoftText}>microsoft</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


