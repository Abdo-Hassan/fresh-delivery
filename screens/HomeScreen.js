import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from './components/Header';

const HomeScreen = () => {
  return (
    <SafeAreaView className='bg-white pt-5'>
      <Header />
      <ScrollView>
        {/* Categories */}

        {/* Featured  */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
