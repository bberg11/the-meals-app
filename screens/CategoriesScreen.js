import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title="Go To Category Meals"
        onPress={() =>
          props.navigation.navigate({ routeName: 'CategoryMeals' })
        }
      />
    </View>
  );
};

export default CategoriesScreen;
