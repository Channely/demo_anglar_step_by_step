//驼峰式 定义一个Controller的函数(带有参数 这里的参数是传递进来的特定功能)
function ActivityCreateController($scope, $navigate){

    //绑定数据(对页面 赋值)
    $scope.button_name = 'This is activity create page'

    //绑定函数
    $scope.show_goods_sentence = function(){
        //绑定数据(对页面 赋值&取值)
        $scope.goods_sentence = "Price of "+$scope.goods_name+" is $"+$scope.goods_price+"."
    }

    //绑定函数
    $scope.save_goods_detail = function(){
        //调用controller外的函数 并传参
        save_a_goods_info_to_localstorage($scope.goods_name, $scope.goods_price)
        //调用controller内的函数
        $scope.go_front_page()
    }


    //绑定函数
    $scope.go_front_page = function(){
        //页面跳转function(向右滑动)
        $navigate.go('/', 'slide', 'right')
    }

}