import React from 'react';
import { View, Text } from 'react-native';
import SkeletonLoading from './SkeletonLoading';

const App = () => {
  const isLoading = true;

  if (isLoading) {
    return <SkeletonLoading />;
  }

  return (
    <View>
      <Text>Content loaded!</Text>
    </View>
  );
};

export default App;
