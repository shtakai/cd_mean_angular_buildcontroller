let myApp = angular.module('myApp',[]);

myApp.controller('foodsController', function(){
  console.log('load');
  let _favoriteFoods = [
    'Pizza',
    'BBQ',
  ];
  this.favoriteFoods = _favoriteFoods;
  this.addFood = function(){
    let _food = this.favoriteFood;
    console.log(`new food: ${_food}`);
    _food = _food || '';
    if(_food.trim() === ''){
      return;
    }
    _favoriteFoods.unshift(_food);
    this.favoriteFood = '';
  }
  this.find = function(){
   //if(typeof(this.findText)==='undefined'){
     //this.findText = '';
   //}
    this.findText = this.findText || '';
     console.log(`find clicked: ${this.findText}`);
     let _text = this.findText;
     this.favoriteFoods = _.filter(_favoriteFoods,function(food){
       return food.indexOf(_text) != -1
     })

  }

});

