interface LightState {
    switchState(lightSwith: LightSwitch): void;
}

class OnState implements LightState {
    switchState(lightSwith: LightSwitch): void {
        console.log('Light State in On. Turning Off ');
        lightSwith.setState(new OffState());
    }

}

class OffState implements LightState {
    switchState(lightSwith: LightSwitch): void {
        console.log('Light State in Off. Turning On ');
        lightSwith.setState(new OnState());
    }

}

class LightSwitch {
    constructor(private state: LightState) { }

    public setState(state: LightState) {
        this.state = state;
    }

    press(): void {
        this.state.switchState(this)
    }
}

//Client code 
// const lightSwitch = new LightSwitch(new OffState())
// lightSwitch.press();
// lightSwitch.press();

/**
 * Real World implementation
 */

interface Tool {
    onMouseDown(): void;
    onMouseUp(): void;
}

class SelectionTool implements Tool {
    public onMouseDown(): void {
        console.log(`Selection started`);
    }
    public onMouseUp(): void {
        console.log(`Selection drawn`);
    }
}

class BrushTool implements Tool {
    public onMouseDown(): void {
        console.log(`Brush stroke started`);
    }
    public onMouseUp(): void {
        console.log(`Brush stroke drawn`);
    }
}

class EraserTool implements Tool {
    public onMouseDown(): void {
        console.log(`Eraser started`);
    }
    public onMouseUp(): void {
        console.log(`Erased`);
    }
}


class Canvas {
    constructor(private tool: Tool) { }

    public setTool(tool: Tool) {
        this.tool = tool;
    }

    public onMouseDown(): void {
        this.tool.onMouseDown()
    }

    public onMouseUp(): void {
        this.tool.onMouseUp()
    }
}

//Client code 
const canvas = new Canvas(new SelectionTool())
canvas.onMouseDown()
canvas.onMouseUp()

canvas.setTool(new BrushTool())
canvas.onMouseDown()
canvas.onMouseUp()

canvas.setTool(new EraserTool())
canvas.onMouseDown()
canvas.onMouseUp()