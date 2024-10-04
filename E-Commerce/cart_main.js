import {products} from "./products1.js";
import {cart,remove_cart,cart_num,save} from "./cart.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { delivery_option } from "./delivery_option.js";
let html="";

console.log(cart);

const today=dayjs()
let delivery_date0;




 function dom(){

     cart.forEach((item)=>{
         let deliveroption_html=''
         
         products.forEach((product)=>{
            
             if(item.productname==product.name){
                console.log("huhub")
                const del_func=()=>{
   
                    delivery_option.forEach((item1)=>{
                        let ischecked='';
                        if(item.cart_id==item1.id){
                           ischecked='checked';
                           delivery_date0=today.add(item1.days,'days').format('dddd,MMM D')
                        }
                        let delivery_date1=today.add(item1.days,'days').format('dddd,MMM D');
                        deliveroption_html+=`<div class="del_date">
                                                 <input type="radio" ${ischecked} name="${product.name}" >
                                                    <div>
                                                      <div class="date1">${delivery_date1}</div>
                                                      <div class="fr_sh">${item1.price==0?"freeShipping":`₹${item1.price}`}</div>
                                                    </div>  
                                             </div>`;
                    })
                }
                del_func();
                 
                 html+=`<div class="ele1" id=${product.id} >
                             <div class="date">Delevary Date: ${delivery_date0}</div>
                             <div class="innergrid">
                                 <div>
                                     <img src="${product.image}" height="110px" class="img_c">                        
                                 </div>
                                 <div>
                                     <h3>${product.name}</h3>
                                     <div class="date1">$${product.priceCents/10}</div>
                                     <div>Quantity:${item.quantity} <span class="green up" data-name=${product.id} >Update</span> <span class="green del" data-name1=${product.id} data-name="${product.name}" >Delete</span></div>
                                 </div>
                                 <div>
                                     <h3>Choose delivery option:</h3>
                                     <div >${deliveroption_html}</div>
                                 </div>
                             </div>
                             </div>`
             }
         });
     })
 }
dom();
document.querySelector('.ele').innerHTML=html;
document.querySelectorAll('.del').forEach((item)=>item.addEventListener('click',()=>{
    const name=item.dataset.name1;
    const qq= item.dataset.name;
    console.log(qq);
    remove_cart(qq);
    const rem= document.querySelector(`#${CSS.escape(name)}`);
    rem.remove();
    dom();
    document.querySelector('.hed_no').innerHTML=cart_num();


}))
document.querySelector('.hed_no').innerHTML=cart_num();

