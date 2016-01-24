var React = require('react');

var Task = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {task: {}};
  },

  componentWillMount: function() {
    this.bindAsObject(new Firebase("https://schedulethis.firebaseio.com/tasks/" + this.props.params.id), "task");
  },

  render: function(argument) {
    return (
      <div>
        <h3>Task
          {this.props.params.id}</h3>
        {this.state.task.name}
      </div>
    );
  }
});

module.exports = Task;
