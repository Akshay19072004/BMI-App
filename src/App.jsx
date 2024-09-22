import { useState } from 'react';
import './App.css';

function App() {
  
  const [height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [bmi,setBmi]=useState(null);
  const [bmistatus,setBmistatus]=useState("");
  const [errormessage,setErrormessage]=useState("");

  const calculator = () => {
    
    const isvalidheight = /^\d+$/.test(height);
    const isvalidweight = /^\d+$/.test(weight);
    if(isvalidheight && isvalidweight){
      const heightinmetres = height/100;
      const bmivalue = weight / (heightinmetres*heightinmetres);
      setBmi(bmivalue.toFixed(2));
      if(bmivalue <= 18.5 ){
        setBmistatus("Under Weight");
      }
      else if(bmivalue >= 18.5 && bmivalue <= 24.9){
        setBmistatus("Normal Weight");
      }
      else if(bmivalue >= 25 && bmivalue <= 29.9){
        setBmistatus("Over Weight");
      }
      else {
        setBmistatus("Obese");
      }
    setErrormessage("");
    }
    else{
      setBmi(null);
      setBmistatus("");
      setErrormessage("Please enter the correct numerical values");
    }

  }

  const clear = () =>{
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmistatus("");
    setErrormessage("");
  }


  return (
    <>
      <div className='container' >
       <div className="image"> </div>
          <div className="data">
          <h1>BMI CALCULATOR</h1>
          { errormessage && (<p className="error" >{errormessage}</p>)}
            <div className="inputcontainer">
              <label className='height'> Height (cm) : </label>
              <input type="text" value={height} placeholder='Enter your height' 
                id='height'  onChange={(e)=>{setHeight(e.target.value) } }/>
            </div>
            <div className="inputcontainer">
              <label className='weight'> Weight (kg) : </label>
              <input type="text" value={weight} placeholder='Enter your weight' 
                id='weight' onChange={(e)=>{setWeight(e.target.value) } }/>
            </div>
            < div className='buttons'> 
            <button onClick={calculator} className='calci' > Calculate </button>
            <button className='clear' onClick={clear} >Clear</button>
            </div>
            {bmi!==null && (            
              <div className='report'>
              <p>Your BMI is {bmi}</p>
              <p>Category : {bmistatus}</p>
            </div>)}

         
          </div>
      </div>
      
    </>
  )
}

export default App;
