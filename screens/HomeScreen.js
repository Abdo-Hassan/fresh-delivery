import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import Header from '../components/Header';
import { client } from '../sanity';

const HomeScreen = () => {
  const [featuresCategories, setFeaturedCategories] = useState([]);
  console.log('~ featuresCategories', featuresCategories);

  // getting featuresCategories fro sanity
  useEffect(() => {
    client
      .fetch(
        `
   *[_type == 'featured']{
  ...,
  restaurants[]=>{
    ...,
    dishes[]=>{
      ...
    }
  }
}`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView className='pt-2'>
      <Header />
      <ScrollView>
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        {featuresCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category?.name}
            description='Paid placements from our parents'
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
