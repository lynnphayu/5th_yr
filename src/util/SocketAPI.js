import io from 'socket.io-client';
import * as actions from './Actions';

export var socket = null;
const url = 'http://localhost:3030';

export function socketEventListener(store) {

	socket.on('client_list', (data)=> {
		store.dispatch(actions.clientListRetrieved(data));
		store.dispatch(actions.connected());
	})

    socket.on('new_client', (data) => {
        store.dispatch(actions.newClientConnect(data.id, data.name));
    });

    socket.on('client_disconnect', (data) => {
        store.dispatch(actions.clientDisconnect(data.id));
    })
}

export function openSocket(name){
	socket = io.connect(url, {query: 'name='+name});
}