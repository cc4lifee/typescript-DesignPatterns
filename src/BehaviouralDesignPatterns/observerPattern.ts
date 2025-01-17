interface Observer {
    update(subject: Subject): void
}

class ConcreteObserver implements Observer {
    constructor(private id: number) { }

    public update(subject: Subject): void {
        console.log(`Observer ${this.id} updated, new state: ${subject.getState()}`);
    }

}

interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
    getState(): number;
    setState(state: number): void
}

class ConcreteSubject implements Subject {
    private observers: Observer[] = [];
    private state: number = 0;

    public addObserver(observer: Observer): void {
        const itExists = this.observers.includes(observer); //if exists then true
        if (itExists) {
            return console.log(`Observer already exists`);
        }

        this.observers.push(observer);
        console.log(`Observer added successfully`);
    }

    public removeObserver(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);

        if (observerIndex === -1) {
            return console.log(`Observer does not exists`);
        }

        this.observers.splice(observerIndex, 1);
        console.log(`Observer was successfully removed`);
    }

    public notifyObservers(): void {
        this.observers.forEach(observer => observer.update(this))
    }

    public getState(): number {
        return this.state;
    }

    public setState(state: number): void {
        this.state = state;
        console.log(`Setting State...`);
        this.notifyObservers()
    }
}

// Client code

// const subject = new ConcreteSubject()
// const observer1 = new ConcreteObserver(1);
// subject.addObserver(observer1)

// const observer2 = new ConcreteObserver(2);
// subject.addObserver(observer2)

// subject.setState(123)


/**
 * Real world implementation 
 * 
 */

interface WeatherObserver {
    update(temperature: number, humidity: number, pressure: number): void
}

interface WeatherSubject {
    registerObserver(observer: WeatherObserver): void
    removeObserver(observer: WeatherObserver): void
    notifyObservers(): void
}

class WeatherData implements WeatherSubject {
    private observers: WeatherObserver[] = [];
    private temperature: number | undefined;
    private humidity: number | undefined;
    private pressure: number | undefined;

    public registerObserver(observer: WeatherObserver): void {
        this.observers.push(observer)
    }

    public removeObserver(observer: WeatherObserver): void {
        const index = this.observers.indexOf(observer)

        if (index >= 0) {
            this.observers.splice(index, 1)
        }
    }

    public notifyObservers(): void {
        if (this.temperature !== undefined && this.humidity !== undefined && this.pressure !== undefined) {

            for (let observer of this.observers) {
                observer.update(this.temperature, this.humidity, this.pressure)
            }
        }
    }

    public setMeasurements(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.notifyObservers()
    }
}

class CurrentConditionDisplay implements WeatherObserver {
    private temperature: number | undefined;
    private humidity: number | undefined;
    private pressure: number | undefined;

    constructor(private weatherData: WeatherSubject) {
        this.weatherData.registerObserver(this)
    }

    public update(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display()
    }

    public display(): void {
        if (this.temperature !== undefined && this.humidity !== undefined && this.pressure !== undefined) {
            console.log(`Temperature: ${this.temperature}, Humidity: ${this.humidity}, Pressure: ${this.pressure}`);
        }
    }
}

//Client Code

const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionDisplay(weatherData);

//Simulate new weather adjustments

weatherData.setMeasurements(80, 65, 30.4)







