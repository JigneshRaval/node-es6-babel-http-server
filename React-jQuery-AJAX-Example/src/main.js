import React from 'react';
import ReactDOM from 'react-dom';

var MyH1 = React.createClass({
	render : function() {
		return (
			<h1>Hi There</h1>
		)
	}
});

var HelloWorld = React.createClass({
	getInitialState : function() {
		return {
			users : []
		}
	},
	componentDidMount : function() {
		var _this = this;

		$.ajax({
			url: "./js/users-data.json",
			type: 'GET',
			dataType: 'json',
			success: function( resp ) {
				_this.setState({
					users: resp.users
				});
			},
			error: function( req, status, err ) {
				console.log( 'something went wrong', status, err );
			}
		});
		
		$.ajax({
			url: "./js/users-data.json",
			type: 'GET',
			dataType: 'json'
		}).done(function( json ) {
			console.log("Data : ", json);
			
			_this.setState({
				users: json.users
			});
			
		}).fail(function( xhr, status, errorThrown ) {
			alert( "Sorry, there was a problem!" );
			console.log( "Error: " + errorThrown );
			console.log( "Status: " + status );
			console.dir( xhr );
		});
		
	},
	handleClick : function() {
		this.setState({
			name : "Manoj"
		});
	},
	render: function(){
		return (
		  <div>
			Hello World! {this.props.message}
			
			<ul className="user-list">
			{this.state.users.map(function(user) {
				return (
				<li key={user.id}>
				{user.name}
				</li>
				);
			})}
			</ul>
			
			<MyH1 />
			<p onClick={this.handleClick}>{this.state.name}</p>
		  </div>
		)
	}
});

ReactDOM.render(<HelloWorld message="Hi React" />, document.getElementById('app'));