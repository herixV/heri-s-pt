import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    backgroundColor: '#056CF2',
    padding: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  navItem: {
    fontSize: 18,
    color: '#007bff',
    color: 'white',
  },
  navItem2: {
    fontSize: 18,
    color: '#007bff',
    color: 'white',
    backgroundColor: '#262626',
  },
  section: {
    marginBottom: 16,
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    backgroundColor: '#262626',
    color: 'white',
    flex: 1,
  },
  seriesItem: {
    alignItems: 'center',
    marginBottom: 8,
    width: 120,
  },
  seriesImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  seriesText: {
    fontSize: 16,
    color: 'black',
  },
  filterButton: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    backgroundColor: '#262626',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButton: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  modalCloseButton: {
    marginTop: 10,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  modalCloseButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});