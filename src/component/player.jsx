import { useEffect, useState, useContext } from 'react';
import { useParams, useLocation  } from "react-router-dom";
import Item from "./item";
import { Store } from "../app";
import PlayerNav from "./playernav";
import Details from './details';

function Player() {
    const value = useContext(Store);    
    const {position} = useParams(); 
    let target =[] 
    if(position){
        target= value.filter(e=>e.position===position);
    }else{
        target = value;
    }


    return ( <div>
        <PlayerNav />
        <div className='itemBox d-flex flex-wrap justify-content-around mt-4'>
        {   target.map(data=><Item data={data} key={data.pcode} />)            
        }
        </div>
        
    </div> );
}

export default Player;