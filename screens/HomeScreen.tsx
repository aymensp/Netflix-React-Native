import * as React from 'react';
import { FlatList, Image, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import categories from '../assets/data/categories'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'Home'>) {

  const PopoularOnNetflix = categories.items[0]
  return (


    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {categories.items.map((item) => (
        <>
          <Text style={styles.title}>{item.title}</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={styles.list}
            horizontal
            data={item.movies}
            renderItem={({ item }) => (
              <Image
                key={item.id}
                style={styles.image}
                source={{
                  uri: item.poster
                }}
              />
            )}
          >
          </FlatList>
        </>
      ))
      }
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 110,
    height: 170,
    resizeMode: 'cover',
    borderRadius: 6,
    margin: 3,

  },
  list: {
    marginBottom: 10
  },
  title: {
    fontWeight: "800",
    fontSize: 17,
    marginLeft: 10,
    lineHeight: 25

  }

});
