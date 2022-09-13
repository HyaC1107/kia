import { useState, useRef, useEffect } from "react";

function Support({supportAPI}) {
    const [gets,setGets] = useState([]);
    const [news,setNews] = useState();
    const comments = useRef();

    useEffect(()=>{        
        supportAPI.read()
        .then(recv=>{
            setGets(recv.datas);
        })
    },[news])

    const handleSubmit =(event)=>{
        event.preventDefault();
        supportAPI.create(comments.current.value)
            .then(recv =>{
                //console.log(recv);
                setNews(recv);
            })
            .catch(e=>{
                console.log(e.message);
            })
        event.target.reset();
    }
    return ( 
    <div>
        <div className="nav bg-dark">
            <p className="supportP ms-5 mb-1 mt-1">KIA 타이거즈를 사랑하는 사람들</p>
        </div>
        <form className="formBox mt-5" onSubmit={handleSubmit}>
            <div className="form-floating mb-2">
                <textarea className="form-control ta" ref={comments} id="floatingTextarea"></textarea>
                <label htmlFor="floatingTextarea">Comments</label> 
            </div>                   
            <button className="btn btn-dark ">등록</button>   
            <hr />
        </form>
        <div className="formBox">
            {gets.map(one=>{
                
                const content = 
                    <div key={one._id}>
                        <div className="d-flex justify-content-between">
                        <p className="card-subtitle text-muted">{one.createdAt}</p>
                        </div>
                        <p>{one.comments}</p>                                
                        <hr />
                    </div>
                return content;
            })}
        </div>
    </div> );
}

export default Support;