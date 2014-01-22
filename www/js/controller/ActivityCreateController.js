function ActivityCreateController($scope, $navigate){
    $scope.button_name = 'This is activity create page'


    $scope.show_goods_sentence = function(){
        $scope.goods_sentence = "Price of "+$scope.goods_name+" is $"+$scope.goods_price+"."
    }

    $scope.save_goods_detail = function(){
        save_a_goods_info_to_localstorage($scope.goods_name, $scope.goods_price)
        $scope.go_front_page()
    }

    $scope.go_front_page = function(){
        $navigate.go('/', 'slide', 'right')
    }
}