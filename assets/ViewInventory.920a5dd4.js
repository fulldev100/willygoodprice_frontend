import{_ as I,a as V,B as S,D as P,S as D,r as _,o as i,c as r,b as e,e as x,w as h,d,E as k,v as u,h as b,G as n,t as m,p as N,g as p,f as g}from"./index.c9c94c12.js";import{u as L,h as T,v as F}from"./app-variable.3f08ab6c.js";import{n as A}from"./NavScrollTo.ea3bcc36.js";L();const v=V(),E={data(){return{table:S({isLoading:!1,isReSearch:!1,rowClasses:l=>l.id==1?["aaa","is-id-one"]:["bbb","other"],columns:[{label:"ID",field:"id",width:"5%",sortable:!0,isKey:!0},{label:"Vendor Name",field:"VendorName",width:"5%",sortable:!0,isKey:!0},{label:"VCPN",field:"VCPN",width:"5%",sortable:!0},{label:"Vendor Code",field:"VendorCode",width:"5%",sortable:!0},{label:"Part Number",field:"PartNumber",width:"5%",sortable:!0},{label:"Description",field:"LongDescription",width:"5%",sortable:!0},{label:"AAIACode",field:"AAIACode",width:"5%",sortable:!0},{label:"Enhanced Description",field:"Enhanced_Description",width:"30%",sortable:!0,display:function(l){return'<p title="'+l.Enhanced_Description+'" style="width: 300px !important">'+l.Enhanced_Description+"</p>"}},{label:"Media",field:"Media_URL",width:"5%",sortable:!0,display:function(l){return'<a href="'+l.Media_URL+'" target="_blank"><img src="'+l.Media_URL+'" style="width:150px"></a>'}},{label:"Cost",field:"Cost",width:"5%",sortable:!0},{label:"Jobber Price",field:"JobberPrice",width:"5%",sortable:!0},{label:"QTY",field:"CaseQty",width:"3%",sortable:!0},{label:"Florida Qty",field:"FloridaQty",width:"3%",sortable:!0},{label:"Total Qty",field:"TotalQty",width:"3%",sortable:!0},{label:"MRP",field:"MRP",width:"5%",sortable:!0},{label:"MAPretail",field:"MAPretail",width:"5%",sortable:!0},{label:"MSRP",field:"MSRP",width:"5%",sortable:!0},{label:"Weight",field:"Weight",width:"5%",sortable:!0},{label:"Height",field:"Height",width:"5%",sortable:!0},{label:"Length",field:"Length",width:"5%",sortable:!0},{label:"Width",field:"Width",width:"5%",sortable:!0},{label:"Log changed cost",field:"log",width:"5%",sortable:!0},{label:"Created",field:"created_at",width:"5%",sortable:!0}],rows:[],totalRecordCount:P(()=>this.totalCount),sortable:{order:"VendorName",sort:"asc"},messages:{pagingInfo:"Showing {0}-{1} of {2}",pageSizeChangeLabel:"Row count:",gotoPageLabel:"Go to page:",noDataAvailable:"No data"}}),port:"",data:S([]),ftpServerInput:"",usernameInput:"",passwordInput:"",readError:"Loading data from FTP...",isLoading:!1,totalCount:0,searchKey:"",tabName:"all"}},components:{highlightjs:T,navScrollTo:A,vueTable:F},created(){this.GetInventoryFull(),this.doSearch(0,10,"VendorName","asc")},mounted(){new D(document.body,{target:"#sidebar-bootstrap",offset:200})},methods:{onDownload:function(){v.GetDownloadCSVInventoryFull().then(a=>{a.status}).catch(a=>{console.log(a),this.readError=a.message})},GetInventoryFull:function(){v.GetInventoryFull().then(a=>{a.status&&a.ftp_config_data&&a.ftp_config_data.length>0&&(this.ftpServerInput=a.ftp_config_data[0].ftpServer,this.usernameInput=a.ftp_config_data[0].username,this.passwordInput=a.ftp_config_data[0].password,this.port=a.ftp_config_data[0].protocol)}).catch(a=>{console.log(a),this.readError=a.message})},doSearch:function(a,s,l,f){this.isLoading||(this.table.isLoading=!0,v.getInventoryInfoForTable(a,s,l,f,this.tabName,this.searchKey).then(t=>{t.status&&(this.table.rows=t.data,this.totalCount=t.numberOfInventories[0].NumberOfInventories,this.table.sortable.order=l,this.table.sortable.sort=f,this.table.isLoading=!1)}).catch(t=>{console.log(t),this.readError=t.message}))},submitForm:function(){if(this.readError="Loading data from FTP... It will take about 10 minutes.",!this.ftpServerInput||this.usernameInput==""||!this.passwordInput||this.passwordInput==""){this.readError="Please input the FTP info to read data.";return}this.isLoading=!0,v.getInventoryInfo(this.ftpServerInput,this.usernameInput,this.passwordInput,this.port).then(a=>{this.isLoading=!1,a.status&&(this.readError="",this.doSearch(0,10,"VendorName","ASC"))}).catch(a=>{this.isLoading=!1})},submitSearch:function(){this.doSearch(0,10,"VendorName","ASC")}}},K={class:"row justify-content-center"},M={class:"col-xl-12"},R={class:"row"},U={class:"col-xl-12"},O=e("ul",{class:"breadcrumb"},[e("li",{class:"breadcrumb-item"},[e("a",{href:"#"},"Keystone")]),e("li",{class:"breadcrumb-item active"},"FTP")],-1),G={class:"page-header"},Q=e("hr",{class:"mb-4"},null,-1),B={id:"vue3TableLite",class:"mb-5"},W=e("h4",null,"Read",-1),j={class:"row"},q={class:"col-xl-2 col-md-3 mb-2px"},z=e("option",{value:"ftp"},"ftp://",-1),H=e("option",{value:"sftp"},"sftp://",-1),J=e("option",{value:"ftps"},"ftps://",-1),Y=[z,H,J],X={class:"col-xl-2 col-md-3 mb-2px"},Z={key:0,class:"invalid-feedback"},$={class:"col-xl-3 col-md-6 mb-2px"},ee={key:0,class:"invalid-feedback"},te={class:"col-xl-3 col-md-6 mb-2px"},se={key:0,class:"invalid-feedback"},oe={class:"col-xl-2 col-md-6 mb-2px"},ae={key:0,type:"submit",class:"btn btn-info w-100 active",disabled:""},le={key:1,type:"submit",class:"btn btn-info w-100 active"},ie={key:0,class:"nav nav-tabs"},ne={class:"nav-item me-1"},re={class:"nav-item me-1"},de={class:"nav-item me-1 dropdown"},ce={class:"dropdown-menu"},ue={key:1,class:"tab-content pt-3"},be={class:"row"},he={class:"col-md-6 col-sm-0"},me={class:"col-md-6 col-sm-12"},pe={class:"row"},ve={class:"col-9"},fe=e("div",{class:"col-3"},[e("button",{type:"submit",class:"btn btn-dark w-100 active"},"Search")],-1),_e={class:"row"},ge={class:"col-md-6 col-sm-0"},we={class:"col-md-6 col-sm-12"},ye={class:"row"},Se={class:"col-9"},Ne=e("div",{class:"col-3"},[e("button",{type:"submit",class:"btn btn-dark w-100 active"},"Search")],-1),Ce={class:"row"},Ie={class:"col-md-6 col-sm-0"},Ve={class:"col-md-6 col-sm-12"},Pe={class:"row"},De={class:"col-9"},xe=e("div",{class:"col-3"},[e("button",{type:"submit",class:"btn btn-dark w-100 active"},"Search")],-1),ke={class:"row"},Le={class:"col-md-6 col-sm-0"},Te={class:"col-md-6 col-sm-12"},Fe={class:"row"},Ae={class:"col-9"},Ee=e("div",{class:"col-3"},[e("button",{type:"submit",class:"btn btn-dark w-100 active"},"Search")],-1);function Ke(a,s,l,f,t,c){const C=_("vue-table"),w=_("card-body"),y=_("card");return i(),r("div",K,[e("div",M,[e("div",R,[e("div",U,[O,e("h1",G,[x(" Inventory.csv "),e("button",{type:"button",class:"btn btn-outline-theme",onClick:s[0]||(s[0]=h(o=>c.onDownload(),["prevent"]))}," Download CSV ")]),Q,e("div",B,[W,e("form",{class:"was-validated mb-15px",onSubmit:s[5]||(s[5]=h(o=>c.submitForm(),["prevent"])),method:"POST",name:"register_form"},[e("div",j,[e("div",q,[d(e("select",{class:"form-select","onUpdate:modelValue":s[1]||(s[1]=o=>t.port=o)},Y,512),[[k,t.port]])]),e("div",X,[d(e("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=o=>t.ftpServerInput=o),class:"form-control is-invalid",placeholder:"FTP Server",required:""},null,512),[[u,t.ftpServerInput]]),t.ftpServerInput==""?(i(),r("div",Z,"Please input the FTP server address.")):b("",!0)]),e("div",$,[d(e("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=o=>t.usernameInput=o),class:"form-control is-invalid",placeholder:"Username",required:""},null,512),[[u,t.usernameInput]]),t.usernameInput==""?(i(),r("div",ee,"Please input the FTP username.")):b("",!0)]),e("div",te,[d(e("input",{type:"password","onUpdate:modelValue":s[4]||(s[4]=o=>t.passwordInput=o),class:"form-control is-invalid",placeholder:"Password",required:""},null,512),[[u,t.passwordInput]]),t.passwordInput==""?(i(),r("div",se,"Please input the password.")):b("",!0)]),e("div",oe,[t.isLoading?(i(),r("button",ae,"reading...")):(i(),r("button",le,"Read"))])])],32),t.isLoading?b("",!0):(i(),r("ul",ie,[e("li",ne,[e("a",{href:"#all_data",class:n(["nav-link",{active:t.tabName=="all"}]),"data-bs-toggle":"tab",onClick:s[6]||(s[6]=o=>{o.preventDefault(),t.tabName="all",this.doSearch(0,10,"VendorName","asc")})}," All Data ",2)]),e("li",re,[e("a",{href:"#added_data",class:n(["nav-link",{active:t.tabName=="create"}]),"data-bs-toggle":"tab",onClick:s[7]||(s[7]=o=>{o.preventDefault(),t.tabName="create",this.doSearch(0,10,"VendorName","asc")})},"New Data",2)]),e("li",de,[e("a",{href:"#",class:n(["nav-link dropdown-toggle",{active:t.tabName=="update"||t.tabName=="delete"}]),"data-bs-toggle":"dropdown"}," Changed Data ",2),e("div",ce,[e("a",{href:"#cost_changed",class:n(["dropdown-item",{active:t.tabName=="update"}]),"data-bs-toggle":"tab",onClick:s[8]||(s[8]=o=>{o.preventDefault(),t.tabName="update",this.doSearch(0,10,"VendorName","asc")})},"Cost change",2),e("a",{href:"#delete_data",class:n(["dropdown-item",{active:t.tabName=="delete"}]),"data-bs-toggle":"tab",onClick:s[9]||(s[9]=o=>{o.preventDefault(),t.tabName="delete",this.doSearch(0,10,"VendorName","asc")})},"Delete",2)])])])),t.isLoading?b("",!0):(i(),r("div",ue,[e("div",{class:n(["tab-pane fade",{show:t.tabName=="all",active:t.tabName=="all"}]),id:"all_data"},[e("div",be,[e("div",he,[e("h3",null,"All Data ( "+m(this.totalCount)+" )",1)]),e("div",me,[e("form",{class:"mb-10px",onSubmit:s[11]||(s[11]=h(o=>c.submitSearch(),["prevent"])),method:"POST"},[e("div",pe,[e("div",ve,[d(e("input",{type:"text","onUpdate:modelValue":s[10]||(s[10]=o=>t.searchKey=o),class:"form-control",placeholder:"Vender name or VCPN or Description"},null,512),[[u,t.searchKey]])]),fe])],32)])])],2),e("div",{class:n(["tab-pane fade",{show:t.tabName=="create",active:t.tabName=="create"}]),id:"added_data"},[e("div",_e,[e("div",ge,[e("h3",null,"New Data ( "+m(this.totalCount)+" )",1)]),e("div",we,[e("form",{class:"mb-10px",onSubmit:s[13]||(s[13]=h(o=>c.submitSearch(),["prevent"])),method:"POST"},[e("div",ye,[e("div",Se,[d(e("input",{type:"text","onUpdate:modelValue":s[12]||(s[12]=o=>t.searchKey=o),class:"form-control",placeholder:"Vender name or VCPN or Description"},null,512),[[u,t.searchKey]])]),Ne])],32)])])],2),e("div",{class:n(["tab-pane fade",{show:t.tabName=="update",active:t.tabName=="update"}]),id:"cost_changed"},[e("div",Ce,[e("div",Ie,[e("h3",null,"Cost Changed ( "+m(this.totalCount)+" )",1)]),e("div",Ve,[e("form",{class:"mb-10px",onSubmit:s[15]||(s[15]=h(o=>c.submitSearch(),["prevent"])),method:"POST"},[e("div",Pe,[e("div",De,[d(e("input",{type:"text","onUpdate:modelValue":s[14]||(s[14]=o=>t.searchKey=o),class:"form-control",placeholder:"Vender name or VCPN or Description"},null,512),[[u,t.searchKey]])]),xe])],32)])])],2),e("div",{class:n(["tab-pane fade",{show:t.tabName=="delete",active:t.tabName=="delete"}]),id:"delete_data"},[e("div",ke,[e("div",Le,[e("h3",null,"Deleted ( "+m(this.totalCount)+" )",1)]),e("div",Te,[e("form",{class:"mb-10px",onSubmit:s[17]||(s[17]=h(o=>c.submitSearch(),["prevent"])),method:"POST"},[e("div",Fe,[e("div",Ae,[d(e("input",{type:"text","onUpdate:modelValue":s[16]||(s[16]=o=>t.searchKey=o),class:"form-control",placeholder:"Vender name or VCPN or Description"},null,512),[[u,t.searchKey]])]),Ee])],32)])])],2)])),!t.isLoading&&t.table&&t.table.rows.length>0?(i(),N(y,{key:2},{default:p(()=>[g(w,null,{default:p(()=>[g(C,{class:"vue-table",columns:t.table.columns,rows:t.table.rows,total:t.table.totalRecordCount,sortable:t.table.sortable,"is-loading":t.table.isLoading,messages:t.table.messages,onDoSearch:c.doSearch,onIsFinished:s[18]||(s[18]=o=>t.table.isLoading=!1)},null,8,["columns","rows","total","sortable","is-loading","messages","onDoSearch"])]),_:1})]),_:1})):b("",!0),t.isLoading?(i(),N(y,{key:3},{default:p(()=>[g(w,null,{default:p(()=>[e("h2",null,m(t.readError),1)]),_:1})]),_:1})):b("",!0)])])])])])}const Oe=I(E,[["render",Ke]]);export{Oe as default};
