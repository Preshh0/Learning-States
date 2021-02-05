// import logo from './logo.svg';
import './App.css';

import React from "react"
// to use state you need to use the class based component
// State is mutable, props is immutable.
  // class App extends React.Component {

  //     constructor(){
  //       super()
  //       this.state = {
  //         answer: "Yes"
  //       }
  //     }

  //     render(){
  //       return(
  //         <div>
  //           <h1>
  //             Is State important to know? {this.state.answer}
  //           </h1>
  //           {/* <ChildComponent answer={this.state.answer} /> */}
  //         </div>
  //       )
  //     }
  // }
  
// class App extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             name:"Helen",
//             age: 31
//         }
//     }

//     render(){
//         return(
//             <div>
//                 <h1>Name is: {this.state.name}</h1>
//                 <h3> Age is: {this.state.age}</h3>
//             </div>
//         )
//     }
// }

// export default App;
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedin:true
        }
    }

    // render(){
    //     if (this.state.isLoggedin === false){
    //         return(
    //             <div>
    //                 <h1>You are currently logged out.</h1>
    //             </div>
    //     )  
        
    //     }else if (this.state.isLoggedin === true) {
    //         return(
    //             <div>
    //                 <h1>You are currently logged in.</h1>
    //             </div>
    //     ) 
    //     }

    // } Or

    render(){
        let wordDisplay 
        if (this.state.isLoggedin === false){
            wordDisplay = "out"
        }else if (this.state.isLoggedin === true) {
            wordDisplay = "in"
        }

        return(
             <div>
                 <h1>You are currently logged {wordDisplay}.</h1>
             </div>
            )  
    }
}

export default App;
