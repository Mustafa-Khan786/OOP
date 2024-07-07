"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var Player = /** @class */ (function () {
    function Player(name) {
        this.fuel = 100;
        this.name = name;
    }
    Player.prototype.fullDecrease = function () {
        var fuel = this.fuel - 25;
        this.fuel = fuel;
    };
    Player.prototype.fuelincrease = function () {
        this.fuel = 100;
    };
    return Player;
}());
var Opponent = /** @class */ (function () {
    function Opponent(name) {
        this.fuel = 100;
        this.name = name;
    }
    Opponent.prototype.fullDecrease = function () {
        var fuel = this.fuel - 25;
        this.fuel = fuel;
    };
    Opponent.prototype.fuelincrease = function () {
        this.fuel = 100;
    };
    return Opponent;
}());
var player = await inquirer_1.default.prompt({
    name: "name",
    type: "input",
    message: "what is your name"
});
console.log(player);
var opponent = await inquirer_1.default.prompt([{
        message: 'Select your opponent',
        type: "list",
        choices: ["Dragon", "Zombie", "Shadow", "Skeleton"],
        name: "select"
    }]);
console.log(opponent.select);
var p1 = new Player(player.name);
var o1 = new Opponent(opponent.select);
console.log("".concat(chalk_1.default.greenBright.bold(p1.name), " Vs ").concat(chalk_1.default.redBright.bold(o1.name)));
do {
    if (opponent.select == "Dragon") {
        var ask = await inquirer_1.default.prompt([
            {
                name: "options",
                type: "list",
                message: "Select",
                choices: ["Attack", "Drink portion", "Run for your life"]
            }
        ]);
        if (ask.options == "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fullDecrease();
                console.log(chalk_1.default.bold.red("".concat(p1.name, " Fuel  is ").concat(p1.fuel, " ")));
                console.log(chalk_1.default.bold.green("".concat(o1.name, " Fuel  is ").concat(o1.fuel, " ")));
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.yellow.bold.italic("Better luck next time"));
                }
            }
            if (num <= 0) {
                o1.fullDecrease();
                console.log(chalk_1.default.bold.green("".concat(o1.name, " Fuel  is ").concat(o1.fuel, " ")));
                console.log(chalk_1.default.bold.red("".concat(p1.name, " Fuel  is ").concat(p1.fuel, " ")));
                if (o1.fuel <= 0) {
                    console.log(chalk_1.default.greenBright.bold.italic("You win "));
                    process.exit();
                }
            }
        }
        if (ask.options == "Drink portion") {
            p1.fuelincrease();
            console.log(chalk_1.default.green.bold("Your health is recharge"));
        }
        if (ask.options == "Run for your life") {
            console.log(chalk_1.default.red.bold.italic("better luck next time"));
            process.exit();
        }
    }
    if (opponent.select == "Skeleton") {
        var ask = await inquirer_1.default.prompt([
            {
                name: "options",
                type: "list",
                message: "Select",
                choices: ["Attack", "Drink portion", "Run for your life"]
            }
        ]);
        if (ask.options == "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fullDecrease();
                console.log(chalk_1.default.bold.red("".concat(p1.name, " Fuel  is ").concat(p1.fuel, " ")));
                console.log(chalk_1.default.bold.green("".concat(o1.name, " Fuel  is ").concat(o1.fuel, " ")));
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.yellow.bold.italic("Better luck next time"));
                }
            }
            if (num <= 0) {
                o1.fullDecrease();
                console.log(chalk_1.default.bold.green("".concat(o1.name, " Fuel  is ").concat(o1.fuel, " ")));
                console.log(chalk_1.default.bold.red("".concat(p1.name, " Fuel  is ").concat(p1.fuel, " ")));
                if (o1.fuel <= 0) {
                    console.log(chalk_1.default.greenBright.bold.italic("You win "));
                    process.exit();
                }
            }
        }
        if (ask.options == "Drink portion") {
            p1.fuelincrease();
            console.log(chalk_1.default.green.bold("Your health is recharge"));
        }
        if (ask.options == "Run for your life") {
            console.log(chalk_1.default.red.bold.italic("better luck next time"));
            process.exit();
        }
    }
    if (opponent.select == "Shadow") {
        var ask = await inquirer_1.default.prompt([
            {
                name: "options",
                type: "list",
                message: "Select",
                choices: ["Attack", "Drink portion", "Run for your life"]
            }
        ]);
        if (ask.options == "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fullDecrease();
                console.log(chalk_1.default.bold.red("".concat(p1.name, " Fuel  is ").concat(p1.fuel, " ")));
                console.log(chalk_1.default.bold.green("".concat(o1.name, " Fuel  is ").concat(o1.fuel, " ")));
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.yellow.bold.italic("Better luck next time"));
                }
            }
            if (num <= 0) {
                o1.fullDecrease();
                console.log(chalk_1.default.bold.green("".concat(o1.name, " Fuel  is ").concat(o1.fuel, " ")));
                console.log(chalk_1.default.bold.red("".concat(p1.name, " Fuel  is ").concat(p1.fuel, " ")));
                if (o1.fuel <= 0) {
                    console.log(chalk_1.default.greenBright.bold.italic("You win "));
                    process.exit();
                }
            }
        }
        if (ask.options == "Drink portion") {
            p1.fuelincrease();
            console.log(chalk_1.default.green.bold("Your health is recharge"));
        }
        if (ask.options == "Run for your life") {
            console.log(chalk_1.default.red.bold.italic("better luck next time"));
            process.exit();
        }
    }
    if (opponent.select == "Zombie") {
        var ask = await inquirer_1.default.prompt([
            {
                name: "options",
                type: "list",
                message: "Select",
                choices: ["Attack", "Drink portion", "Run for your life"]
            }
        ]);
        if (ask.options == "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fullDecrease();
                console.log(chalk_1.default.bold.red("".concat(p1.name, " Fuel  is ").concat(p1.fuel, " ")));
                console.log(chalk_1.default.bold.green("".concat(o1.name, " Fuel  is ").concat(o1.fuel, " ")));
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.yellow.bold.italic("Better luck next time"));
                }
            }
            if (num <= 0) {
                o1.fullDecrease();
                console.log(chalk_1.default.bold.green("".concat(o1.name, " Fuel  is ").concat(o1.fuel, " ")));
                console.log(chalk_1.default.bold.red("".concat(p1.name, " Fuel  is ").concat(p1.fuel, " ")));
                if (o1.fuel <= 0) {
                    console.log(chalk_1.default.greenBright.bold.italic("You win "));
                    process.exit();
                }
            }
        }
        if (ask.options == "Drink portion") {
            p1.fuelincrease();
            console.log(chalk_1.default.green.bold("Your health is recharge"));
        }
        if (ask.options == "Run for your life") {
            console.log(chalk_1.default.red.bold.italic("better luck next time"));
            process.exit();
        }
    }
} while (true);

