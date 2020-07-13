$(function(){
       let obj=JSON.parse(localStorage["post_product"]);
       $("#title").text(obj.title);
       $("#photo").attr("src",obj.photo);
       $("#img1").attr("src",obj.photo);
       $("#img2").attr("src",obj.photo_1);
       $("#img3").attr("src",obj.photo_2);
       $("#cost").text(obj.cost);
       $("#spesifications").html(obj.spesifications);
     })

     $(function(){
        $("#img1").click(function(){
           let a = $(this).attr("src");
            $("#photo").attr("src",a);
        });
        $("#img2").click(function(){
         
         let a = $(this).attr("src");
          $("#photo").attr("src",a);
      });
      $("#img3").click(function(){
         
         let a = $(this).attr("src");
          $("#photo").attr("src",a);
      })
    })

    document.addEventListener("DOMContentLoaded", function () {
        let productmanager={
            getall: function(){
                return mixed;
            }
        }

if (!("count" in localStorage)) {
            localStorage.count = 0;
        } else {
            document.getElementById("basket-count").innerHTML = localStorage.count;
        }
        let Products = productmanager.getall();
        for (let product of Products) {
            let Productsdiv = productmaker.productscontainer(product);
            document.getElementById("products_div").appendChild(Productsdiv);
        }
    })
