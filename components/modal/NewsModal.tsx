import React, { useState } from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ThemedView } from '../ThemedView';


export type NewsModalProps = {
    visible: boolean;
    onAdd: (title: string, link: string, creator: string, description: string, image_url: string, Journal: unknown) => void;
    onCancel: () => void;
}

export default function NewsModal({ visible, onAdd, onCancel }: NewsModalProps) {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [creator, setCreator] = useState('');
    const [description, setDescription] = useState('');
    const [image_url, setImage_url] = useState('');
    const [Journal, setJournal] = useState('');

    return (
        <Modal visible={visible} animationType='slide' transparent={true} onRequestClose={() => { }}>
            <ThemedView style={styles.container}>
                <ThemedView style={styles.boxContainer}>
                    <Text style={styles.title}>title</Text>
                    <TextInput
                        style={styles.boxInput}
                        value={title}
                        onChangeText={text => setTitle(text)}
                    />
                    <Text style={styles.title}>link</Text>
                    <TextInput
                        style={styles.boxInput}
                        value={link}
                        onChangeText={text => setLink(text)}
                    />
                    <Text style={styles.title}>creator</Text>
                    <TextInput
                        style={styles.boxInput}
                        value={creator}
                        onChangeText={text => setCreator(text)}
                    />
                    <Text style={styles.title}>description</Text>
                    <TextInput
                        style={styles.boxInput}
                        value={description}
                        onChangeText={text => setDescription(text)}
                    />
                    <Text style={styles.title}>image_url</Text>
                    <TextInput
                        style={styles.boxInput}
                        value={image_url}
                        onChangeText={text => setImage_url(text)}
                    />
                    <Text style={styles.title}>Journal</Text>
                    <TextInput
                        style={styles.boxInput}
                        value={Journal}
                        onChangeText={text => setJournal(text)}
                    />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonAdd} onPress={() => onAdd(title, link, creator, description, image_url, Journal)}>
                            <Text style={styles.buttonText}>
                                Add
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCancel} onPress={() => onCancel()}>
                            <Text style={styles.buttonText}>
                                Cancel
                            </Text>
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