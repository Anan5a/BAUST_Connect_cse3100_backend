"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1861],{1861:(x,g,s)=>{s.r(g),s.d(g,{ChatlistPageModule:()=>P});var c=s(9808),r=s(4182),o=s(2159),l=s(333),t=s(2096);function u(e,a){1&e&&(t.TgZ(0,"ion-list")(1,"ion-item")(2,"h1"),t._uU(3,"NO ITEM FOUND"),t.qZA()()())}function d(e,a){1&e&&(t.TgZ(0,"ion-list")(1,"ion-item")(2,"ion-avatar"),t._UZ(3,"img",5),t.qZA(),t._UZ(4,"ion-label"),t.qZA()())}let h=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-chatlist"]],decls:12,vars:2,consts:[["color","primary"],["slot","start"],["size-lg","4","size-md","4","size-sm","4","size-xl","4","size-xs","12"],[4,"ngIf"],[4,"ngFor","ngForOf"],["src","../src/assets/shapes.svg"]],template:function(n,i){1&n&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"messages"),t.qZA()()(),t.TgZ(6,"ion-content")(7,"ion-grid")(8,"ion-row")(9,"ion-col",2),t.YNc(10,u,4,0,"ion-list",3),t.YNc(11,d,5,0,"ion-list",4),t.qZA()()()()),2&n&&(t.xp6(10),t.Q6J("ngIf",(null==i.contacts?null:i.contacts.length)<1),t.xp6(1),t.Q6J("ngForOf",i.contacts))},directives:[o.Gu,o.sr,o.Sm,o.fG,o.wd,o.W2,o.jY,o.Nd,o.wI,c.O5,o.q_,o.Ie,c.sg,o.BJ,o.Q$],styles:[".sender[_ngcontent-%COMP%], .receiver[_ngcontent-%COMP%]{border-radius:10px}"]}),e})();var p=s(7053),m=s(8555);const f=[{path:"",component:h},{path:":id",component:(()=>{class e{constructor(n,i,v,Z){this.authService=n,this.loaderService=i,this.activeRoute=v,this.router=Z}ngOnInit(){const n=this.activeRoute.snapshot.paramMap.get("id");this.authService.getProfileFromServer(n).subscribe(i=>{i&&"ok"==i.status&&(this.receiver=i.data.info,this.profile_full_body=i.data)}),this.authService.getProfile().then(i=>{this.from=i})}send(){}receive(){}loadOldMessages(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.$),t.Y36(m.D),t.Y36(l.gz),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-chat"]],decls:14,vars:2,consts:[["color","primary"],["slot","start"],["size-lg","4","size-md","3","size-xs","12"],[1,""],["dd","password","placeholder","Type message...","type","text","auto-grow","true"]],template:function(n,i){1&n&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5),t.qZA()()(),t.TgZ(6,"ion-content")(7,"ion-grid")(8,"ion-row"),t._UZ(9,"ion-col",2),t.TgZ(10,"ion-col",3)(11,"form")(12,"ion-item"),t._UZ(13,"ion-textarea",4),t.qZA()()()()()()),2&n&&(t.xp6(5),t.AsE("message: ",null==i.receiver?null:i.receiver.full_name,"[",null==i.receiver?null:i.receiver.student_id,"]"))},directives:[o.Gu,o.sr,o.Sm,o.fG,o.wd,o.W2,o.jY,o.Nd,o.wI,r._Y,r.JL,r.F,o.Ie,o.g2,o.j9],styles:["ion-textarea[_ngcontent-%COMP%]{max-height:70px}.fixed-outside[_ngcontent-%COMP%]{position:absolute;bottom:0;color:#fff;width:100%;height:120px;text-align:center}.has-bottom[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]{padding-bottom:120px!important}.button-circle[_ngcontent-%COMP%]{width:50px!important;height:50px!important;border-radius:50%!important}ion-content[_ngcontent-%COMP%]{--padding-top: 10%;--background: url(https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80) 0 0/100% 100% no-repeat}form[_ngcontent-%COMP%]{max-width:400px;align-items:center}.input-group[_ngcontent-%COMP%]{background:#fff;border-radius:10px;overflow:hidden;margin-bottom:15px}.errors[_ngcontent-%COMP%]{font-size:small;color:#fff;background:var(--ion-color-danger);padding-left:15px;padding-top:5px;padding-bottom:5px}.white[_ngcontent-%COMP%]{color:#fff}"]}),e})()}];let C=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(f)],l.Bz]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,r.u5,o.Pc,r.UX,C]]}),e})()}}]);