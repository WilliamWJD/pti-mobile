import { StatusBar } from 'react-native';

import { Home } from './pages/Home';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
      />
      <Home />
    </>
  );
}

