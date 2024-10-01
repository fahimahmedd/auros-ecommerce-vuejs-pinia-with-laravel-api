import{_ as q}from"./d-BKx11Mn9.js";import{S as P,a as I,N as V}from"./navigation-BdLt3EyE.js";import{i as U}from"./imgUrl-CY2w26BH.js";import{_ as m,a as W,u as G,d as K}from"./index-DwqsQMe2.js";import{a as b,V as g}from"./VCardText-Dset8TA3.js";import{b as $,a as C}from"./VCard-BSJXFvGJ.js";import{o,n as c,q as r,i as t,W as p,v as a,Z as k,V as u,x as f,R as h,Y as w,r as L,$ as E,a4 as M,e as S,p as Q,a0 as X,c as Z,g as J,t as ee,a1 as te,d as se,z as ae,a5 as re,h as oe,E as ie}from"./index-8f-GP4OW.js";import{V as y,a as _}from"./VRow-BFRKIaFZ.js";import{C as le,u as ne}from"./categoryStore-DtB_13EW.js";import{V as ce}from"./VBtn-BsJED764.js";import{P as H}from"./ProductItem-CcPblPKG.js";import{u as de}from"./productStore-CWOD3jFa.js";const ue={class:"text-subtitle-1 font-weight-bold secondary-font"},pe={class:"text-subtitle-2 secondary-font"},me={__name:"ProductShowItem",props:{showItem:{type:Object,required:!0}},setup(s){return(e,i)=>(o(),c(C,{elevation:"0",color:"#fff"},{default:r(()=>[t(b,{height:"220",src:`${p(U)}/${s.showItem.product_image}`,class:"mob-adjust-height"},null,8,["src"]),t($,{class:"pb-4 bg-ash"},{default:r(()=>{var l,n;return[a("div",ue,k(s.showItem.title),1),a("div",pe," LDSH-D"+k(((n=(l=s.showItem.productdata)==null?void 0:l[0])==null?void 0:n.rack_number)||"N/A"),1)]}),_:1})]),_:1}))}},R=m(me,[["__scopeId","data-v-463efc0f"]]),fe={class:"home-feature"},_e={class:"feature-image"},ge={class:"feature-image-slide mt-5"},ve={__name:"HomeFeature",props:{products:{type:Array,default:[]}},setup(s){const e=[V];return(i,l)=>(o(),u("div",fe,[t(g,{fluid:""},{default:r(()=>[t(y,null,{default:r(()=>[t(_,{lg:"5",cols:"12"},{default:r(()=>l[0]||(l[0]=[a("div",{class:"text-h2 font-weight-black"}," Transform your living space with style that lasts ",-1),a("div",{class:"text-h5 mt-4"}," Organize every space with our timeless furniture collections ",-1),a("ul",{class:"mt-5"},[a("li",null,[a("span",{class:"mdi mdi-check"}),f(" At eleifend mattis ligula, porta finibus urna gvida at. ")]),a("li",null,[a("span",{class:"mdi mdi-check"}),f(" Kenean vehicula sodales arcu non mattis. ")]),a("li",null,[a("span",{class:"mdi mdi-check"}),f(" Ginteger dapibus ac dui pretium blanss aptent. ")])],-1)])),_:1}),t(_,{lg:"7",cols:"12"},{default:r(()=>[a("div",_e,[t(b,{src:q})]),a("div",ge,[t(p(P),{slidesPerView:3,spaceBetween:20,navigation:!0,modules:e,breakpoints:{280:{slidesPerView:2,spaceBetween:10},650:{slidesPerView:3,spaceBetween:10}},class:"mySwiper"},{default:r(()=>[(o(!0),u(h,null,w(s.products,(n,d)=>(o(),c(p(I),{key:d,class:"pb-1"},{default:r(()=>[t(R,{"show-item":n,onClick:v=>i.$router.push(`/product-detail/${n.id}`)},null,8,["show-item","onClick"])]),_:2},1024))),128))]),_:1})])]),_:1})]),_:1})]),_:1})]))}},he=m(ve,[["__scopeId","data-v-6cc03bd0"]]),be={class:"category-list"},we={__name:"Category",props:{allCategory:{type:Array,default:[]}},setup(s){const e=[V];return(i,l)=>(o(),c(g,null,{default:r(()=>[a("div",be,[t(p(P),{slidesPerView:6,spaceBetween:20,navigation:!0,modules:e,breakpoints:{280:{slidesPerView:3,spaceBetween:5},600:{slidesPerView:4,spaceBetween:10},1024:{slidesPerView:6,spaceBetween:20}},class:"mySwiper"},{default:r(()=>[(o(!0),u(h,null,w(s.allCategory,(n,d)=>(o(),c(p(I),{key:d,class:"pb-1"},{default:r(()=>[t(le,{"category-item":n,onClick:v=>i.$router.push(`category/${n.id}`)},null,8,["category-item","onClick"])]),_:2},1024))),128))]),_:1})])]),_:1}))}},ye="/assets/126774-BldN3m-i.jpg",ke="/assets/2151439824-DHHHbYYR.jpg",Ce={},xe={class:"section-padding-top"};function $e(s,e){return o(),u("div",xe,[t(g,null,{default:r(()=>[t(y,null,{default:r(()=>[t(_,{lg:"6",cols:"12"},{default:r(()=>[t(C,{elevation:"0"},{default:r(()=>[t($,{class:"pa-0"},{default:r(()=>[e[0]||(e[0]=a("div",{class:"subtitle font-weight-bold primary-color"},"Home Decor Hub",-1)),e[1]||(e[1]=a("div",{class:"text-h3 font-weight-black mt-2"}," Exceptional Furniture's For Indoor & Outdoor ",-1)),e[2]||(e[2]=a("p",{class:"mt-2"}," Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean vehicula sodales arcu non mattis. Integer dapibus ac dui pretium blandit. ",-1)),t(b,{width:"100%",rounded:"lg",class:"mt-4",src:ye})]),_:1})]),_:1})]),_:1}),t(_,{lg:"6",cols:"12"},{default:r(()=>[t(C,{elevation:"0"},{default:r(()=>[t($,{class:"pa-0"},{default:r(()=>[t(b,{width:"100%",rounded:"lg",src:ke}),e[3]||(e[3]=a("div",{class:"text-h3 font-weight-black mt-4"}," Discover Endless of Designs & Feature ",-1)),e[4]||(e[4]=a("p",{class:"mt-2"}," Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean vehicula sodales arcu non mattis. Integer dapibus ac dui pretium blandit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",-1)),e[5]||(e[5]=a("ul",{class:"mt-5"},[a("li",null,[a("span",{class:"mdi mdi-check"}),f(" At eleifend mattis ligula, porta finibus urna gvida at. ")]),a("li",null,[a("span",{class:"mdi mdi-check"}),f(" Kenean vehicula sodales arcu non mattis. ")]),a("li",null,[a("span",{class:"mdi mdi-check"}),f(" Ginteger dapibus ac dui pretium blanss aptent. ")])],-1))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const Se=m(Ce,[["render",$e],["__scopeId","data-v-1adee77a"]]),Pe={key:0,class:"ripple-item-content"},Ie={class:"ripple-item"},Ve={class:"text-h6 secondary-font font-weight-bold"},Be={class:"mt-1"},Fe={class:"font-weight-black secondary-font",style:{"font-size":"20px",color:"#f3f3f3"}},Le={__name:"FeatureRipple",props:{rippleItem:{type:Object,required:!0}},setup(s){const e=L(!1),i=()=>{e.value=!e.value,console.log("click")};return(l,n)=>(o(),u("div",{class:"ripple-content",onClick:i},[n[2]||(n[2]=a("span",{class:"mdi mdi-plus"},null,-1)),e.value?(o(),u("div",Pe,[a("div",Ie,[a("div",Ve,k(s.rippleItem.name),1),a("p",Be,[n[0]||(n[0]=f(" Form ")),a("span",Fe,k(s.rippleItem.price),1),n[1]||(n[1]=f(" BDT "))])])])):E("",!0)]))}},Te=m(Le,[["__scopeId","data-v-bc0aad6e"]]),Ae={class:"product-feature overflow-hidden"},Ne={__name:"ProductFeature",setup(s){const e=L([{positionName:"product-riiple-1",name:"Artiss Floor Lamp LED",price:"8990"},{positionName:"product-riiple-2",name:"Soft Single Sofa",price:"9990"},{positionName:"product-riiple-3",name:"Fabric Triple Seat Sofa",price:"22990"},{positionName:"product-riiple-4",name:"Round Tea Table ",price:"9990"}]);return(i,l)=>{const n=Te;return o(),c(g,null,{default:r(()=>[a("div",Ae,[(o(!0),u(h,null,w(p(e),(d,v)=>(o(),u("div",{class:M(["d-none d-md-block",d.positionName]),key:v},[t(n,{rippleItem:d},null,8,["rippleItem"])],2))),128))])]),_:1})}}},De=m(Ne,[["__scopeId","data-v-cd4f8b6e"]]),Ee={class:"mt-5 text-h6 text-uppercase font-weight-black secondary-font"},He={class:"mt-1"},Re={__name:"ServiceFeatureCard",props:{serviceFeature:{type:Object,required:!0}},setup(s){return(e,i)=>(o(),c(C,{class:"service-feature-item text-center",elevation:"0",color:"transparent"},{default:r(()=>[t(b,{src:s.serviceFeature.image,height:"65",class:"mob-adjust-height"},null,8,["src"]),a("div",Ee,k(s.serviceFeature.title),1),a("p",He,k(s.serviceFeature.detail),1)]),_:1}))}},je=m(Re,[["__scopeId","data-v-d9b7e1d2"]]),Oe={class:"service-feature"},Ye={class:"service-feature-wrapper"},ze={__name:"ServiceFeature",setup(s){const e=L([{title:"FAST DELIVERY",detail:"Free shipping on all orders over",image:"src/assets/images/feature/shipped.png"},{title:"Return Plicy",detail:"You can return your purchase",image:"src/assets/images/feature/purchase.png"},{title:"EXTENSIVE STOCKS",detail:"Get in touch with any query",image:"src/assets/images/feature/in-stock.png"},{title:"Customer Support",detail:"We are here to serve you",image:"src/assets/images/feature/customer-service.png"}]);return(i,l)=>(o(),u("div",Oe,[t(g,null,{default:r(()=>[a("div",Ye,[l[0]||(l[0]=a("div",{class:"text-h3 text-uppercase font-weight-black secondary-font text-center"}," YOU'RE PAYING TOO MUCH ",-1)),l[1]||(l[1]=a("p",{class:"text-center"}," Simply become a member of the Club and start enjoying the benefits of shopping ",-1)),t(y,{class:"mt-10"},{default:r(()=>[(o(!0),u(h,null,w(e.value,(n,d)=>(o(),c(_,{lg:"3",cols:"6",key:d},{default:r(()=>[t(je,{"service-feature":n},null,8,["service-feature"])]),_:2},1024))),128))]),_:1})])]),_:1})]))}},qe=m(ze,[["__scopeId","data-v-4219a398"]]),Ue="/assets/lamp-XQQTu_iT.svg",We="data:image/svg+xml,%3csvg%20width='260'%20height='16'%20viewBox='0%200%20260%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M225.202%2013.037C226.655%2012.8808%20229.657%2012.1708%20232.52%2011.7347C238.083%2010.8873%20243.877%2011.3007%20249.353%209.84615C255.757%208.14488%20223.035%207.57647%20215.802%207.55844C207.234%207.54041%20197.194%207.57448%20184.19%207.49733C159.374%207.35707%20125.586%207.27392%2092.0512%207.98123C82.1387%208.19863%2072.2202%208.38697%2062.3459%208.72962C58.637%208.86187%2054.9218%208.99613%2051.2128%209.12836C44.7067%209.36981%2038.2049%209.61226%2031.697%209.82768C26.1862%2010.01%2019.3986%2010.9337%2013.4612%2010.8586C6.6911%2010.7724%201.97481%209.21152%200.504511%206.212C-0.0408511%205.12198%20-0.394467%203.52593%200.802756%202.59723C2.00637%201.6655%202.67531%201.4%203.40599%201.14955C5.16991%200.560449%207.34923%200.102611%208.38667%200.0855814C22.7002%20-0.105773%2038.6755%200.0605336%2051.4894%200.225842C61.5464%200.360092%2071.6252%200.486317%2084.8737%200.492344C100.749%200.608559%20148.288%201.0093%20164.158%201.01733C174.678%201.02334%20185.174%201.4341%20195.638%201.96509C204.345%202.40592%20213.147%202.87178%20222.097%203.39473C230.753%203.89266%20235.895%203.92571%20244.647%204.49878C246.01%204.58194%20247.617%204.6651%20249.353%204.76529C250.799%204.83042%20252.674%204.94763%20254.086%204.99071C255.505%205.02277%20258.496%205.31676%20259.614%208C260.986%2011.2898%20258.495%2013.1142%20255.355%2014.3264C253.81%2014.9225%20252.172%2014.9325%20251.252%2015.0076C247.72%2015.3733%20244.411%2015.4875%20241.921%2015.3062C240.245%2015.183%20235.219%2015.5567%20230.822%2015.8312C227.575%2016.0466%20225.733%2016.0796%20220.697%2015.7901C218.047%2015.4665%20217.979%2014.5087%20221.068%2013.7042C222.446%2013.4117%20224.024%2013.1623%20225.202%2013.037Z'%20fill='%23FFBC11'/%3e%3c/svg%3e",Ge="/assets/brown-coution-DxWMHpvw.png",Ke={},Me={class:"hero-lamp position-absolute left-60 zIndex-2"},Qe={class:"text-h2 font-weight-black"},Xe={class:"position-relative"},Ze={class:"hero-img position-relative zIndex-2"};function Je(s,e){return o(),c(g,{class:"hero-section d-flex align-center h-screen"},{default:r(()=>[a("div",Me,[t(b,{src:Ue,height:"240",width:"200"})]),t(y,{align:"center",class:"pa-0"},{default:r(()=>[t(_,{lg:"6",cols:"12",sm:"6",md:"6"},{default:r(()=>[t(C,{elevation:"0"},{default:r(()=>[t($,null,{default:r(()=>[a("div",Qe,[e[1]||(e[1]=f(" We Help ")),a("span",Xe,[e[0]||(e[0]=f("To Build ")),t(b,{width:"240",src:We,class:"position-absolute right-0"})]),e[2]||(e[2]=a("br",null,null,-1)),e[3]||(e[3]=f(" Your Dream Spaces")),e[4]||(e[4]=a("span",{class:"secondary-color"},".",-1))]),e[6]||(e[6]=a("div",{class:"text-body-1 font-weight-regular mt-4"}," We research, create and build workplaces with the fusion of design, technology and innovation. Let our interior architecture team help you create a better business. ",-1)),t(ce,{"append-icon":"mdi-cart",variant:"flat",color:"primary",rounded:"lg",class:"mt-4 m-index-adjust"},{default:r(()=>e[5]||(e[5]=[f(" Shop Now ")])),_:1})]),_:1})]),_:1})]),_:1}),t(_,{lg:"6",cols:"12",sm:"6",md:"6"},{default:r(()=>[a("div",Ze,[t(b,{src:Ge,class:"mx-auto","max-height":"400","max-width":"100%"})]),e[7]||(e[7]=a("div",{class:"hero-img-bg"},null,-1))]),_:1})]),_:1})]),_:1})}const et=m(Ke,[["render",Je],["__scopeId","data-v-8f96b100"]]),tt={class:"section-padding-top"},st={__name:"BestSellingProduct",props:{products:{type:Array,default:[]}},setup(s){const e=[V];return(i,l)=>(o(),u("div",tt,[s.products&&s.products.length?(o(),c(g,{key:0,fluid:""},{default:r(()=>[l[0]||(l[0]=a("div",{class:"section-heading text-center mb-10"},[a("div",{class:"text-h3 secondary-font font-weight-bold"},"Best Selling Product")],-1)),t(p(P),{slidesPerView:4,spaceBetween:20,navigation:!0,modules:e,breakpoints:{280:{slidesPerView:2,spaceBetween:10},650:{slidesPerView:3,spaceBetween:10},1024:{slidesPerView:4,spaceBetween:20}},class:"mySwiper"},{default:r(()=>[(o(!0),u(h,null,w(s.products,(n,d)=>(o(),c(p(I),{key:d,class:"pb-1"},{default:r(()=>[t(H,{"product-item":n,onClick:v=>i.$router.push(`/product-detail/${n.id}`)},null,8,["product-item","onClick"])]),_:2},1024))),128))]),_:1})]),_:1})):E("",!0)]))}},at=m(st,[["__scopeId","data-v-070882da"]]),rt={__name:"PopularProduct",props:{products:{type:Array,default:[]}},setup(s){const e=[V];return(i,l)=>(o(),c(g,{fluid:""},{default:r(()=>[l[0]||(l[0]=a("div",{class:"section-heading text-center mb-10"},[a("div",{class:"text-h3 secondary-font font-weight-bold"},"Our Popular Product")],-1)),t(p(P),{slidesPerView:4,spaceBetween:20,navigation:!0,modules:e,breakpoints:{280:{slidesPerView:2,spaceBetween:10},650:{slidesPerView:3,spaceBetween:10},1024:{slidesPerView:4,spaceBetween:20}},class:"mySwiper"},{default:r(()=>[(o(!0),u(h,null,w(s.products,(n,d)=>(o(),c(p(I),{key:d,class:"pb-1"},{default:r(()=>[t(H,{"product-item":n,onClick:v=>i.$router.push(`/product-detail/${n.id}`)},null,8,["product-item","onClick"])]),_:2},1024))),128))]),_:1})]),_:1}))}},ot=m(rt,[["__scopeId","data-v-42a524b3"]]),it="/assets/home2-DNS0YAEo.jpg",lt={class:"v-row"},nt={__name:"ProductShow",props:{products:{type:Array,default:[]}},setup(s){const e=s,i=S(()=>e.products.slice(-6));return(l,n)=>(o(),c(g,null,{default:r(()=>[t(y,null,{default:r(()=>[t(_,{lg:"4",cols:"12",class:"d-none d-md-block"},{default:r(()=>[t(b,{class:"img-overly",rounded:"lg",src:it,height:"593",cover:""})]),_:1}),t(_,{lg:"8",cols:"12"},{default:r(()=>[a("div",lt,[(o(!0),u(h,null,w(i.value,(d,v)=>(o(),c(_,{lg:"4",sm:"4",md:"4",cols:"6",key:v},{default:r(()=>[t(R,{showItem:d,onClick:x=>l.$router.push(`/product-detail/${d.id}`)},null,8,["showItem","onClick"])]),_:2},1024))),128))])]),_:1})]),_:1})]),_:1}))}},ct=m(nt,[["__scopeId","data-v-9fe213e7"]]),dt={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"};function ut(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return t("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${s}`]},[e])}function A(s){const[e,i]=s.split("@");return Array.from({length:i}).map(()=>B(e))}function B(s){let e=[];if(!s)return e;const i=dt[s];if(s!==i){if(s.includes(","))return N(s);if(s.includes("@"))return A(s);i.includes(",")?e=N(i):i.includes("@")?e=A(i):i&&e.push(B(i))}return[ut(s,e)]}function N(s){return s.replace(/\s/g,"").split(",").map(B)}const pt=Q({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...X(),...W(),...Z()},"VSkeletonLoader"),j=J()({name:"VSkeletonLoader",props:pt(),setup(s,e){let{slots:i}=e;const{backgroundColorClasses:l,backgroundColorStyles:n}=G(ee(s,"color")),{dimensionStyles:d}=te(s),{elevationClasses:v}=K(s),{themeClasses:x}=se(s),{t:O}=ae(),Y=S(()=>B(re(s.type).join(",")));return oe(()=>{var T;const F=!i.default||s.loading,z=s.boilerplate||!F?{}:{ariaLive:"polite",ariaLabel:O(s.loadingText),role:"alert"};return t("div",ie({class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":s.boilerplate},x.value,l.value,v.value],style:[n.value,F?d.value:{}]},z),[F?Y.value:(T=i.default)==null?void 0:T.call(i)])}),{}}}),mt={};function ft(s,e){return o(),c(g,null,{default:r(()=>[t(y,null,{default:r(()=>[(o(),u(h,null,w(6,(i,l)=>t(_,{lg:"2",cols:"4",key:l},{default:r(()=>[t(j,{class:"mx-auto border",width:"100%",type:"card"})]),_:2},1024)),64))]),_:1})]),_:1})}const _t=m(mt,[["render",ft]]),gt={};function vt(s,e){return o(),c(g,null,{default:r(()=>[t(y,null,{default:r(()=>[(o(),u(h,null,w(4,(i,l)=>t(_,{cols:"6",lg:"3",key:l},{default:r(()=>[t(j,{class:"mx-auto border",width:"100%",type:"card"})]),_:2},1024)),64))]),_:1})]),_:1})}const D=m(gt,[["render",vt]]),Bt={__name:"index",setup(s){const e=de(),i=S(()=>e.products);e.fetchProductExecute();const l=ne(),n=S(()=>l.category);return(d,v)=>{const x=he;return o(),u(h,null,[t(et),a("div",null,[p(l).categoryLoading?(o(),c(_t,{key:0})):(o(),c(we,{key:1,"all-category":n.value},null,8,["all-category"]))]),t(Se),a("div",null,[p(e).productsLoading?(o(),c(D,{key:0})):(o(),c(at,{key:1,products:i.value},null,8,["products"]))]),t(De),t(ct,{products:i.value},null,8,["products"]),t(x,{products:i.value},null,8,["products"]),a("div",null,[p(e).productsLoading?(o(),c(D,{key:0})):(o(),c(ot,{key:1,products:i.value},null,8,["products"]))]),t(qe)],64)}}};export{Bt as default};
