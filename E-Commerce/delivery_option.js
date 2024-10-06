export const delivery_option=[{
    id:1,
    price:0,
    days:7
},{
    id:2,
    price:40,
    days:4
},{
    id:3,
    price:70,
    days:2
}]

export const del_func=(item,product,today)=>{
    let deliveroption_html=''
    let delivery_date0
     delivery_option.forEach((item1)=>{
         let ischecked='';
         if(item.cart_id==item1.id){
            ischecked='checked';
            delivery_date0=today.add(item1.days,'days').format('dddd,MMM D')
         }
         
         let delivery_date1=today.add(item1.days,'days').format('dddd,MMM D');
         deliveroption_html+=`<div class="del_date">
                                  <input type="radio" ${ischecked} name="${product.name}" class="inp" data-name=${item1.id} data-idd=${product.id}>
                                     <div>
                                       <div class="date1">${delivery_date1}</div>
                                       <div class="fr_sh">${item1.price==0?"freeShipping":`₹${item1.price}`}</div>
                                     </div>  
                              </div>`;
          
     })
     
     return {deliveroption_html,delivery_date0}
 }