import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Modal, TouchableHighlight, StyleSheet } from 'react-native';
import { styles  } from '../../styles/peliculas';

const jsonData = require ('../../../../data/sample.json');
import  { useState } from 'react';


export default function Peliculas () {
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Accede a la propiedad "entries" del objeto JSON
  const moviesData = jsonData.entries.filter(item => item.programType === 'movie');

  const showFilterModal = () => {
    setModalVisible(true);
  };

  const hideFilterModal = () => {
    setModalVisible(false);
  };

  const filterSeries = (filterType) => {
    let sortedSeries = [...moviesData];
    if (filterType === 'az') {
      sortedSeries.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filterType === 'za') {
      sortedSeries.sort((a, b) => b.title.localeCompare(a.title));
    } else if (filterType === 'year') {
      sortedSeries.sort((a, b) => a.releaseYear - b.releaseYear);
    }
    setFilteredMovies(sortedSeries);
    hideFilterModal();
  };

  const openMovieDetails = (movie) => {
    setSelectedMovie(movie);
    setModalVisible(true);
  };

  return (
    //Titulo
    <View style={styles.container}>
      <View style={styles.containerHeader} >
        <Text style={styles.title}>DEMO Streaming</Text>
        <View style={styles.nav}>
          <Text style={styles.navItem}>Log in</Text>
          <Text style={styles.navItem2}>Start your free trial</Text>
        </View>
      </View>
      {/* Subtitulo */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Movies</Text>
        <TouchableOpacity onPress={showFilterModal}>
          <Text style={styles.filterButton}>Filtros</Text>
        </TouchableOpacity>
      </View>

      {/* peliculas con FlatList */}
      <FlatList
        data={filteredMovies.length > 0 ? filteredMovies : moviesData}
        keyExtractor={(item) => item.title}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.seriesItem}
            onPress={() => openMovieDetails(item)}
          >
            <Image
              style={styles.seriesImage}
              source={{ uri: item.images['Poster Art'].url }}
            />
            <Text style={styles.seriesText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Modal de filtros */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={hideFilterModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedMovie && (
              <>
                <Text style={styles.modalTitle}>{selectedMovie.title}</Text>
                <Text>{selectedMovie.description}</Text>
                <Text>{selectedMovie.releaseYear}</Text>
                <Image
                  source={{ uri: selectedMovie.images['Poster Art'].url }}
                  style={styles.modalImage}
                />
              </>
            )}
            <TouchableHighlight
              style={styles.modalCloseButton}
              onPress={hideFilterModal}
            >
              <Text style={styles.modalCloseButtonText}>Cerrar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}


