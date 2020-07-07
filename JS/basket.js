document.addEventListener("DOMContentLoaded",function(){
   
    let products=Productdata.getall();
    if(products==`empty`){
        document.getElementById("basket").innerHTML=`<strong class="aler">Now, Basket is empty</strong>`;
    }
    else{
        productmaker.dobasket("basket",products);
    }
    
    
})