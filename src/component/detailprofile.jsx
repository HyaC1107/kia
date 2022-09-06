function DetailProfile({details}) {
    //console.log(details);
    return ( 
    <div className="detailProfile tab-pane fade show active" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
        <div className="d-flex">
        <table>
            <tbody>
            <tr>
                <td>생년월일</td>
                <td>{details.birth}</td>
            </tr>
            <tr>
                <td>신장/체중</td>
                <td>{details.height}/{details.weight}</td>
            </tr>
            <tr>
                <td>투타</td>
                <td>{details.hittype}</td>
            </tr>
            <tr>
                <td>출신학교</td>
                <td>{details.career}</td>
            </tr>
            <tr>
                <td>프로입단</td>
                <td>{details.indate}</td>
            </tr>
            <tr>
                <td>연봉</td>
                <td>{details.money}</td>
            </tr>
            </tbody>
        </table>
        <table>
            <tbody>
                <tr>
                    <td className="col-sm-4">경력사항</td>
                    <td className="col-sm-8">{details.mainCareer}</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div> 
    );
}

export default DetailProfile;