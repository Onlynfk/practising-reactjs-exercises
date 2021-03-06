import React, { Component } from 'react';
import Vaildation from './Validation/Validation'
import Char  from  './Char/Char';
import './App.css';

class App extends Component {
  state ={
    userInput : ''
  }

  textChangeListener= (event) =>{
    this.setState({userInput: event.target.value});

  }

  deleteCharHandler = (charIndex) =>{
    const allchars = this.state.userInput.split('');
    allchars.splice(charIndex,1);
    console.log(allchars);
    const updated = allchars.join('');
    this.setState({userInput:updated});

  }

  render() {
    // map used to render list of data to the DOM
    // map doesn't touch the array, but generates a new array stored in 
    //charList as seen below
    let charList = this.state.userInput.split('').map((ch,index )=> {
      return <Char character ={ch}
      click = {() =>{this.deleteCharHandler(index)}}
       key={index}/>
    })

    return (
      <div className=" App">
        <input type="text" value={this.state.userInput}
        onChange={this.textChangeListener}/>   
          <p>{this.state.userInput}</p>  

          <Vaildation inputlength={this.state.userInput.length}/>
          {charList}
{/*   
  <ol>
    <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
    <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
    <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
    <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
    <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
    <li>When you click a CharComponent, it should be removed from the entered text.</li>
  </ol> */}
      </div>
    
    );
  }
}

export default App;
