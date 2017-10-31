import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import 'bulma/css/bulma.css';
import { createStore, applyMiddleware} from 'redux';
import { Provider} from 'react-redux';
import * as SocketAPI from './util/SocketAPI';
import {socket} from './util/SocketAPI';
import reducer from './util/reducer';
import logger from './util/logger';
import registerServiceWorker from './registerServiceWorker';


const initialState = {
	connected : false,
	connecting : false, 
    connected_clients: []
};

const store = createStore( reducer,initialState,applyMiddleware( logger) );

const unsubscribe = store.subscribe( () =>
console.log(store.getState().connected)
);
// SocketAPI.socketEventListener(store);

ReactDom.render(<Provider store={store}>
					<App/>
				</Provider>, document.getElementById('app'));
registerServiceWorker();