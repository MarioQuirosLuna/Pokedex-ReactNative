import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import AppMain from './src/components/AppMain';

export default function App() {
  return (
    <View>
      <AppMain />
      <StatusBar style="auto" />
    </View>
  );
}
