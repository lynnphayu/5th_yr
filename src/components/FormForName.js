import React, { Component } from 'react';

export default class FormForName extends Component {
    render() {
        return <div className = "field" >
	            	<label className = "label" > Username </label> 
	            	<div className = "control has-icons-left has-icons-right" >
	            		<input className = "input is-success" 
	            				type = "text" 
	            				placeholder = "Text input"
	            				onKeyPress = { this.checkEnterToken } />
	            		<span className = "icon is-small is-left" ><i className ="fa fa-user" ></i></span> 
	            		<span className = "icon is-small is-right"><i className="fa fa-check" ></i></span>
	            	</div>
	            	<p className = "help is-success" > This username is available </p>
            	</div>
    }

    checkEnterToken = (e) => {
        if (e.key === 'Enter')
            this.finishEdit(e);
    };

    finishEdit = (e) => {
        const value = e.target.value;
        this.props.onSubmmit(value);
    };

}