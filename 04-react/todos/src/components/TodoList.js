import React from "react"
import Todo from "./Todo"

class TodoList extends React.Component{
    render(){
        return(
            <section className="main">
                <input type="checkbox" className="toggle-all" />
                <ul className="todo-list">
                    {this.props.todos.map((todo,index)=>
                        <Todo todo={todo} deleteDodo={this.props.deleteDodo}></Todo>
                    )}
                </ul>
            </section>
        )
    }
}

export default TodoList