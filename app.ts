

class HelloWorldController{

    constructor(private $scope){

        $scope.prefixText = "Hello ";
        $scope.inputText = " ";
        $scope.displayText = "";
        $scope.onDisplay = () => {

            this.$scope.displayText = this.$scope.prefixText + this.$scope.inputText;
        };
    }
}