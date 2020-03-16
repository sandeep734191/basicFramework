(function (global) {

    var greet = function (name, age) {
        return new greetObj(name, age);
    }

    var greetObj = function(name, age) {
        this.name = name;
        this.age = age;
        //return this;
    }



    greetObj.prototype.check = function () {
        if (this.age > 18) {
            console.log('eligible');
        }
    }

    global.greet = greet;

})(window);