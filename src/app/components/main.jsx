var React = require('react');
var Topbar = require('./topbar.jsx');
var TaskList = require('./reference/task-list.jsx');

var Main = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function () {
    return {
      deadlines: [],
      dl: {
        name: '',
        dueBy: 0,
        totalTime: 0,
        startTime: 0,
        timePast: 0,
        notes: '',
        tags: []
      },
      messeges: [],
      msg:{
        name: '',
        startTime: 0,
        endTime: 0,
        place: '',
        notes: '',
        tags: []
      }
    };
  },

  componentWillMount: function() {
    this.bindAsArray(new Firebase("https://schedulethis.firebaseio.com/deadlines/"), "deadlines");
    this.bindAsArray(new Firebase("https://schedulethis.firebaseio.com/messeges/"), "messeges");
  },

  handleSubmitDeadline: function(e) {
    e.preventDefault();
    if (this.state.dl && !Object.keys(this.state.dl).every(function (k) {
      return (k == '' || k == 0);
    })) {
      this.firebaseRefs.deadlines.push(this.state.dl);
      this.setState({dl: {
        name: '',
        dueBy: 0,
        totalTime: 0,
        startTime: 0,
        timePast: 0,
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

  removeDeadline: function(key) {
    var firebaseRef = new Firebase('https://schedulethis.firebaseio.com/deadlines/');
    firebaseRef.child(key).remove();
  },

  render: function() {
    return (
        <div>
          <Topbar />
          <TaskList tasks={this.state.deadlines} removeTask={this.removeDeadline} />

          <form onSubmit={ this.handleSubmitDeadline }>
            <div onChange={ this.onChange }>
              <label>name</label>
              <input id="name" value={ this.state.dl.name } />
              <label>Due by</label>
              <input id="dueBy" value={ this.state.dl.dueBy } />
              <label>totalTime</label>
              <input id="totalTime" value={ this.state.dl.totalTime } />
              <label>startTime</label>
              <input id="startTime" value={ this.state.dl.startTime } />
              <label>notes</label>
              <input id="notes" value={ this.state.dl.notes } />
              <label>tags</label>
              <input id="tags" value={ this.state.dl.tags } />
            </div>
            <button>Add Task</button>
          </form>
        </div>
    );
  }

});

module.exports = Main;
