var React = require('react');

var All = React.createClass({
    render: function (argument) {
        return (
                <div>
                {this.props.children}
                </div>
                );
    }

});

module.exports = All;