var data = 
[
     
    {"id": "PM01", "name": "Make-up Kit 01", "price": 100, "pic": "pm01.jpg", "description":"content.", "cat":"makeupkit"},
    {"id": "PM02", "name": "Make-up Kit 02", "price": 100, "pic": "pm02.jpg", "description":"content.", "cat":"makeupkit"},
    {"id": "PM03", "name": "Make-up Kit 03", "price": 100, "pic": "pm03.jpg", "description":"content.", "cat":"makeupkit"},
    {"id": "PM04", "name": "Make-up Kit 04", "price": 100, "pic": "pm04.jpg", "description":"content.", "cat":"makeupkit"},
    {"id": "PM05", "name": "Make-up Kit 05", "price": 100, "pic": "pm05.jpg", "description":"content.", "cat":"makeupkit"},
    {"id": "PM06", "name": "Make-up Kit 06", "price": 100, "pic": "pm06.jpg", "description":"content.", "cat":"makeupkit"},
    
    {"id": "PW01", "name": "Wedding Kit 01", "price": 100, "pic": "pw01.jpg", "description":"content.", "cat":"weddingkit"},
    {"id": "PW02", "name": "Wedding Kit 02", "price": 100, "pic": "pw02.jpg", "description":"content.", "cat":"weddingkit"},
    {"id": "PW03", "name": "Wedding Kit 03", "price": 100, "pic": "pw03.jpg", "description":"content.", "cat":"weddingkit"},
    {"id": "PW04", "name": "Wedding Kit 04", "price": 100, "pic": "pw04.jpg", "description":"content.", "cat":"weddingkit"},
    {"id": "PW05", "name": "Wedding Kit 05", "price": 100, "pic": "pw05.jpg", "description":"content.", "cat":"weddingkit"},
    {"id": "PW06", "name": "Wedding Kit 06", "price": 100, "pic": "pw06.jpg", "description":"content.", "cat":"weddingkit"},
    
    {"id": "PN01", "name": "Nails Paint 01", "price": 100, "pic": "pn01.jpg", "description":"content.", "cat":"nailspaint"},
    {"id": "PN02", "name": "Nails Paint 02", "price": 100, "pic": "pn02.jpg", "description":"content.", "cat":"nailspaint"},
    {"id": "PN03", "name": "Nails Paint 03", "price": 100, "pic": "pn03.jpg", "description":"content.", "cat":"nailspaint"},
    {"id": "PN04", "name": "Nails Paint 04", "price": 100, "pic": "pn04.jpg", "description":"content.", "cat":"nailspaint"},
    {"id": "PN05", "name": "Nails Paint 05", "price": 100, "pic": "pn05.jpg", "description":"content.", "cat":"nailspaint"},
    {"id": "PN06", "name": "Nails Paint 06", "price": 100, "pic": "pn06.jpg", "description":"content.", "cat":"nailspaint"},
    
    {"id": "PJ01", "name": "Jewellry 01", "price": 100, "pic": "pj01.jpg", "description":"content.", "cat":"jewellry"},
    {"id": "PJ02", "name": "Jewellry 02", "price": 100, "pic": "pj02.jpg", "description":"content.", "cat":"jewellry"},
    {"id": "PJ03", "name": "Jewellry 03", "price": 100, "pic": "pj03.jpg", "description":"content.", "cat":"jewellry"},
    {"id": "PJ04", "name": "Jewellry 04", "price": 100, "pic": "pj04.jpg", "description":"content.", "cat":"jewellry"},
    {"id": "PJ05", "name": "Jewellry 05", "price": 100, "pic": "pj05.jpg", "description":"content.", "cat":"jewellry"},
    {"id": "PJ06", "name": "Jewellry 06", "price": 100, "pic": "pj06.jpg", "description":"content.", "cat":"jewellry"}
]

//goi ham displayImages()
displayImages(data);

//hien thi san pham
function displayImages(items){
    var s = ``;

    $.each(items, function(k,v){
        s += `<div class="col-sm-4">
                <div class="card">
                    <div class="card-header">${v.name}</div>
                    <div class="card-body"><a href="product_${v.id}.html"><img src="../image/${v.pic}" alt="${v.name}"></a></div> 
                    <div class="card-footer">Price: ${v.price} <br>
                        <button>Add to cart </button></div>
                </div>
            </div>`;
    });

    $("#products").html(s);
}

//lap trinh su kien search
$("#formSearch").submit(function(e){
    e.preventDefault();

    var value = $("#search").val();
    var re = new RegExp(value, "ig");
    var subdata = data.filter(item => item.name.search(re) >= 0);
    displayImages(subdata);
})

//lap trinh su kien click chon loai san pham
$(".ck-product").click(function(){
    var category = $(".ck-product:checked").map(function(){return $(this).val()}).toArray().toString();
    var subdata = (category.length==0)?data : data.filter(item =>category.search(item.cat) >=0);
    displayImages(subdata);
})

//show detail san pham
function showProduct(pid){
    let products = data.filter(item => item.id == pid);
    let product = products[0];

    let x = `<div class="col-sm-6"><img src="../image/${product.pic}" alt="${product.name}" width="500px"></div>
            <div class="col-sm-6">
                <h1>Name: ${product.name}</h1>
                <h1>Price: ${product.price}</h1>
                <h2>Description: ${product.description}</h2>
                <button class="btn btn-primary">Add to cart</button>
            </div>`;
    $("#productDetail").html(x);
}