exports.WaitAsync = async function(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
}

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

    },

    RandomInteger: function(min, max) {

        return Math.floor(min, max) * 10

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

exports.ShapeTools = {

    Prism : function (height, width, length) {

      return height * width * length;

    },
    Cylinder:  function (radius, height) {

      return Math.PI * Math.pow(radius, 2) * height;

    },
    Sphere : function (radius) {

      return (4 / 3) * Math.PI * Math.pow(radius, 3);
      
    },
    Cone : function (radius, height) {

      return (1 / 3) * Math.PI * Math.pow(radius, 2) * height;

    },
}


// Path: index.js
