import {useNavigate} from "react-router-dom"
function Item({data}) {
    const navigate = useNavigate();
    const pQuery = {
        "투수":"pitcher",
        "포수": "catcher",
        "내야수": "infielder",
        "외야수" : "outfielder"
    }
    const clickHandle = ()=>{   
        navigate(`/player/${pQuery[data.position]}/${data.pcode}`);
    }

    return (        
    <div className="card itemCard mb-4"  onClick={clickHandle}>
        <img src={data.playerImg} className="card-img-top"/>
        <div className="card-body">
            <span>NO. {data.backnum}</span>
            <h5 className="card-title">{data.playerName}</h5> 
        </div>
    </div> );
}

export default Item;