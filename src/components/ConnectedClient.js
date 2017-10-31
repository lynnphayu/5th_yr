import React,{Component} from 'react';

export default class ConnectedClient extends Component {
	render() {
		return <tr>
				<td>{this.props.client.id}</td>
				<td>{this.props.client.name}</td>
			</tr>;
	}
}