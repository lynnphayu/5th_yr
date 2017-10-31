import {
    START_SPINNER,
    STOP_SPINNER
} from './Actions';

export default function connecting(state, action) {
    switch (action.type) {
        case START_SPINNER:
            return true;

        case STOP_SPINNER:
            return false;
            
        default:
            return state;
    }
}