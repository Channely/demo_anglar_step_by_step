function init_localstorage_goods_detail(){

    var inner_data = [{name:'PC',price:'3600'},{name:'Mac',price:'3600'},{name:'Pad',price:'3600'},{name:'TV',price:'3600'},{name:'phone',price:'3600'},{name:'Player',price:'3600'}]
    localStorage.goods_detail = localStorage.goods_detail || JSON.stringify(inner_data)
}

function save_a_goods_info_to_localstorage(goods_name, goods_price){
    var goods_detail_string, goods_detail_array

    goods_detail_string = localStorage.getItem('goods_detail')||'[]'

    goods_detail_array = JSON.parse(goods_detail_string)

    goods_detail_array.push({name:goods_name,price:goods_price})

    goods_detail_string = JSON.stringify(goods_detail_array)

    localStorage.setItem('goods_detail', goods_detail_string)

}