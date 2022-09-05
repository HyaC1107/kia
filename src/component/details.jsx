import { useContext, useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import { Store } from "../app";

function Details({playerAPI}) {
    const { pcode } =useParams();
    const [details,setDetails] = useState([]);
    useEffect(()=>{
        playerAPI.callDetail()
            .then(recv=>{
                console.log(recv);
                setDetails(recv.datas);
            });
    },[])
    console.log(details);
    const target = details.find(e=>e.pcode===pcode);
    console.log("pcode: ",pcode);

    return ( 
    <div className="detailWrap">
        <div>
            
        </div>        
        <div></div>
        <div></div>
    </div> );
}

export default Details;