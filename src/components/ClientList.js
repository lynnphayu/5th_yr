import React,{Component} from 'react';
import ConnectedClient from './ConnectedClient';

class Client_list extends Component{

	render() {
		return (<table className='table'>
			<thead>
				<tr><th>Name</th><th>Active</th></tr>
			</thead>
			<tbody>
				{this.props.active_clients.map( (connected_client) =>
					<ConnectedClient client={ connected_client }/>
					)}
			</tbody>
		</table>);
	}
}

export default Client_list;