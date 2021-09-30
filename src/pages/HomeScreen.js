import React from 'react';
import {Button, View, Text, TextInput, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [name, setName] = React.useState('');

  const navigation = useNavigation();

  const handleSendButton = () => {
    navigation.navigate('About', {
      name: name, /// posso mandar só com ('About', {name})  por ser o mesmo nome;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela HOME</Text>
      <Text>Qual seu nome?</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={e => setName(e)}
        // secureTextEntry={true}  /// para ele ficar como senha com '****';
      />
      <Button title="Enviar" onPress={handleSendButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    marginBottom: 15,
    fontSize: 18,
  },
  input: {
    height: 40,
    width: 250,
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#ddd',
  },
});

export default HomeScreen;
