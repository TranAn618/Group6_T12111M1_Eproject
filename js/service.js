var data = 
[
    {"id": "SD01", "name": "Dye Hair 01", "price": 100, "pic": "sd02.jpg", "description":"content.", "cat":"hairdye"},
    {"id": "SD03", "name": "Dye Hair 03", "price": 100, "pic": "sd03.jpg", "description":"content.", "cat":"hairdye"},
    {"id": "SD04", "name": "Dye Hair 04", "price": 100, "pic": "sd04.jpg", "description":"content.", "cat":"hairdye"},
    {"id": "SD05", "name": "Dye Hair 05", "price": 100, "pic": "sd05.jpg", "description":"content.", "cat":"hairdye"},
    {"id": "SD06", "name": "Dye Hair 06", "price": 100, "pic": "sd06.jpg", "description":"content.", "cat":"hairdye"},

    {"id": "SS01", "name": "Skin Care 01", "price": 100, "pic": "ss01.jpg", "description":"content.", "cat":"skincare"},
    {"id": "SS02", "name": "Skin Care 02", "price": 100, "pic": "ss02.jpg", "description":"content.", "cat":"skincare"},
    {"id": "SS03", "name": "Skin Care 03", "price": 100, "pic": "ss03.jpg", "description":"content.", "cat":"skincare"},
    {"id": "SS04", "name": "Skin Care 04", "price": 100, "pic": "ss04.jpg", "description":"content.", "cat":"skincare"},
    {"id": "SS05", "name": "Skin Care 05", "price": 100, "pic": "ss05.jpg", "description":"content.", "cat":"skincare"},
    {"id": "SS06", "name": "Skin Care 06", "price": 100, "pic": "ss06.jpg", "description":"content.", "cat":"skincare"},

    {"id": "SN01", "name": "Nails Art 01", "price": 100, "pic": "sn01.jpg", "description":"content.", "cat":"nailsart"},
    {"id": "SN02", "name": "Nails Art 02", "price": 100, "pic": "sn02.jpg", "description":"content.", "cat":"nailsart"},
    {"id": "SN03", "name": "Nails Art 03", "price": 100, "pic": "sn03.jpg", "description":"content.", "cat":"nailsart"},
    {"id": "SN04", "name": "Nails Art 04", "price": 100, "pic": "sn04.jpg", "description":"content.", "cat":"nailsart"},
    {"id": "SN05", "name": "Nails Art 05", "price": 100, "pic": "sn05.jpg", "description":"content.", "cat":"nailsart"},
    {"id": "SN06", "name": "Nails Art 06", "price": 100, "pic": "sn06.jpg", "description":"content.", "cat":"nailsart"},
    
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
                    <div class="card-footer">Price: ${v.price} <br></div>
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
$(".ck-service").click(function(){
    var category = $(".ck-service:checked").map(function(){return $(this).val()}).toArray().toString();
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
            </div>`;
    $("#productDetail").html(x);
}