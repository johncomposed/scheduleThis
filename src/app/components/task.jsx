var React = require('react');


var Task = React.createClass({
    getInitialState: function() {

    },

    render: function (argument) {
        var firebaseRef = new Firebase('https://schedulethis.firebaseio.com/tasks/');
        
        return (
                <div>
                    <h3>Task {this.props.params.id}</h3>
                </div>
                );
    }
});

module.exports = Task;