function DetailPitchingRecord({records}) {
    //console.log(records)
    return ( 
    <div className="tab-pane fade" id="record-tab-pane" role="tabpanel" aria-labelledby="record-tab" tabIndex="0">
        <div className="d-flex detailRecord">
        <table>
            <thead>
                <tr>
                    <td>일자</td>
                    <td>구장</td>
                    <td>상대</td>
                    <td>승/패</td>
                    <td>이닝</td>
                    <td>투구</td>
                    <td>타자</td>
                    <td>타수</td>
                    <td>안타</td>
                    <td>홈런</td>
                    <td>4구</td>
                    <td>사구</td>
                    <td>삼진</td>
                    <td>실점</td>
                    <td>자책</td>
                    <td>평균자책점</td>
                </tr>
            </thead>
            <tbody>
            {records.map(e=>{
                return <tr key={e.pcode}>
                    <td>{e.displayDate}</td>
                    <td>{e.stadium}</td>
                    <td>{e.matchTeamName}</td>
                    <td>{e.wls}</td>
                    <td>{e.innDisplay}</td>
                    <td>{e.tugucount}</td>
                    <td>{e.pa}</td>
                    <td>{e.ab}</td>
                    <td>{e.hit}</td>
                    <td>{e.hr}</td>
                    <td>{e.bb}</td>
                    <td>{e.hp}</td>
                    <td>{e.kk}</td>
                    <td>{e.r}</td>
                    <td>{e.er}</td>
                    <td>{e.era}</td>
                </tr>
            })}
            </tbody>
        </table> 
        </div>
    </div>
     );
}

export default DetailPitchingRecord;