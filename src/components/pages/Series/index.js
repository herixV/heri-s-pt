import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Modal, TouchableHighlight } from 'react-native';
import { styles } from '../../styles/series';
const jsonData = require ('../../../../data/sample.json');
import  { useState } from 'react';



export default function Series() {
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredSeries, setFilteredSeries] = useState([]);

  // Accede a la propiedad "entries" del objeto JSON
  const seriesData = jsonData.entries.filter(item => item.programType === 'series');

  const showFilterModal = () => {
    setModalVisible(true);
  };

  const hideFilterModal = () => {
    setModalVisible(false);
  };

  const filterSeries = (filterType) => {
    let sortedSeries = [...seriesData];
    if (filterType === 'az') {
      sortedSeries.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filterType === 'za') {
      sortedSeries.sort((a, b) => b.title.localeCompare(a.title));
    } else if (filterType === 'year') {
      sortedSeries.sort((a, b) => a.releaseYear - b.releaseYear);
    }
    setFilteredSeries(sortedSeries);
    hideFilterModal();
  };

  return (
    // Título
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>DEMO Streaming</Text>
        <View style={styles.nav}>
          <Text style={styles.navItem}>Log in</Text>
          <Text style={styles.navItem2}>Start your free trial</Text>
        </View>
      </View>
      {/* Subtitulo */}
      <View style={styles.section}>
      <Text style={styles.sectionTitle}>Series</Text>
        <TouchableOpacity onPress={showFilterModal}>
          <Text style={styles.filterButton}>Filtros</Text>
        </TouchableOpacity>
      </View>

      {/* Series con FlatList */}
      <FlatList
        data={filteredSeries.length > 0 ? filteredSeries : seriesData}
        keyExtractor={(item) => item.title}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.seriesItem}>
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
            <Text style={styles.modalTitle}>Filtros</Text>
            <TouchableHighlight
              style={styles.modalButton}
              onPress={() => filterSeries('az')}
            >
              <Text>A-Z</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.modalButton}
              onPress={() => filterSeries('za')}
            >
              <Text>Z-A</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.modalButton}
              onPress={() => filterSeries('year')}
            >
              <Text>Por año</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.modalCloseButton}
              onPress={hideFilterModal}
            >
              <Text>Cerrar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}