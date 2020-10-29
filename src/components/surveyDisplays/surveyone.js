import React, {useState,useCallback} from 'react';
import Mysurvey from '../surveyTypes/surveyone'

function SurveyOne() {
  const [showCompletedPage, setshowCompletedPage] =useState(true)
  const onCompletepage = useCallback((data)=>{
    console.log({data})
    setshowCompletedPage(!showCompletedPage)
  },[showCompletedPage])

  const setFinalPage = () =>{
    return(
      <div className="setFinalPage">
        <h1>THANK YOU FOR TAKING THE SURVEY</h1>
      </div>
    )
  }
  
  return (
    <main className="App">
      {
        showCompletedPage?
        <Mysurvey showCompletePage={data=>onCompletepage(data)} />:
        setFinalPage()
      }
    </main>
  );
}

export default SurveyOne;
