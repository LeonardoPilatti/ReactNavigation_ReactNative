import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const AboutScreen = () => {
  const navigation = useNavigation(); /// para navegar para outra tela, no caso, estou usando o goBack para voltar para a última tela que foi, nesse caso, o HomeScreen;
  const route = useRoute(); /// para receber algo como parametro;

  const name = route.params?.name ?? 'Visitante'; /// para pegar o name que passei como parametro na tela HomeScreen/, se tiver nome, ele irá pegar o name, se não, irá colocar 'Visitante';

  const handleBackButton = () => {
    // navigation.navigate('Home');
    // ou
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Tela de sobre: {name}</Text>
      <Button title="Voltar" onPress={handleBackButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AboutScreen;
