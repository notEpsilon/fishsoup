"use strict";(self["webpackChunkfishsoup"]=self["webpackChunkfishsoup"]||[]).push([[231],{9884:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var a=n(3396),l=n(7139);const s={class:"customer-dashboard"},r={class:"bg-white shadow"},o={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},d={class:"flex items-center justify-between text-3xl font-bold text-gray-900"},u=(0,a._)("span",null,"Dashboard",-1),i=(0,a.Uk)(),c={class:"text-base"},m={class:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"},g={class:"flex flex-col justify-center items-center space-y-4"},b=(0,a.Uk)("Next");function h(e,t,n,h,x,p){const f=(0,a.up)("render-checkout"),v=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("header",r,[(0,a._)("div",o,[(0,a._)("h1",d,[u,i,(0,a._)("span",c,"Dashboard > "+(0,l.zw)(e.route.path.substring(1,e.route.path.length)),1)])])]),(0,a._)("main",null,[(0,a._)("div",m,[(0,a._)("div",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cartElements,((t,n)=>((0,a.wg)(),(0,a.j4)(f,{elem:t,key:n,onAddOne:t=>e.addOne(n),onSubOne:t=>e.subOne(n)},null,8,["elem","onAddOne","onSubOne"])))),128)),(0,a.Wm)(v,{to:"/finalize",class:"lg:self-end bg-indigo-600 text-white rounded hover:bg-indigo-500 px-6 py-2"},{default:(0,a.w5)((()=>[b])),_:1})])])])])}var x=n(3766),p=n(678),f=n(3281),v=n(4817),w=n(4870);const y={class:"max-w-sm w-full lg:max-w-full lg:flex shadow"},_={class:"w-full border-r border-b border-l lg:border-l-0 lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"},k={class:"mb-8 flex justify-between"},O={class:"text-md"},q={class:"flex items-center justify-between"},S={class:"text-sm text-gray-600"},E={class:"space-x-4"},j=["disabled"],C=["disabled"];function Z(e,t,n,s,r,o){return(0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("div",{class:"h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden",style:(0,l.j5)({backgroundImage:`url(${e.elem.image_link})`})},null,4),(0,a._)("div",_,[(0,a._)("div",k,[(0,a._)("p",O,(0,l.zw)(e.elem.name),1)]),(0,a._)("div",q,[(0,a._)("div",S,"Quantity: "+(0,l.zw)(e.elem.quant),1),(0,a._)("div",E,[(0,a._)("button",{disabled:!e.maxAmount||e.elem.quant>=e.maxAmount,class:(0,l.C_)([e.elem.quant>=(e.maxAmount||-9999)?"bg-gray-300 opacity-60":"hover:bg-teal-500","bg-teal-400 rounded px-4 py-1 text-sm"]),onClick:t[0]||(t[0]=(...t)=>e.increment&&e.increment(...t))},"Add One",10,j),(0,a._)("button",{disabled:e.elem.quant<=1,class:(0,l.C_)([e.elem.quant<=1?"bg-gray-300 opacity-60":"hover:bg-red-400","bg-red-300 rounded px-4 py-1 text-sm"]),onClick:t[1]||(t[1]=(...t)=>e.decrement&&e.decrement(...t))},"Remove One",10,C)])])])])}var z=(0,a.aZ)({name:"RenderOrder",props:{elem:{required:!0,type:Object},worker:{required:!1,type:Boolean}},setup(e){const t=(0,w.iH)();return(0,a.bv)((()=>{f.Z.getSingleProduct(e.elem.id).then((e=>{t.value=e.data.amount})).catch((e=>console.log(e)))})),{maxAmount:t}},methods:{increment(){this.$emit("add-one")},decrement(){this.$emit("sub-one")}}}),A=n(89);const D=(0,A.Z)(z,[["render",Z]]);var I=D,J=(0,a.aZ)({name:"CheckOut",setup(){const e=(0,w.iH)([]),t=(0,p.yj)(),n=(0,v.Z)(),{content:l}=(0,x.Jk)(n);return(0,a.bv)((()=>{l.value.forEach((async t=>{const n=(await f.Z.getSingleProduct(t.product_id)).data;e.value=[...e.value,{...n,quant:t.quantity}],localStorage.setItem("finalize-products",JSON.stringify(0===e.value.length?[]:e.value))}))})),{cartElements:e,route:t}},components:{RenderCheckout:I},methods:{async addOne(e){const t=this.cartElements[e].id,n=(await f.Z.getSingleProduct(t)).data;this.cartElements[e].quant<n.amount&&(this.cartElements[e].quant+=1,localStorage.setItem("finalize-products",JSON.stringify(this.cartElements)))},subOne(e){this.cartElements[e].quant<=1||(this.cartElements[e].quant-=1,localStorage.setItem("finalize-products",JSON.stringify(this.cartElements)))}}});const N=(0,A.Z)(J,[["render",h]]);var H=N}}]);
//# sourceMappingURL=checkout.0a2b1f32.js.map