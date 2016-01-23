var React = require('react');
var Bootstrap = require('react-bootstrap');

var Navigation = require('./navigation.jsx');

var TaskList = require('./task-list.jsx');

var Main = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function () {
    return {
      tasks: [],
      text: ''
    };
  },

  componentWillMount: function() {
    this.bindAsArray(new Firebase("https://schedulethis.firebaseio.com/tasks/"), "tasks");
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.text && this.state.text.trim().length !== 0) {
      this.firebaseRefs.tasks.push({
        text: this.state.text
      });
      this.setState({text: ""});
    } 
  },

  onChange: function(e) {
    this.setState({text: e.target.value})
  },

  removeTask: function(key) {
    var firebaseRef = new Firebase('https://schedulethis.firebaseio.com/tasks/');
    firebaseRef.child(key).remove();
  },

  render: function() {
    return (
        <div>
        <TaskList tasks={this.state.tasks} removeTask={this.removeTask} />
        
        <form onSubmit={ this.handleSubmit }>
          <input onChange={ this.onChange } value={ this.state.text } />
          <button>Add Task</button>
        </form>
        </div>
    );
  }

});

module.exports = Main;
