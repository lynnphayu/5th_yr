export const NEW_CLIENT_CONNECT = 'new-client-connect';
export const CLIENT_DISCONNECT = 'client-disconnect';
export const INITIATE_SOCKET = 'initiate-socket';
export const STOP_SPINNER = 'stop-spinner';
export const START_SPINNER = 'start-spinner';
export const CONNECTED = 'connected';
export const CLIENT_LIST_RETRIEVED = 'client-list-retrieved';

export function newClientConnect(id, name) {
    return { type: NEW_CLIENT_CONNECT, id, name };
}

export function clientDisconnect(id) {
    return { type: CLIENT_DISCONNECT, id };
}

export function initiateSocket(name) {
    return { type: INITIATE_SOCKET, name };
}

export function startSpinner() {
    return { type: START_SPINNER };
}
export function stopSpinner() {
    return { type: STOP_SPINNER };
}

export function connected() {
    return { type: CONNECTED };
}

export function clientListRetrieved(dataArray) {
    return { type: CLIENT_LIST_RETRIEVED, dataArray }
}