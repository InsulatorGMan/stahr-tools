# Stahr Tools

## New to 1.4.1 (2022-10-20)
```diff
+ Added: `WaitAsync` function
- Removed: Testing functions
= Github Repo listed at the bottom of the README
```


This is a collection of functions that I use in my projects. I have been using them for a while and I decided to put them in a separate package.
I hope you find them useful.

## Array Functions

### `ArrayTools.GetRandomItem(array)`
Returns a random item from the array.

### `ArrayTools.GetRandomItems(array, count)`

Returns an array of random items from the array. The number of items returned is determined by the `count` parameter.

### `ArrayTools.ReverseArray(array)`

Reverses the order of the items in the array.

### `ArrayTools.ShuffleArray(array)`

Shuffles the items in the array.

### `ArrayTools.SortArray(array)`

Sorts the items in the array.

## Number Functions

### `NumberTools.Add(number, number)`

Adds two numbers.

### `NumberTools.Subtract(number, number)`

Subtracts two numbers.

### `NumberTools.Multiply(number, number)`

Multiplies two numbers.

### `NumberTools.Divide(number, number)`

Divides two numbers.

### `NumberTools.SquareRoot(number)`

Returns the square root of a number.

### `NumberTools.Power(number, number)`

Returns the result of raising a number to a power.

### And many more... (see the source code)

# Installation

## NPM

```bash
npm install stahr-tools
```

## Source Code

* Download the source code
* Copy the `stahr-tools` folder to your project
* Import the functions you need

# Usage

## Importing

```javascript

// Import all functions

const st = require('stahr-tools');

// Import specific functions

const { GetRandomItem, GetRandomItems } = require('stahr-tools');

```

# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
