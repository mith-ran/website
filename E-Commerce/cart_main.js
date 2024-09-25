import {products} from "./products1.js"
import {cart,remove_cart,cart_num} from "./cart.js";
 
let html="";
console.log(cart);

 const cart_dom=()=>{
    cart.forEach((item)=>{
        
        products.forEach((product)=>{
            if(item.productname==product.name){
                html+=`<div class="ele1" id=${item.productname} >
                            <div class="date">Delevary Date: Tuesday,DEC15</div>
                            <div class="innergrid">
                                <div>
                                    <img src="${product.image}" height="110px">                        
                                </div>
                                <div>
                                    <h3>${product.name}</h3>
                                    <div class="date1">${product.pricecents*0.1}</div>
                                    <div>Quantity:${item.quantity} <span class="green up" data-name=${product.name} >Update</span> <span class="green del" data-name1="${product.name}" >Delete</span>
    
                                    </div>
                                </div>
                                <div>
                                    <h3>Choose delivery option:</h3>
                                    <div >
                                        <div class="del_date">
                                            <input type="radio" name="${product.name}" >
                                            <div>
                                                <div class="date1">Tuesday,DEC15</div>
                                                <div class="fr_sh">Free shipping</div>
                                            </div> 
    
                                        </div>
                                        <div  class="del_date">
    
                                            <input type="radio" name="${product.name}">
                                            <div>
                                                <div class="date1">Tuesday,DEC15</div>
                                                <div class="fr_sh">Free shipping</div>
                                            </div> 
                                        </div>
                                        <div class="del_date">
    
                                            <input type="radio" name="${product.name}">
                                            <div>
                                                <div class="date1">Tuesday,DEC15</div>
                                                <div class="fr_sh">Free shipping</div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                         </div>
                     </div>`
            }
        });
    })
};
cart_dom();
document.querySelector('.ele').innerHTML=html;
document.querySelectorAll('.del').forEach((item)=>item.addEventListener('click',()=>{
    const name=item.dataset.name1;
    remove_cart(name);
    console.log(cart);
    const rem= document.querySelector(`#${name}`);
    rem.remove();


}))
document.querySelector('.hed_no').innerHTML=cart_num();
