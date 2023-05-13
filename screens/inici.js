import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function Inici(props) {
  const [username, setUsername] = useState('');

  const handleTextChangeUsername = (text) => {
    setUsername(text);
  };

  const handleJocPress = () => {
    navigation.navigate('joc');
  };

  return (
    <View>
        <TextInput
        style={styles.inputUser}
        placeholder="Username"
        placeholderTextColor="#FFFFFF"
        value={username}
        onChangeText={handleTextChangeUsername}
        />
        <TouchableOpacity style={styles.button} onPress={handleJocPress}>
        <Icon name="Play" size={20} color="#FFFFFF" />
        </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  inputUser: {
    height: 40,
    marginTop: '15%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    color: 'white',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
