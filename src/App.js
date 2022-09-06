import './app.css';
import { createContext, Fragment, useState,useEffect, useReducer } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from './component/nav';
import Player from './component/player';
import Support from './component/support';
import Welcome from './component/welcome';
import {PlayerAPI} from './service/playerAPI';
import { SupportAPI } from './service/supportAPI';
import Details from './component/details';

const playerAPI = new PlayerAPI();
const supportAPI = new SupportAPI();

const reducer = function(state, action) {
  switch(action.type) {
    case "setDatas" : 
      return {...state, datas : action.datas};
    }
    
    return state;
}
export const Store = createContext({});


function App() {
  const [state, dispatch ] = useReducer(reducer, {version : 1.0, datas : [] } );

  useEffect(()=>{
    playerAPI.callList().then(recv=>{
      dispatch({type : "setDatas", datas : recv.datas });
    });
  },[]);
  
  return (
    <div className="App">
      <Store.Provider value={state.datas}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path='/player' element={<Player playerAPI={playerAPI}/>} />
            <Route path='/player/:position' element={<Player playerAPI={playerAPI}/>} />
            <Route path='/player/:position/:pcode' element={<Details playerAPI={playerAPI}/>} />
            <Route path='/support' element={<Support supportAPI={supportAPI}/>} />
            <Route path="*" />
          </Routes>
        </BrowserRouter>
      </Store.Provider>
    </div>
  );
}

export default App;
