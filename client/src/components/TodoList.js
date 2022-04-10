import React from 'react'
import PropTypes from 'prop-types'
import { TodoItem } from './TodoItem'

export const TodoList = props => { 

    return (
  
        <ul className="todoList">
            {props.todosList.map(eachTask =>
                
                <TodoItem key={eachTask.id}
                    { ...eachTask}
                />
                )}

            
       </ul>
    )
}


TodoList.propTypes = {
    todosList: PropTypes.array.isRequired,
}