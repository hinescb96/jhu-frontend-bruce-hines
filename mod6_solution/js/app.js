(function() {
    'use-strict';

    // Create Angular Module and add LunchCheckController
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    // Inject $scope to protect against minification
    LunchCheckController.$inject = ['$scope'];

    // LunchCheckController Function
    function LunchCheckController ($scope) {
        // lunchItemsString is bound to the input text box
        $scope.lunchItemsString = "";

        // lunchItemsCheck() is bound to the button click event
        $scope.lunchItemsCheck = function() {

            // Parse the input field text via CSV rules
            var numberOfItems = parseLunchItems($scope.lunchItemsString);

            // Generate the message and the style class based off of the numberOfItems
            $scope.lunchStyleClass = generateLunchStyleClass(numberOfItems);
            $scope.lunchMessage = generateLunchMessage(numberOfItems);
        };
    };

    function parseLunchItems(itemsString) {
        // Split the input string via ','
        var items = itemsString.split(",");

        // Count the number of items after splitting the input String
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

        // Generate Message based on number of values
        if (numberOfItems <= 3 ){
            return "Enjoy!";
        } else {
            return "Too much!";
        }
    }

    function generateLunchStyleClass(numberOfItems){
        // Determine the style class to be used
        if (numberOfItems === 0){
            return "lunch-error";
        } else {
            return "lunch-success";
        }
    }
})();
