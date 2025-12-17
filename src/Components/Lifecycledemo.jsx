import { Component } from "react";

class LifecycleDemo extends Component{
constructor(props){
    super(props)
    this.state={count:0}
    console.log("1st run")
}

componentDidMount(){
    console.log("2nd run")
}

componentDidUpdate(){
    console.log("if state change then run")
}

componentWillUnmount(){
    console.log("4th run")
}

    render(){   
        return(<>
            <h4>Lifecycle demo</h4>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Count {this.state.count}</button>
        </>)
    }
}

export default LifecycleDemo