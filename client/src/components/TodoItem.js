import React from 'react'
import PropTypes from 'prop-types'


export const TodoItem = props => { 
    return (
        <li>
            <label htmlFor={props.id}>
                {props.task}
            </label> 
           
            </li>
    )
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    status: PropTypes.string,
    task: PropTypes.string.isRequired
}