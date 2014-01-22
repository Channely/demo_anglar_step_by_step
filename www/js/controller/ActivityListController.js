function ActivityListController($scope, $navigate){

    $scope.device = {name:'Goods',price:'Price'}


    $scope.go_next_page = function(){
        $navigate.go('/activity/create')
    }

}