import React, { Component } from 'react';
import Result from './Result';


class Game extends Component{
 
  static defaultProps =  {
    pitch : Math.floor(Math.random() * 100) + 1
  }
 
  constructor(props){
    super(props)
    this.state = { swing : '' }
 
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
          <label htmlFor='swing'>
            Guess a number between 1 to 100
          </label>
        </div>
        <input
          id='swing'
          type='number'
          placeholder='Swing Away!'
          name='swing'
          min='1'
          max='100'
          value={this.state.swing}
          onChange={this.handleChange}
          />

        <Result swing={this.state.swing}
          pitchNum={this.props.pitch} />
      </div>
    )
  }
}
export default Game;