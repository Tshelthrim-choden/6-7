import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';
import { appBarStyles as styles } from './styles';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.tab}>Repositories</Text>
        </Link>
        <Link to="/signin">
          <Text style={styles.tab}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
