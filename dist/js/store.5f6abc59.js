"use strict";(self["webpackChunkfishsoup"]=self["webpackChunkfishsoup"]||[]).push([[119],{3211:function(e,t,s){s.r(t),s.d(t,{default:function(){return S}});var l=s(3396),a=s(7139);const r={class:"bg-white"},n={class:"max-w-2xl mx-auto py-16 px-4 sm:py-18 sm:px-6 lg:max-w-7xl lg:px-8"},i={class:"flex items-center justify-between text-2xl font-extrabold tracking-tight text-gray-900"},o=(0,l._)("span",null,"Available Dishes",-1),u={class:"text-base"},c={class:"mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"};function m(e,t,s,m,d,g){const p=(0,l.up)("render-store-item");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("div",n,[(0,l._)("h2",i,[o,(0,l._)("span",u,"Dashboard > "+(0,a.zw)(e.route.path.substring(1,e.route.path.length)),1)]),(0,l._)("div",c,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.products,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.id,class:"group relative"},[e.amount>0?((0,l.wg)(),(0,l.j4)(p,{key:0,item:e},null,8,["item"])):(0,l.kq)("",!0)])))),128))])])])}var d=s(4870);const g={class:"w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"},p=["src","alt"],h={class:"mt-4 flex justify-between"},x={class:"text-sm text-gray-700"},f=(0,l._)("span",{"aria-hidden":"true",class:"absolute inset-0"},null,-1),w={class:"mt-1 text-sm text-gray-500"},v={class:"text-sm font-medium text-gray-900"};function b(e,t,s,r,n,i){const o=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",g,[(0,l._)("img",{src:e.item.image_link,alt:e.item.name,class:"w-full h-full object-center object-cover lg:w-full lg:h-full"},null,8,p)]),(0,l._)("div",h,[(0,l._)("div",null,[(0,l._)("h3",x,[(0,l.Wm)(o,{to:`/store/${e.item.id}`},{default:(0,l.w5)((()=>[f,(0,l.Uk)(" "+(0,a.zw)(e.item.name),1)])),_:1},8,["to"])]),(0,l._)("p",w,(0,a.zw)(e.item.amount)+" Left",1)]),(0,l._)("p",v,(0,a.zw)(e.item.price)+"$",1)])],64)}var y=(0,l.aZ)({name:"RenderStoreItem",props:{item:{required:!0,type:Object}}}),_=s(89);const k=(0,_.Z)(y,[["render",b]]);var j=k,D=s(3281),Z=s(678),z=(0,l.aZ)({name:"StoreView",setup(){const e=(0,d.iH)([]),t=(0,Z.yj)();return(0,l.bv)((()=>{D.Z.getAllProducts().then((t=>e.value=t.data)).catch((e=>console.log(e)))})),{products:e,route:t}},components:{RenderStoreItem:j}});const H=(0,_.Z)(z,[["render",m]]);var S=H}}]);
//# sourceMappingURL=store.5f6abc59.js.map