import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import HomePage from './src/components/homePage';
import VotingPage from './src/components/votingPage'
import VotingEnd from './src/components/votingEnd'
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();


function myApp() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="homepage"
            component={HomePage}
          />
         
         
  
          <Stack.Screen
            //options={{headerShown:false}}
            name="votingPage"
            component={VotingPage}
          />
            <Stack.Screen
            options={{headerShown:false}}
            name="votingEnd"
            component={VotingEnd}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default myApp;