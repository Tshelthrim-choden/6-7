import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { signInStyles as styles } from './styles';
import { useSignIn } from '../hooks/useSignIn';

  const SignIn = () => {
    const [signIn] = useSignIn();
  
    const onSubmit = async (values) => {
      const { username, password } = values;
  
      try {
        const { data } = await signIn({ username, password });
        console.log('Access Token:', data.authenticate.accessToken);
      } catch (e) {
        console.log('Error during sign in:', e);
      }
    };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={handleChange('username')}
              value={values.username}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange('password')}
              value={values.password}
            />
             <Button title="Submit" onPress={handleSubmit} testID="submitButton" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
