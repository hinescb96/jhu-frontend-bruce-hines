(function() {
    'use-strict';

    angular.module('LunchCheck', [])

    .controller('LunchCheckController', function ($scope) {
        $scope.lunchItemsString = "";
        $scope.lunchItemsCheck = function() {
            var numberOfItems = parseLunchItems($scope.lunchItemsString);
            $scope.lunchMessage = generateLunchMessage(numberOfItems);
        };
    });

    function parseLunchItems(itemsString) {
        var items = itemsString.split(",");

        var counter = 0;

        for (var i = 0; i < items.length; i++){
            if (items[i].trim().length > 0){
                counter++;
            } 
        }
        return counter;
    }

    function generateLunchMessage(numberOfItems){
        // Handle case where no data is entered
        if (numberOfItems === 0){
            return "Please enter data first";
        }

        if (numberOfItems <= 3 ){
            return "Enjoy!";
        } else {
            return "Too much!";
        }
    }
})();