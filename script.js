var Counter = React.createClass({
    getDefaultProps: function(){
        console.log("default props");
    },

    ComponentWillMount: function() {
        console.log("component will mount");
    },

    componentDidMount: function() {
        console.log("component did mount");
    },

    componentWillUnmount: function(){
        console.log("component will unmount");
    },
    
    getInitialState: function() {
        console.log("initiate state");
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter + '  '),
            React.createElement('button', {onClick: this.increment}, 'Increment'),
            React.createElement('button', {onClick: this.decrement}, 'Decrement')
        );
    }
});


var element = React.createElement(Counter);
var element2 = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));
ReactDOM.render(element2, document.getElementById('app2'));