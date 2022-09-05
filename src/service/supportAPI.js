export class SupportAPI{
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

    async support(position) {
        const response = await fetch(this.baseURL+"/tigers/players?position="+position??"",{
            ...this.getOption            
        })
        console.log(response);
        return await response.json();
    }
}