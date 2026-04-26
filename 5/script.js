const canvas = document.getElementById('game');
const ctx = canvas.getContext("2d");

let box = 20;

let snake = [{ x: 200, y: 200 }];
let direction = "RIGHT";

let food = {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box
};

document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
    if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
    if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
}

function draw() {
    ctx.clearRect(0, 0, 400, 400);

    // draw snake
    snake.forEach((part, index) => {
        ctx.fillStyle = index === 0 ? "green" : "lightgreen";
        ctx.fillRect(part.x, part.y, box, box);
    });

    // draw food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    let headX = snake[0].x;
    let headY = snake[0].y;

    if (direction === "LEFT") headX -= box;
    if (direction === "UP") headY -= box;
    if (direction === "RIGHT") headX += box;
    if (direction === "DOWN") headY += box;

    // 💀 Game Over (inside function)
    if (
        headX < 0 || headY < 0 ||
        headX >= 400 || headY >= 400
    ) {
        clearInterval(game);
        alert("Game Over!");
        return;
    }

    let newHead = { x: headX, y: headY };

    // eat food
    if (headX === food.x && headY === food.y) {
        food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };
    } else {
        snake.pop();
    }

    snake.unshift(newHead);
}

let game = setInterval(draw, 150);