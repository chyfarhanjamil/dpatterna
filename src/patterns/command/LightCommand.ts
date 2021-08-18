//An Interface for command
export interface ICommand {
    execute(): string
}

//Light class and its corresponding receiver classes
var lightIsOn=false
export class Light {

    public on(): string {
        lightIsOn=true
        return 'on'
    }

    public off(): string {
        lightIsOn=false
        return 'off'
    }
}
var value:number=0

export class TurnLightRed {

    public on(): string {
        if(lightIsOn)
            return `red${value}`
        else return "off"
    }

    public off(): string {
        return "off"
    }

    public increaseRedValue(): string {
        //There are 3 different intensity level and red light's intensity varies only if the light is already turned on
        if(value<3 && lightIsOn)
        {
            value++;
            return `red${value}`
        }
        //limit for intensity
        else if(value==3) return `red${3}`
        else return "off"
    }

    public decreaseRedValue(): string {
        
        if(value>0 && lightIsOn)
        {
            value--;
            return `red${value}`
        }
        else if(value==0 && lightIsOn) return `red${0}`
        else return "off"
    }
}

//Correspomding command classes
export class LightOnCommand implements ICommand {

    light: Light

    constructor(_light: Light) {
        this.light = _light;
    }

    execute(): string {
        return this.light.on();
    }


}

export class LightOffCommand implements ICommand {
    light: Light

    constructor(_light: Light) {
        this.light = _light
    }

    execute(): string {
        return this.light.off()
    }

}


export class RedLightOn implements ICommand {
    light: TurnLightRed;

    constructor(light: TurnLightRed) {
        this.light = light;
    }

    execute(): string {
        return this.light.on()
    }

}

export class RedLightOff implements ICommand {
    light: TurnLightRed;

    constructor(light: TurnLightRed) {
        this.light = light;
    }

    execute(): string {
        return this.light.off()
    }

}

export class BrightenUpRedLight implements ICommand {
    light: TurnLightRed;

    constructor(light: TurnLightRed) {
        this.light = light;
    }

    execute(): string {
        return this.light.increaseRedValue()
    }

}

export class DimRedLight implements ICommand {
    light: TurnLightRed;

    constructor(light: TurnLightRed) {
        this.light = light;
    }

    execute(): string {
        return this.light.decreaseRedValue()
    }

}


export class Invoker {
    command!: ICommand;

    constructor() {
    }

    setCommand(command: ICommand) {
        this.command = command;
    }

    executeCommand() {
        return this.command.execute()
    }
}


