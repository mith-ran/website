export let cart = JSON.parse(localStorage.getItem('cartt'));
if(!cart){
    cart=[{productname:"Black and Gray Athletic Cotton Socks - 6 Pairs",
        quantity:1,cart_id:1,cart_idd:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6"},{
           productname:"Intermediate Size Basketball",
           quantity:1,
           cart_id:1,
           cart_idd:"15b6fc6f-327a-4ec4-896f-486349e85a3d"
        }];
}

                     
export const remove_cart=(name1)=>{
   const name=name1;
   console.log(name)
   let new_cart=[];
    cart.forEach((product)=>{
        if(name!=product.productname){
            new_cart.push(product);
        }

    })
    console.log(cart);
    cart=new_cart;
    console.log(cart);
   save();
 
   

}

export const cart_num=()=>{
    
    let cartquantity =0;
               
    cart.forEach(function(item){
        cartquantity+=item.quantity;

    })
     save();
    return cartquantity;
}

export const cart_push=(product_name,id)=>{
    
    let matchingitem;
    cart.forEach(function(item){
        if (product_name==item.productname){
            console.log("match");
            item.quantity+=1;
            matchingitem=2;
        }
       
    });

        if (matchingitem!=2){

            cart.push({
                productname:product_name,
                quantity:1,
                cart_id:1,
                cart_idd:id
                
            });
        };
        console.log(product_name)
        save();
}


export function save(){
    localStorage.setItem('cartt',JSON.stringify(cart));
    
}