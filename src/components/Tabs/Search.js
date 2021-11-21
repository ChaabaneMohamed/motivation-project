import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';

function SearchScreen({ navigation }) {
  const [search, setSearch] = useState('');

    return (
      <View>
        <SearchBar
        placeholder="Type Here..."
        onChangeText={setSearch}
        value={search}
      />
      </View>
    );
}
  
export default SearchScreen;