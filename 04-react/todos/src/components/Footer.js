import React from "react"

class Footer extends React.Component{
    render(){
        return(
            <footer className="footer">
				<span className="todo-count"><strong></strong> items left</span> 
				<ul className="filters">
					<li><a href="javascript:;">all</a></li>
					<li><a href="javascript:;">active</a></li>
					<li><a href="javascript:;">completed</a></li>
				</ul> 
				<button className="clear-completed">clear completed</button>
			</footer>
        )
    }
}

export default Footer