"use strict";(self["webpackChunkfishsoup"]=self["webpackChunkfishsoup"]||[]).push([[637],{7151:function(e,s,r){var t=r(3286);s["Z"]={createOrder(e){return t.Z.post("/orders",e)},getAllOrders(e){return t.Z.get(`/orders/${e}`)},deleteOrder(e){return t.Z["delete"](`/orders/${e}`)},getFullOrders(){return t.Z.get("/orders")},markOrderAsDone(e){return t.Z.put(`/orders/${e}`)}}},3229:function(e,s,r){r.r(s),r.d(s,{default:function(){return P}});var t=r(3396),o=r(9242),n=r(7139);const d={class:"max-w-7xl mx-auto mt-10 px-4 sm:mt-0 sm:p-4 sm:pt-24"},a={class:"md:grid md:grid-cols-1 md:gap-6"},i=(0,t.uE)('<div class="flex items-center justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-3xl mb-3 font-medium leading-6 text-gray-900">Dish Information</h3><p class="mt-1 text-sm text-gray-600">Enter New Dish Information</p></div><span class="text-base">Dashboard &gt; Add / Modify Dish</span></div>',1),l={class:"mt-5 md:mt-0 md:col-span-2"},c={class:"shadow border-t-[0.1px] overflow-hidden sm:rounded-md"},m={class:"px-4 py-5 bg-white sm:p-6"},u={class:"grid grid-cols-6 gap-6"},p={class:"col-span-6"},g={key:0,class:"text-red-500"},h=(0,t._)("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"Dish Name",-1),b={class:"col-span-6 sm:col-span-6 lg:col-span-2"},f={key:0,class:"text-red-500"},x=(0,t._)("label",{for:"link",class:"block text-sm font-medium text-gray-700"},"Product Image Link",-1),y={class:"col-span-6 sm:col-span-3 lg:col-span-2"},_={key:0,class:"text-red-500"},k=(0,t._)("label",{for:"price",class:"block text-sm font-medium text-gray-700"},"Price (2 decimal places at most, ex: 10.85)",-1),w={class:"col-span-6 sm:col-span-3 lg:col-span-2"},v={key:0,class:"text-red-500"},D=(0,t._)("label",{for:"amount",class:"block text-sm font-medium text-gray-700"},"Amount",-1),O=(0,t._)("div",{class:"px-4 py-3 bg-gray-50 text-right sm:px-6"},[(0,t._)("button",{type:"submit",class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Add Dish")],-1);function Z(e,s,r,Z,j,q){return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",d,[(0,t._)("div",a,[i,(0,t._)("div",l,[(0,t._)("form",{onSubmit:s[4]||(s[4]=(0,o.iM)(((...s)=>e.addDish&&e.addDish(...s)),["prevent"])),method:"POST"},[(0,t._)("div",c,[(0,t._)("div",m,[(0,t._)("div",u,[(0,t._)("div",p,[0!==Object.keys(e.errors).length&&e.errors.name&&0!==e.errors.name.length?((0,t.wg)(),(0,t.iD)("span",g,(0,n.zw)(e.errors.name[0]),1)):(0,t.kq)("",!0),h,(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":s[0]||(s[0]=s=>e.name=s),type:"text",name:"name",id:"name",required:"",autocomplete:"dish-name",class:(0,n.C_)("mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md")},null,512),[[o.nr,e.name]])]),(0,t._)("div",b,[0!==Object.keys(e.errors).length&&e.errors.image_link&&0!==e.errors.image_link.length?((0,t.wg)(),(0,t.iD)("span",f,(0,n.zw)(e.errors.image_link[0]),1)):(0,t.kq)("",!0),x,(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":s[1]||(s[1]=s=>e.image_link=s),type:"text",name:"link",id:"link",autocomplete:"link1",required:"",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[o.nr,e.image_link]])]),(0,t._)("div",y,[0!==Object.keys(e.errors).length&&e.errors.price&&0!==e.errors.price.length?((0,t.wg)(),(0,t.iD)("span",_,(0,n.zw)(e.errors.price[0]),1)):(0,t.kq)("",!0),k,(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":s[2]||(s[2]=s=>e.price=s),type:"number",step:"0.01",name:"price",id:"price",required:"",autocomplete:"price1",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[o.nr,e.price]])]),(0,t._)("div",w,[0!==Object.keys(e.errors).length&&e.errors.amount&&0!==e.errors.amount.length?((0,t.wg)(),(0,t.iD)("span",v,(0,n.zw)(e.errors.amount[0]),1)):(0,t.kq)("",!0),D,(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":s[3]||(s[3]=s=>e.amount=s),type:"number",name:"amount",id:"amount",required:"",autocomplete:"amount1",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[o.nr,e.amount]])])])]),O])],32)])])])])}var j=r(4870),q=r(3286),C={addDish(e){return q.Z.post("/dish",e)}},S=(0,t.aZ)({name:"AddDish",setup(){const e=(0,j.qj)({name:"",image_link:"",price:0,amount:0});let s=(0,j.iH)({});return{...(0,j.BK)(e),errors:s}},methods:{addDish(){C.addDish({name:this.name,image_link:this.image_link,price:this.price,amount:this.amount}).then((()=>{this.name="",this.image_link="",this.price=0,this.amount=0,alert("Dish Added Successfully")})).catch((e=>{422===e.response.status&&(this.errors=e.response.data.errors)}))}}}),U=r(89);const N=(0,U.Z)(S,[["render",Z]]);var P=N},4723:function(e,s,r){r.r(s),r.d(s,{default:function(){return Y}});var t=r(3396),o=r(7139),n=r(9242);const d={class:"max-w-7xl mx-auto mt-10 px-4 sm:mt-0 sm:p-4 sm:pt-24"},a={class:"md:grid md:grid-cols-1 md:gap-6"},i={class:"flex items-center justify-between md:col-span-1"},l={class:"px-4 sm:px-0"},c={class:"text-3xl mb-3 font-medium leading-6 text-gray-900"},m=(0,t.Uk)("Personal Information "),u={class:"text-base ml-1 text-rose-700"},p=(0,t.Uk)("("),g={class:"underline"},h=(0,t.Uk)(")"),b=(0,t._)("p",{class:"mt-1 text-sm text-gray-600"},"We will never share your personal information.",-1),f={class:"mt-5 md:mt-0 md:col-span-2"},x={class:"shadow border-t-[0.1px] overflow-hidden sm:rounded-md"},y={class:"px-4 py-5 bg-white sm:p-6"},_={class:"grid grid-cols-6 gap-6"},k={class:"col-span-6"},w=(0,t._)("label",{for:"street_address",class:"block text-sm font-medium text-gray-700"},"Street address",-1),v=["disabled"],D={class:"col-span-6 sm:col-span-6 lg:col-span-2"},O=(0,t._)("label",{for:"city",class:"block text-sm font-medium text-gray-700"},"City",-1),Z={class:"col-span-6 sm:col-span-3 lg:col-span-2"},j={key:0,class:"text-red-500"},q=(0,t._)("label",{for:"phone_number",class:"block text-sm font-medium text-gray-700"},"Phone Number",-1),C={class:"flex items-center sm:justify-end sm:pt-4 col-span-2 sm:col-span-3 lg:col-span-2"},S=(0,t._)("label",{for:"no_deliver",class:"ml-2 block text-sm text-gray-900"}," Don't deliver ",-1),U=(0,t._)("div",{class:"px-4 py-3 bg-gray-50 text-right sm:px-6"},[(0,t._)("button",{type:"submit",class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Place Order")],-1),N={class:"mt-5 text-gray-500"},P=(0,t.Uk)("or just add it to cart: ");function A(e,s,r,A,V,z){return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",d,[(0,t._)("div",a,[(0,t._)("div",i,[(0,t._)("div",l,[(0,t._)("h3",c,[m,(0,t._)("span",u,[p,(0,t._)("span",g,"Ordering "+(0,o.zw)(e.product?.name),1),h])]),b]),(0,t._)("span",null,"Dashboard > Store > "+(0,o.zw)(e.product?.name),1)]),(0,t._)("div",f,[(0,t._)("form",{onSubmit:s[5]||(s[5]=(0,n.iM)(((...s)=>e.placeOrder&&e.placeOrder(...s)),["prevent"])),method:"POST"},[(0,t._)("div",x,[(0,t._)("div",y,[(0,t._)("div",_,[(0,t._)("div",k,[w,(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":s[0]||(s[0]=s=>e.address=s),type:"text",name:"street_address",id:"street_address",required:"",autocomplete:"street-address",class:(0,o.C_)(`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${e.checked&&"bg-gray-100"}`),disabled:e.checked},null,10,v),[[n.nr,e.address]])]),(0,t._)("div",D,[O,(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":s[1]||(s[1]=s=>e.city=s),type:"text",name:"city",id:"city",autocomplete:"city1",required:"",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[n.nr,e.city]])]),(0,t._)("div",Z,[0!==Object.keys(e.errors).length&&e.errors.phoneNumber&&0!==e.errors.phoneNumber.length?((0,t.wg)(),(0,t.iD)("span",j,(0,o.zw)(e.errors.phoneNumber[0]),1)):(0,t.kq)("",!0),q,(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":s[2]||(s[2]=s=>e.phoneNumber=s),type:"text",name:"phone_number",id:"phone_number",required:"",autocomplete:"phone_number1",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[n.nr,e.phoneNumber]])]),(0,t._)("div",C,[(0,t.wy)((0,t._)("input",{onClick:s[3]||(s[3]=s=>e.address=""),"onUpdate:modelValue":s[4]||(s[4]=s=>e.checked=s),id:"no_deliver",name:"no_deliver",type:"checkbox",class:"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"},null,512),[[n.e8,e.checked]]),S])])]),U])],32)])]),(0,t._)("p",N,[P,(0,t._)("button",{onClick:s[6]||(s[6]=(...s)=>e.addCartElement&&e.addCartElement(...s)),class:"ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Add to Cart")])])])}var V=r(4870),z=r(6603),I=r(678),E=r(3766),$=r(3281),H=r(6078),M=r(7151),T=r(9404),B=r(4817),J=(0,t.aZ)({name:"OrderView",setup(){const e=(0,I.yj)(),s=parseInt(e.params.id),r=(0,V.iH)(),o=(0,z.e)(),{user:n}=(0,E.Jk)(o),d=(0,B.Z)(),{content:a}=(0,E.Jk)(d),i=(0,V.qj)({address:"",city:"",phoneNumber:"",checked:!1}),l=(0,V.iH)({});return(0,t.bv)((()=>{$.Z.getSingleProduct(s).then((e=>{r.value=e.data})).catch((e=>console.log(e)))})),{id:s,product:r,...(0,V.BK)(i),userState:o,user:n,errors:l,route:e,cartState:d,content:a}},methods:{placeOrder(){const e={userId:this.user?.id,productId:this.product?.id,address:this.address,status:!1,phoneNumber:this.phoneNumber,city:this.city},s=window.confirm("Are You Sure You Want to Place This Order ?");s&&M.Z.createOrder(e).then((()=>{alert("Successfully Placed Order!"),H.Z.push({name:"dashboard"})})).catch((e=>{422===e.response.status&&(this.errors=e.response.data.errors)}))},addCartElement(){T.Z.addCartElement({user_id:this.user?.id,product_id:this.id,quantity:1}).then((async()=>{try{await this.cartState.updateCart(this.user?.id)}catch(e){console.log(e)}})).catch((e=>console.log(e)))}}}),K=r(89);const W=(0,K.Z)(J,[["render",A]]);var Y=W}}]);
//# sourceMappingURL=order.fabf1f5a.js.map