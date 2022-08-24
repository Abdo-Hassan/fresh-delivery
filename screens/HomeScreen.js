import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import Header from '../components/Header';
import { client } from '../sanity';

const HomeScreen = () => {
  const [featuresCategories,setFeaturedCategories] = useState([])

  useEffect(() => {
    client.fetch()
  }, []);

  return (
    <SafeAreaView className='pt-2'>
      <Header />
      <ScrollView>
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        <FeaturedRow
          id='123'
          title='Featured'
          description='Paid placements from our parents'
        />
        <FeaturedRow
          id='1234'
          title='Tasty Discounts'
          description="Everyone's been enjoying these juicy discounts"
        />
        <FeaturedRow
          id='12345'
          title='Offers near you!'
          description='why not support your local restaurant tonight!'
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
