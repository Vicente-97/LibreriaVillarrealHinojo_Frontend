"use strict";(self.webpackChunkLibreriaVillarrealVicente=self.webpackChunkLibreriaVillarrealVicente||[]).push([[762],{762:(K,A,s)=>{s.r(A),s.d(A,{UsersModule:()=>m});var v=s(6895),l=s(7825),Z=s(6752),e=s(8256);class u{}u.\u0275fac=function(t){return new(t||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-adduser"]],decls:2,vars:0,template:function(t,n){1&t&&(e.TgZ(0,"p"),e._uU(1,"adduser works!"),e.qZA())},encapsulation:2});var w=s(5226),c=s.n(w),_=s(41),r=s(433);const M=["deleteUser"],T=function(){return["/user/list"]};class p{constructor(t,n,i){this.servicio=t,this.route=n,this.router=i}ngOnInit(){this.username=this.route.snapshot.params.id,console.log(this.username),this.servicio.getUser(this.username).subscribe({next:t=>{this.username=t.username,this.name=t.name,this.email=t.email,this.img=t.img,this.user=t}})}deletedUser(){this.servicio.deleteUser(this.username).subscribe({next:t=>{t&&(console.log(t),this.deleteUserForm.valid?(c().fire({icon:"success",title:"User deleted sucess",text:"\xa1User deleted!"}),this.router.navigate(["/user/list"])):c().fire({icon:"error",title:"Oops...",text:"sorry!",footer:'<a href="">Why do I have this issue?</a>'}))}})}}p.\u0275fac=function(t){return new(t||p)(e.Y36(_.K),e.Y36(l.gz),e.Y36(l.F0))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-delete-user"]],viewQuery:function(t,n){if(1&t&&e.Gf(M,5),2&t){let i;e.iGM(i=e.CRH())&&(n.deleteUserForm=i.first)}},decls:24,vars:6,consts:[[1,"container"],[1,"heading"],["action","#","method","post",1,"form",3,"ngSubmit"],["deleteUser","ngForm"],[1,"form-group"],["alt","avatar",1,"rounded-circle","img-fluid",2,"width","150px",3,"src"],["for","input2"],["type","text","id","nombre","placeholder","Introduce el nombre","required","","ngModel","","name","name","readonly","",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","nombre","placeholder","Introduce el nombre","required","","ngModel","","name","username","readonly","",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","nombre","placeholder","Introduce el nombre","required","","ngModel","","name","email","readonly","",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-danger","espacioButton"],["button","","type","button","href","#","routerLinkActive","active",1,"btn","btn-primary",3,"routerLink"]],template:function(t,n){1&t&&(e.TgZ(0,"body")(1,"div",0)(2,"h1",1),e._uU(3,"Delete User"),e.qZA(),e.TgZ(4,"form",2,3),e.NdJ("ngSubmit",function(){return n.deletedUser()}),e.TgZ(6,"div",4)(7,"div",4),e._UZ(8,"img",5),e.qZA(),e.TgZ(9,"label",6),e._uU(10,"Name:"),e.qZA(),e.TgZ(11,"input",7),e.NdJ("ngModelChange",function(a){return n.name=a}),e.qZA()(),e.TgZ(12,"div",4)(13,"label",6),e._uU(14,"Username"),e.qZA(),e.TgZ(15,"input",8),e.NdJ("ngModelChange",function(a){return n.username=a}),e.qZA()(),e.TgZ(16,"div",4)(17,"label",6),e._uU(18,"Username"),e.qZA(),e.TgZ(19,"input",9),e.NdJ("ngModelChange",function(a){return n.email=a}),e.qZA()(),e.TgZ(20,"button",10),e._uU(21,"Delete User"),e.qZA(),e.TgZ(22,"button",11),e._uU(23,"Back"),e.qZA()()()()),2&t&&(e.xp6(8),e.s9C("src",n.user.img,e.LSH),e.xp6(3),e.Q6J("ngModel",n.name),e.xp6(4),e.Q6J("ngModel",n.username),e.xp6(4),e.Q6J("ngModel",n.email),e.xp6(3),e.Q6J("routerLink",e.DdM(5,T)))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.On,r.F,l.rH,l.Od],styles:["body[_ngcontent-%COMP%]{background-image:url(https://images6.alphacoders.com/407/407515.jpg);background-size:cover;background-position:center;background-repeat:no-repeat;height:100vh;overflow:hidden}.container[_ngcontent-%COMP%]{width:400px;margin:100px auto;border:none;background-color:#f7f7f7;transition:all .3s ease;box-shadow:0 14px 80px #22233a33;padding:30px 35px;border-radius:15px;overflow:hidden}.heading[_ngcontent-%COMP%]{font-weight:700;font-size:1.8rem;margin-top:0;margin-bottom:30px}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:600}.form-control[_ngcontent-%COMP%]{border-radius:10px;margin-top:1em;margin-bottom:1em}.form-control[_ngcontent-%COMP%]:focus{box-shadow:none;border-color:#b4d4f2}.btn-primary[_ngcontent-%COMP%]{background-color:#5c5ae5;border:none;transition:all .3s ease}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#4543d6}.form-control-feedback[_ngcontent-%COMP%]{position:absolute;top:50%;right:20px;transform:translateY(-50%);z-index:2;color:#ccc}.formulario[_ngcontent-%COMP%]{padding-top:15em}"]});var C=s(9298),x=s(4696),y=s(5227),U=s(7318),P=s(805);function O(o,t){1&o&&(e.TgZ(0,"tr")(1,"th",11),e._uU(2,"Username"),e._UZ(3,"p-sortIcon",12),e.qZA(),e.TgZ(4,"th",13),e._uU(5,"Name"),e._UZ(6,"p-sortIcon",14),e.qZA(),e.TgZ(7,"th",15),e._uU(8,"Email"),e._UZ(9,"p-sortIcon",16),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Img"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"rol"),e.qZA()())}function F(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"td")(1,"label",19)(2,"input",20),e.NdJ("change",function(){e.CHM(n);const a=e.oxw().$implicit,b=e.oxw(2);return e.KtG(b.actualizarAdmin(a.username))}),e.qZA(),e._UZ(3,"span",21),e.qZA()()}if(2&o){const n=e.oxw().$implicit;e.xp6(2),e.Q6J("checked","ADMIN"===n.role)}}const q=function(o){return["/user/deleteUser",o]};function k(o,t){if(1&o&&(e.TgZ(0,"button",23),e.O4$(),e.TgZ(1,"svg",24),e._UZ(2,"path",25),e.qZA(),e._uU(3,"Delete"),e.qZA()),2&o){const n=e.oxw(2).$implicit;e.Q6J("routerLink",e.VKq(1,q,n.username))}}function I(o,t){if(1&o&&(e.TgZ(0,"td"),e.YNc(1,k,4,3,"button",22),e.qZA()),2&o){const n=e.oxw(3);e.xp6(1),e.Q6J("ngIf",n.isAdmin)}}function J(o,t){if(1&o&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._UZ(8,"img",17),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.YNc(11,F,4,1,"td",18),e.YNc(12,I,2,1,"td",18),e.qZA()),2&o){const n=t.$implicit,i=e.oxw(2);e.xp6(2),e.Oqu(n.username),e.xp6(2),e.Oqu(n.name),e.xp6(2),e.Oqu(n.email),e.xp6(2),e.Q6J("src",n.img,e.LSH),e.xp6(2),e.Oqu(n.role),e.xp6(1),e.Q6J("ngIf",n.username!=i.username),e.xp6(1),e.Q6J("ngIf",n.username!=i.username)}}const S=function(){return[10]};function L(o,t){if(1&o&&(e.TgZ(0,"p-table",7,8),e.YNc(2,O,14,0,"ng-template",9),e.YNc(3,J,13,7,"ng-template",10),e.qZA()),2&o){const n=e.oxw();e.Q6J("value",n.users)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",e.DdM(5,S))}}class g{constructor(t,n){this.servicio=t,this.authService=n,this.users=[],this.username=localStorage.getItem("username"),this.jwt=null}ngOnInit(){this.getUser(),this.jwt=localStorage.getItem("jwt"),this.userDetails=localStorage.getItem("username"),this.jwt&&(this.isAdmin=this.authService.isUserAdmin(this.jwt))}getUser(){this.servicio.getUsers().subscribe({next:t=>{this.users=t}})}actualizarAdmin(t){const n=this.users.find(i=>i.username===t);n&&("ADMIN"===n.role?this.servicio.updateUserUser(t).subscribe({next:i=>{window.location.reload()}}):this.servicio.updateUserAdmin(t).subscribe({next:i=>{window.location.reload()}}))}}function N(o,t){1&o&&(e.TgZ(0,"span",24),e._uU(1," must be 3 letters "),e.qZA())}function j(o,t){1&o&&(e.TgZ(0,"span",24),e._uU(1," must be a valid Email "),e.qZA())}function Q(o,t){1&o&&(e.TgZ(0,"span",24),e._uU(1," It must be a password of more than 8 letters "),e.qZA())}function Y(o,t){1&o&&(e.TgZ(0,"span",24),e._uU(1," It must be a password of more than 8 letters "),e.qZA())}function D(o,t){1&o&&(e.TgZ(0,"span",24),e._uU(1," Passwords must match "),e.qZA())}g.\u0275fac=function(t){return new(t||g)(e.Y36(_.K),e.Y36(C.e))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-list"]],decls:10,vars:1,consts:[[1,"container-fluid"],[1,"col"],[1,"row"],[1,"col-md-6"],[1,"m-4"],[1,"row","d-flex","justify-content-center","w-100","table-responsive"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","class","my-datatable",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions",4,"ngIf"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",1,"my-datatable",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pSortableColumn","isbn"],["field","username"],["pSortableColumn","title"],["field","name"],["pSortableColumn","author"],["field","email"],["alt","imagenUser","width","120","height","120",1,"imgRedonda",3,"src"],[4,"ngIf"],[1,"switch"],["type","checkbox",3,"checked","change"],[1,"slider"],["button","","type","button","class","btn btn-danger","href","#","routerLinkActive","active",3,"routerLink",4,"ngIf"],["button","","type","button","href","#","routerLinkActive","active",1,"btn","btn-danger",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-trash-fill"],["d","M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"]],template:function(t,n){1&t&&(e._UZ(0,"app-navbar"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"h1",4),e._uU(6,"User List"),e.qZA()()(),e.TgZ(7,"div",5),e.YNc(8,L,4,6,"p-table",6),e.qZA()()(),e._UZ(9,"app-footer")),2&t&&(e.xp6(8),e.Q6J("ngIf",n.users))},dependencies:[v.O5,x.S,y.c,U.iA,P.jx,U.lQ,U.fz,l.rH,l.Od],styles:['.imgRedonda[_ngcontent-%COMP%]{width:110px;height:80px;border-radius:100px}.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:40px;height:24px;margin-right:10px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;inset:0;border-radius:20px;background-color:#ccc;transition:.4s}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:20px;width:20px;left:2px;bottom:2px;border-radius:50%;background-color:#fff;transition:.4s}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#2ecc71}input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #2ecc71}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translate(16px)}table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border-collapse:collapse}.botonRojo[_ngcontent-%COMP%]{background-color:red}.botonAmarillo[_ngcontent-%COMP%]{background-color:#2216c5}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:1px solid #dddddd;text-align:center;padding:8px}th[_ngcontent-%COMP%]{background-color:#ddd}@media (max-width: 600px){td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{display:block;border:none;text-align:left}td[_ngcontent-%COMP%]{border-bottom:1px solid #dddddd;position:relative;text-align:center}td[_ngcontent-%COMP%]:before{position:absolute;left:0;top:0;width:50%;padding-right:10px;white-space:nowrap;content:attr(data-label);float:left;font-weight:700;text-transform:uppercase}p-datatable.beatDatatable[_ngcontent-%COMP%]   .ui-datatable[_ngcontent-%COMP%]   .ui-datatable-thead[_ngcontent-%COMP%]   .ui-state-default[_ngcontent-%COMP%]{color:#000!important;line-height:2!important;text-align:center!important}.some-custom-class-name[_ngcontent-%COMP%]  th{background-color:#00f!important}}']});const V=function(){return["/books/list"]};class h{constructor(t,n,i,a,b){this.fb=t,this.router=n,this.servicio=i,this.route=a,this.authSer=b,this.user={},this.jwt=localStorage.getItem("jwt"),this.json={username:"",name:"",password:"",email:""},this.myForm=this.fb.group({nombre:["",[r.kI.required,r.kI.minLength(3)]],email:["",[r.kI.required,r.kI.email]],password:["",[r.kI.required,r.kI.minLength(8)]],confirPassword:["",[r.kI.required,r.kI.minLength(8),this.match("password")]]})}isValidField(t){return this.myForm?.controls[t].errors&&this.myForm?.controls[t].touched&&this.myForm?.controls[t].invalid}isValidPass(t){return this.myForm?.controls[t].errors&&this.myForm?.controls[t].touched&&this.myForm?.controls[t].invalid||this.myForm?.controls[t].errors?.mismatch}match(t){return n=>n.parent?n.value===n.parent.get(t)?.value?null:{mismatch:!0}:null}ngOnInit(){const t=this.route.snapshot.params.id;null!=this.jwt&&(this.username=this.authSer.returnUser(this.jwt)),this.servicio.getUser(this.username).subscribe({next:n=>{this.userActual=n,this.servicio.getUser(t).subscribe({next:i=>{this.user=i,this.userActual.username!=this.user.username&&this.router.navigate(["**"])}})}})}saveUpdate(){this.json.username=this.user.username,this.json.password=this.myForm.get("password")?.value,this.json.email=this.myForm.get("email")?.value,this.json.name=this.myForm.get("nombre")?.value,this.servicio.UpdateUser(this.json,this.user.username).subscribe({next:t=>{t&&(c().fire({icon:"success",title:"User Updated",text:"\xa1User Update sucess!"}),this.myForm.reset())},error:t=>{c().fire({icon:"error",title:"Oops...",text:"sorry!",footer:'<a href="">Why do I have this issue?</a>'})}})}save(){this.myForm.valid&&this.myForm.markAllAsTouched()}onFileChange(t){t.target.files.length>0&&this.myForm.patchValue({fileSource:t.target.files[0]})}}h.\u0275fac=function(t){return new(t||h)(e.Y36(r.qu),e.Y36(l.F0),e.Y36(_.K),e.Y36(l.gz),e.Y36(C.e))},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-update-user"]],decls:56,vars:12,consts:[[1,"section"],[1,"container","py-5"],[1,"row"],[1,"col-lg-12"],[1,"card","mb-4"],[1,"titulo"],["action","#","enctype","multipart/form-data",1,"form",3,"formGroup","ngSubmit"],["align","center",1,"form-group"],["alt","avatar",1,"rounded-circle","img-fluid",2,"width","150px","height","150px",3,"src"],[1,"card-body"],[1,"col-sm-3"],[1,"mb-0"],[1,"col-sm-9"],["for","input2"],["type","text","placeholder","Name","formControlName","nombre","name","nombre",1,"form-control",3,"ngModel","ngModelChange"],["class","form-text text-danger",4,"ngIf"],["type","email","placeholder","Email","formControlName","email","name","email",1,"form-control",3,"ngModel","ngModelChange"],[1,"fa","fa-envelope","form-control-feedback"],["type","password","placeholder","*************************","formControlName","password","name","password",1,"form-control"],[1,"fa","fa-lock","form-control-feedback"],["type","password","placeholder","*************************","formControlName","confirPassword","name","confirmpassword",1,"form-control"],["align","right"],["type","submit",1,"btn","btn-primary","espacioButton",3,"disabled"],["button","","type","button","href","#","routerLinkActive","active",1,"btn","btn-danger",3,"routerLink"],[1,"form-text","text-danger"]],template:function(t,n){1&t&&(e._UZ(0,"app-navbar"),e.TgZ(1,"section",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"h3",5),e._uU(7,"Update Profile"),e.qZA(),e.TgZ(8,"form",6),e.NdJ("ngSubmit",function(){return n.saveUpdate()}),e.TgZ(9,"div",7),e._UZ(10,"img",8),e.qZA(),e.TgZ(11,"div",9)(12,"div",2)(13,"div",10)(14,"p",11),e._uU(15,"Name:"),e.qZA()(),e.TgZ(16,"div",12)(17,"label",13),e._uU(18,"Name:"),e.qZA(),e.TgZ(19,"input",14),e.NdJ("ngModelChange",function(a){return n.user.name=a}),e.qZA(),e.YNc(20,N,2,0,"span",15),e.qZA()(),e._UZ(21,"hr"),e.TgZ(22,"div",2)(23,"div",10)(24,"p",11),e._uU(25,"Email:"),e.qZA()(),e.TgZ(26,"div",12)(27,"input",16),e.NdJ("ngModelChange",function(a){return n.user.email=a}),e.qZA(),e._UZ(28,"i",17),e.YNc(29,j,2,0,"span",15),e.qZA()(),e._UZ(30,"hr"),e.TgZ(31,"div",2)(32,"div",10)(33,"p",11),e._uU(34,"Password :"),e.qZA()(),e.TgZ(35,"div",12),e._UZ(36,"input",18)(37,"i",19),e.YNc(38,Q,2,0,"span",15),e.qZA()(),e._UZ(39,"hr"),e.TgZ(40,"div",2)(41,"div",10)(42,"p",11),e._uU(43,"Confirm password:"),e.qZA()(),e.TgZ(44,"div",12),e._UZ(45,"input",20)(46,"i",19),e.YNc(47,Y,2,0,"span",15),e.YNc(48,D,2,0,"span",15),e.qZA()(),e._UZ(49,"hr"),e.TgZ(50,"div",21)(51,"button",22),e._uU(52,"Update user"),e.qZA(),e.TgZ(53,"button",23),e._uU(54,"Back"),e.qZA()()()()()()()()(),e._UZ(55,"app-footer")),2&t&&(e.xp6(8),e.Q6J("formGroup",n.myForm),e.xp6(2),e.s9C("src",n.user.img,e.LSH),e.xp6(9),e.Q6J("ngModel",n.user.name),e.xp6(1),e.Q6J("ngIf",n.isValidField("nombre")),e.xp6(7),e.Q6J("ngModel",n.user.email),e.xp6(2),e.Q6J("ngIf",n.isValidField("email")),e.xp6(9),e.Q6J("ngIf",n.isValidField("password")),e.xp6(9),e.Q6J("ngIf",n.isValidField("confirPassword")),e.xp6(1),e.Q6J("ngIf",n.isValidPass("confirPassword")),e.xp6(3),e.Q6J("disabled",n.myForm.invalid),e.xp6(2),e.Q6J("routerLink",e.DdM(11,V)))},dependencies:[v.O5,x.S,y.c,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,l.rH,l.Od],styles:["#page-container[_ngcontent-%COMP%]{position:relative;min-height:100vh}#content-wrap[_ngcontent-%COMP%]{padding-bottom:2.5rem}#footer[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%;height:2.5rem}.espacioButton[_ngcontent-%COMP%]{margin:1em}.section[_ngcontent-%COMP%]{background-image:url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages6.alphacoders.com%2F348%2F348731.jpg&f=1&nofb=1&ipt=43d103699677cdeb562e799ab7081dbeb17a3b12cd375df1589e22de846d2a20&ipo=images)}"]});const z=function(){return["/books/list"]};class f{constructor(t,n,i,a,b){this.fb=t,this.router=n,this.servicio=i,this.route=a,this.authSer=b,this.user={},this.jwt=localStorage.getItem("jwt"),this.myForm=this.fb.group({fotoPerfil:["",[r.kI.required]],fileSource:["",[r.kI.required]]})}ngOnInit(){const t=this.route.snapshot.params.id;null!=this.jwt&&(this.username=this.authSer.returnUser(this.jwt)),this.servicio.getUser(this.username).subscribe({next:n=>{this.userActual=n,this.servicio.getUser(t).subscribe({next:i=>{this.user=i,this.userActual.username!=this.user.username&&this.router.navigate(["**"])}})}})}isValidField(t){return this.myForm?.controls[t].errors&&this.myForm?.controls[t].touched&&this.myForm?.controls[t].invalid}onFileChange(t){t.target.files.length>0&&this.myForm.patchValue({fileSource:t.target.files[0]})}save(){this.myForm.valid&&this.myForm.markAllAsTouched()}saveUpdate(){null==this.myForm.get("fileSource")&&(c().fire({icon:"error",title:"Oops...",text:"sorry, The photo cannot be empty!",footer:'<a href="">Why do I have this issue?</a>'}),this.router.navigate(["/"])),this.servicio.updateUserProfilePic(this.user.username,this.myForm.get("fileSource")?.value).subscribe({next:t=>{t&&(c().fire({icon:"success",title:"User Updated",text:"\xa1User Update sucess!"}),window.location.reload(),this.myForm.reset())},error:t=>{c().fire({icon:"error",title:"Oops...",text:"sorry!",footer:'<a href="">Why do I have this issue?</a>'})}})}}f.\u0275fac=function(t){return new(t||f)(e.Y36(r.qu),e.Y36(l.F0),e.Y36(_.K),e.Y36(l.gz),e.Y36(C.e))},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-update-photo"]],decls:27,vars:5,consts:[[1,"section"],[1,"container","py-5"],[1,"row"],[1,"col-lg-12"],[1,"card","mb-4"],[1,"titulo"],["action","#","enctype","multipart/form-data",1,"form",3,"formGroup","ngSubmit"],["align","center",1,"form-group"],["alt","avatar",1,"rounded-circle","img-fluid",2,"width","150px","height","150px",3,"src"],[1,"card-body"],[1,"col-sm-3"],[1,"mb-0"],[1,"col-sm-9"],["type","file","placeholder","Photo","formControlName","fotoPerfil","name","fotoPerfil","required","",1,"form-control",3,"change"],[1,"fa","fa-lock","form-control-feedback"],["align","right"],["type","submit",1,"btn","btn-primary","espacioButton",3,"disabled"],["button","","type","button","href","#","routerLinkActive","active",1,"btn","btn-danger",3,"routerLink"]],template:function(t,n){1&t&&(e._UZ(0,"app-navbar"),e.TgZ(1,"section",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"h3",5),e._uU(7,"Update Profile pic:"),e.qZA(),e.TgZ(8,"form",6),e.NdJ("ngSubmit",function(){return n.saveUpdate()}),e.TgZ(9,"div",7),e._UZ(10,"img",8),e.qZA(),e.TgZ(11,"div",9),e._UZ(12,"hr"),e.TgZ(13,"div",2)(14,"div",10)(15,"p",11),e._uU(16,"Profile pic:"),e.qZA()(),e.TgZ(17,"div",12)(18,"input",13),e.NdJ("change",function(a){return n.onFileChange(a)}),e.qZA(),e._UZ(19,"i",14),e.qZA()(),e._UZ(20,"hr"),e.TgZ(21,"div",15)(22,"button",16),e._uU(23,"Update profile pic"),e.qZA(),e.TgZ(24,"button",17),e._uU(25,"Back"),e.qZA()()()()()()()()(),e._UZ(26,"app-footer")),2&t&&(e.xp6(8),e.Q6J("formGroup",n.myForm),e.xp6(2),e.s9C("src",n.user.img,e.LSH),e.xp6(12),e.Q6J("disabled",n.myForm.invalid),e.xp6(2),e.Q6J("routerLink",e.DdM(4,z)))},dependencies:[x.S,y.c,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u,l.rH,l.Od],styles:["#page-container[_ngcontent-%COMP%]{position:relative;min-height:100vh}#content-wrap[_ngcontent-%COMP%]{padding-bottom:2.5rem}#footer[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%;height:2.5rem}.espacioButton[_ngcontent-%COMP%]{margin:1em}.section[_ngcontent-%COMP%]{background-image:url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages6.alphacoders.com%2F348%2F348731.jpg&f=1&nofb=1&ipt=43d103699677cdeb562e799ab7081dbeb17a3b12cd375df1589e22de846d2a20&ipo=images)}"]});const H=[{path:"",children:[{path:"addUser",canActivate:[Z.A],component:u},{path:"deleteUser/:id",canActivate:[Z.A],component:p},{path:"list",canActivate:[Z.A],component:g},{path:"updateUser/:id",component:h},{path:"updateUserPhoto/:id",component:f},{path:"**",redirectTo:"user"}]}];class d{}d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[l.Bz.forChild(H)]});var B=s(4466),R=s(5593),G=s(1997);class m{}m.\u0275fac=function(t){return new(t||m)},m.\u0275mod=e.oAB({type:m}),m.\u0275inj=e.cJS({imports:[v.ez,d,B.m,r.UX,U.U$,R.hJ,G.U,l.Bz,r.u5]})}}]);