import React from 'react';
import ClientList from './ClientList';
import { connect } from 'react-redux';
import FormForName from './FormForName';
import * as actions from '../util/Actions';
import Spinner from 'react-spinkit';

const App = ({ connected, connecting, connected_clients, onSubmmit }) => {
    if (connected && connecting){
        return <ClientList active_clients = { connected_clients }/>;
    }
    if( connecting ){
    	return <Spinner name="wave"/>
    }
    return <FormForName onSubmmit = { onSubmmit }/>;
}

const mapStateToProps = (state) => {
    return {
        connected_clients: state.connected_clients,
        connected: state.connected,
        connecting: state.connecting,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmmit: name => {
            dispatch(actions.initiateSocket(name));
            dispatch(actions.startSpinner());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);