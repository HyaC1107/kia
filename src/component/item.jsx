import {useNavigate} from "react-router-dom"
function Item({data}) {
    const navigate = useNavigate();
    const clickHandle = ()=>{   
        navigate(`/player/${data.pcode}`);
    }

    return (        
    <div className="card itemCard mb-4" style={{width:"18rem"}} onClick={clickHandle}>
        <img src={data.playerImg} className="card-img-top"/>
        <div className="card-body">
            <span>NO. {data.backnum}</span>
            <h5 className="card-title">{data.playerName}</h5> 
        </div>
    </div> );
}

export default Item;