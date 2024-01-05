import React, { useEffect, useState } from 'react';


const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(5);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  useEffect(() => {
    generatePassword()
    
  }, [numbers,symbols,length, upperCase, lowerCase]);

  function includeNumber(e){
    setNumbers(e.target.checked)
  }
  function includeSybmol(e){
    setSymbols(e.target.checked)
  }
  function includeUpperCase(e) {
    setUpperCase(e.target.checked);
  }

  function includeLowerCase(e) {
    setLowerCase(e.target.checked);
  }
  function generatePassword(){
    let pass=""
    let str=""
    if(upperCase){
      str +='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if(lowerCase){
      str +='abcdefghijklmnopqrstuvwxyz'
    }
    if(numbers){
      str +='1234567890'
    }
    if(symbols){
      str +='!@#$%^&*()_+:"?><'
    }
    for (let i = 0; i < length; i++) {
      let randomNumber=Math.floor(Math.random()*str.length)
      let char=str.charAt(randomNumber)
      pass += char
    }
    setPassword(pass)
  }
  function copyToClipboard() {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  }

  function reloadPassword() {
    generatePassword();
  }

  return (
    <>
    <div className='text-center p-4 bg-white rounded-md shadow-md' >
    <h1 className='text-3xl font-bold mb-2'>Random Password Generator</h1>
   <h2 className='text-xl mb-6'>{password}</h2>
   <button className='bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-700'
 onClick={copyToClipboard}>Copy Password</button>
      <button           className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700'
 onClick={reloadPassword}>Reload Password</button>
      <br />
   <label htmlFor="length" className='block mt-4'>{length}</label>
   <input className='w-full mt-2' type="range" id="length" min={3} max={15}
   onChange={(e)=>setLength(e.target.value)} value={length}/>
   <br/>
   <label htmlFor="number" className='mt-4' >Number</label>
   <input type="checkbox" id="number" className='ml-2'
   onChange={includeNumber}/>
   <br/>
   <label htmlFor="symbol" className='mt-2'>Symbol</label>
   <input type="checkbox" id="symbol" className='ml-2'
    onChange={includeSybmol} />
   <br/>
    <label htmlFor="upper" className='mt-2'>Uppercase</label>
      <input type="checkbox" id="upper" className='ml-2' onChange={includeUpperCase} />
      <br />
      <label htmlFor="lower" className='mt-2'>Lowercase</label>
      <input type="checkbox" id="lower" className='ml-2' onChange={includeLowerCase} />
    </div>
    </>
  );
}

export default App;



  