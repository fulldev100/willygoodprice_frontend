import{_ as u,u as m,a as h,r as g,o as a,c as i,b as t,w as b,d as l,v as c,e as n,f,g as _,t as w,h as v,i as x}from"./index.7dcbf53a.js";const s=m(),I=h(),y={mounted(){s.appSidebarHide=!0,s.appHeaderHide=!0,s.appContentClass="p-0"},beforeUnmount(){s.appSidebarHide=!1,s.appHeaderHide=!1,s.appContentClass=""},methods:{submitForm:function(){if(this.loginError=null,!this.usernameInput||this.usernameInput==""||!this.passwordInput||this.passwordInput==""){this.loginError="Missing username or password";return}I.loginNode(this.usernameInput,this.passwordInput).then(e=>{console.log("result: ",e),this.loginError=e.message,e.code&&setTimeout(()=>{this.$router.push("/")},100)}).catch(e=>{console.log(e),this.loginError="Error."})},onLogin:function(e){console.log("result: ",e),this.loginError=e.message,e.code&&setTimeout(()=>{this.$router.push("/")},100)},onError:function(e){console.log(e),this.loginError="Error."}},data:function(){return{usernameInput:"",passwordInput:"",loginError:null}}},E={class:"login"},S={class:"login-content"},k=t("h1",{class:"text-center"},"Sign In",-1),C=t("div",{class:"text-white text-opacity-50 text-center mb-4"}," Willy Goodprice Service, please login ",-1),V={class:"mb-3"},H=t("label",{class:"form-label"},[n("Username "),t("span",{class:"text-danger"},"*")],-1),N={class:"mb-3"},$=t("div",{class:"d-flex"},[t("label",{class:"form-label"},[n("Password "),t("span",{class:"text-danger"},"*")]),t("a",{href:"#",class:"ms-auto text-white text-decoration-none text-opacity-50"},"Forgot password?")],-1),T=x('<div class="mb-3"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="customCheck1"><label class="form-check-label" for="customCheck1">Remember me</label></div></div><button type="submit" class="btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3">Sign In</button>',2),U={class:"text-center text-white text-opacity-50"},L=t("br",null,null,-1),B=t("br",null,null,-1),D={key:0,class:"alert alert-warning"};function F(e,o,M,O,P,d){const p=g("RouterLink");return a(),i("div",E,[t("div",S,[t("form",{onSubmit:o[2]||(o[2]=b(r=>d.submitForm(),["prevent"])),method:"POST",name:"login_form"},[k,C,t("div",V,[H,l(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=r=>e.usernameInput=r),class:"form-control form-control-lg bg-white bg-opacity-5",placeholder:""},null,512),[[c,e.usernameInput]])]),t("div",N,[$,l(t("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=r=>e.passwordInput=r),class:"form-control form-control-lg bg-white bg-opacity-5",placeholder:""},null,512),[[c,e.passwordInput]])]),T,t("div",U,[n(" Don't have an account yet? "),f(p,{to:"register"},{default:_(()=>[n("Sign up")]),_:1}),n(". "),L,B,e.loginError?(a(),i("div",D,w(e.loginError),1)):v("",!0)])],32)])])}const A=u(y,[["render",F]]);export{A as default};
