let productmaker={
    dobasket: function(on, products){
        if("length" in products){
            for(let f of products){
                this.renderproduct(on, f);
            }
        }
        else{
            this.renderproduct(on,products);
        }

    },
    renderproduct: function (on, product) {
        let rounded=Math.round(Math.random()*1000);
        let div = document.createElement("div");
        div.className = "basket-item col-md-12 mt-3 border py-2";
        let _id="basket-item-"+rounded;
        div.id=_id;
        let name_container=document.createElement("div");
        name_container.className="d-inline-block divs";
        div.appendChild(name_container);

        let minusSpan = document.createElement("button");
        minusSpan.className = "symbol px-2 pb-1";
        minusSpan.innerText = "-";
     
        minusSpan.addEventListener("click",function(){
            cost.innerText = parseInt(cost.innerText)-product.price;
            a=document.getElementById("total_counter").innerText
            document.getElementById("total_counter").innerText= parseInt(a)-parseInt(product.price);
            let ct=parseInt(document.getElementById(`counter_${rounded}`).innerText);
            ct--;
            document.getElementById( `counter_${rounded}`).innerText=ct;
            if(ct==0){
               
                document.getElementById(on).removeChild(document.getElementById(_id));
               
            }
            
            let originalProduct =  Productdata.GetProductById(product.id);
           if(originalProduct!=null){
               if(originalProduct.count>=1){
                originalProduct.count--;
                Productdata.removeproduct(originalProduct);
               }
           }


        })
        name_container.appendChild(minusSpan);

        
        let productname = document.createElement("strong");
        productname.className = "data";
        productname.innerText = product.name;
        name_container.appendChild(productname);




        let plusSpan = document.createElement("button");
        plusSpan.className = "symbol ml-3 float-right px-2 pb-1";
        plusSpan.innerText = "+";
        name_container.appendChild(plusSpan);
        plusSpan.addEventListener("click",function(){
            cost.innerText = parseInt(cost.innerText)+product.price;
            a=document.getElementById("total_counter").innerText
            document.getElementById("total_counter").innerText= parseInt(a)+parseInt(product.price);
            let ct=parseInt(document.getElementById( `counter_${rounded}`).innerText);
            ct++;
            document.getElementById( `counter_${rounded}`).innerText=ct;
           let originalProduct =  Productdata.GetProductById(product.id);
           if(originalProduct!=null){
           originalProduct.count++;
           Productdata.addproduct(originalProduct);
           }


        });
        let count_container=document.createElement("div");
        count_container.className="d-inline-block div"
        div.appendChild(count_container);
       
        let Counter = document.createElement("span");
        Counter.className = "counter text-left";
        Counter.id = `counter_${rounded}`;
        Counter.innerText = product.count;
        count_container.appendChild(Counter);
        let a =parseInt(Counter.innerText);
        if(a==0){
            let obj=JSON.parse(localStorage["products"]);
           for(let f of obj){
               if(product.id==f.id){
                obj.splice(obj.indexOf(f));
               }
           } 
           localStorage["products"] = JSON.stringify(obj);
           
        }
        let c = parseInt(Productdata.getcount());
        if(c==0){ 
            document.getElementById("basket").innerHTML=`<strong class="aler">Now, Basket is empty</strong>`;
            document.getElementById(on).removeChild(document.getElementById(_id));
        }
        let currency =document.createElement("span");
        currency.className="text-right currency"
        currency.innerText="$";
        count_container.appendChild(currency);

        let cost = document.createElement("span");
        cost.className = "cost text-right";
        cost.id = `cost_${rounded}`;
        cost.innerText = product.price*Counter.innerText;
        count_container.appendChild(cost);

       
        a=document.getElementById("total_counter").innerText
        document.getElementById("total_counter").innerText= parseInt(a)+parseInt(cost.innerText);
        document.getElementById(on).appendChild(div); 


    },

    productcontainer: function(product){
        let box=document.createElement("div");
        box.className="col-lg-3 col-md-4 col-sm-6 col-8 border  text-center product_container mb-5 ml-auto mx-auto ";
        let rund=Math.round(Math.random()*1000);
        let qutu=`qutu_${rund}`;
        box.id=qutu;

        let picture=document.createElement("img");
        picture.src="../images/"+product.photo;
        picture.className="mt-3"
        picture.style.width="165px";
        picture.style.height="200px"
        box.appendChild(picture);

        let productName=document.createElement("p");
        productName.innerHTML=`<strong>${product.name}</strong>`;
        productName.className="text-center mt-3 main_ad";
        box.appendChild(productName);

        let product_cost=document.createElement("b");
        product_cost.innerHTML=` <i>${product.price}</i> ${product.currency}`;
        product_cost.className="d-block"
        box.appendChild(product_cost);
        let buy_link=document.createElement("a");
        buy_link.href="pages/post_product.html";
        buy_link.className="link ";
        buy_link.target="blank"; 
        $(function () {
            $(buy_link).click(function () {
               let a = $(this).siblings(".main_ad").text();
               for (let f of products) {
                  if (f.name == a) {
                     let obj = {
                        title: f.name,
                        photo: "../images/"+f.photo,
                        photo_1: "../images/"+f.photo_1,
                        photo_2: "../images/"+f.photo_2,
                        cost: f.price+f.currency,
                        spesifications: f.spesifications
                     }
                     localStorage["post_product"] = JSON.stringify(obj);
                  }
               }
            })
         });   
        box.appendChild(buy_link);

        let btn_buy=document.createElement("button");
        btn_buy.className="btn btn-success mt-3 mb-3 buy_btn col-lg-3";
        btn_buy.innerText="Buy";
        buy_link.appendChild(btn_buy);
        let span =document.createElement("span");
        span.className="span";
        span.innerText=" ";
        box.appendChild(span);

        let btn=document.createElement("button");
        btn.className="btn btn-outline-info mt-3 mb-3 basket_btn col-lg-8";
        btn.innerText="Add to Basket";
            let count = parseInt(Productdata.getcount());
            document.getElementById("basket-count").innerText=count;
            btn.addEventListener("click",function(){

            let oneofproduct=new ProductModel(product.id,product.name,1,product.price);
            Productdata.addproduct(oneofproduct);
            let count = parseInt(Productdata.getcount());
            document.getElementById("basket-count").innerText=count;
            localStorage.count=count;
            
        })
        box.appendChild(btn);
        return box;
        }
};