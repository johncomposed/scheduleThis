var React = require('react');
var Topbar = require('./topbar.jsx');
var TaskList = require('./task-list.jsx');

var Main = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function () {
    return {
      tasks: [],
      dl: {
        name: '',
        due: 0,
        duration: 0,
        start: 0,
        place: '',
        notes: '',
        tags: ''
      }
    };
  },

  componentWillMount: function() {
    this.bindAsArray(new Firebase("https://schedulethis.firebaseio.com/tasks/"), "tasks");
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.dl && !Object.keys(this.state.dl).every(function (k) {
      return (k == '' || k == 0);
    })) {
      this.firebaseRefs.tasks.push(this.state.dl);
      this.setState({dl: {
        name: '',
        due: 0,
        duration: 0,
        start: 0,
        place: '',
        notes: '',
        tags: ''
      }});
    }
  },

  onChange: function(e) {
    var state = {
      dl: this.state.dl
    }
    state.dl[e.target.id] = e.target.value
    this.setState(state)
  },

  removeTask: function(key) {
    var firebaseRef = new Firebase('https://schedulethis.firebaseio.com/tasks/');
    firebaseRef.child(key).remove();
  },

  render: function() {
    return (
        <div>
          <Topbar />
          <TaskList tasks={this.state.tasks} removeTask={this.removeTask} />

          <form onSubmit={ this.handleSubmit }>
            <div onChange={ this.onChange }>
              <label>name</label>
              <input id="name" value={ this.state.dl.name } />
              <label>Due by</label>
              <input id="due" value={ this.state.dl.due } />
            </div>
            <button>Add Task</button>
          </form>
        </div>
    );
  }

});

module.exports = Main;
