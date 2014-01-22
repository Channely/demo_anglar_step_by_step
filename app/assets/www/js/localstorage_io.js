//蛇底式 定义一个普通的函数
function init_localstorage_goods_detail(){
    //定义一个数组格式的数据 数组内每个元素都是一个对象格式的数据
    var inner_data = [{name:'PC',price:'3600'},{name:'Mac',price:'3600'},{name:'Pad',price:'3600'},{name:'TV',price:'3600'},{name:'phone',price:'3600'},{name:'Player',price:'3600'}]

    //localstorage初始化 如果已存在 则自身值不变 如果未定义 则赋初始化的值 locaistorage存值 只能存字符串
    localStorage.goods_detail = localStorage.goods_detail || JSON.stringify(inner_data)

}

//蛇底式 定义一个普通的函数(带有参数 这里的参数是传递进来的普通数据)
function save_a_goods_info_to_localstorage(goods_name, goods_price){
    //定义两个变量
    var goods_detail_string, goods_detail_array

    //locaistorage取值 只能取出字符串,如:"123","{name:'web',age:100}"
    goods_detail_string = localStorage.getItem('goods_detail')

    //将字符串形式的数据转化成原有形式,如 "123"-->123
    goods_detail_array = JSON.parse(goods_detail_string)

    //向数组里添加元素 此处是一个对象格式的数据
    goods_detail_array.push({name:goods_name,price:goods_price})

    //将字原有形式的数据转化成符串形式,如 123-->"123"
    goods_detail_string = JSON.stringify(goods_detail_array)

    //locaistorage存值 只能存字符串
    localStorage.setItem('goods_detail', goods_detail_string)

}

//数据-->转化成string-->存入localstorage  取出localstorage-->转化为原有形式-->数据