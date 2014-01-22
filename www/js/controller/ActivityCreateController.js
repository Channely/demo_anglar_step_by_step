function ActivityCreateController($scope, $navigate){
    $scope.button_name = 'This is activity create page'


    $scope.save_goods_detail = function(){
        save_a_goods_info_to_localstorage($scope.goods_name, $scope.goods_price)
        $scope.go_front_page()
    }

    $scope.go_front_page = function(){
        $navigate.go('/', 'slide', 'right')
    }
}