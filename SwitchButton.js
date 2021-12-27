class SwitchButton{
    _status;
    _lamp;
    constructor(status,lamp) {
        this._status = false;
        this._lamp = lamp;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get lamp() {
        return this._lamp;
    }

    set lamp(value) {
        this._lamp = value;
    }
    switchOn(){
        if (this.lamp === undefined){
            console.log("Connect to lamp");
        }else {
            this.status = true;
            this.lamp.turnOn();
        }
    }
    switchOff(){
        if (this.lamp === undefined){
            console.log("Connect to lamp")
        }else {
            this.status = false;
            this.lamp.turnOff();
        }
    }
    connectToLamp(lamp){
        this.lamp=lamp;
    }
}
