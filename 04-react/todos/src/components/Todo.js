import React from "react"

class Todo extends React.Component{
    delTodo(){
        var res = window.confirm("你确定删除吗？")
        if(res){
            this.props.deleteDodo(this.props.todo)
        }
    }
    render(){
        return(
            <li className={"todo"}>
				<div className="view">
					<input type="checkbox" className="toggle" /> 
					<label>{this.props.todo.content}</label> 
					<button className="destroy" onClick={this.delTodo.bind(this)}>
					</button>
				</div> 
				{/* <input type="text" className="edit" /> */}
			</li>
        )
    }
}

export default Todo