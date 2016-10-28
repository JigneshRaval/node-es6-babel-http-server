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
			<SearchExample items={ libraries } />
			<MyH1 />
			<p onClick={this.handleClick}>{this.state.name}</p>
		  </div>
		)
	}
});



// Let's create a "real-time search" component

var SearchExample = React.createClass({

    getInitialState: function(){
        return { searchString: '' };
    },

    handleChange: function(e){

        // If you comment out this line, the text box will not change its value.
        // This is because in React, an input cannot change independently of the value
        // that was assigned to it. In our case this is this.state.searchString.

        this.setState({searchString:e.target.value});
    },

    render: function() {

        var libraries = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();


        if(searchString.length > 0){

            // We are searching. Filter the results.

            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });

        }

        return <div>
                    <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />

                    <ul> 

                        { libraries.map(function(l){
                            return <li  key={l.name}>{l.name} <a href={l.url}>{l.url}</a></li>
                        }) }

                    </ul>

                </div>;

    }
});

                                                                                                                                                             
var libraries = [

    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},

];

// Render the SearchExample component on the page


ReactDOM.render(<HelloWorld message="Hi React" />, document.getElementById('app'));