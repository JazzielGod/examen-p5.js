function drawClockBarcelona(x, y, hora, minuto, segundo, ciudad) {
    // Circulo
    puntoMedio(x, y);
    push();
    translate(x, y);
    drawNumbers();

    // Manecilla de las horas
    let anguloHora = map(hora % 12, 0, 12, 0, 360) - 90;
    drawHandBresenham(HOUR_HAND_LENGTH, anguloHora, HOUR_HAND_THICKNESS+2, "black");

    // Manecilla de los minutos
    let anguloMinuto = map(minuto, 0, 60, 0, 360) - 90;
    drawHandBresenham(MINUTE_HAND_LENGTH, anguloMinuto, MINUTE_HAND_THICKNESS+1.5, "black");

    // Manecilla de los segundos
    let anguloSegundo = map(segundo, 0, 60, 0, 360) - 90;
    drawHandBresenham(SECOND_HAND_LENGTH, anguloSegundo, SECOND_HAND_THICKNESS+1, "red");

    pop();

    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(ciudad, x, y + CLOCK_RADIUS + 25);
}

function drawHandBresenham(length, angle, thickness, color) {
    stroke(color);
    bresenham(0, 0, length * cos(angle), length * sin(angle), thickness);
}