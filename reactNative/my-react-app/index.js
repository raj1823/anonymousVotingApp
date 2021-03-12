import { registerRootComponent } from 'expo';
import store from './src/services/rootReducer'
import App from './router';
import React from 'react'
import {Provider} from 'react-redux'
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately

const myApp = () => (
    <Provider store={store}>
        {/* <PersistGate loading={<ActivityWaiter/>}
        persistor={persistor}></PersistGate> */}
        <App />
    </Provider>
);
registerRootComponent(myApp);
