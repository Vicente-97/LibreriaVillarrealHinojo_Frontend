"use strict";(self.webpackChunkLibreriaVillarrealVicente=self.webpackChunkLibreriaVillarrealVicente||[]).push([[106],{6106:(S,f,i)=>{i.r(f),i.d(f,{ShoppingModule:()=>l});var s=i(6895),x=i(4466),a=i(433),O=i(529),r=i(7825),v=i(5226),m=i.n(v),t=i(8256),_=i(6217),Z=i(4696),C=i(5227);function y(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._UZ(2,"img",8),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"td")(11,"input",9),t.NdJ("ngModelChange",function(d){const h=t.CHM(e).$implicit;return t.KtG(h.cantidad=d)})("ngModelChange",function(d){const h=t.CHM(e).$implicit,B=t.oxw();return t.KtG(B.updateItem(h,d))}),t.qZA()(),t.TgZ(12,"button",10),t.NdJ("click",function(){const b=t.CHM(e).$implicit,h=t.oxw();return t.KtG(h.removeItem(b.book))}),t.O4$(),t.TgZ(13,"svg",11),t._UZ(14,"path",12),t.qZA(),t._uU(15," \xa0Delete"),t.qZA()()}if(2&n){const e=o.$implicit;t.xp6(2),t.Q6J("src",e.book.img,t.LSH),t.xp6(2),t.Oqu(e.book.isbn),t.xp6(2),t.Oqu(e.book.title),t.xp6(2),t.Oqu(t.lcZ(9,6,e.book.price)),t.xp6(3),t.s9C("max",e.book.stock),t.Q6J("ngModel",e.cantidad)}}function T(n,o){1&n&&(t.TgZ(0,"button",13),t.O4$(),t.TgZ(1,"svg",14),t._UZ(2,"path",15),t.qZA(),t._uU(3," \xa0Buy Now"),t.qZA())}const M=function(){return["/books/list"]};class g{constructor(o,e){this.shopping=o,this.route=e,this.json={isbn:"",title:"",dateBook:"",author:"",price:"",stock:"",category:"",cantidad:0},this.books=this.shopping.getItems(),this.total=this.shopping.getTotal()}updateTotalPrice(){this.total=this.shopping.getTotal()}clearCart(){this.shopping.clearCart(),this.books=this.shopping.getItems(),this.shopping.saveCartToSession(),this.total=this.shopping.getTotal()}removeItem(o){this.shopping.eliminarDelCarrito(o),this.books=this.shopping.getItems(),this.shopping.saveCartToSession(),this.total=this.shopping.getTotal()}updateItem(o,e){e<=o.book.stock?(this.shopping.actualizarCantidad(o,e),this.shopping.getTotal(),this.updateTotalPrice(),this.shopping.saveCartToSession()):(m().fire({icon:"error",title:"Oops...",text:"Stock is invalid!",footer:'<a href="">Why do I have this issue?</a>'}),e=1)}addBuy(){for(let o of this.books){this.json.isbn=o.book.isbn,this.json.title=o.book.title,this.json.datebook=o.book.dateBook,this.json.author=o.book.author,this.json.price=o.book.price,this.json.stock=o.book.stock,this.json.category=o.book.category,this.json.cantidad=o.cantidad;let e=o.cantidad,p=localStorage.getItem("username");null!=p&&e<=this.json.stock?this.shopping.addBuy(this.json,e,p).subscribe({next:d=>{d&&(m().fire({icon:"success",title:"Compra exitosa",text:"\xa1Disfuta sus libros!"}),this.shopping.clearCart(),this.route.navigate(["/books/list"]))}}):m().fire({icon:"error",title:"Oops...",text:"Stock is invalid for a buy!",footer:'<a href="">Why do I have this issue?</a>'}),e=0}}}function A(n,o){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._UZ(2,"img",13),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA()()),2&n){const e=o.$implicit;t.xp6(2),t.Q6J("src",e.isbn.img,t.LSH),t.xp6(2),t.Oqu(e.isbn.title),t.xp6(2),t.lnq("",e.date[2]," - ",e.date[1]," - ",e.date[0],""),t.xp6(2),t.Oqu(e.username.username),t.xp6(2),t.Oqu(e.quantity),t.xp6(2),t.hij("",e.quantity*e.isbn.price," \u20ac")}}function U(n,o){if(1&n&&(t.TgZ(0,"table",11)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"Image"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Title"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Date"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Username"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Quantity"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Price Total"),t.qZA()()(),t.TgZ(15,"tbody"),t.YNc(16,A,13,8,"tr",12),t.qZA()()),2&n){const e=t.oxw();t.xp6(16),t.Q6J("ngForOf",e.Buys)}}function w(n,o){1&n&&(t.TgZ(0,"div")(1,"span",8)(2,"i"),t._uU(3,"You do not have any purchases yet, so we have selected some recommendations to make your first purchase Unique: "),t.qZA()()())}function k(n,o){if(1&n&&(t.TgZ(0,"div",14),t._UZ(1,"img",15),t.TgZ(2,"div",16)(3,"h5",17),t._uU(4,"Title:"),t.qZA(),t.TgZ(5,"p",17),t._uU(6),t.qZA(),t.TgZ(7,"h5",18),t._uU(8,"Category:"),t.qZA(),t.TgZ(9,"p",18),t._uU(10),t.qZA(),t.TgZ(11,"h5",18),t._uU(12,"Author:"),t.qZA(),t.TgZ(13,"p",18),t._uU(14),t.qZA(),t._UZ(15,"br"),t.qZA()()),2&n){const e=o.$implicit;t.xp6(1),t.s9C("src",e.img,t.LSH),t.xp6(5),t.Oqu(e.title),t.xp6(4),t.Oqu(e.category.name),t.xp6(4),t.Oqu(e.author)}}g.\u0275fac=function(o){return new(o||g)(t.Y36(_.F),t.Y36(r.F0))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-shopping-cart"]],decls:30,vars:5,consts:[["button","","type","button","href","#","routerLinkActive","active",1,"btn","btn-danger","espaciado",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-arrow-left-circle-fill"],["d","M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"],[1,"table"],[4,"ngFor","ngForOf"],[1,"botones-container"],["method","post","action","#","enctype","multipart/form-data",3,"ngSubmit"],["class","comprar-btn","type","submit",4,"ngIf"],["alt","imgBook","width","120","height","120",3,"src"],["type","number","aria-label","quantity","min","1",3,"ngModel","max","ngModelChange"],["aria-label","delete",1,"borrar-btn",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-trash-fill"],["d","M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"],["type","submit",1,"comprar-btn"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-bag-heart-fill"],["d","M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"]],template:function(o,e){1&o&&(t._UZ(0,"app-navbar"),t.TgZ(1,"h2"),t._uU(2,"Cart"),t.qZA(),t.TgZ(3,"button",0),t.O4$(),t.TgZ(4,"svg",1),t._UZ(5,"path",2),t.qZA(),t._uU(6," \xa0Back"),t.qZA(),t.kcU(),t.TgZ(7,"table",3)(8,"thead")(9,"tr")(10,"th"),t._uU(11,"Book"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Isbn"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Title"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Price"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Quantity"),t.qZA()()(),t.TgZ(20,"tbody"),t.YNc(21,y,16,8,"tr",4),t.qZA()(),t.TgZ(22,"h5")(23,"p"),t._uU(24),t.qZA()(),t.TgZ(25,"div",5)(26,"form",6),t.NdJ("ngSubmit",function(){return e.addBuy()}),t.YNc(27,T,4,0,"button",7),t.qZA()(),t._UZ(28,"br")(29,"app-footer")),2&o&&(t.xp6(3),t.Q6J("routerLink",t.DdM(4,M)),t.xp6(18),t.Q6J("ngForOf",e.books),t.xp6(3),t.hij("Total: ",e.total," $"),t.xp6(3),t.Q6J("ngIf",e.books.length))},dependencies:[Z.S,C.c,s.sg,s.O5,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.qQ,a.Fd,a.On,a.F,r.rH,r.Od,s.H9],styles:["table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%;margin-bottom:1rem;background-color:transparent}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6;text-align:left}th[_ngcontent-%COMP%]{font-weight:500;background-color:#f8f9fa;border-bottom:2px solid #dee2e6}td[_ngcontent-%COMP%]{border-bottom:1px solid #dee2e6}.botones-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:1rem;flex-wrap:wrap}.comprar-btn[_ngcontent-%COMP%]{background-color:green;color:#fff;border:none;padding:.5rem;border-radius:4px;cursor:pointer;margin-right:1em}.borrar-btn[_ngcontent-%COMP%]{background-color:red;color:#fff;border:none;padding:.5rem;border-radius:4px;cursor:pointer}.espaciado[_ngcontent-%COMP%]{margin:.5em}@media only screen and (max-width: 768px){.table-responsive[_ngcontent-%COMP%]{overflow-x:auto}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{white-space:nowrap}}table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border-collapse:collapse}.botonRojo[_ngcontent-%COMP%]{background-color:red}.botonAmarillo[_ngcontent-%COMP%]{background-color:#2216c5}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:1px solid #dddddd;text-align:center;padding:8px}th[_ngcontent-%COMP%]{background-color:#ddd}@media (max-width: 600px){td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{display:block;border:none;text-align:left}td[_ngcontent-%COMP%]{border-bottom:1px solid #dddddd;position:relative;text-align:center}td[_ngcontent-%COMP%]:before{position:absolute;left:0;top:0;width:50%;padding-right:10px;white-space:nowrap;content:attr(data-label);float:left;font-weight:700;text-transform:uppercase}p-datatable.beatDatatable[_ngcontent-%COMP%]   .ui-datatable[_ngcontent-%COMP%]   .ui-datatable-thead[_ngcontent-%COMP%]   .ui-state-default[_ngcontent-%COMP%]{color:#000!important;line-height:2!important;text-align:center!important}.some-custom-class-name[_ngcontent-%COMP%]  th{background-color:#00f!important}}"]});const P=function(){return["/books/list"]};class u{constructor(o,e){this.shopping=o,this.route=e,this.Buys=[],this.recommended=[]}ngOnInit(){this.username=localStorage.getItem("username"),this.shopping.getBuys(this.username).subscribe({next:o=>{this.Buys=o}}),this.shopping.getRecommended(this.username).subscribe({next:o=>{this.recommended=o}})}obtenerCompras(o){this.shopping.getBuys(this.username).subscribe({next:e=>{this.Buys=e}})}}u.\u0275fac=function(o){return new(o||u)(t.Y36(_.F),t.Y36(r.F0))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-user-buys"]],decls:28,vars:5,consts:[["align","center"],[1,"centered-button"],["button","","type","button","href","#","routerLinkActive","active",1,"btn","btn-danger","espaciado",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-arrow-left-circle-fill"],["d","M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"],[1,"table-responsive"],["class","table",4,"ngIf"],[4,"ngIf"],[2,"display","block","text-align","center"],[1,"row","justify-content-center"],["class","card cartas","style","width: 18rem;","align","center",4,"ngFor","ngForOf"],[1,"table"],[4,"ngFor","ngForOf"],["alt","imgBook","width","120","height","120",3,"src"],["align","center",1,"card","cartas",2,"width","18rem"],["alt","Imagen","alt","imagen_Card",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"]],template:function(o,e){1&o&&(t._UZ(0,"app-navbar")(1,"br")(2,"br"),t.TgZ(3,"h2",0),t._uU(4,"Your Buys"),t.qZA(),t.TgZ(5,"div",1)(6,"button",2),t.O4$(),t.TgZ(7,"svg",3),t._UZ(8,"path",4),t.qZA(),t._uU(9," \xa0Back"),t.qZA()(),t.kcU(),t._UZ(10,"br")(11,"br"),t.TgZ(12,"div",5),t.YNc(13,U,17,1,"table",6),t.qZA(),t.YNc(14,w,4,0,"div",7),t._UZ(15,"br")(16,"br"),t.TgZ(17,"h4",0),t._uU(18," Recommendations"),t.qZA(),t.TgZ(19,"span",8)(20,"i"),t._uU(21,"Based on your purchases and your favorites, we have selected the most followed and purchased titles from Libreria Villarreal that you can not miss, maybe you might be interested in some of these titles: "),t.qZA()(),t._UZ(22,"br")(23,"br"),t.TgZ(24,"div",9),t.YNc(25,k,16,4,"div",10),t.qZA(),t._UZ(26,"br")(27,"app-footer")),2&o&&(t.xp6(6),t.Q6J("routerLink",t.DdM(4,P)),t.xp6(7),t.Q6J("ngIf",e.Buys.length),t.xp6(1),t.Q6J("ngIf",!e.Buys.length),t.xp6(11),t.Q6J("ngForOf",e.recommended))},dependencies:[Z.S,C.c,s.sg,s.O5,r.rH,r.Od],styles:[".centered-button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}@media only screen and (max-width: 768px){.table-responsive[_ngcontent-%COMP%]{overflow-x:auto}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{white-space:nowrap}}table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border-collapse:collapse}.botonRojo[_ngcontent-%COMP%]{background-color:red}.botonAmarillo[_ngcontent-%COMP%]{background-color:#2216c5}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:1px solid #dddddd;text-align:center;padding:8px}th[_ngcontent-%COMP%]{background-color:#ddd}@media (max-width: 600px){td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{display:block;border:none;text-align:left}td[_ngcontent-%COMP%]{border-bottom:1px solid #dddddd;position:relative;text-align:center}td[_ngcontent-%COMP%]:before{position:absolute;left:0;top:0;width:50%;padding-right:10px;white-space:nowrap;content:attr(data-label);float:left;font-weight:700;text-transform:uppercase}p-datatable.beatDatatable[_ngcontent-%COMP%]   .ui-datatable[_ngcontent-%COMP%]   .ui-datatable-thead[_ngcontent-%COMP%]   .ui-state-default[_ngcontent-%COMP%]{color:#000!important;line-height:2!important;text-align:center!important}.some-custom-class-name[_ngcontent-%COMP%]  th{background-color:#00f!important}.row.justify-content-center[_ngcontent-%COMP%]{align-items:center}}"]});const q=[{path:"",children:[{path:"list",component:g},{path:"listBuy",component:u}]}];class c{}c.\u0275fac=function(o){return new(o||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[r.Bz.forChild(q)]});class l{}l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[c,x.m,s.ez,a.u5,O.JF,r.Bz]})}}]);