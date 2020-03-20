module.export={
    generateRandomEmailAddress:function(){
        let emailAddress= "AutorameWork_"+ Math.random().toString().replace('0.','') + "@webdriveruni.com"
        return emailAddress;
    },
    generateRandomSring:function(){
        return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15);
    }
}