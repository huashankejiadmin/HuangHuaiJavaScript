import React from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import Footer from "./Footer"

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todos : [
                {content:"打游戏",complite:true},
                {content:"吃饭",complite:false},
                {content:"睡觉",complite:false}            ]
        }
    }
    // 添加todo
    addTodo(todo){
        this.state.todos.push(todo);
        this.setState({
            todos:this.state.todos
        })
    }
    // 删除todo
    deleteDodo(todo){
        var index = this.state.todos.findIndex(item=>item == todo)
        this.state.todos.splice(index,1);
        this.setState({
            todos:this.state.todos
        })
    }
    render(){
        return(
            <section className="todoapp">
                <AddTodo addTodo={this.addTodo.bind(this)}></AddTodo>
                <TodoList todos = {this.state.todos} deleteDodo={this.deleteDodo.bind(this)}></TodoList>
                <Footer></Footer>
            </section>
        )
    }
}

export default App