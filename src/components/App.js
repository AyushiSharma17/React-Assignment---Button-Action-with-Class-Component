import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
			press: false
		}
	};
	addPara = () => {
		this.setState({press: "true"});
  }
    render() {
    	return(
    		<div id="main">
				 <button
          type="button" id="click" onClick={this.addPara}>Add Paragraph</button> 
					{this.state.press ? (
						<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
					): null}
    		</div>
    	);
    }
}


export default App;

