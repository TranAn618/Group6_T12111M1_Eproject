var data = 
[
     
    {"id": "PM01", "name": "Make-up Kit 01", "price": 100, "pic": "pm01.jpg", "description":"Waiting for content!", "cat":"makeupkit"},
    {"id": "PM02", "name": "Make-up Kit 02", "price": 100, "pic": "pm02.jpg", "description":"“Logic is the beginning of wisdom, not the end.” – Spock", "cat":"makeupkit"},
    {"id": "PM03", "name": "Make-up Kit 03", "price": 100, "pic": "pm03.jpg", "description":"Waiting for content!", "cat":"makeupkit"},
    {"id": "PM04", "name": "Make-up Kit 04", "price": 100, "pic": "pm04.jpg", "description":"Waiting for content!", "cat":"makeupkit"},
    {"id": "PM05", "name": "Make-up Kit 05", "price": 100, "pic": "pm05.jpg", "description":"Waiting for content!", "cat":"makeupkit"},
    {"id": "PM06", "name": "Make-up Kit 06", "price": 100, "pic": "pm06.jpg", "description":"“Highly illogical.” – Spock", "cat":"makeupkit"},
    
    {"id": "PW01", "name": "Wedding Kit 01", "price": 100, "pic": "pw01.jpg", "description":"“Compassion: that’s the one things no machine ever had. Maybe it’s the one thing that keeps men ahead of them.” – Dr. McCoy", "cat":"weddingkit"},
    {"id": "PW02", "name": "Wedding Kit 02", "price": 100, "pic": "pw02.jpg", "description":"Waiting for content!", "cat":"weddingkit"},
    {"id": "PW03", "name": "Wedding Kit 03", "price": 100, "pic": "pw03.jpg", "description":"Waiting for content!", "cat":"weddingkit"},
    {"id": "PW04", "name": "Wedding Kit 04", "price": 100, "pic": "pw04.jpg", "description":"“One man cannot summon the future.” – Spock", "cat":"weddingkit"},
    {"id": "PW05", "name": "Wedding Kit 05", "price": 100, "pic": "pw05.jpg", "description":"Waiting for content!", "cat":"weddingkit"},
    {"id": "PW06", "name": "Wedding Kit 06", "price": 100, "pic": "pw06.jpg", "description":"Waiting for content!", "cat":"weddingkit"},
    
    {"id": "PN01", "name": "Nails Paint 01", "price": 100, "pic": "pn01.jpg", "description":"Waiting for content!", "cat":"nailspaint"},
    {"id": "PN02", "name": "Nails Paint 02", "price": 100, "pic": "pn02.jpg", "description":"“I canna’ change the laws of physics.” – Montgomery “Scotty” Scott", "cat":"nailspaint"},
    {"id": "PN03", "name": "Nails Paint 03", "price": 100, "pic": "pn03.jpg", "description":"Waiting for content!", "cat":"nailspaint"},
    {"id": "PN04", "name": "Nails Paint 04", "price": 100, "pic": "pn04.jpg", "description":"“There is a way out of every box, a solution to every puzzle; it’s just a matter of finding it.” – Captain Jean-Luc Picard", "cat":"nailspaint"},
    {"id": "PN05", "name": "Nails Paint 05", "price": 100, "pic": "pn05.jpg", "description":"Waiting for content!", "cat":"nailspaint"},
    {"id": "PN06", "name": "Nails Paint 06", "price": 100, "pic": "pn06.jpg", "description":"“We prefer to help ourselves. We make mistakes, but we’re human–and maybe that’s the word that best explains us.” – Captain James T. Kirk", "cat":"nailspaint"},
    
    {"id": "PJ01", "name": "Jewellry 01", "price": 100, "pic": "pj01.jpg", "description":"“To boldly go where no man has gone before.” – Captain James T. Kirk", "cat":"jewellry"},
    {"id": "PJ02", "name": "Jewellry 02", "price": 100, "pic": "pj02.jpg", "description":"Waiting for content!", "cat":"jewellry"},
    {"id": "PJ03", "name": "Jewellry 03", "price": 100, "pic": "pj03.jpg", "description":"“One man cannot summon the future.” – Spock", "cat":"jewellry"},
    {"id": "PJ04", "name": "Jewellry 04", "price": 100, "pic": "pj04.jpg", "description":"“But one man can change the present!”–Kirk", "cat":"jewellry"},
    {"id": "PJ05", "name": "Jewellry 05", "price": 100, "pic": "pj05.jpg", "description":"Waiting for content!", "cat":"jewellry"},
    {"id": "PJ06", "name": "Jewellry 06", "price": 100, "pic": "pj06.jpg", "description":"Waiting for content!", "cat":"jewellry"}
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

    let x = `<div class="col-sm-6"><img src="../image/${product.pic}" alt="${product.name}" width="400px"></div>
            <div class="col-sm-6">
                <h1>Name: ${product.name}</h1>
                <h2>Price: ${product.price}</h2>
                <h3>Description: ${product.description}</h3>
                <button class="btn btn-primary">Add to cart</button>
            </div>`;
    $("#productDetail").html(x);
}