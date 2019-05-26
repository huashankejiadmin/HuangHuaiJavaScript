import React from "react"

// class 是ES6中的新语法 ，react推荐使用class来定义组件
// App是组件的名字
// extends 继承  react规定，你写的组件，都要继承我Component
class App extends React.Component{
  // props这个参数也不用管
  constructor(props){
    super(props);   // 这行代码先不用管
    this.state = {
      username:"wangcai"
    }
  }
  render(){
    return(
      <div>
        <h1>这是根组件</h1>
        <h2>{this.state.username}</h2>
      </div>
    )
  }
}
// 当你当义了一个组件，那么，你需要把组件导出去，别人才能使用
// export default导出App组件
export default App;








