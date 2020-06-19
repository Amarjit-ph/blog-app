import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'

import { Provider } from './src/context/BlogContext'

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'BLOGS'
  }
});

const App = createAppContainer(navigator);

//PIPE TO CONTEXT
export default () => {
  return <Provider>
    <App />
  </Provider>
}

