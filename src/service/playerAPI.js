export class PlayerAPI{
    constructor() {
        this.baseURL="http://127.0.0.1:8080";
        this.getOption = {
            method: "get"
        }
        this.postOption = {
            method: "post",
            headers: { 
                'Content-Type': 'application/json'
            }
        }
    }

    

    async callList(position) {
        const response = await fetch(this.baseURL+"/tigers/player/list?position="+position??"",{
            ...this.getOption            
        })
        return await response.json();
    }

    async callDetail(position,pcode) {
        const response = await fetch(this.baseURL+"/tigers/player/detail?position="+position+"&pcode="+pcode??"",{
            ...this.getOption            
        })
        //console.log(response);
        return await response.json();
    }

    async callRecord(position,pcode){
        //console.log("positionapi: ", position);
        if(position=="pitcher"){
            const response = await fetch(this.baseURL+"/tigers/record/pitching?position="+position+"&pcode="+pcode??"",{
                ...this.getOption            
            })
            //console.log(response);
            return await response.json();
        }else{
            const response = await fetch(this.baseURL+"/tigers/record/hitting?position="+position+"&pcode="+pcode??"",{
                ...this.getOption            
            })
            //console.log(response);
            return await response.json();
        }       
    }
}