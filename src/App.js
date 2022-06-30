import './App.css';
import {Login} from "./login/login";
import {SuggestSheet} from "./SuggestSheet/SuggestSheet";
import React from "react"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {suggestions:props.suggestions,info:props.info}
    }
    reRender = (suggestions, info) =>{
        this.setState({login:true})
        this.setState({suggestions:suggestions,info:info})
    }
    render () {
        if (!this.state.login){
            return (
                <div className="App">
                    <Login childFunc={this.reRender}></Login>
                </div>
            )
        }else {
            return (
                <div className="App">
                    <SuggestSheet suggestions={this.state.suggestions} info={this.state.info}/>
                </div>
            )
        }
    }
}

export default App;
