import {
    INITIATE_SOCKET,
    CONNECTED
} from './Actions';
import * as socketAPI from './SocketAPI';

export default function connected(state, action) {
    switch (action.type) {
        case INITIATE_SOCKET:
            socketAPI.openSocket(action.name);
            return false;

        case CONNECTED:
            return true;

        default:
            return state;
    }
}