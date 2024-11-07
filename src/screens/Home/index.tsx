import React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {useFeatureFlag} from 'configcat-react';

import {styles} from './styles';

export default function Home() {
  const {value, loading} = useFeatureFlag('event_feature_banner', false);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {value && (
        <Image
          source={{
            uri: 'https://reactnative.dev/assets/images/debugging-rndt-welcome-ac9602807bddf2752fc2a73c57028122.jpg',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      )}

      <Text style={styles.title}>
        {value ? 'React Native DevTools' : 'Home'}
      </Text>
    </View>
  );
}
