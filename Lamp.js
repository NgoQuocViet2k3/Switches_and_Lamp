class Lamp{
    status;
    constructor(status) {
        this.status=false;
    }
    getStatus(){
        return this.status;
    }
    setStatus(status){
        this.status=status;
    }
    turnOn(){
        this.status=true;
        console.log("Bóng đèn sáng");
    }
    turnOff(){
        this.status=false;
        console.log(("Bóng đèn tối"));
    }
}