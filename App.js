import * as React from 'react';
import TabNavigator from './TabNavigator/TabNavigator';  // Update to the renamed TabNavigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPass from './ForgotPass/ForgotPass';
import Login from './SignInScreen/SignIn';
import Register from './RegisterScreen/Register';
import Edit from './Editprofile/Edit';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} options={{headerShown: false}} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}} />
        <Stack.Screen name="EditProfile" component={Edit} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
