import {commandLight} from "../pages/hello-command/CommandList"
import {Invoker,Light,LightOnCommand,LightOffCommand, RedLightOn, TurnLightRed} from "../patterns/command/LightCommand"

const remoteController = new Invoker();
describe("Light Command Pattern", () => {
    test("Light on",()=>{
        let expected = commandLight(new LightOnCommand(new Light()))
        remoteController.setCommand(new LightOnCommand(new Light))
        let received=remoteController.executeCommand()
        expect(expected).toEqual(received)
    });
    test("Light off",()=>{
        let expected = commandLight(new LightOffCommand(new Light()))
        remoteController.setCommand(new LightOffCommand(new Light()))
        let received=remoteController.executeCommand()
        expect(expected).toEqual(received)
    });
    
    test("Red Light On",()=>{
        let expected = commandLight(new RedLightOn(new TurnLightRed()))
        remoteController.setCommand(new LightOffCommand(new Light()))
        let received=remoteController.executeCommand()
        expect(expected).toEqual(received)
    });

})