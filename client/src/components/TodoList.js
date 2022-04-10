import React from 'react'
import PropTypes from 'prop-types'
import { TodoItem } from './TodoItem'

export const TodoList = props => { 

    return (
        <div className='row'>
            <div className='col-6'>
                <h2>Completed Task</h2>
                
                <ul className="todoList">
                    {props.todosList.filter(item => item.status === 'Completed').map(eachTask =>
                        
                        <TodoItem key={eachTask.id}
                            { ...eachTask}
                        />
                        )}

                    
            </ul>
            </div>

            <div className='col-6'>
                <h2>Pending task</h2>
                <ul className="todoList">
                    {props.todosList.filter(item => item.status === 'Pending').map(eachTask =>
                        
                        <TodoItem key={eachTask.id}
                            { ...eachTask}
                        />
                        )}

                    
                </ul>
            </div>

  
       </div>
    )
}


TodoList.propTypes = {
    todosList: PropTypes.array.isRequired,
}