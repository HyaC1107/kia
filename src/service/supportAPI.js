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

    async read() {
        const response = await fetch(this.baseURL+"/tigers/support",{
            ...this.getOption            
        })
        return await response.json();
    }

    async create(comments) {
        const response = await fetch(this.baseURL+"/tigers/support",{
            ...this.postOption,            
            body: JSON.stringify({comments})
        })
        return await response.json();
    }
}