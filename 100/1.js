var Solution = function(w) {
    this.w = w
    this.total = 0
    for (var v of w) {
        this.total += v
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    var randomProb = Math.random()
    var currentProb = 0
    for (var i = 0; i < this.w.length; i++) {
        var prob = currentProb + this.w[i] / this.total
        if (randomProb >= currentProb && randomProb < prob) {
            return i
        }
        currentProb = prob
    }
    return currentProb
};


var a = new Solution([1, 10, 20])


a.pickIndex()