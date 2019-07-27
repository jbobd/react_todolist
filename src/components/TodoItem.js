import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.todoItemProp.title }</p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todoItemProp: PropTypes.object.isRequired
}