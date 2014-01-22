function ActivityListController($scope, $navigate){

    $scope.go_next_page = function(){
        $navigate.go('/activity/create')
    }

}