import { View, Text, FlatList } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';
import { categories } from '../utils/utils';

const Categories = () => {
  return (
    <FlatList
      className='mx-4'
      data={categories}
      renderItem={({ item }) => (
        <CategoryCard imgUrl={item?.image} title={item?.title} />
      )}
      keyExtractor={(item) => item?.id}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  );
};

export default Categories;
