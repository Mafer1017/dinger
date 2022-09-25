import React from 'react'
 
const Result = ({ term , secretNum }) => {
  let result;
  if(term){
    if(secretNum > term){
      result = secretNum + ' Pitcher number is higher'
    }
    else if(secretNum < term){
      result = secretNum + ' Pitcher number is lower'
    }
    else{
      result = secretNum + " That's a dinger!"
    }
  }
  return <h3>{result}</h3>
}
 
export default Result