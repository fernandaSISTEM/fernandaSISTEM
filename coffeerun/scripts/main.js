(function(window){
    'use strict';

    let FORM_SELECTOR = '[data-coffee-order="form"]';
    let App = window.App;let Truck = App.Truck;
    let DataStore = App.DataStore;
    let FormHandler = App.FormHandler;
    let myTruck = new Truck('mi6', new DataStore());
    window.myTruck = myTruck;
    let formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    console.log(formHandler);

})(window);