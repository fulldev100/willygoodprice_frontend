import{t as m}from"./TagsInput.0ed2c902.js";import{_,a as v,r as l,o as n,c,b as r,w as C,F as u,x as S,i as P,f as d,g,t as o}from"./index.c0512dbc.js";const i=v(),x={data(){return{tag:"",tags:[],currentProgresses:[]}},components:{tagsInput:m},created(){this.onGetCurrentCronjobProgress()},mounted(){},methods:{onGetCurrentCronjobProgress:function(){i.GetRSRData("getCurrentCronjobProgress").then(t=>{if(t.status){this.currentProgresses=t.data;var a=!0;for(let e=0;e<this.currentProgresses.length;e++)this.currentProgresses[e],(this.currentProgresses[e].Status!="Stop"||this.currentProgresses[e].Status!="Run")&&(a=!1);a&&i.GetRSRData("restartServer").then(e=>{e.status&&setTimeout(()=>{window.location.reload()},3e3)}).catch(e=>{console.log(e),this.readError=e.message})}}).catch(t=>{console.log(t),this.readError=t.message})},onBackup:function(){i.GetRSRData("postBackupCronjob").then(t=>{t.status&&setInterval(()=>{console.log(),this.onGetCurrentCronjobProgress()},2e3)}).catch(t=>{console.log(t),this.readError=t.message})}}},k=P('<div class="d-flex align-items-center mb-md-3 mb-2"><div class="flex-fill"><ul class="breadcrumb"><li class="breadcrumb-item"><a href="#">Setting</a></li><li class="breadcrumb-item active">Current Progress</li></ul><h1 class="page-header mb-0"> Backup current cron job data on webapp db without submitting the SellerActive before restarting the server </h1></div></div>',1),w={class:"d-flex mb-2"},B={class:"row"},y={class:"col-xl-12 col-lg-12"},R={class:"flex-grow-1 fw-400"},j={key:0,class:"list-group list-group-flush ps-3 pt-2"},G={class:"pt-2"},D={key:1,class:"list-group list-group-flush ps-3 pt-2"};function T(t,a,e,E,p,h){const f=l("card-header"),b=l("card");return n(),c(u,null,[k,r("div",w,[r("button",{type:"button",class:"btn btn-outline-theme",onClick:a[0]||(a[0]=C(s=>h.onBackup(),["prevent"]))}," Back up ")]),(n(!0),c(u,null,S(p.currentProgresses,s=>(n(),c("div",B,[r("div",y,[d(b,{class:"mb-3"},{default:g(()=>[d(f,{class:"d-flex align-items-center bg-inverse bg-opacity-10"},{default:g(()=>[r("span",R,o(s.Supplier)+" - "+o(s.Type),1)]),_:2},1024),s.Status!="Pending"?(n(),c("div",j,[r("p",null,o(s.Status),1),r("p",null,o(s.Current_Progress)+" completed in "+o(s.Total_Data_Count),1),r("p",G,"Current Time: "+o(s["Current Time"]),1)])):(n(),c("div",D,"Not started yet"))]),_:2},1024)])]))),256))],64)}const V=_(x,[["render",T]]);export{V as default};
