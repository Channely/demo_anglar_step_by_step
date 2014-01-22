function ActivityListController($scope, $navigate){

    $scope.devices = [{name:'Goods',price:'Price'}]


    $scope.go_next_page = function(){
        $navigate.go('/activity/create')
    }

}