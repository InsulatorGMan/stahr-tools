// Developer Functions (to make sure the module is working)

exports.TestFunction = function() {

    return 'Module is working!';

};

exports.Version = function() {

    return '1.0.0';

};

exports.Author = function() {

    return 'Grant Stahr';

};

exports.StringTools = {

    ReverseString: function(str) {

        return str.split('').reverse().join('');

    },

    ToCaps: function(str) {
            
        return str.toUpperCase();
    
    },

    ToLower: function(str) {

        return str.toLowerCase();

    },

    ToCharArray: function(str) {

        return str.split('');

    }

}

exports.NumberTools = {

    Add: function(num1, num2) {

        return num1 + num2;

    },

    Subtract: function(num1, num2) {

        return num1 - num2;

    },

    Multiply: function(num1, num2) {

        return num1 * num2;

    },

    Divide: function(num1, num2) {

        return num1 / num2;

    },

    SquareRoot: function(num) {

        return Math.sqrt(num);

    },

    Power: function(num, power) {

        return Math.pow(num, power);

    }

}

exports.ArrayTools = {

    ReverseArray: function(arr) {

        return arr.reverse();

    },

    SortArray: function(arr) {

        return arr.sort();

    },

    ShuffleArray: function(arr) {

        return arr.sort(() => Math.random() - 0.5);

    },

    RemoveDuplicates: function(arr) {

        return arr.filter((item, index) => arr.indexOf(item) === index);

    },

    GetRandomItem: function(arr) {

        return arr[Math.floor(Math.random() * arr.length)];

    },

    GetRandomItems: function(arr, num) {

        let randomItems = [];

        for (let i = 0; i < num; i++) {

            randomItems.push(arr[Math.floor(Math.random() * arr.length)]);

        }

        return randomItems;

    }

}

// Path: index.js