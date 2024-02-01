exports.Home = class Home{

    constructor(page){
        this.page = page;
        
       }
       async gotoHomePage(){
        await this.page.goto('https://geekyants.com/');  
       }
       async waitforHomePage(){
        await this.page.waitForURL('https://geekyants.com/');
    }
       

}