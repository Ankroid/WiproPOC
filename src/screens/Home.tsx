import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useAppSelector} from '../utils/constants';

export default function Home() {
  const data = useAppSelector(state => state.authReducer.data);

  const renderItem = ({item}: any) => {
    return <Text style={styles.textStyle}>{item.body}</Text>;
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
  textStyle: {
    paddingVertical: 10,
  },
});
