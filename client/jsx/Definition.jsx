/** @jsx React.DOM */
"use strict";

var React = require('react');
var marked = require('marked');

var Definition = React.createClass({
  render: function() {
    return (
      <div className="definition" id="definition">
        <blockquote dangerouslySetInnerHTML={{__html: marked(this.props.children)}} />
        <cite>— <a href={this.props.href}>{this.props.source}</a></cite>
      </div>
    );
  }
});

module.exports = Definition;
