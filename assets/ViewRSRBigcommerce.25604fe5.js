import{_ as y,a as M,B as v,D as I,A as C,n as P,S as A,r as _,o as i,c as a,b as l,w as b,p as w,g as u,h as n,G as D,t as c,d as N,v as k,f}from"./index.c0512dbc.js";import{u as R,h as L,v as B}from"./app-variable.ec4159bd.js";import{n as T}from"./NavScrollTo.15062acc.js";import{l as E}from"./index.95329077.js";R();const h=M(),z={data(){const t=P+"/";return{table:v({isLoading:!1,isReSearch:!1,rowClasses:o=>o.id==1?["aaa","is-id-one"]:["bbb","other"],columns:[{label:"Product Image",field:"Product Image File - 1",width:"5%",sortable:!0,display:function(o){if(o["Product Image File - 1"]!=""){let e="<div>";for(const s of o.ImageArray)e+='<a href="'+o.ServerURL+s+'" target="_blank"><img src="'+o.ServerURL+s+'" style="width:150px" alt="No Image"></a><br><br>';return e+="</div>",e}else return""}},{label:"item Type",field:"item Type",width:"5%",sortable:!0,display:function(o){return o.isBlocked?'<p style="color: red;font-weight: bold">'+(o.isDeleted?"Deleted":"")+'</p><p style="color: white;font-weight: bold">Blocked</p><p>'+o["item Type"]+"</p>":'<p style="color: red;font-weight: bold">'+(o.isDeleted?"Deleted":"")+"</p><p>"+o["item Type"]+"</p>"}},{label:"Custom Fields",field:"CustomFields",width:"5%",sortable:!0,display:function(o){if(o.CustomFields!=""&&o.CustomFields.length>0){let e="<div><ul>";for(const s of o.CustomFields)e+="<li><strong>"+s.name+": </strong>"+s.value+"</li>";return e+="</ul></div>",e}else return""}},{label:"Category",field:"Category",width:"5%",sortable:!0},{label:"Product Name",field:"Product Name",width:"5%",sortable:!0,isKey:!0},{label:"Amazon MIN",field:"Amazon MIN",width:"5%",sortable:!0},{label:"Amazon MID",field:"Amazon MID",width:"5%",sortable:!0},{label:"Amazon MAX",field:"Amazon MAX",width:"5%",sortable:!0},{label:"AmazonCA MIN",field:"AmazonCA MIN",width:"5%",sortable:!0},{label:"AmazonCA MID",field:"AmazonCA MID",width:"5%",sortable:!0},{label:"AmazonCA MAX",field:"AmazonCA MAX",width:"5%",sortable:!0},{label:"AmazonMX MIN",field:"AmazonMX MIN",width:"5%",sortable:!0},{label:"AmazonMX MID",field:"AmazonMX MID",width:"5%",sortable:!0},{label:"AmazonMX MAX",field:"AmazonMX MAX",width:"5%",sortable:!0},{label:"BigCommerce MIN",field:"BigCommerce MIN",width:"5%",sortable:!0},{label:"BigCommerce MID",field:"BigCommerce MID",width:"5%",sortable:!0},{label:"BigCommerce MAX",field:"BigCommerce MAX",width:"5%",sortable:!0},{label:"Ebay MIN",field:"Ebay MIN",width:"5%",sortable:!0},{label:"Ebay MID",field:"Ebay MID",width:"5%",sortable:!0},{label:"Ebay MAX",field:"Ebay MAX",width:"5%",sortable:!0},{label:"Newegg MIN",field:"Newegg MIN",width:"5%",sortable:!0},{label:"Newegg MID",field:"Newegg MID",width:"5%",sortable:!0},{label:"Newegg MAX",field:"Newegg MAX",width:"5%",sortable:!0},{label:"Walmart MIN",field:"Walmart MIN",width:"5%",sortable:!0},{label:"Walmart MID",field:"Walmart MID",width:"5%",sortable:!0},{label:"Walmart MAX",field:"Walmart MAX",width:"5%",sortable:!0},{label:"Min Price",field:"Min Price",width:"5%",sortable:!0},{label:"Max Price",field:"Max Price",width:"5%",sortable:!0},{label:"BC Price",field:"BC Price",width:"5%",sortable:!0},{label:"Product Type",field:"Product Type",width:"5%",sortable:!0},{label:"Product Code/SKU",field:"Product Code/SKU",width:"5%",sortable:!0},{label:"Brand Name",field:"Brand Name",width:"5%",sortable:!0},{label:"Option Set Align",field:"Option Set Align",width:"5%",sortable:!0},{label:"Product Description",field:"Product Description",width:"30%",sortable:!0,display:function(o){return'<p title="'+o["Product Description"]+'" style="width: 300px !important">'+o["Product Description"]+"</p>"}},{label:"BC Price",field:"BC Price",width:"5%",sortable:!0},{label:"Cost",field:"Cost",width:"5%",sortable:!0},{label:"Retail Price",field:"Retail Price",width:"5%",sortable:!0},{label:"Product Weight",field:"Product Weight",width:"5%",sortable:!0},{label:"Product Width",field:"Product Width",width:"5%",sortable:!0},{label:"Product Height",field:"Product Height",width:"5%",sortable:!0},{label:"Product Depth",field:"Product Depth",width:"5%",sortable:!0},{label:"Allow Purchases?",field:"Allow Purchases?",width:"5%",sortable:!0},{label:"Product Visible?",field:"Product Visible?",width:"5%",sortable:!0},{label:"Track Inventory",field:"Track Inventory",width:"5%",sortable:!0},{label:"Current Stock Level",field:"Current Stock Level",width:"5%",sortable:!0},{label:"Product Image Is Thumbnail - 1",field:"Product Image Is Thumbnail - 1",width:"5%",sortable:!0},{label:"Search Keywords",field:"Search Keywords",width:"30%",sortable:!0,display:function(o){return'<p title="'+o["Search Keywords"]+'" style="width: 300px !important">'+o["Search Keywords"]+"</p>"}},{label:"Meta Description",field:"Meta Description",width:"30%",sortable:!0,display:function(o){return'<p title="'+o["Meta Description"]+'" style="width: 300px !important">'+o["Meta Description"]+"</p>"}},{label:"Product Condition",field:"Product Condition",width:"5%",sortable:!0},{label:"Show Product Condition?",field:"Show Product Condition?",width:"5%",sortable:!0},{label:"Product UPC/EAN",field:"Product UPC/EAN",width:"5%",sortable:!0},{label:"Stop Processing Rules",field:"Stop Processing Rules",width:"3%",sortable:!0},{label:"Redirect Old URL?",field:"Redirect Old URL?",width:"3%",sortable:!0},{label:"GPS Global Trade Item Number",field:"GPS Global Trade Item Number",width:"3%",sortable:!0},{label:"GPS Manufacturer Part Number",field:"GPS Manufacturer Part Number",width:"5%",sortable:!0},{label:"GPS Enabled",field:"GPS Enabled",width:"5%",sortable:!0}],rows:[],totalRecordCount:I(()=>this.totalCount),sortable:{order:"id",sort:"asc"},messages:{pagingInfo:"Showing {0}-{1} of {2}",pageSizeChangeLabel:"Row count:",gotoPageLabel:"Go to page:",noDataAvailable:"No data"}}),port:"",data:v([]),ftpServerInput:"",usernameInput:"",passwordInput:"",readError:"Loading data from FTP...",isLoading:!1,totalCount:0,searchKey:"",tabName:"all",server_addr:t,is_whole_data:!1,new_filepath:"",hostURL:C,hostURLWithPort:P,socket:null,process_data:null}},components:{highlightjs:L,navScrollTo:T,vueTable:B},created(){this.GetInventoryFull(),this.doSearch(0,10,"_id","asc"),this.socket=E(this.hostURLWithPort,{path:"/inventory"})},mounted(){new A(document.body,{target:"#sidebar-bootstrap",offset:200}),this.socket!=null&&(setInterval(()=>{this.socket.emit("get_process","me")},2e3),this.socket.on("set_process",t=>{this.process_data=t}))},methods:{GetInventoryFull:function(){h.GetRSRData("GetRSRInventoryConfig").then(t=>{t.status&&t.ftp_config_data&&t.ftp_config_data.length>0&&(this.ftpServerInput=t.ftp_config_data[0].ftpServer,this.usernameInput=t.ftp_config_data[0].username,this.passwordInput=t.ftp_config_data[0].password,this.port=t.ftp_config_data[0].protocol,this.new_filepath=this.server_addr+t.new_filepath,this.doSearch(0,10,"_id","asc"))}).catch(t=>{console.log(t),this.readError=t.message})},doSearch:function(t,r,m,o){this.isLoading||(this.table.isLoading=!0,h.GetTableData("getBigcommerceHeaderMappingForTable",t,r,m,o,this.tabName,this.searchKey).then(e=>{e.status&&(this.table.rows=e.data,this.totalCount=e.numberOfInventories[0].NumberOfInventories,this.table.sortable.order=m,this.table.sortable.sort=o,this.table.isLoading=!1)}).catch(e=>{console.log(e),this.readError=e.message}))},submitSearch:function(){this.doSearch(0,10,"_id","ASC")},stopProgress:function(){this.socket!=null&&this.socket.emit("stop_process","me")},submitBigcommerce:function(){this.isLoading||(this.readError="Submit to Bigcommerce...",this.isLoading=!0,this.socket!=null&&this.socket.emit("get_process","me"),h.submitRSRToBigcommerce("all",this.searchKey).then(t=>{console.log(t),t.status&&(this.doSearch(0,10,"_id","asc"),this.isLoading=!1)}).catch(t=>{console.log(t),this.readError="Server error!"}))},setPriceManagerForSA:function(){this.isLoading||(this.readError="Updating prices...",this.isLoading=!0,this.socket!=null&&this.socket.emit("get_process","me"),h.setPriceManagerInRSR(this.searchKey).then(t=>{console.log(t),t.status&&this.doSearch(0,10,"_id","asc"),this.isLoading=!1}).catch(t=>{console.log(t),this.readError="Server error!"}))},onDownload:function(){h.GetDownloadBigcommerceInventoryFullForRSR().then(t=>{t.status&&alert("done")}).catch(t=>{console.log(t),this.readError=t.message})}}},X={class:"row justify-content-center"},x={class:"col-xl-12"},F={class:"row"},G={class:"col-xl-12"},U=l("ul",{class:"breadcrumb"},[l("li",{class:"breadcrumb-item"},[l("a",{href:"#"},"RSR")]),l("li",{class:"breadcrumb-item active"},"Bigcommerce")],-1),K=l("hr",{class:"mb-4"},null,-1),W={key:0},V={key:0},O={style:{color:"red"}},H={key:1},j=l("h5",null,"The End! Please try again.",-1),q=[j],J={key:1,id:"vue3TableLite",class:"mb-5"},Q={key:0,class:"tab-content pt-3"},Y={class:"row"},Z={class:"col-md-3 col-sm-0"},$={class:"col-md-3 col-sm-12"},ee={class:"col-md-3 col-sm-12"},te={class:"col-md-3 col-sm-12"},oe={class:"row"},le={class:"col-9"},re=l("div",{class:"col-3"},[l("button",{type:"submit",class:"btn btn-dark w-100 active"},"Search")],-1);function se(t,r,m,o,e,s){const p=_("card-body"),g=_("card"),S=_("vue-table");return i(),a("div",X,[l("div",x,[l("div",F,[l("div",G,[U,l("button",{type:"button",class:"btn btn-outline-theme",onClick:r[0]||(r[0]=b(d=>s.onDownload(),["prevent"]))}," Download CSV "),K,e.isLoading?(i(),w(g,{key:0},{default:u(()=>[f(p,null,{default:u(()=>[l("h2",null,c(e.readError),1),e.process_data?(i(),a("div",W,[e.process_data.process_value=="start"?(i(),a("div",V,[l("button",{type:"button",class:"btn btn-outline-theme ms-20px mb-10px",onClick:r[1]||(r[1]=b(d=>s.stopProgress(),["prevent"]))},"Stop"),l("h5",null,c(e.process_data.message_value),1),l("p",null,c(e.process_data.current_count)+" of "+c(e.process_data.total_count),1),l("p",O,c(e.process_data.fail_reason),1)])):(i(),a("div",H,q))])):n("",!0)]),_:1})]),_:1})):n("",!0),e.isLoading?n("",!0):(i(),a("div",J,[e.isLoading?n("",!0):(i(),a("div",Q,[l("div",{class:D(["tab-pane fade",{show:e.tabName=="all",active:e.tabName=="all"}]),id:"all_data"},[l("div",Y,[l("div",Z,[l("h3",null,"All Data ( "+c(this.totalCount)+" )",1)]),l("div",$,[e.totalCount>0?(i(),a("button",{key:0,type:"button",class:"btn btn-outline-theme w-100 mb-10px",onClick:r[2]||(r[2]=b(d=>s.submitBigcommerce(),["prevent"]))},"Submit To Bigcommerce")):n("",!0)]),l("div",ee,[e.totalCount>0?(i(),a("button",{key:0,type:"button",class:"btn btn-outline-theme w-100 mb-10px",onClick:r[3]||(r[3]=b(d=>s.setPriceManagerForSA(),["prevent"]))},"Submit Price To SellerActive")):n("",!0)]),l("div",te,[l("form",{class:"mb-10px",onSubmit:r[5]||(r[5]=b(d=>s.submitSearch(),["prevent"])),method:"POST"},[l("div",oe,[l("div",le,[N(l("input",{type:"text","onUpdate:modelValue":r[4]||(r[4]=d=>e.searchKey=d),class:"form-control",placeholder:"Stock number or Manufacturer PartNumber or Description"},null,512),[[k,e.searchKey]])]),re])],32)])])],2)])),!e.isLoading&&e.table&&e.table.rows.length>0?(i(),w(g,{key:1},{default:u(()=>[f(p,null,{default:u(()=>[f(S,{class:"vue-table",columns:e.table.columns,rows:e.table.rows,total:e.table.totalRecordCount,sortable:e.table.sortable,"is-loading":e.table.isLoading,messages:e.table.messages,onDoSearch:s.doSearch,onIsFinished:r[6]||(r[6]=d=>e.table.isLoading=!1)},null,8,["columns","rows","total","sortable","is-loading","messages","onDoSearch"])]),_:1})]),_:1})):n("",!0),e.isLoading?(i(),w(g,{key:2},{default:u(()=>[f(p,null,{default:u(()=>[l("h2",null,c(e.readError),1)]),_:1})]),_:1})):n("",!0)]))])])])])}const ce=y(z,[["render",se]]);export{ce as default};
