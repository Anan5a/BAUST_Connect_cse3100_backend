"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6946],{6946:(I,c,s)=>{s.r(c),s.d(c,{ProfilePageModule:()=>A});var r=s(9808),d=s(4182),o=s(2159),a=s(2281),f=s(8091),n=s(1269),m=s(7053),p=s(8555);function g(l,i){1&l&&(n.TgZ(0,"ion-list")(1,"ion-item")(2,"h1"),n._uU(3,"NO ITEM FOUND"),n.qZA()()())}function h(l,i){if(1&l&&(n.TgZ(0,"ion-list")(1,"ion-item")(2,"ion-label")(3,"h2"),n._UZ(4,"ion-icon",2),n._uU(5),n.qZA(),n.TgZ(6,"h3"),n._uU(7),n.qZA(),n.TgZ(8,"p"),n._uU(9),n.qZA()()()()),2&l){const e=i.$implicit,t=n.oxw();n.xp6(5),n.hij(" ",null==e.channel_data?null:e.channel_data.place_name,""),n.xp6(2),n.lnq("",null==e.channel_data?null:e.channel_data.position," (",t.date2str(null==e.channel_data?null:e.channel_data.enroll_start)," - ",t.date2str(null==e.channel_data?null:e.channel_data.enroll_end),")"),n.xp6(2),n.Oqu(null==e.channel_data?null:e.channel_data.web_link)}}let P=(()=>{class l{constructor(){this.contacts=[]}ngOnInit(){}date2str(e){return null==e?"current":e.substr(0,4)}}return l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-profile-item"]],inputs:{contacts:"contacts"},decls:2,vars:2,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],["name","business"]],template:function(e,t){1&e&&(n.YNc(0,g,4,0,"ion-list",0),n.YNc(1,h,10,5,"ion-list",1)),2&e&&(n.Q6J("ngIf",(null==t.contacts?null:t.contacts.length)<1),n.xp6(1),n.Q6J("ngForOf",t.contacts))},directives:[r.O5,o.q_,o.Ie,r.sg,o.Q$,o.gu],styles:[""]}),l})();function Z(l,i){if(1&l&&(n.TgZ(0,"h5"),n._UZ(1,"ion-icon",19),n._uU(2),n.qZA()),2&l){const e=n.oxw();n.xp6(2),n.hij(" ",null==e.student?null:e.student.email,"")}}function _(l,i){if(1&l&&(n.TgZ(0,"h5"),n._UZ(1,"ion-icon",20),n._uU(2),n.qZA()),2&l){const e=n.oxw();n.xp6(2),n.lnq(" ",null==e.student||null==e.student.current_address?null:e.student.current_address.sub_district,", ",null==e.student||null==e.student.current_address?null:e.student.current_address.district,", ",null==e.student||null==e.student.current_address?null:e.student.current_address.division,"")}}function T(l,i){1&l&&(n.TgZ(0,"h5"),n._UZ(1,"ion-icon",20),n.TgZ(2,"a",21),n._uU(3," Add your address"),n.qZA()())}const U=[{path:"",component:(()=>{class l{constructor(e,t,u,y){this.router=e,this.route=t,this.authService=u,this.loader=y,this.student=new f.D,u.getProfile().then(z=>{this.profile=z})}ngOnInit(){let e=this.route.snapshot.paramMap.get("id");this.loadProfile(e||"me")}loadProfile(e=null){e?(console.log("loading "+e),this.authService.getProfileFromServer(e).subscribe(t=>{"ok"==t.status&&(this.student=t.data.info,this.id=this.student.id,this.contacts=t.data.info.contacts),"error"==t.status&&(this.loader.showToast("The profile not found!","danger",5e3),this.router.navigate(["homepage"]))})):(console.log("profile loader"),this.authService.getProfile().then(t=>{this.student=t}))}}return l.\u0275fac=function(e){return new(e||l)(n.Y36(a.F0),n.Y36(a.gz),n.Y36(m.$),n.Y36(p.D))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-profile"]],decls:39,vars:9,consts:[["color","primary"],["slot","start"],["vertical","bottom","horizontal","end","slot",""],["color","primary","href","/profile/contact/add"],["name","add-sharp","md","add-sharp","ios","add-outline"],["size-lg","4","size-md","4","size-sm","4","size-xl","4","size-xs","12"],["size","3"],["src","../../../../assets/shapes.svg"],["name","person","color","primary"],["name","information-circle","color","primary"],[4,"ngIf"],["expand","block","size","small","fill","outline","color","primary",3,"click"],["name","create"],["expand","block","size","small","fill","outline","color","secondary",3,"href"],["name","send"],["expand","block","size","small","fill","outline","color","warning",3,"click"],["name","mail-unread"],["size-lg","8","size-md","8","size-sm","8","size-xl","8","size-xs","12"],[3,"contacts"],["name","mail","color","primary"],["name","location","color","primary"],["routerLink","/profile/address/add"]],template:function(e,t){1&e&&(n.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),n._UZ(3,"ion-menu-button"),n.qZA(),n.TgZ(4,"ion-title"),n._uU(5,"profile"),n.qZA()()(),n.TgZ(6,"ion-content")(7,"ion-grid")(8,"ion-row")(9,"ion-fab",2)(10,"ion-fab-button",3),n._UZ(11,"ion-icon",4),n.qZA()(),n.TgZ(12,"ion-col",5)(13,"ion-row")(14,"ion-col",6)(15,"ion-avatar"),n._UZ(16,"ion-img",7),n.qZA()(),n.TgZ(17,"ion-col")(18,"h4"),n._UZ(19,"ion-icon",8),n._uU(20),n.qZA(),n.TgZ(21,"h5"),n._UZ(22,"ion-icon",9),n._uU(23),n.qZA(),n.YNc(24,Z,3,1,"h5",10),n.YNc(25,_,3,3,"h5",10),n.YNc(26,T,4,0,"h5",10),n.qZA()(),n.TgZ(27,"div")(28,"ion-button",11),n.NdJ("click",function(){return t.loader.showAlert("Feature unavailable","Oops..")}),n._UZ(29,"ion-icon",12),n._uU(30," Edit Profile"),n.qZA(),n.TgZ(31,"ion-button",13),n._UZ(32,"ion-icon",14),n._uU(33," Send Message"),n.qZA(),n.TgZ(34,"ion-button",15),n.NdJ("click",function(){return t.loader.showAlert("Use messaging service for this action","Oops..")}),n._UZ(35,"ion-icon",16),n._uU(36,"Request Personal contact"),n.qZA()()(),n.TgZ(37,"ion-col",17),n._UZ(38,"app-profile-item",18),n.qZA()()()()),2&e&&(n.xp6(20),n.AsE(" ",null==t.student?null:t.student.full_name," (",null==t.student?null:t.student.student_id,") "),n.xp6(3),n.AsE(" ",null==t.student||null==t.student.department?null:t.student.department.name_short," - ",null==t.student?null:t.student.batch," batch "),n.xp6(1),n.Q6J("ngIf",null!=(null==t.student?null:t.student.email)),n.xp6(1),n.Q6J("ngIf",null!=(null==t.student?null:t.student.current_address)),n.xp6(1),n.Q6J("ngIf",null==(null==t.student?null:t.student.current_address)&&(null==t.student?null:t.student.id)==(null==t.profile?null:t.profile.id)),n.xp6(5),n.MGl("href","/messages/",t.id,""),n.xp6(7),n.Q6J("contacts",t.contacts))},directives:[o.Gu,o.sr,o.Sm,o.fG,o.wd,o.W2,o.jY,o.Nd,o.IJ,o.W4,o.gu,o.wI,o.BJ,o.Xz,r.O5,a.yS,o.YI,o.YG,P],styles:[""]}),l})()}];let v=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({imports:[[a.Bz.forChild(U)],a.Bz]}),l})(),A=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({imports:[[r.ez,d.u5,o.Pc,v]]}),l})()}}]);