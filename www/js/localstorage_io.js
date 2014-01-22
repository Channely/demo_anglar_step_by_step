function save_a_goods_info_to_localstorage(goods_name, goods_price){
    var goods_detail_string, goods_detail_array

    goods_detail_string = localStorage.getItem('goods_detail')||'[]'

    goods_detail_array = JSON.parse(goods_detail_string)

    goods_detail_array.push({name:goods_name,price:goods_price})

    goods_detail_string = JSON.stringify(goods_detail_array)

    localStorage.setItem('goods_detail', goods_detail_string)

}