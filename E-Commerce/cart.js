export let cart = JSON.parse(localStorage.getItem('cartt'));
if(!cart){
    cart=[{productname:"Black and Gray Athletic Cotton Socks - 6 Pairs",
        quantity:1,cart_id:1},{
           productname:"Intermediate Size Basketball",
           quantity:1,
           cart_id:3
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

export const cart_push=(product_name)=>{
    
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
                cart_id:1
                
            });
        };
        console.log(product_name)
        save();
}


export function save(){
    localStorage.setItem('cartt',JSON.stringify(cart));
    
}