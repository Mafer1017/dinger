import React, { Component } from 'react';
import Result from './Result';

class Game extends Component{
 
  static defaultProps =  {
    secret : Math.floor(Math.random() * 100) + 1
  }
 
  constructor(props){
    super(props)
    this.state = { term : '' }
 
    this.handleChange = this.handleChange.bind(this)
  }
 
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }
 
  render(){
    return (
      <div>
        <div>
          <label htmlFor='term'>
            Guess Number between 1 to 100
          </label>
        </div>
        <input
          id='term'
          type='text'
          name='term'
          value={this.state.term}
          onChange={this.handleChange}
        />
   
        <Result term={this.state.term}
            secretNum={this.props.secret} />
      </div>
    )
  }
}
export default Game;