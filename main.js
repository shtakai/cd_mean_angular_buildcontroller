let myApp = angular.module('myApp',[]);

myApp.controller('foodsController', function(){
  console.log('load');
  this.favoriteFoods = [
    'Pizza',
    'BBQ',
  ];

  this.addFood = function(){
    let _food = this.favoriteFood;
    console.log(`new food: ${_food}`);
  }

});

