import { useContext } from 'react';
import { useParams } from "react-router-dom";
import Item from "./item";
import { Store } from "../app";
import PlayerNav from "./playernav";

function Player() {
    const value = useContext(Store);    
    const query = useParams().position; 
    const position= {pitcher:"투수",catcher:"포수",infielder:"내야수",outfielder:"외야수"};
    let target =[];
    if(query){
        target= value.filter(e=>e.position==position[query]);
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