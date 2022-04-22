"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7901],{7901:(I,u,o)=>{o.r(u),o.d(u,{LoginPageModule:()=>f});var l=o(9808),r=o(4182),n=o(2159),g=o(333),c=o(655),t=o(2096),h=o(7053),d=o(1188),v=o(6231);const m=[{path:"",component:(()=>{class e{constructor(i,a,L,P,y){this.fb=i,this.authService=a,this.router=L,this.storageService=P,this.events=y,this.credentials=new r.cw({})}get emailorid(){return this.credentials.get("emailorid")}get password(){return this.credentials.get("password")}ngOnInit(){this.authService.isLoggedIn().then(a=>{"true"===a&&this.router.navigateByUrl("/profile",{replaceUrl:!0})}),this.router.url.match(/\/logout/)&&(this.authService.logout(),this.events.publishEvent({update_menu:!0}),this.router.navigateByUrl("/",{replaceUrl:!0})),this.credentials=this.fb.group({emailorid:["",[r.kI.required,r.kI.minLength(9),r.kI.maxLength(9)]],password:["",[r.kI.required,r.kI.minLength(8)]]})}login(){return(0,c.mG)(this,void 0,void 0,function*(){this.authService.login(this.credentials.value).subscribe(i=>{i&&(this.storageService.set("loggedIn","true"),this.router.navigateByUrl("/profile",{replaceUrl:!0}),this.events.publishEvent({update_menu:!0}))})})}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(r.qu),t.Y36(h.$),t.Y36(g.F0),t.Y36(d.V),t.Y36(v.h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:15,vars:0,consts:[["color","primary"],["slot","start"],["size-lg","4","size-md","3","size-xs","12"],[1,""],["ion-text","",1,"white"]],template:function(i,a){1&i&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"admin login"),t.qZA()()(),t.TgZ(6,"ion-content")(7,"ion-grid")(8,"ion-row"),t._UZ(9,"ion-col",2),t.TgZ(10,"ion-col",3)(11,"h1",4),t._uU(12,"Login"),t.qZA(),t.TgZ(13,"p",4),t._uU(14,"Login to your account"),t.qZA()()()()())},directives:[n.Gu,n.sr,n.Sm,n.fG,n.wd,n.W2,n.jY,n.Nd,n.wI],styles:[""]}),e})()}];let p=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.Bz.forChild(m)],g.Bz]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.ez,r.u5,n.Pc,p]]}),e})()}}]);