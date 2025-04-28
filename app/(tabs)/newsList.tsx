import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import News from '@/components/news/News';
import { INews } from '@/interfaces/INews';
import NewsModal from '@/components/modal/NewsModal';
import { useState } from 'react';


export default function NewsListScreen() {
  const [news, setNews] = useState<INews[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const onAdd = (title: string, link: string, creator: string, description: string, image_url: string, Journal: unknown) => {
    const newNews: INews = {
      article_id: Math.random() * 1000, 
      title: title,
      link: link,
      creator: creator,
      description: description,
      image_url: image_url,    
      Journal: Journal,
    }
    const newsPlus: INews[] = [...news, newNews]

    setNews(newsPlus)
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
        {news.map(new => <News key={new.article_id} title={new.title} link={new.link} creator={new.creator} description={new.journal} image_url={News.journal} Journal={News.journal}/>)}
      </ThemedView>

      <NewsModal
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