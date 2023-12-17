import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
const [amount,setAmount]=useState(0)
const [rate,setRate]=useState(0)

const [discount,setDiscount]=useState(0)

console.log(amount,rate);

const calculate=(e)=>{
  const output=amount-(amount*(rate/100))
  console.log(output);
  setDiscount(output)
}
const reset=(e)=>{
  setAmount(0)
  setRate(0)
  setDiscount('')
}



  return (
    <div className="App">
      <div className="container">
        <div className="image">
          <img style={{width:"700"}} src="https://www.careinsurance.com/kitextproxy/cms-careinsurance-com/upload_master/cmscatpages/upload/da0ab5ebceb3231b90fe8bf20acb68c8.png" alt="" />

       
        <div className="calculation" style={{height:'300px',width:'370px',marginLeft:'930px',marginTop:"-400px"}}>

          <h1 style={{fontFamily:"fantasy",fontSize:"40px",marginRight:"40px"}}>Discount Calculator</h1>
          <p style={{fontSize:"25px",margin:"10px"}}>Calculate Your Discount💸</p>
           <div className="form" style={{border:'4px solid dark'}}>
           <form action="">
            <div className="input" style={{margin:"10px"}}>
            <TextField id="outlined-basic" value={amount||''} onChange={e=>setAmount(e.target.value)} label="Amount" variant="standard" /><br />
            <br/><TextField id="filled-basic" value={rate||''} onChange={e=>setRate(e.target.value)} label="Discount%" variant="standard" />
            </div>
            <div className="button">
           <Button variant="contained" style={{margin:'20px'}} onClick={e=>calculate(e)}>Calculate</Button>
            <Button variant="outlined" onClick={e=>reset(e)}>Reset</Button>

           </div>
           <div className="result">
          <h2>Total Amount :{discount}</h2>
        </div>

            </form>

           </div>

        </div>
      </div>

    </div>
    </div>
  );
}

export default App;