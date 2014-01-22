function ActivityListController($scope, $navigate){

    $scope.devices = [{name:'PC',price:'3600'},{name:'Mac',price:'3600'},{name:'Pad',price:'3600'},{name:'TV',price:'3600'},{name:'phone',price:'3600'},{name:'Player',price:'3600'}]


    $scope.go_next_page = function(){
        $navigate.go('/activity/create')
    }

}