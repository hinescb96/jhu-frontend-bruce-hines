(function() {
    'use-strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    .filter('angularCurrency', AngularCurrencyFilter)

    ToBuyController.$inject = ['ShoppingListCheckOffService']
    function ToBuyController(ShoppingListCheckOffService){
        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();
        toBuy.purchase = function (itemIndex) {
            ShoppingListCheckOffService.purchase(itemIndex);
        }

        toBuy.empty = function () {
            if (toBuy.items.length === 0) {
                return true;
            } else {
                return false
            }
        }

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService', 'angularCurrencyFilter']
    function AlreadyBoughtController(ShoppingListCheckOffService, angularCurrencyFilter){
        var alreadyBought = this;
        alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

        alreadyBought.empty = function () {
            if (alreadyBought.items.length === 0) {
                return true;
            } else {
                return false;
            }
        }

        alreadyBought.getCurrency = function(value) {
            return angularCurrencyFilter(value)
        }
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyItems = [];
        var alreadyBoughtItems = [];

        toBuyItems = [
            { name: "Diet Coke", pricePerItem:2.5, quantity: 10 },
            { name: "Donuts", pricePerItem:2.5, quantity: 5 },
            { name: "Pizza", pricePerItem:2.5, quantity: 20 },
            { name: "Sushi", pricePerItem:2.5, quantity: 8 },
            { name: "Steak", pricePerItem:2.5, quantity: 15 }
        ];


        service.purchase = function (itemIndex) {
            boughtItem = toBuyItems.splice(itemIndex, 1)[0];
            console.log(boughtItem);
            alreadyBoughtItems.push(boughtItem);
        };

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getAlreadyBoughtItems = function() {
            return alreadyBoughtItems;
        };
    }

    function AngularCurrencyFilter() {
        return function (input) {
            input = input || "";
            input = "$$$" + input;
            return input;
        }
    }
})();