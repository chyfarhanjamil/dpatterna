import {
    Light,
    LightOnCommand,
    LightOffCommand,
    TurnLightRed,
    RedLightOn,
    BrightenUpRedLight,
    DimRedLight,
    Invoker,
    ICommand
} from "../../patterns/command/LightCommand";

let light = new Light;
let redLight = new TurnLightRed;
let turnOnRedLight: ICommand = new RedLightOn(redLight);
let turnOnLight: ICommand = new LightOnCommand(light);
let turnOffLight: ICommand = new LightOffCommand(light);
let remoteControl: Invoker = new Invoker;
let increaseRedLight: ICommand = new BrightenUpRedLight(redLight);
let decreaseRedLight: ICommand = new DimRedLight(redLight);


export function commandLight(command: ICommand): string {
    remoteControl.setCommand(command)
    return remoteControl.executeCommand()
}

export function setOrder(command: string): string {

    let result: string;
    let isRedLightOn  = false

    switch (command) {
        case "on":
            result = commandLight(turnOnLight)
            break;

        case "off":
            result = commandLight(turnOffLight)
            break

        case "increase":
            result= commandLight(increaseRedLight)
            break

        case "decrease":
            result = commandLight(decreaseRedLight)
            break

        case "red":
            isRedLightOn = true
            result= commandLight(turnOnRedLight)
            break
        default:

    }
    // @ts-ignore
    return result;

}