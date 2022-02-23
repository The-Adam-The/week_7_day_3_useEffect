import {useState, useEffect} from 'react'
import './App.css';


function App() {
  const [month, setMonth] = useState('');
  const [priority, setPriority] = useState('');

  
  //Everytime there is a render useEffect is called. Avoids problems with asynchronisity.
  useEffect(() => {
    console.log(number);
  });

  useEffect(() => {
    console.log('priority change');
  }, [priority]); //add an array with variables that you want to cause useEffect to happen.

  useEffect(() => { 
     //Limits number of actions for a time frame.
    const timer = setTimeout(() => {
      console.log('DAYTIME TV MADE ME LESBIAN') 
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [priority, month]); 

  return (
    <>
    <div>
      <h2>Month: {month}</h2>
      <button onClick={() => setMonth('January')}>January </button>
      <button onClick={() => setMonth('February')}>February </button>
      <button onClick={() => setMonth('March')}>March </button>
    </div>
    <div>
      <h2>Priority: {priority}</h2>
      <button onClick={() => setPriority('high')}>high</button>
      <button onClick={() => setPriority('low')}>low</button>
    </div>
    </>
  );

  

 


}

export default App;







