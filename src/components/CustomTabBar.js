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

        const isFocused = state.index === index;

        const handleTabPress = () => {
          navigation.navigate(route.name);
        };

        if (route.name == 'Home') {
          return (
            <TouchableHighlight
              key={index}
              style={styles.middleTab}
              onPress={handleTabPress}
              underlayColor="transparent">
              <Text
                style={[styles.label, isFocused ? styles.labelFocused : null]}>
                {label}
              </Text>
            </TouchableHighlight>
          );
        } else {
          return (
            <TouchableHighlight
              key={index}
              style={styles.tab}
              onPress={handleTabPress}
              underlayColor="transparent">
              <Text
                style={[styles.label, isFocused ? styles.labelFocused : null]}>
                {label}
              </Text>
            </TouchableHighlight>
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#aaa',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  label: {
    fontSize: 16,
    color: '#ff0000',
  },
  middleTab: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
    backgroundColor: '#00ff00',
    marginTop: -20,
    borderRadius: 35,
  },
  labelFocused: {
    fontSize: 16,
    color: '#0000ff',
  },
});

export default CustomTabBar;
