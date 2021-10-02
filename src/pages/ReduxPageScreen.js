import React from 'react';
import {Button, View, Text, TextInput, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';

const ReduxPageScreen = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const stateUser = useSelector(state => state.userReducer); /// para pegar o userReducer do redux;
  const dispatch = useDispatch();
  // console.log(stateUser);

  const handleDispatchUser = () => {
    //// para enviar para o redux;
    dispatch({type: 'SET_NAME', payload: {name: name}});
    dispatch({type: 'SET_EMAIL', payload: {email: email}});
  };

  const navigation = useNavigation();

  const handleBackPage = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela teste de REDUX</Text>
      <Text>Qual o nome?</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={e => setName(e)}
        // secureTextEntry={true}  /// para ele ficar como senha com '****';
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={e => setEmail(e)}
        // secureTextEntry={true}  /// para ele ficar como senha com '****';
      />

      <Button title="Enviar para o REDUX" onPress={handleDispatchUser} />
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Button title="Voltar para a HOME" onPress={handleBackPage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default ReduxPageScreen;
