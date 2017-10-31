import clientList from './clientList';
import connecting from './connecting';
import connected from './connected';


export default function rootReducer(state, action) {
    return {
        connected_clients: clientList(state.connected_clients, action),
        connected: connected(state.connected, action),
        connecting: connecting(state.connecting, action), 
    } 
 }