import { StyleSheet, Image, FlatList, Linking } from 'react-native';
import { useState, useEffect } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const API = 'https://newsdata.io/api/1/news?apikey=pub_81246bfbb1138b4f9af6d1964e5885b4a4f6a&country=br&language=pt';

export default function NewsScreen() {
  const [newsData, setNewsData] = useState<any[]>([]);

  const fetchData = () => {
    fetch(API)
      .then((response) => {
        if (!response.ok) {
          console.log('Erro na requisição: ' + response.statusText);
          return;
        }
        return response.json();
      })
      .then((data) => {
        setNewsData(data.results);
      })
      .catch((error) => {
        console.log('Deu erro ', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const itemFormat = ({ item }: { item: any }) => (
    <ThemedView style={styles.container}>
      {item.image_url && (
        <Image source={{ uri: item.image_url }} style={styles.image} />
      )}
      <ThemedText type='title'>{item.title}</ThemedText>
      <ThemedText type='default'>{item.description}</ThemedText>
      <ThemedText
        type='link'
        onPress={() => Linking.openURL(item.link)}
      >
        Leia mais
      </ThemedText>
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.article_id}
        renderItem={itemFormat}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 8,
  },
  itemContainer: {
    marginBottom: 14,
    backgroundColor: '#d3d3d3',
    borderRadius: 6,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 6,
    marginBottom: 6,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
  description: {
    marginVertical: 4,
    color: '#242424',
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});