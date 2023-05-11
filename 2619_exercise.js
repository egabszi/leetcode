Array.prototype.last = function() {
    return this.length ? console.log(this[this.length - 1]) : console.log(-1);
  };

Array.prototype.last([1,2,3,4])