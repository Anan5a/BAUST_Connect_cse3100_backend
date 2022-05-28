"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4618],{4618:(w,d,i)=>{i.r(d),i.d(d,{HomepagePageModule:()=>Q});var p=i(9808),l=i(4182),r=i(2159),s=i(2281),e=i(1269),m=i(7053),f=i(5148),g=i(5722),v=i(7221),Z=i(520),_=i(4376),q=i(1188),h=i(8555);let T=(()=>{class n{constructor(t,o,u,c){this.httpClient=t,this.httpconfig=o,this.storageService=u,this.loaderService=c,this.apiRoot=g.I.apiUrl,this.path="homepage",this.csrf="sanctum/csrf-cookie",this.siteRoot=g.I.siteRoot,this.completePath=this.apiRoot+this.path}search(t){return this.httpClient.post(this.completePath+"/search",t).pipe((0,v.K)(this.httpconfig.handleError("home search error occurred")))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(Z.eN),e.LFG(_.N),e.LFG(q.V),e.LFG(h.D))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function b(n,a){1&n&&(e.TgZ(0,"span"),e._uU(1,"The keyword is required"),e.qZA())}function y(n,a){1&n&&(e.TgZ(0,"span"),e._uU(1,"The input is invalid"),e.qZA())}function A(n,a){if(1&n&&(e.TgZ(0,"div",15),e.YNc(1,b,2,0,"span",16),e.YNc(2,y,2,0,"span",16),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.query||null==t.query.errors?null:t.query.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.query||null==t.query.errors?null:t.query.errors.query)}}function P(n,a){if(1&n&&(e.TgZ(0,"ion-select-option",17),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.AsE("",t.name_short," - ",t.name," ")}}function H(n,a){1&n&&(e.TgZ(0,"span"),e._uU(1,"Select this field"),e.qZA())}function U(n,a){1&n&&(e.TgZ(0,"span"),e._uU(1,"The input is invalid"),e.qZA())}function I(n,a){if(1&n&&(e.TgZ(0,"div",15),e.YNc(1,H,2,0,"span",16),e.YNc(2,U,2,0,"span",16),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.dept||null==t.dept.errors?null:t.dept.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.dept||null==t.dept.errors?null:t.dept.errors.dept)}}function Y(n,a){1&n&&(e.TgZ(0,"span"),e._uU(1,"The keyword is required"),e.qZA())}function x(n,a){1&n&&(e.TgZ(0,"span"),e._uU(1,"The input is invalid"),e.qZA())}function J(n,a){if(1&n&&(e.TgZ(0,"div",15),e.YNc(1,Y,2,0,"span",16),e.YNc(2,x,2,0,"span",16),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.batch||null==t.batch.errors?null:t.batch.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.batch||null==t.batch.errors?null:t.batch.errors.batch)}}function N(n,a){if(1&n&&(e.TgZ(0,"ion-col")(1,"ion-item")(2,"ion-avatar"),e._UZ(3,"img",18),e.qZA(),e.TgZ(4,"ion-label",19)(5,"h2"),e._uU(6),e.qZA(),e.TgZ(7,"h3"),e._uU(8),e.qZA(),e.TgZ(9,"p"),e._uU(10),e.qZA()()()()),2&n){const t=a.$implicit;e.xp6(4),e.MGl("routerLink","/profile/view/uni-",null==t?null:t.student_id,""),e.xp6(2),e.Oqu(null==t?null:t.full_name),e.xp6(2),e.AsE("",null==t?null:t.student_id," - ",null==t||null==t.department?null:t.department.name_short,""),e.xp6(2),e.hij("",null==t?null:t.batch," batch")}}const S=[{path:"",component:(()=>{class n{constructor(t,o,u,c,C,M,O){this.fb=t,this.authService=o,this.alertController=u,this.departmentService=c,this.router=C,this.homepageService=M,this.loaderService=O,this.search_data=new l.cw({}),this.force_disable=!1,this.search_results=[]}get query(){return this.search_data.get("query")}get batch(){return this.search_data.get("batch")}get dept(){return this.search_data.get("dept")}ngOnInit(){this.search_data=this.fb.group({query:["",[l.kI.required,l.kI.minLength(4),l.kI.maxLength(14)]],batch:["",[l.kI.pattern(/(\d+|$^)/)]],dept:["",[l.kI.required]]}),this.load_departments()}search(){this.homepageService.search(this.search_data.value).subscribe(t=>{t&&"ok"==t.status&&(this.search_results=t.data.data,this.full_response_body=t.data)})}load_departments(){console.log("loading departments"),this.departmentService.getDepartments().subscribe(t=>{this.departments=t})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.qu),e.Y36(m.$),e.Y36(r.Br),e.Y36(f.n),e.Y36(s.F0),e.Y36(T),e.Y36(h.D))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-homepage"]],decls:48,vars:7,consts:[["color","primary"],["slot","start"],["size-lg","4","size-md","3","size-xs","12"],[3,"formGroup","ngSubmit"],["ion-text","",1,"ion-color-dark"],[1,"input-group"],["type","text","formControlName","query","placeholder","Name/Student ID"],["class","errors",4,"ngIf"],["formControlName","dept","name","dept"],["value","all"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","batch","placeholder","Eg. 10"],["expand","block","type","submit",3,"disabled"],["name","search"],[4,"ngFor","ngForOf"],[1,"errors"],[4,"ngIf"],[3,"value"],["src","../../../../assets/shapes.svg"],[3,"routerLink"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"home"),e.qZA()()(),e.TgZ(6,"ion-content")(7,"ion-grid")(8,"ion-row"),e._UZ(9,"ion-col",2),e.TgZ(10,"ion-col")(11,"form",3),e.NdJ("ngSubmit",function(){return o.search()}),e.TgZ(12,"h1",4),e._uU(13,"Find people"),e.qZA(),e.TgZ(14,"p",4),e._uU(15,"Find your classmates, batch mates and seniors using here"),e.qZA(),e.TgZ(16,"ion-row")(17,"ion-col")(18,"div",5)(19,"ion-item")(20,"ion-label"),e._uU(21,"Keyword"),e.qZA(),e._UZ(22,"ion-input",6),e.qZA(),e.YNc(23,A,3,2,"div",7),e.qZA()()(),e.TgZ(24,"ion-row")(25,"ion-col")(26,"div",5)(27,"ion-item")(28,"ion-label"),e._uU(29,"Department"),e.qZA(),e.TgZ(30,"ion-select",8)(31,"ion-select-option",9),e._uU(32,"All"),e.qZA(),e.YNc(33,P,2,3,"ion-select-option",10),e.qZA()(),e.YNc(34,I,3,2,"div",7),e.qZA()(),e.TgZ(35,"ion-col")(36,"div",5)(37,"ion-item")(38,"ion-label"),e._uU(39,"Batch"),e.qZA(),e._UZ(40,"ion-input",11),e.qZA(),e.YNc(41,J,3,2,"div",7),e.qZA()()(),e.TgZ(42,"ion-button",12),e._UZ(43,"ion-icon",13),e._uU(44," Find"),e.qZA()()()()(),e.TgZ(45,"ion-grid")(46,"ion-row"),e.YNc(47,N,11,5,"ion-col",14),e.qZA()()()),2&t&&(e.xp6(11),e.Q6J("formGroup",o.search_data),e.xp6(12),e.Q6J("ngIf",((null==o.query?null:o.query.dirty)||(null==o.query?null:o.query.touched))&&(null==o.query?null:o.query.errors)),e.xp6(10),e.Q6J("ngForOf",o.departments),e.xp6(1),e.Q6J("ngIf",((null==o.dept?null:o.dept.dirty)||(null==o.dept?null:o.dept.touched))&&(null==o.dept?null:o.dept.errors)),e.xp6(7),e.Q6J("ngIf",((null==o.batch?null:o.batch.dirty)||(null==o.query?null:o.query.touched))&&(null==o.batch?null:o.batch.errors)),e.xp6(1),e.Q6J("disabled",!o.search_data.valid||o.force_disable),e.xp6(5),e.Q6J("ngForOf",o.search_results))},directives:[r.Gu,r.sr,r.Sm,r.fG,r.wd,r.W2,r.jY,r.Nd,r.wI,l._Y,l.JL,l.sg,r.Ie,r.Q$,r.pK,r.j9,l.JJ,l.u,p.O5,r.t9,r.QI,r.n0,p.sg,r.YG,r.gu,r.BJ,r.YI,s.rH],styles:["ion-content[_ngcontent-%COMP%]{--padding-top: 10%;--background: url(baust.9ffba7f12f596d1b.jpg) 0 0/100% 100% no-repeat}form[_ngcontent-%COMP%]{max-width:500px;align-items:center;background:white}.input-group[_ngcontent-%COMP%]{background:#fff;border-radius:10px;overflow:hidden;margin-bottom:15px}.errors[_ngcontent-%COMP%]{font-size:small;color:#fff;background:var(--ion-color-danger);padding-left:15px;padding-top:5px;padding-bottom:5px}.white[_ngcontent-%COMP%]{color:#fff}"]}),n})()}];let F=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[s.Bz.forChild(S)],s.Bz]}),n})(),Q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[p.ez,l.u5,r.Pc,F,l.UX]]}),n})()}}]);