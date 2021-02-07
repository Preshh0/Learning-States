import './App.css';
import React from "react"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isActive:true
        }
    }

    render(){
        let displayWord
        if (this.state.isActive === true){
            displayWord = "on"
        }else if (this.state.isActive === false){
            displayWord = "off"
        }

        return(
            <div>
                <h2>Hey {displayWord} </h2>
            </div>            
        )


    
    }
}

export default App