import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './MainScreen';
import NoteScreen from './NoteScreen';
const Stack = createStackNavigator ();

export default function ScreenStack () {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Note" component={NoteScreen} />
    </Stack.Navigator>
  );
}
