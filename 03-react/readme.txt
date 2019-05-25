react

公司做项目的流程：
    前后端分离开发，对于一个项目来说，它是分前端和后端。
    前端：
        画页面（pc,webapp,小程序,公众号），android,ios,h5
            h5:vue,react,ng
            页面上的数据都是死数据
        请求数据：异步  就是去请求api接口
        渲染数据：就是页面上的假数据换成真实数据
    后端：主要给前端提供数据  api接口（网址）

react是什么呢：
    答：react是一个h5的前端框架，在这个框架中，提供了画页面，请求数据，渲染数据一整套技术。
        使用react技术栈，就可以做一个完成的前端项目。

前端领域有三大框架：
    vue:简单，流行程序是最广的，一般在中小型公司用的比较多
    react:稍微难一点，大厂用的多一点
    ng:比react还难一点，国外用的多一点

招聘要求：
    现在公司里招前端开发工程，必备技能：vue  react 
    从今天开始，对于react学习，一定要下功夫。 
    有的同学，前几次课没有来  


使用vue和react最后，我们做的最多是的webapp:


react介绍：
    React是Facebook内部的一个JavaScript类库。
    react主要指两个东西：
        react.js   pc  webapp
        react native   代替andoroid和ios，做原生app开发
    我们是先学习react.js，用这个react.js做webapp。
    vue和react都是渐近式学习。

React.js技术栈（全家桶）
    Vue技术栈：vue.js + vue-router + vuex + es6 + webpack + axios 
    react技术栈：react.js + react-router + redux +es6 + webpack + fetch 

Hello World案例：
    react.js是react的核心文件，它既可以用于web版本的react.js，也可以用于开发原生app的react natvei。
    react-dom.js，是专门针对webapp开发的。
    browser-5.8.38.min.js 是用于在浏览器中支持jsx语法的，注意这个版本不能随便用

组件：
    在vue，react，里面都是组件。是程序员自己是划分，你想把哪一部分定义成一个组件，你就可以定义成一个组件。
    如果把一个前端项目，划分成了好多的组件，那么你可以可以像堆积木一样，把项目堆起来。组件是可以重用的。

    所谓的组件，就是我们自定义的一个标签，只不这个标签比较强大。

    <div></div>  <a></a>  你也可以把之前学过的标签当成一个最原始的组件

    在React中，我们所说的组件，基本最原始的组件，封装了内容比较丰富的组件而已。

    组件定义时，比较恶心，但是使用起来就是使用html标签一样。

React版HelloWorld案例流程：
    1，引用相关的js文件
        <script src="./lib/react.js"></script>
        <script src="./lib/react-dom.js"></script>
        <script src="./lib/browser-5.8.38.min.js"></script>
    2，在script标签中写组件   写组件的比较麻烦一点
        <script type="text/babel">
            var Hello = React.createClass({
                render(){
                    return(
                        <div>
                            <h1>Hello World~组件</h1>
                        </div>
                    )
                }
            })
        </script>
    3，渲染组件到指定的地方
        ReactDOM.render(<Hello/>,document.getElementById("app"))

在JSX中，如果你想要给标签添加属性，有一个属性比较特殊，是class属性。
    class--->className   class这是js中的一个关键
    for--->htmlFor    for是js中的关键

在JSX中，要给标签添加行内样式，如下：
    <h1 id="abc" className="item" style={{color:"red",background:"skyblue"}}>这是一个Hi组件</h1>

在一个组件中，不只有html，还有数据，数据在vue和react中，都叫状态。也就是说
一个组件中，是有很多的状态。state。

refs主要作用是用来获取一个标签，步骤：
    第一步：给一个标签起上一个别名，ref="xxx"
    第二步：通过this.refs.xxx 来获取这个标签  

表单：
    <form>
        <input></input>
        <select><option></option></select>
        <textarea></textarea>
    </form>

在Reac中表单分受控的和非受控。  

案例练习：
    第一步：

