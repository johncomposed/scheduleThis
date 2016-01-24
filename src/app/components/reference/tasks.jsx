var React = require('react');

var Tasks = React.createClass({
  render: function(argument) {
    return (
      <div>
        <h1>Tasks</h1>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Tasks;
