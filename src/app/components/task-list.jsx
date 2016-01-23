var React = require('react');
var Bootstrap = require('react-bootstrap');

var TaskList = React.createClass({
  render: function() {
    var _this = this;
    var createTask = function(task, index) {
      return (
        <li key={ index }>
          { task.text }
          <span onClick={ _this.props.removeTask.bind(null, task['.key']) }
                style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}>
            X
          </span>
        </li>
      );
    };
    return <ul>{ this.props.tasks.map(createTask) }</ul>;
  }
})


module.exports = TaskList;
