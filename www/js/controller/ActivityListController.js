function ActivityListController($scope, $navigate){

    $scope.name = 'Goods'
    $scope.price = 'Price'

    $scope.go_next_page = function(){
        $navigate.go('/activity/create')
    }

}