import React from 'react'
 
const Result = ({ term , secretNum }) => {
  let result;
  if(term){
    if(secretNum > term){
      result = "Pitcher number: " + secretNum
      + " Swing number: " + term;
    }
    else if(secretNum < term){
      result = secretNum + "Pitcher number: " + secretNum
      + " Swing number: " + term;
    }
    else{
      result = secretNum + "Pitcher number: " + secretNum
      + " Swing number: " + term;
    }
  }
  return <h3>{result}</h3>
}
 
export default Result