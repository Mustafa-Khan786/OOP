import inquirer from "inquirer"
import chalk from "chalk"

class Player {
    name :string
    fuel:number = 100
    constructor(name:string) {
        this.name = name
        
    }
    fullDecrease(){
        let fuel  = this.fuel - 25
        this.fuel = fuel
    }
    fuelincrease(){
        this.fuel = 100
    }
}


class Opponent {
    name :string
    fuel:number = 100
    constructor(name:string) {
        this.name = name
        
    }
    fullDecrease(){
        let fuel  = this.fuel - 25
        this.fuel = fuel
    }
    fuelincrease(){
        this.fuel = 100
    }
}


let player = await inquirer.prompt({
name:"name",
type:"input",
message:"what is your name"

})
console.log(player)

let opponent = await inquirer.prompt([{
    message: 'Select your opponent',
    type: "list",
    choices: ["Dragon","Zombie","Shadow","Skeleton"],
     name: "select"

}])
console.log(opponent.select)

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)
console.log(`${chalk.greenBright.bold(p1.name)} Vs ${chalk.redBright.bold(o1.name)}`)

do
{
if (opponent.select == "Dragon"){
let ask = await inquirer.prompt([
{
name:"options",
type:"list",
message:"Select",
choices:["Attack","Drink portion","Run for your life"]


}])
if (ask.options == "Attack") {
    let num = Math.floor(Math.random() * 2 )
    if (num > 0 ){
        p1.fullDecrease()
        console.log(chalk.bold.red(`${p1.name} Fuel  is ${p1.fuel} `))
        console.log(chalk.bold.green(`${o1.name} Fuel  is ${o1.fuel} `))
        if (p1.fuel <= 0) {
            console.log(chalk.yellow.bold.italic("Better luck next time"))
        }
    }

    if (num <= 0 ) {
        o1.fullDecrease()
        console.log(chalk.bold.green(`${o1.name} Fuel  is ${o1.fuel} `))
        console.log(chalk.bold.red(`${p1.name} Fuel  is ${p1.fuel} `))
        if (o1.fuel <= 0) {
            console.log(chalk.greenBright.bold.italic("You win "))
            process.exit();
        }
    }
}

if (ask.options == "Drink portion") {
    p1.fuelincrease()
    console.log(chalk.green .bold(`Your health is recharge`))

} 
if (ask.options == "Run for your life") {
    console.log(chalk.red.bold.italic("better luck next time"))
    process.exit()
} 
}

if (opponent.select == "Skeleton"){
    let ask = await inquirer.prompt([
    {
    name:"options",
    type:"list",
    message:"Select",
    choices:["Attack","Drink portion","Run for your life"]
    
    
    }])
    if (ask.options == "Attack") {
        let num = Math.floor(Math.random() * 2 )
        if (num > 0 ){
            p1.fullDecrease()
            console.log(chalk.bold.red(`${p1.name} Fuel  is ${p1.fuel} `))
            console.log(chalk.bold.green(`${o1.name} Fuel  is ${o1.fuel} `))
            if (p1.fuel <= 0) {
                console.log(chalk.yellow.bold.italic("Better luck next time"))
            }
          
        }
    
        if (num <= 0 ) {
            o1.fullDecrease()
            console.log(chalk.bold.green(`${o1.name} Fuel  is ${o1.fuel} `))
            console.log(chalk.bold.red(`${p1.name} Fuel  is ${p1.fuel} `))
            if (o1.fuel <= 0) {
                console.log(chalk.greenBright.bold.italic("You win "))
                process.exit();
            }
        }
    }
    
    if (ask.options == "Drink portion") {
        p1.fuelincrease()
        console.log(chalk.green .bold(`Your health is recharge`))
    } 
    if (ask.options == "Run for your life") {
        console.log(chalk.red.bold.italic("better luck next time"))
        process.exit()
    } 
    }
    
if (opponent.select == "Shadow"){
        let ask = await inquirer.prompt([
        {
        name:"options",
        type:"list",
        message:"Select",
        choices:["Attack","Drink portion","Run for your life"]
        
        
        }])
        if (ask.options == "Attack") {
            let num = Math.floor(Math.random() * 2 )
            if (num > 0 ){
                p1.fullDecrease()
                console.log(chalk.bold.red(`${p1.name} Fuel  is ${p1.fuel} `))
                console.log(chalk.bold.green(`${o1.name} Fuel  is ${o1.fuel} `))
                if (p1.fuel <= 0) {
                    console.log(chalk.yellow.bold.italic("Better luck next time"))
                }
               
            }
        
            if (num <= 0 ) {
                o1.fullDecrease()
                console.log(chalk.bold.green(`${o1.name} Fuel  is ${o1.fuel} `))
                console.log(chalk.bold.red(`${p1.name} Fuel  is ${p1.fuel} `))
                if (o1.fuel <= 0) {
                    console.log(chalk.greenBright.bold.italic("You win "))
                    process.exit();
                }
            }
        }
        
        if (ask.options == "Drink portion") {
            p1.fuelincrease()
            console.log(chalk.green .bold(`Your health is recharge`))
        } 
        if (ask.options == "Run for your life") {
            console.log(chalk.red.bold.italic("better luck next time"))
            process.exit()
        } 
        }

if (opponent.select == "Zombie"){
            let ask = await inquirer.prompt([
            {
            name:"options",
            type:"list",
            message:"Select",
            choices:["Attack","Drink portion","Run for your life"]
            
            
            }])
            if (ask.options == "Attack") {
                let num = Math.floor(Math.random() * 2 )
                if (num > 0 ){
                    p1.fullDecrease()
                    console.log(chalk.bold.red(`${p1.name} Fuel  is ${p1.fuel} `))
                    console.log(chalk.bold.green(`${o1.name} Fuel  is ${o1.fuel} `))
                    if (p1.fuel <= 0) {
                        console.log(chalk.yellow.bold.italic("Better luck next time"))
                    }
              
                }
            
                if (num <= 0 ) {
                    o1.fullDecrease()
                    console.log(chalk.bold.green(`${o1.name} Fuel  is ${o1.fuel} `))
                    console.log(chalk.bold.red(`${p1.name} Fuel  is ${p1.fuel} `))
                    if (o1.fuel <= 0) {
                        console.log(chalk.greenBright.bold.italic("You win "))
                        process.exit();
                    }
                }
            }
            
            if (ask.options == "Drink portion") {
                p1.fuelincrease()
                console.log(chalk.green .bold(`Your health is recharge`))
            } 
            if (ask.options == "Run for your life") {
                console.log(chalk.red.bold.italic("better luck next time"))
                process.exit()
            } 
            }       
}

while(true)
