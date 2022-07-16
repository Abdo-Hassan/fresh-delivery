import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import { restaurants } from '../utils/utils';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ title, description }) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00CCBB' />
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>

      {/* Restaurant Cards */}
      <FlatList
        className='pt-4 px-4'
        data={restaurants}
        renderItem={({ item }) => (
          <RestaurantCard
            imgUrl={item?.imgUrl}
            title={item?.title}
            rating={item?.rating}
            genre={item?.genre}
            address={item?.address}
            short_description={item?.short_description}
            dished={item?.dished}
            long={item?.long}
            lat={item?.lat}
          />
        )}
        keyExtractor={(item) => item?.id}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default FeaturedRow;
