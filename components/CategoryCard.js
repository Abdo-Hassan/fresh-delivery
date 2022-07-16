import { View, Text, Image, TouchableOpacity } from 'react-native';

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className='relative mr-2' activeOpacity={0.6}>
      <Image source={{ uri: imgUrl }} className='h-20 w-20 rounder' />

      <Text className='absolute bottom-1 left-1 text-white font-bold'>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
