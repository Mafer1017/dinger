import React from 'react'
 
const Result = ({ swing , pitchNum }) => {
  let result;
  if(swing){
    if(pitchNum > swing){
      result = "Pitcher number: " + pitchNum
      + " Swing number: " + swing + " Difference: " + (pitchNum - swing);
    }
    else if(pitchNum < swing){
      result = "Pitcher number: " + pitchNum
      + " Swing number: " + swing + " Difference: " + Math.abs(pitchNum - swing);
    }
    else{
      result = pitchNum + "Pitcher number: " + pitchNum
      + " Swing number: " + swing + " Difference: " + (pitchNum - swing);
    }
  }
  return <h3>{result}</h3>
}
 
export default Result