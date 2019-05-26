import React from "react"

class AddTodo extends React.Component{
    handleKeyup(e){
        // alert("123")
        // 有问题   按任何键，都可以执行这个方法
        // 我们需要当我们按了回车键，再去调用这个方法
        var content = this.refs.content.value.trim()
        if(!content){
            // 没有输入内容
            // alert("请你输入内容")
            return;  // return结束程序
        }
        if(e.keyCode === 13){
            // 按了回车
            this.props.addTodo({content:content,complite:false})
            this.refs.content.value = ""
        }
    }
    render(){
        return(
            <header className="header">
				<h1>todos</h1> 
                <input ref="content" type="text" placeholder="what need to be done?" 
                className="new-todo" onKeyUp={this.handleKeyup.bind(this)}/>
			</header>
        )
    }
}

export default AddTodo