let Productdata={
    getall: function(){
        if(localStorage.products==null || localStorage.products==undefined){
            return `empty`;
        }else
            return JSON.parse(localStorage.products);
    },

    ifhaveid: function(id){
         products=JSON.parse(localStorage.products);
         if("length" in products){
                for(f of products){
                    if(f.id==id){
                        return true;
                       
                    }
                    
                }
         }
         else{
             if(products.id==id){
                 return true;
             }
             else{
                 return false;
             }

         }    
    },
    GetProductById: function(id){
        products=JSON.parse(localStorage.products);
         if("length" in products){
                for(f of products){
                    if(f.id==id){
                        return f;
                       
                    }
                    
                }
                return null;
         }
         else{
             if(products.id==id){
                 return products;
             }
             else{
                 return null;
             }

         }    
    },
    getcount: function(){
        
            if(localStorage.products!=null){
               let  products=JSON.parse(localStorage.products);
              if("length" in products ){
                  let count=0;
                  for(let f of products){
                      count+=f.count;
                  }
                  return count;
                  
              }
              else{
                  return 1; 
              }
            }
            else{
                return 0;
            }
    },


addproduct: function(oneofproduct){
    if(oneofproduct!=null && oneofproduct!=undefined){
        if(localStorage.products==null || localStorage.products==undefined){
                localStorage.products=JSON.stringify(oneofproduct);
                

        }
    
        else{
           let  pds=JSON.parse(localStorage.products);
            
            if("length" in pds){
                if(this.ifhaveid(oneofproduct.id)){
                for(let a of pds){
                    if(a.id==oneofproduct.id){
                        a.count++;
                       
                    }
                }
                localStorage.products=JSON.stringify(pds);
                }
                else{
                pds.push(oneofproduct);
                localStorage.products=JSON.stringify(pds);
            }
            }
            else{
                if(this.ifhaveid(oneofproduct.id)){
                    pds.count++;
                    localStorage.products=JSON.stringify(pds);
                }
                else{

               
                let aray=[];
                aray.push(pds);
                aray.push(oneofproduct);
                localStorage.products=JSON.stringify(aray);
            }
            }

        }
    }

},
removeproduct: function(oneofproduct){
    if(oneofproduct!=null && oneofproduct!=undefined){
        if(localStorage.products==null || localStorage.products==undefined){
                localStorage.products=JSON.stringify(oneofproduct);
                

        }
    
        else{
           let  pds=JSON.parse(localStorage.products);
            
            if("length" in pds){
                if(this.ifhaveid(oneofproduct.id)){
                for(let a of pds){
                    if(a.id==oneofproduct.id){
                        a.count--;
                        break;
                       
                    }
                }
                localStorage.products=JSON.stringify(pds);
                }
               
            }
            else{
                if(this.ifhaveid(oneofproduct.id)){
                    pds.count--;
                    if(pds.count==0){
                        localStorage.products=JSON.stringify([]);
                    }
                    localStorage.products=JSON.stringify(pds);
                }
               
            }

        }
    }

}
}
