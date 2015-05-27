Center = function (data) {
    this.name = data.name;
    this.x = (180 + data.long) / 360;
    this.y = (90 - data.lat) / 180;
}

Center.prototype = {
    distSqr: function(x, y) {
        var dx = this.x - x,
            dy = this.y - y;
        return dx * dx + dy * dy;
    }
};
