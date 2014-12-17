
// Enemies our player must avoid
var Enemy = function(yloc) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 100;
    this.y = yloc;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    xmove = dt * 100 * this.speed;
    this.x = this.x + xmove;
    if (this.x > 700) {
        this.x = -100;
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

var SlowEnemy = function (yloc) {
    Enemy.call(this, yloc);
};
SlowEnemy.prototype = Object.create(Enemy.prototype);
SlowEnemy.prototype.constructor = SlowEnemy;
SlowEnemy.prototype.speed = 1;

var MedEnemy = function (yloc) {
    Enemy.call(this, yloc);
};
MedEnemy.prototype = Object.create(Enemy.prototype);
MedEnemy.prototype.constructor = MedEnemy;
MedEnemy.prototype.speed = 2;

var FastEnemy = function(yloc) {
    Enemy.call(this, yloc);
};
FastEnemy.prototype = Object.create(Enemy.prototype);
FastEnemy.prototype.constructor = FastEnemy;
FastEnemy.prototype.speed = 3;




// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
    this.sprite = 'images/char-boy.png';
    console.log('TEST1');
    this.x = 200;
    this.y = 380;
}
Player.prototype.update = function() {
}
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    
}
Player.prototype.handleInput = function(key) { 
      console.log(key);
      this.render();
    switch(key) {
        case 'left':
            this.x = this.x - 101;
            if (this.x < -2) {
                this.x = -2;
            }
            break;
        case 'up':
            this.y = this.y - 83;
            if (this.y < -35){
                this.y = -35;
            }
            break;
        case 'right':
            this.x = this.x + 101;
            if (this.x > 404) {
                this.x = 404;
            }
           break;
        case 'down':
            this.y = this.y + 83;
            if (this.y > 380) {
                this.y = 380;
            }
        default:
            break;
    }
}

 
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var topFast1 = new FastEnemy (50);
var midFast1 = new FastEnemy (133);
var botFast1 = new FastEnemy (216);

var allEnemies = [topFast1, midFast1, botFast1];
console.log(allEnemies);
var player = new Player();
console.log(player);
//player.render();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
