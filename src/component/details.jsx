import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import DetailProfile from './detailprofile';
import DetailPitchingRecord from './detailpitchingrecord';
import PlayerNav from './playernav';
import DetailHittingRecord from './detailhittingrecord';

function Details({playerAPI}) {
    const { position, pcode } =useParams();
    const [details,setDetails] = useState([]);
    const [records,setRecords] = useState([]);
    const [summary,setSummary] = useState([]);
    useEffect(()=>{
        playerAPI.callDetail(position, pcode)
            .then(recv=>{
                //console.log(recv);
                setDetails(recv.datas);
            });
        playerAPI.callRecord(position, pcode)
            .then(recv=>{
                //console.log(recv);
                setRecords(recv.datas);
                setSummary(recv.summary);
            });
    },[]);
    const target = details;

    return ( 
    <div>
    <PlayerNav />
    <div className="detailWrap mt-5">
        <div className='playerInfo'>
        <div className="row">
            <div className="col-sm-6">
                <div className="card">
                <div className="card-body">
                    <small>{target.position} / {target.hittype ?? ""}</small>
                    <h1 className="card-title">{target.backnum} {target.playerName}</h1>
                    <div className="row">
                        <b className="col-sm-4">생년월일</b>
                        <p className="col-sm-8">{target.birth}</p>
                        <b className="col-sm-4 ">프로입단</b>
                        <p className="col-sm-8">{target.indate}</p>
                        <b className="col-sm-4 ">신장/체중</b>
                        <p className="col-sm-8">{target.height}/{target.weight}</p>
                        <b className="col-sm-4 ">출신학교</b>
                        <p className="col-sm-8">{target.career}</p>
                        <b className="col-sm-4 ">계약금/연봉</b>
                        <p className="col-sm-8">{target.promise} / {target.money}</p>
                    </div>                    
                    {target.position=="투수"?
                    <div className='d-flex justify-content-between mt-4 text-center'>
                        <div>
                            <b>ERA</b>
                            <h2>{summary.era}</h2>
                        </div>
                        <div>
                            <b>승</b>
                            <h2>{summary.w}</h2>
                        </div>
                        <div>
                            <b>패</b>
                            <h2>{summary.l}</h2>
                        </div>
                        <div>
                            <b>세이브</b>
                            <h2>{summary.sv}</h2>
                        </div>
                        <div>
                            <b>탈삼진</b>
                            <h2>{summary.kk}</h2>
                        </div>
                    </div> :
                    <div className='d-flex justify-content-between mt-4 text-center'>
                    <div>
                        <b>경기</b>
                        <h2>{summary.gamenum}</h2>
                    </div>
                    <div>
                        <b>안타</b>
                        <h2>{summary.hit}</h2>
                    </div>
                    <div>
                        <b>홈런</b>
                        <h2>{summary.hr}</h2>
                    </div>
                    <div>
                        <b>타점</b>
                        <h2>{summary.rbi}</h2>
                    </div>
                    <div>
                        <b>타율</b>
                        <h2>{summary.hra == "NaN" ? 0 : summary.hra}</h2>
                    </div>
                </div> 
                    }
                    
                </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card-body">
                   <img src={target.playerProfileImg} />
                </div>
            </div>
        </div>
        </div>
        
        <div className='detailUnder'>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="true">상세프로필</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="record-tab" data-bs-toggle="tab" data-bs-target="#record-tab-pane" type="button" role="tab" aria-controls="record-tab-pane" aria-selected="false">상세기록</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <DetailProfile details={details}/>
                {target.position=="투수"?<DetailPitchingRecord records={records}/>:<DetailHittingRecord records={records}/>}                                       
            </div>
        </div>

    </div> 
    </div>
    );
}

export default Details;