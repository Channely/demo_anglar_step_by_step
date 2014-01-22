//驼峰式 定义一个Controller的函数(带有参数 这里的参数是传递进来的特定功能)
function ActivityListController($scope, $navigate){

    //从localstorage取值 --> 转化成原始格式 --> 将数据绑定到页面
    $scope.devices = JSON.parse(localStorage.goods_detail||'[]').reverse()


    //绑定函数
    $scope.go_next_page = function(){
        //页面跳转(默认:向左滑动)
        $navigate.go('/activity/create')
    }

}