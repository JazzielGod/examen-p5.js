function bresenham(x1, y1, x2, y2, thickness) {
    let dx = Math.abs(x2 - x1);
    let dy = Math.abs(y2 - y1);
    let sx = (x1 < x2) ? 1 : -1;
    let sy = (y1 < y2) ? 1 : -1;
    let err = dx - dy;

    strokeWeight(thickness);

    while (Math.round(x1) !== Math.round(x2) || Math.round(y1) !== Math.round(y2)) {
        point(x1, y1);
        let e2 = 2 * err;
        if (e2 > -dy) {
            err -= dy;
            x1 += sx;
        }
        if (e2 < dx) {
            err += dx;
            y1 += sy;
        }
    }
}