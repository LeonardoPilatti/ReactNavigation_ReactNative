import React from 'react';
import {View, StyleSheet, TouchableHighlight, Text} from 'react-native';

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key]; /// ou const options = descriptors[route.key].options;
        let label = route.name;

        if (options.tabBarLabel != undefined) {
          label = options.tabBarLabel;
        } else if (options.title != undefined) {
          label = options.title;
        }

        return (
          <TouchableHighlight key={index} style={styles.tab}>
            <Text style={styles.label}>{label}</Text>
          </TouchableHighlight>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  label: {
    fontSize: 16,
    color: '#ff0000',
  },
});

export default CustomTabBar;
