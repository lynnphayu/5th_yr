import {
    NEW_CLIENT_CONNECT,
    CLIENT_DISCONNECT,
    CLIENT_LIST_RETRIEVED
} from './Actions';

export default function clientList(connected_clients, action) {
    switch (action.type) {

        case CLIENT_LIST_RETRIEVED:
            return Object.assign({}, connected_clients, action.dataArray);

        case NEW_CLIENT_CONNECT:
            return Object.assign({}, connected_clients, {
                id: action.id,
                name: action.name
            });

        case CLIENT_DISCONNECT:
            return Object.assign({}, connected_clients, {
                connected_clients: connected_clients.filter((client) => client.id !== action.id)
            });


        default:
            return connected_clients;
    }
}