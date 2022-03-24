var shoppingCart = (function() {
    // =============================
    // Private methods and propeties
    // =============================
    cart = [];
    
    // Constructor
    function product(name, price, count) {
      this.name = name;
      this.price = price;
      this.count = count;
    }
    
    // Save cart
    function saveCart() {
      sessionStorage.setProduct('shoppingCart', JSON.stringify(cart));
    }
    
      // Load cart
    function loadCart() {
      cart = JSON.parse(sessionStorage.getProduct('shoppingCart'));
    }
    if (sessionStorage.getProduct("shoppingCart") != null) {
      loadCart();
    }
    
  
    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};
    
    // Add to cart
    obj.addProductToCart = function(name, price, count) {
      for(var product in cart) {
        if(cart[product].name === name) {
          cart[product].count ++;
          saveCart();
          return;
        }
      }
      var product = new Product(name, price, count);
      cart.push(product);
      saveCart();
    }
    // Set count from product
    obj.setCountForProduct = function(name, count) {
      for(var i in cart) {
        if (cart[i].name === name) {
          cart[i].count = count;
          break;
        }
      }
    };
    // Remove product from cart
    obj.removeProductFromCart = function(name) {
        for(var product in cart) {
          if(cart[product].name === name) {
            cart[product].count --;
            if(cart[product].count === 0) {
              cart.splice(product, 1);
            }
            break;
          }
      }
      saveCart();
    }
  
    // Remove all products from cart
    obj.removeProductFromCartAll = function(name) {
      for(var product in cart) {
        if(cart[product].name === name) {
          cart.splice(product, 1);
          break;
        }
      }
      saveCart();
    }
  
    // Clear cart
    obj.clearCart = function() {
      cart = [];
      saveCart();
    }
  
    // Count cart 
    obj.totalCount = function() {
      var totalCount = 0;
      for(var product in cart) {
        totalCount += cart[product].count;
      }
      return totalCount;
    }
  
    // Total cart
    obj.totalCart = function() {
      var totalCart = 0;
      for(var product in cart) {
        totalCart += cart[product].price * cart[product].count;
      }
      return Number(totalCart.toFixed(2));
    }
  
    // List cart
    obj.listCart = function() {
      var cartCopy = [];
      for(i in cart) {
        product = cart[i];
        productCopy = {};
        for(p in product) {
          productCopy[p] = product[p];
  
        }
        productCopy.total = Number(product.price * product.count).toFixed(2);
        cartCopy.push(productCopy)
      }
      return cartCopy;
    }
  
    // cart : Array
    // Product : Object/Class
    // addProductToCart : Function
    // removeProductFromCart : Function
    // removeProductFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;
  })();
  
  
  // *****************************************
  // Triggers / Events
  // ***************************************** 
  // Add product
  $('.add-to-cart').click(function(event) {
    event.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    shoppingCart.addProductToCart(name, price, 1);
    displayCart();
  });
  
  // Clear products
  $('.clear-cart').click(function() {
    shoppingCart.clearCart();
    displayCart();
  });
  
  
  function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    for(var i in cartArray) {
      output += "<tr>"
        + "<td>" + cartArray[i].name + "</td>" 
        + "<td>(" + cartArray[i].price + ")</td>"
        + "<td><div class='input-group'><button class='minus-product input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
        + "<input type='number' class='product-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
        + "<button class='plus-product btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
        + "<td><button class='delete-product btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
        + " = " 
        + "<td>" + cartArray[i].total + "</td>" 
        +  "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
  }
  
  // Delete product button
  
  $('.show-cart').on("click", ".delete-product", function(event) {
    var name = $(this).data('name')
    shoppingCart.removeProductFromCartAll(name);
    displayCart();
  })
  
  
  // -1
  $('.show-cart').on("click", ".minus-product", function(event) {
    var name = $(this).data('name')
    shoppingCart.removeProductFromCart(name);
    displayCart();
  })
  // +1
  $('.show-cart').on("click", ".plus-product", function(event) {
    var name = $(this).data('name')
    shoppingCart.addProductToCart(name);
    displayCart();
  })
  
  // Product count input
  $('.show-cart').on("change", ".product-count", function(event) {
     var name = $(this).data('name');
     var count = Number($(this).val());
    shoppingCart.setCountForProduct(name, count);
    displayCart();
  });
  
  displayCart();