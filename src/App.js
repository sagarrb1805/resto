import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import Res from './Res';
import store from './store';

function App() {
  // const [res, setRes] = useState([])

  // useEffect(()=>{
  //   const getRes = async()=>{
  //     const response = await fetch("http://localhost:5000/restaurant")
  //     console.log(response)
  //     const data = await response.json()
  //     // console.log(data)
  //     setRes(data)
  //     // console.log(data)
  //     return data
      
  //   }
  //   getRes()
  // }, [])

  return (
    <Provider store={store}>
    <div>
      <Res></Res>
    </div>
    </Provider>
  );
}

export default App;
