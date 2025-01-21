abstract class CakeRecipe {

    public bakeCake(): void {
        this.preHeatOven();
        this.mixIngredients();
        this.bake();
        this.coolingDown();
        this.decorate();
    }

    protected preHeatOven(): void {
        console.log(`Preheating oven to 175 C`);
    }

    protected bake(): void {
        console.log(`Baking cake...`);
    }

    protected coolingDown(): void {
        console.log(`Cooling down the cake`);
    }

    protected decorate(): void {
        console.log(`Decorating cake...`);
    }

    protected abstract mixIngredients(): void;
}

class ChocolateCake extends CakeRecipe {
    protected mixIngredients(): void {
        console.log(`Mixing chocolate, sugar, butter, flour, eggs`);
    }

    // This cake requires special decoration
    protected decorate(): void {
        console.log("Adding chocolate icing for decoration.");
    }
}


class VanillaCake extends CakeRecipe {
    protected mixIngredients(): void {
        console.log(`Mixing vanilla extract, sugar, butter, flour, eggs`);
    }

    // This cake does not require special decoration,
    // so we do not override the decorate method
}

//Client code

function bakeCake(cake: CakeRecipe) {
    cake.bakeCake()
}


// console.log(`Baking chocolate cake`);
// bakeCake(new ChocolateCake())

// console.log('======================');
// console.log(`Baking Vanilla cake`);
// bakeCake(new VanillaCake())




/**
 * Real world 
 * 
 */

abstract class DataParser {
    public parseData(): void {
        this.loadData();
        const data = 'Sample data'
        const parsedData = this.parse(data);
        this.validate(parsedData);
        this.useData(parsedData);
    }

    protected loadData(): void {
        console.log("Loading data (could be from a file, database, etc.)");
    }

    protected validate(data: any): void {
        console.log("Validating the parsed data...");
    }

    protected useData(data: any): void {
        console.log("Using the parsed data (could be displaying, storing, etc.)");
    }

    protected abstract parse(data: string): any;

}

class JsonParser extends DataParser {
    protected parse(data: string) {
        console.log(`Parsing data as JSON`);
        return data;
    }
}

class XMLParser extends DataParser {
    protected parse(data: string) {
        console.log(`Parsing data as XML`);
        return data;
    }
}

function dataParser(dataParser:DataParser){
    dataParser.parseData()
}

console.log('Parsing JSON Data');
dataParser(new JsonParser())


console.log('Parsing XML Data');
dataParser(new XMLParser())