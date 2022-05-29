"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2454],{2454:(O,s,a)=>{a.r(s),a.d(s,{AddContactPageModule:()=>k});var u=a(9808),r=a(4182),i=a(2159),d=a(2281),p=a(655),n=a(1269),g=a(7053),_=a(5148),f=a(8555);function m(e,l){1&e&&(n.TgZ(0,"span"),n._uU(1,"This field is required"),n.qZA())}function Z(e,l){1&e&&(n.TgZ(0,"span"),n._uU(1,"The input is invalid"),n.qZA())}function A(e,l){if(1&e&&(n.TgZ(0,"div",17),n.YNc(1,m,2,0,"span",18),n.YNc(2,Z,2,0,"span",18),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",null==t.type||null==t.type.errors?null:t.type.errors.required),n.xp6(1),n.Q6J("ngIf",null==t.type||null==t.type.errors?null:t.type.errors.type)}}function v(e,l){1&e&&(n.TgZ(0,"span"),n._uU(1,"Position is required"),n.qZA())}function h(e,l){1&e&&(n.TgZ(0,"span"),n._uU(1,"Position needs to be 8 characters"),n.qZA())}function T(e,l){if(1&e&&(n.TgZ(0,"div",17),n.YNc(1,v,2,0,"span",18),n.YNc(2,h,2,0,"span",18),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",null==t.position||null==t.position.errors?null:t.position.errors.required),n.xp6(1),n.Q6J("ngIf",null==t.position||null==t.position.errors?null:t.position.errors.minlength)}}function b(e,l){1&e&&(n.TgZ(0,"span"),n._uU(1,"Organisation is required"),n.qZA())}function C(e,l){if(1&e&&(n.TgZ(0,"div",17),n.YNc(1,b,2,0,"span",18),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",null==t.place_name||null==t.place_name.errors?null:t.place_name.errors.required)}}function q(e,l){1&e&&(n.TgZ(0,"span"),n._uU(1,"Weblink is required"),n.qZA())}function y(e,l){1&e&&(n.TgZ(0,"span"),n._uU(1,"Weblink is invalid"),n.qZA())}function P(e,l){if(1&e&&(n.TgZ(0,"div",17),n.YNc(1,q,2,0,"span",18),n.YNc(2,y,2,0,"span",18),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",null==t.web_link||null==t.web_link.errors?null:t.web_link.errors.required),n.xp6(1),n.Q6J("ngIf",null==t.web_link||null==t.web_link.errors?null:t.web_link.errors.weblink)}}function U(e,l){1&e&&(n.TgZ(0,"span"),n._uU(1,"Enroll start is required"),n.qZA())}function w(e,l){1&e&&(n.TgZ(0,"span"),n._uU(1,"Error"),n.qZA())}function I(e,l){if(1&e&&(n.TgZ(0,"div",17),n.YNc(1,U,2,0,"span",18),n.YNc(2,w,2,0,"span",18),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",null==t.enroll_start||null==t.enroll_start.errors?null:t.enroll_start.errors.enroll_start),n.xp6(1),n.Q6J("ngIf",null==t.enroll_start?null:t.enroll_start.errors)}}function x(e,l){1&e&&(n.TgZ(0,"span"),n._uU(1,"Enroll end is required"),n.qZA())}function J(e,l){if(1&e&&(n.TgZ(0,"div",17),n.YNc(1,x,2,0,"span",18),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",null==t.enroll_end||null==t.enroll_end.errors?null:t.enroll_end.errors.required)}}const Y=[{path:"",component:(()=>{class e{constructor(t,o,c,Q,M,S){this.fb=t,this.authService=o,this.alertController=c,this.departmentService=Q,this.router=M,this.loaderService=S,this.credentials=new r.cw({}),this.force_disable=!1}get type(){return this.credentials.get("type")}get place_name(){return this.credentials.get("place_name")}get enroll_start(){return this.credentials.get("enroll_start")}get enroll_end(){return this.credentials.get("enroll_end")}get position(){return this.credentials.get("position")}get web_link(){return this.credentials.get("web_link")}ngOnInit(){this.credentials=this.fb.group({type:["",[r.kI.required]],place_name:["",[r.kI.required,r.kI.minLength(8)]],position:["",[r.kI.required,r.kI.minLength(2)]],web_link:["",[r.kI.required,r.kI.pattern(/(http|https):\/\/.*/)]],enroll_start:["",[r.kI.required]],enroll_end:["",[function t(){return r.kI.nullValidator}]]})}addContact(){return(0,p.mG)(this,void 0,void 0,function*(){this.authService.addOrUpdateContact(this.credentials.value).subscribe(t=>{t&&"ok"==t.status&&(this.loaderService.showToast(t.message,"success"),this.router.navigateByUrl("/profile"))})})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(r.qu),n.Y36(g.$),n.Y36(i.Br),n.Y36(_.n),n.Y36(d.F0),n.Y36(f.D))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-add-contact"]],decls:67,vars:8,consts:[["color","primary"],["slot","start"],["size-lg","4","size-md","3","size-xs","12"],[1,""],["ion-text","",1,"white"],[3,"formGroup","ngSubmit"],[1,"input-group"],["formControlName","type","name","type"],["value","ac"],["value","job"],["class","errors",4,"ngIf"],["formControlName","position","placeholder","Student/Programmer/Manager etc.","type","text"],["formControlName","place_name","placeholder","XYZ Company/ABC School","type","text"],["formControlName","web_link","placeholder","Website of the organisation","type","text"],["presentation","date","formControlName","enroll_start"],["presentation","date","formControlName","enroll_end"],["expand","block","type","submit",3,"disabled"],[1,"errors"],[4,"ngIf"]],template:function(t,o){1&t&&(n.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),n._UZ(3,"ion-menu-button"),n.qZA(),n.TgZ(4,"ion-title"),n._uU(5,"add contact data"),n.qZA()()(),n.TgZ(6,"ion-content")(7,"ion-grid")(8,"ion-row"),n._UZ(9,"ion-col",2),n.TgZ(10,"ion-col",3)(11,"h1",4),n._uU(12,"Add information"),n.qZA(),n.TgZ(13,"p",4),n._uU(14,"Add your contact/job/academic information"),n.qZA(),n.TgZ(15,"form",5),n.NdJ("ngSubmit",function(){return o.addContact()}),n.TgZ(16,"ion-row")(17,"ion-col")(18,"div",6)(19,"ion-item")(20,"ion-label"),n._uU(21,"Type"),n.qZA(),n.TgZ(22,"ion-select",7)(23,"ion-select-option",8),n._uU(24,"Academic"),n.qZA(),n.TgZ(25,"ion-select-option",9),n._uU(26,"Job"),n.qZA()()(),n.YNc(27,A,3,2,"div",10),n.qZA()(),n.TgZ(28,"ion-col")(29,"div",6)(30,"ion-item")(31,"ion-label"),n._uU(32,"Position"),n.qZA(),n._UZ(33,"ion-input",11),n.qZA(),n.YNc(34,T,3,2,"div",10),n.qZA()()(),n.TgZ(35,"ion-row")(36,"ion-col")(37,"div",6)(38,"ion-item")(39,"ion-label"),n._uU(40,"Organisation name"),n.qZA(),n._UZ(41,"ion-input",12),n.qZA(),n.YNc(42,C,2,1,"div",10),n.qZA()(),n.TgZ(43,"ion-col")(44,"div",6)(45,"ion-item")(46,"ion-label"),n._uU(47,"Website"),n.qZA(),n._UZ(48,"ion-input",13),n.qZA(),n.YNc(49,P,3,2,"div",10),n.qZA()()(),n.TgZ(50,"ion-row")(51,"ion-col")(52,"div",6)(53,"ion-item")(54,"ion-label"),n._uU(55,"Enroll date"),n.qZA(),n._UZ(56,"ion-datetime",14),n.YNc(57,I,3,2,"div",10),n.qZA()()(),n.TgZ(58,"ion-col")(59,"div",6)(60,"ion-item")(61,"ion-label"),n._uU(62,"Enroll end"),n.qZA(),n._UZ(63,"ion-datetime",15),n.YNc(64,J,2,1,"div",10),n.qZA()()()(),n.TgZ(65,"ion-button",16),n._uU(66,"Submit"),n.qZA()()()()()()),2&t&&(n.xp6(15),n.Q6J("formGroup",o.credentials),n.xp6(12),n.Q6J("ngIf",((null==o.type?null:o.type.dirty)||(null==o.type?null:o.type.touched))&&(null==o.type?null:o.type.errors)),n.xp6(7),n.Q6J("ngIf",((null==o.position?null:o.position.dirty)||(null==o.position?null:o.position.touched))&&o.position.errors),n.xp6(8),n.Q6J("ngIf",((null==o.place_name?null:o.place_name.dirty)||(null==o.place_name?null:o.place_name.touched))&&o.place_name.errors),n.xp6(7),n.Q6J("ngIf",((null==o.web_link?null:o.web_link.dirty)||(null==o.web_link?null:o.web_link.touched))&&o.web_link.errors),n.xp6(8),n.Q6J("ngIf",((null==o.enroll_start?null:o.enroll_start.dirty)||(null==o.enroll_start?null:o.enroll_start.touched))&&o.enroll_start.errors),n.xp6(7),n.Q6J("ngIf",((null==o.enroll_end?null:o.enroll_end.dirty)||(null==o.enroll_end?null:o.enroll_end.touched))&&o.enroll_end.errors),n.xp6(1),n.Q6J("disabled",!o.credentials.valid||o.force_disable))},directives:[i.Gu,i.sr,i.Sm,i.fG,i.wd,i.W2,i.jY,i.Nd,i.wI,r._Y,r.JL,r.sg,i.Ie,i.Q$,i.t9,i.QI,r.JJ,r.u,i.n0,u.O5,i.pK,i.j9,i.x4,i.YG],styles:["ion-content[_ngcontent-%COMP%]{--padding-top: 5%;--padding-start: 0%;--background: url(https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80) 0 0/100% 100% no-repeat}form[_ngcontent-%COMP%]{max-width:80%;align-items:center}.input-group[_ngcontent-%COMP%]{background:#fff;border-radius:10px;overflow:hidden;margin-bottom:15px}.errors[_ngcontent-%COMP%]{font-size:small;color:#fff;background:var(--ion-color-danger);padding-left:15px;padding-top:5px;padding-bottom:5px}.white[_ngcontent-%COMP%]{color:#fff}"]}),e})()}];let N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[d.Bz.forChild(Y)],d.Bz]}),e})(),k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[u.ez,r.u5,r.UX,i.Pc,N]]}),e})()}}]);