class Cat {
    constructor (name){
        this.name = name;
        this.tiredness = 10;
        this.hunger = 10;
        this.loneliness = 10;
        this.happiness = 10;
    }

    feed (amount){
        this.hunger -= amount; 
    }
    
    sleep (amount){
        this.tiredness -= amount;
    }
    
    pet (amount){
        if (Math.random() < 0.5) {
            this.happiness += amount;
            this.loneliness -= amount;
          } else {
            this.loneliness += amount;
          }
        }

    statusCat() {
        console.log(`Your kitty ${this.name} have next status:`);
        console.log(`Tiredness: ${this.tiredness}`);
        console.log(`Hunger: ${this.hunger}`);
        console.log(`Loneliness: ${this.loneliness}`);
        console.log(`Happiness: ${this.happiness}`);
        }
}

nerdo = new Cat(prompt("What´s your cat´s name: "));
  
nerdo.feed(Math.round(Math.random()*10));
nerdo.sleep(Math.round(Math.random()*10));
nerdo.pet(Math.round(Math.random()*10));
nerdo.statusCat();
