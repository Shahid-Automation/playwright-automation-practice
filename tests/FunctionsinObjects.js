let car = {
    color : 'red',
    speed : 100,
    price :10000,
    
    purchase: function (price,tax){

        return price + tax;
    }

}
;

console.log(car.purchase(car.price, 200));



