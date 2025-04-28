import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Journal from '@/components/journal/Journal';
import { IJournal } from '@/interfaces/IJournal';
import JournalModal from '@/components/modal/JournalModal';
import { useState } from 'react';


export default function JournalListScreen() {
  const [journals, setJournal] = useState<IJournal[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const onAdd = (name:string, url: string, news:unknown[]) => {
    const newJournal: IJournal = {
      source_id: Math.random() * 1000,
      source_name: name,
      source_url: url,
      news: news,
    }
    const journalPlus: IJournal[] = [...journals, newJournal]

    setJournal(journalPlus)
    setModalVisible(false)
  }

  const changeModalVisible = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
      headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
    >
      <ThemedView>
        <TouchableOpacity onPress={() => changeModalVisible()}>
          <ThemedText style={styles.headerButton}>+</ThemedText>
        </TouchableOpacity>
      </ThemedView>
      <ThemedView style={styles.container}>
        {journals.map(journal => <Journal key={journal.source_id} source_name={journal.source_name} source_url={journal.source_url} News={[]}/>)}
      </ThemedView>

      <JournalModal
      visible={modalVisible}
      onCancel={changeModalVisible}
      onAdd={onAdd}
      />

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
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
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  headerButton:{
    fontWeight: 'bold',
    fontSize:20,
    paddingHorizontal:20,
  },
});