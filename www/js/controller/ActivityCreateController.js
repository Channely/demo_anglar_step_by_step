function ActivityCreateController($scope, $navigate){
    $scope.button_name = 'This is activity create page'

    $scope.go_front_page = function(){
        $navigate.go('/', 'slide', 'right')
    }
}