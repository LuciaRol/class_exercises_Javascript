class Cat {
    constructor (name){
        this.name = name;
        this.tiredness = 10;
        this.hunger = 10;
        this.lonliness = 10;
        this.happiness = 10;
    }

    feed (amount = 1){
        this.hunger -= amount; 
    }
    
    sleep (amount = 1){
        this.tiredness -= amount;
    }
    
    pet (amount = 1){
        if (Math.random() < 0.5) {
            this.happiness += amount;
            this.loneliness -= amount;
          } else {
            this.loneliness += amount;
          }
        }

    statusCat() {
        console.log(`${this.name} have next status:`);
        console.log(`Tiredness: ${this.tiredness}`);
        console.log(`Hunger: ${this.hunger}`);
        console.log(`Loneliness: ${this.loneliness}`);
        console.log(`Happiness: ${this.happiness}`);
        }
}

nerdo = new Cat("Nerdodivergente");
  
nerdo.feed(2);
nerdo.sleep(1);
nerdo.pet(5);
nerdo.statusCat();
