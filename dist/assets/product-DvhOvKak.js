import{P as n}from"./ProductItem-CcPblPKG.js";import{V as d,a as l}from"./VRow-BFRKIaFZ.js";import{V as g}from"./VCardText-Dset8TA3.js";import{r as f,o as t,n as p,q as a,v as _,i as r,V as u,R as i,Y as E,e as S}from"./index-8f-GP4OW.js";import{P as C}from"./PageIntro-BcPZDzrS.js";import{u as h}from"./productStore-CWOD3jFa.js";import"./imgUrl-CY2w26BH.js";import"./index-DwqsQMe2.js";import"./VCard-BSJXFvGJ.js";const A={class:"all-product-container mt-1"},I={__name:"AllProduct",props:{products:{type:Array,default:[]}},setup(o){return f([{name:"DOUBLE SOFA - POMPEI",image:"src/assets/images/product/brown-coution.png",model:"SDC-227-9-1-66 (REXINE)",price:"24,000"},{name:"CHAIR SOFA - POMPEI",image:"src/assets/images/product/purple-chair.png",model:"SDC-227-9-1-66",price:"22,000"},{name:"SOFA SET WITH TEA TABLE",image:"src/assets/images/product/sofaset.png",model:"SDC-118-9-1-66",price:"16,000"},{name:"SINGLE UNIQUE CHAIR",image:"src/assets/images/product/chair.png",model:"SDC-227-9-1-66",price:"14,000"},{name:"LEATHER SOFT SEAT",image:"src/assets/images/product/leather-soft.png",model:"SDC-227-9-1-66",price:"11,000"},{name:"SOFT UNIQUE CHAIR",image:"src/assets/images/product/soft-chair.png",model:"SDC-227-9-1-66",price:"9,000"}]),(e,c)=>(t(),p(g,{fluid:"",class:"d-flex ga-8"},{default:a(()=>[_("div",A,[r(d,null,{default:a(()=>[(t(!0),u(i,null,E(o.products,(s,m)=>(t(),p(l,{class:"pa-2",lg:"3",sm:"4",md:"3",cols:"6",key:m},{default:a(()=>[r(n,{height:210,"product-item":s,onClick:P=>e.$router.push(`/product-detail/${s.id}`)},null,8,["product-item","onClick"])]),_:2},1024))),128))]),_:1})])]),_:1}))}},x={__name:"product",setup(o){const e=h();e.fetchProductExecute();const c=S(()=>e.products);return(s,m)=>(t(),u(i,null,[r(C),r(I,{products:c.value},null,8,["products"])],64))}};export{x as default};
