var Hello = React.createClass({  
	render: function() {
		return <div>Hello {this.props.name} from React</div>;
	}
});

ReactDOM.render(<Hello name='World' />, document.getElementById('example'));  