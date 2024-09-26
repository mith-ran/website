import {products} from "./products1.js"
import {cart,remove_cart,cart_num} from "./cart.js";
 
let html="";
console.log(cart);

 
    cart.forEach((item)=>{
        
        products.forEach((product)=>{
            if(item.productname==product.name){
                html+=`<div class="ele1" id=${product.id} >
                            <div class="date">Delevary Date: Tuesday,DEC15</div>
                            <div class="innergrid">
                                <div>
                                    <img src="${product.image}" height="110px">                        
                                </div>
                                <div>
                                    <h3>${product.name}</h3>
                                    <div class="date1">$${product.priceCents*0.1}</div>
                                    <div>Quantity:${item.quantity} <span class="green up" data-name=${product.id} >Update</span> <span class="green del" data-name1=${product.id} data-name="${product.name}" >Delete</span>
    
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

document.querySelector('.ele').innerHTML=html;
document.querySelectorAll('.del').forEach((item)=>item.addEventListener('click',()=>{
    const name=item.dataset.name1;
    const qq= item.dataset.name;
    console.log(qq);
    remove_cart(qq);
    const rem= document.querySelector(`#${CSS.escape(name)}`);
    rem.remove();


}))
document.querySelector('.hed_no').innerHTML=cart_num();
