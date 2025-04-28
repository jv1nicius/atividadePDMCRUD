import React, {useState} from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ThemedView } from '../ThemedView';


export type JournalModalProps = {
  visible: boolean;
  onAdd: (source_name: string, source_url: string, News:string[]) => void;
  onCancel: () => void;
}

export default function JournalModal({visible, onAdd, onCancel}: JournalModalProps) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  
  return(
    <Modal visible={visible} animationType='slide' transparent={true} onRequestClose={() => {}}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.boxContainer}>
          <Text style={styles.title}>Name</Text>
          <TextInput 
            style={styles.boxInput}
            value={name}
            onChangeText={text => setName(text)}
          />
          <Text style={styles.title}>Url</Text>
          <TextInput 
            style={styles.boxInput}
            value={url}
            onChangeText={text => setUrl(text)}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonAdd} onPress={() => onAdd(name, url, [])}>
              <Text style={styles.buttonText}>
                Add
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCancel} onPress={() => onCancel()}>
              <Text style={styles.buttonText}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </ThemedView>
      </ThemedView>
    </Modal>
  )
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0.7)',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  boxContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center',
    margin: 20,
  },
  boxInput: {
    alignSelf: 'stretch',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#DDD',
    margin: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  buttonContainer:{
    flexDirection: 'row',
    marginTop: 10,
    height: 20,
  }
  ,
  buttonText: {
    fontWeight: 'bold',
    color: '#FFF',
  },
  buttonAdd: {
    backgroundColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    padding: 20,
  },
  buttonCancel: {
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    padding: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});