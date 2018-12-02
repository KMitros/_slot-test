let PIXI = require("pixi.js");
let pS = require('pixi-sound')
let app = new PIXI.Application(1440,240,{
    transparent: true
});

const sound = PIXI.sound.Sound.from('Button_Click.wav');


document.querySelector('#menu').appendChild(app.view);

//create containers

let container = new PIXI.Container();
let bets = new PIXI.Container();
let coins = new PIXI.Container();





let background = PIXI.Sprite.fromImage('img/bg_copy.png');





// create some textures from an image path
let textureButton = PIXI.Texture.fromImage('img/butt-i-n.png');
let textureButtonDown = PIXI.Texture.fromImage('img/butt-i-down.png');
let textureButtonOver = PIXI.Texture.fromImage('img/butt-i-hover.png');

let textureButtonPlus = PIXI.Texture.fromImage('img/butt-plus.png');
let textureButtonPlusDown = PIXI.Texture.fromImage('img/butt-plus-down.png');
let textureButtonPlusOver = PIXI.Texture.fromImage('img/butt-plus-hover.png');

let textureBet =  PIXI.Texture.fromImage('img/bet_field.png');

let textureCoin = PIXI.Texture.fromImage('img/coin_bg.png');


let buttons = [];



let button = new PIXI.Sprite(textureButton);
let buttonPlus = new PIXI.Sprite(textureButtonPlus);
let buttonMinus = new PIXI.Sprite(textureButtonPlus);
let betbg = new PIXI.Sprite(textureBet);
let coinbg = new PIXI.Sprite(textureCoin);



buttonPlus.down = textureButtonPlusDown;
buttonPlus.over = textureButtonPlusOver;
buttonPlus.normal = textureButtonPlus;

buttonMinus.down = textureButtonPlusDown;
buttonMinus.over = textureButtonPlusOver;
buttonMinus.normal = textureButtonPlus;

button.down = textureButtonDown;
button.over = textureButtonOver;
button.normal = textureButton;



function constr(butt){

    butt.buttonMode = true;

    butt.anchor.set(0.5);


    // make the button interactive...
    butt.interactive = true;
    butt.buttonMode = true;

    butt
    // Mouse & touch events are normalized into
    // the pointer* events for handling different
    // button events.
        .on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);

    // Use mouse-only events
    // .on('mousedown', onButtonDown)
    // .on('mouseup', onButtonUp)
    // .on('mouseupoutside', onButtonUp)
    // .on('mouseover', onButtonOver)
    // .on('mouseout', onButtonOut)

    // Use touch-only events
    // .on('touchstart', onButtonDown)
    // .on('touchend', onButtonUp)
    // .on('touchendoutside', onButtonUp)

    // add it to the stage
    app.stage.addChild(butt);

    // add button to array
    buttons.push(butt);
}

function constrToggle(butt){

    butt.buttonMode = true;

    butt.anchor.set(0.5);


    // make the button interactive...
    butt.interactive = true;
    butt.buttonMode = true;

    butt
    // Mouse & touch events are normalized into
    // the pointer* events for handling different
    // button events.
        .on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);

    // Use mouse-only events
    // .on('mousedown', onButtonDown)
    // .on('mouseup', onButtonUp)
    // .on('mouseupoutside', onButtonUp)
    // .on('mouseover', onButtonOver)
    // .on('mouseout', onButtonOut)

    // Use touch-only events
    // .on('touchstart', onButtonDown)
    // .on('touchend', onButtonUp)
    // .on('touchendoutside', onButtonUp)

    // add it to the stage
    app.stage.addChild(butt);

    // add button to array
    buttons.push(butt);
}


function onButtonDown() {


    this.isdown = true;
    this.texture = this.down;
    this.alpha = 1;
    sound.play();
}

function onButtonUp() {
    this.isdown = false;
    if (this.isOver) {
        this.texture = this.over;
    }
    else {
        this.texture = this.normal;
    }
}

function onButtonOver() {
    this.isOver = true;
    if (this.isdown) {
        return;
    }
    this.texture = this.over;
}

function onButtonOut() {
    this.isOver = false;
    if (this.isdown) {
        return;
    }
    this.texture = this.normal;
}



constr(button);
constr(buttonPlus);
constr(buttonMinus);

buttons[0].x = 185;
buttons[0].y = 115;

buttons[1].x = 55;
buttons[1].y = 55;

buttons[2].x = 345;
buttons[2].y = 55;



coins.addChild(coinbg);
coins.x = 665;
coins.y = 60;

bets.addChild(betbg,buttonPlus,buttonMinus);
bets.scale.x = bets.scale.y = (1);
bets.anchor = (.5);
bets.x = 250;
bets.y = 60;


app.stage.addChild(container);
container.addChild(background,button, bets,coins );
container.scale.x = container.scale.y = .5;
container.y = 40;