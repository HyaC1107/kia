function DetailHittingRecord({records}) {
    //console.log(records);
    return ( 
    <div className="tab-pane fade" id="record-tab-pane" role="tabpanel" aria-labelledby="record-tab" tabIndex="0">
        <div className="d-flex detailRecord ">
            <table>
                <thead>
                    <tr>
                        <td>일자</td>
                        <td>구장</td>
                        <td>상대</td>
                        <td>타석</td>
                        <td>타수</td>
                        <td>득점</td>
                        <td>안타</td>
                        <td>2타</td>
                        <td>3타</td>
                        <td>홈런</td>
                        <td>타점</td>
                        <td>도루</td>
                        <td>4구</td>
                        <td>삼진</td>
                        <td>병살</td>
                        <td>타율</td>
                    </tr>
                </thead>
                <tbody>
                {records.map(e=>{
                    return <tr key={e.pcode}>
                        <td>{e.displayDate}</td>
                        <td>{e.stadium}</td>
                        <td>{e.matchTeamName}</td>
                        <td>{e.pa}</td>
                        <td>{e.ab}</td>
                        <td>{e.run}</td>
                        <td>{e.hit}</td>
                        <td>{e.h2}</td>
                        <td>{e.h3}</td>
                        <td>{e.hr}</td>
                        <td>{e.rbi}</td>
                        <td>{e.sb}</td>
                        <td>{e.bb}</td>
                        <td>{e.kk}</td>
                        <td>{e.gd}</td>
                        <td>{e.hra}</td>
                    </tr>
                })}
                </tbody>
            </table> 
        </div>
    </div>
     );
}

export default DetailHittingRecord;