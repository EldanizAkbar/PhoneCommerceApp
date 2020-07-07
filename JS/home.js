
//Pagination...

let allproducts = {
    getPaginatableItems: function (page, count) {
        let itemsperpage = 8;
        this._totalpages = Math.ceil(count / itemsperpage);
        let from = (page - 1) * itemsperpage;
        return T.slice(from, from + itemsperpage);
        
    }

}
let Pagination = {
    _itemsperpage: 8,
    _currentpage: 1,
    _totalItems: 0,
    _totalpages: 0,
    ctor: function (totalcount) {
        this._totalItems = totalcount;
        this._totalpages = Math.ceil(this._totalItems / this._itemsperpage)
    },
    renderpaginationOn: function (paginationId) {
        for (let i = 1; i <= this._totalpages; i++) {
            let link = document.createElement("a");
            link.innerText=i;
            $("#pages a:first").addClass("active");
            link.addEventListener("click", function () {
                $("#pages a").removeClass("active");
                $(this).addClass("active");
                let Products = allproducts.getPaginatableItems(i, products.length);
                document.getElementById("product_div").innerHTML="";
                for (let product of Products) {
                    let Productsdiv = productmaker.productcontainer(product);
                    document.getElementById("product_div").appendChild(Productsdiv);
                }

            });
            document.getElementById(paginationId).appendChild(link);
        }       

    }
}



document.addEventListener("DOMContentLoaded", function () {
    $("#Xiaomi").click(function(){
        $("#product_div").remove();
        let nar = document.createElement("div");
        nar.className="row mx-auto";
        nar.id="product_div";
        document.getElementById("cod").appendChild(nar);

        $("#product_pagination").remove();
        let armud = document.createElement("div");
        armud.className="row my-auto mx-auto text-center";
        armud.id="product_pagination";

        let alma =document.createElement("div");
        alma.className="mx-auto mb-5 mt-3";
        alma.id="pages";
        
        armud.appendChild(alma);
        document.getElementById("cod").appendChild(armud);

        $("#phone_brand").text("Xiaomi Phones");
        change_xiaomi();
        if (!("count" in localStorage)) {
            localStorage.count = 0;
        } else {
            document.getElementById("basket-count").innerHTML = localStorage.count;
        }
        let Products = allproducts.getPaginatableItems(1, products.length);
        for (let product of Products) {
            let Productsdiv = productmaker.productcontainer(product);
            document.getElementById("product_div").appendChild(Productsdiv);
        }
        Pagination.ctor(products.length);
        Pagination.renderpaginationOn("pages");

      
    })
    $("#Samsung").click(function(){
        $("#product_div").remove();
        let nar = document.createElement("div");
        nar.className="row mx-auto";
        nar.id="product_div";
        document.getElementById("cod").appendChild(nar);

        $("#product_pagination").remove();
        let armud = document.createElement("div");
        armud.className="row my-auto mx-auto text-center";
        armud.id="product_pagination";

        let alma =document.createElement("div");
        alma.className="mx-auto mb-5 mt-3";
        alma.id="pages";
        
        armud.appendChild(alma);
        document.getElementById("cod").appendChild(armud);


        $("#phone_brand").text("Samsung Phones");
        change_samsung();
        if (!("count" in localStorage)) {
            localStorage.count = 0;
        } else {
            document.getElementById("basket-count").innerHTML = localStorage.count;
        }
        let Products = allproducts.getPaginatableItems(1, products.length);
        for (let product of Products) {
            let Productsdiv = productmaker.productcontainer(product);
            document.getElementById("product_div").appendChild(Productsdiv);
        }
    
        Pagination.ctor(products.length);
        Pagination.renderpaginationOn("pages");


    })
    $("#IPhone").click(function(){
        $("#product_div").remove();
        let nar = document.createElement("div");
        nar.className="row mx-auto";
        nar.id="product_div";
        document.getElementById("cod").appendChild(nar);

        $("#product_pagination").remove();
        let armud = document.createElement("div");
        armud.className="row my-auto mx-auto text-center";
        armud.id="product_pagination";

        let alma =document.createElement("div");
        alma.className="mx-auto mb-5 mt-3";
        alma.id="pages";
        
        armud.appendChild(alma);
        document.getElementById("cod").appendChild(armud);


        $("#phone_brand").text("iPhone Phones");
        change_iPhone();
        if (!("count" in localStorage)) {
            localStorage.count = 0;
        } else {
            document.getElementById("basket-count").innerHTML = localStorage.count;
        }
        let Products = allproducts.getPaginatableItems(1, products.length);
        for (let product of Products) {
            let Productsdiv = productmaker.productcontainer(product);
            document.getElementById("product_div").appendChild(Productsdiv);
        }
    
        Pagination.ctor(products.length);
        Pagination.renderpaginationOn("pages");
        

    })

  
})

//Post Product page...
