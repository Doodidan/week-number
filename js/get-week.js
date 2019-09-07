Date.prototype.getWeek = function() {
    const firstDay = new Date(this.getFullYear(), 0, 1, 0, 0, 0);
    return Math.ceil((((this - firstDay) / 86400000) + firstDay.getDay() + 1) / 7);
}
