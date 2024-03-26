import{_ as y,a as S,B as v,D as C,A as M,n as A,S as I,r as w,o as i,c as a,b as l,p as _,g as b,h as d,G as N,t as c,w as h,d as k,v as D,i as L,f as m}from"./index.297aa858.js";import{u as T,h as B,v as R}from"./app-variable.7df075e7.js";import{n as E}from"./NavScrollTo.fa972258.js";import{l as z}from"./index.95329077.js";T();const f=S(),X={data(){return{table:v({isLoading:!1,isReSearch:!1,rowClasses:t=>t.id==1?["aaa","is-id-one"]:["bbb","other"],columns:[{label:"Product Image",field:"Product Image File - 1",width:"5%",sortable:!0,display:function(t){if(t["Product Image File - 1"]!=""){let s="<div>";s+='<a href="'+t["Product Image File - 1"]+'" target="_blank"><img src="'+t["Product Image File - 1"]+'" style="width:150px" alt="No Image"></a>';for(const e of t.ImageArray)e!=""&&(s+='<a href="'+e+'" target="_blank"><img src="'+e+'" style="width:150px" alt="No Image"></a><br><br>');return s+="</div>",s}else return""}},{label:"Part Number",field:"partnumber",width:"5%",sortable:!0},{label:"Item Type",field:"item Type",width:"5%",sortable:!0,display:function(t){return t.isBlocked?'<p style="color: red;font-weight: bold">'+(t.isDeleted?"Deleted":"")+'</p><p style="color: white;font-weight: bold">Blocked</p><p>'+t["item Type"]+"</p>":'<p style="color: red;font-weight: bold">'+(t.isDeleted?"Deleted":"")+"</p><p>"+t["item Type"]+"</p>"}},{label:"Custom Fields",field:"CustomFields",width:"5%",sortable:!0,display:function(t){if(t.CustomFields!=""&&t.CustomFields.length>0){let s="<div><ul>";for(const e of t.CustomFields)s+="<li><strong>"+e.name+": </strong>"+e.value+"</li>";return s+="</ul></div>",s}else return""}},{label:"Sale",field:"Sale",width:"2%",sortable:!0},{label:"Old Sale",field:"Old Sale",width:"2%",sortable:!0},{label:"Closeout",field:"Closeout",width:"2%",sortable:!0},{label:"Old Closeout",field:"Old Closeout",width:"2%",sortable:!0},{label:"Rebate",field:"Rebate",width:"2%",sortable:!0},{label:"Old Rebate",field:"Old Rebate",width:"2%",sortable:!0},{label:"Category",field:"Category",width:"5%",sortable:!0},{label:"Product Name",field:"Product Name",width:"5%",sortable:!0,isKey:!0},{label:"Amazon MIN",field:"Amazon MIN",width:"5%",sortable:!0},{label:"Amazon MID",field:"Amazon MID",width:"5%",sortable:!0},{label:"Amazon MAX",field:"Amazon MAX",width:"5%",sortable:!0},{label:"AmazonCA MIN",field:"AmazonCA MIN",width:"5%",sortable:!0},{label:"AmazonCA MID",field:"AmazonCA MID",width:"5%",sortable:!0},{label:"AmazonCA MAX",field:"AmazonCA MAX",width:"5%",sortable:!0},{label:"AmazonMX MIN",field:"AmazonMX MIN",width:"5%",sortable:!0},{label:"AmazonMX MID",field:"AmazonMX MID",width:"5%",sortable:!0},{label:"AmazonMX MAX",field:"AmazonMX MAX",width:"5%",sortable:!0},{label:"BigCommerce MIN",field:"BigCommerce MIN",width:"5%",sortable:!0},{label:"BigCommerce MID",field:"BigCommerce MID",width:"5%",sortable:!0},{label:"BigCommerce MAX",field:"BigCommerce MAX",width:"5%",sortable:!0},{label:"Ebay MIN",field:"Ebay MIN",width:"5%",sortable:!0},{label:"Ebay MID",field:"Ebay MID",width:"5%",sortable:!0},{label:"Ebay MAX",field:"Ebay MAX",width:"5%",sortable:!0},{label:"Newegg MIN",field:"Newegg MIN",width:"5%",sortable:!0},{label:"Newegg MID",field:"Newegg MID",width:"5%",sortable:!0},{label:"Newegg MAX",field:"Newegg MAX",width:"5%",sortable:!0},{label:"Walmart MIN",field:"Walmart MIN",width:"5%",sortable:!0},{label:"Walmart MID",field:"Walmart MID",width:"5%",sortable:!0},{label:"Walmart MAX",field:"Walmart MAX",width:"5%",sortable:!0},{label:"Min Price",field:"Min Price",width:"5%",sortable:!0},{label:"Max Price",field:"Max Price",width:"5%",sortable:!0},{label:"BC Price",field:"BC Price",width:"5%",sortable:!0},{label:"Product Type",field:"Product Type",width:"5%",sortable:!0},{label:"Product Code/SKU",field:"Product Code/SKU",width:"5%",sortable:!0},{label:"Brand Name",field:"Brand Name",width:"5%",sortable:!0},{label:"Option Set Align",field:"Option Set Align",width:"5%",sortable:!0},{label:"Product Description",field:"Product Description",width:"30%",sortable:!0,display:function(t){return"<p>"+t["Product Description"]+"</p>"}},{label:"BC Price",field:"BC Price",width:"5%",sortable:!0},{label:"Cost",field:"Cost",width:"5%",sortable:!0},{label:"Retail Price",field:"Retail Price",width:"5%",sortable:!0},{label:"Product Weight",field:"Product Weight",width:"5%",sortable:!0},{label:"Product Width",field:"Product Width",width:"5%",sortable:!0},{label:"Product Height",field:"Product Height",width:"5%",sortable:!0},{label:"Product Depth",field:"Product Depth",width:"5%",sortable:!0},{label:"Allow Purchases?",field:"Allow Purchases?",width:"5%",sortable:!0},{label:"Product Visible?",field:"Product Visible?",width:"5%",sortable:!0},{label:"Track Inventory",field:"Track Inventory",width:"5%",sortable:!0},{label:"Current Stock Level",field:"Current Stock Level",width:"5%",sortable:!0},{label:"Product Image Is Thumbnail - 1",field:"Product Image Is Thumbnail - 1",width:"5%",sortable:!0},{label:"Search Keywords",field:"Search Keywords",width:"30%",sortable:!0,display:function(t){return"<p>"+t["Search Keywords"]+"</p>"}},{label:"Meta Description",field:"Meta Description",width:"30%",sortable:!0,display:function(t){return"<p>"+t["Meta Description"]+"</p>"}},{label:"Product Condition",field:"Product Condition",width:"5%",sortable:!0},{label:"Show Product Condition?",field:"Show Product Condition?",width:"5%",sortable:!0},{label:"Product UPC/EAN",field:"Product UPC/EAN",width:"5%",sortable:!0},{label:"Stop Processing Rules",field:"Stop Processing Rules",width:"3%",sortable:!0},{label:"Redirect Old URL?",field:"Redirect Old URL?",width:"3%",sortable:!0},{label:"GPS Global Trade Item Number",field:"GPS Global Trade Item Number",width:"3%",sortable:!0},{label:"GPS Manufacturer Part Number",field:"GPS Manufacturer Part Number",width:"5%",sortable:!0},{label:"GPS Enabled",field:"GPS Enabled",width:"5%",sortable:!0}],rows:[],totalRecordCount:C(()=>this.totalCount),sortable:{order:"id",sort:"asc"},messages:{pagingInfo:"Showing {0}-{1} of {2}",pageSizeChangeLabel:"Row count:",gotoPageLabel:"Go to page:",noDataAvailable:"No data"}}),port:"",data:v([]),ftpServerInput:"",usernameInput:"",passwordInput:"",readError:"Loading data from FTP...",isLoading:!1,totalCount:0,searchKey:"",tabName:"all",is_whole_data:!1,new_filepath:"",hostURL:M,hostURLWithPort:A,socket:null,process_data:null}},components:{highlightjs:B,navScrollTo:E,vueTable:R},created(){this.GetInventoryFull(),this.socket=z(this.hostURLWithPort,{path:"/inventory"})},mounted(){new I(document.body,{target:"#sidebar-bootstrap",offset:200}),this.socket!=null&&(setInterval(()=>{this.socket.emit("get_process","me")},2e3),this.socket.on("set_process",o=>{this.process_data=o}))},methods:{GetInventoryFull:function(){this.doSearch(0,10,"_id","asc")},doSearch:function(o,r,t,s){this.isLoading||(this.table.isLoading=!0,f.GetCWRTableData("getBigcommerceHeaderMappingForTable",o,r,t,s,this.tabName,this.searchKey).then(e=>{e.status&&(this.table.rows=e.data,this.totalCount=e.numberOfInventories[0].NumberOfInventories,this.table.sortable.order=t,this.table.sortable.sort=s,this.table.isLoading=!1)}).catch(e=>{console.log(e),this.readError=e.message}))},submitSearch:function(){this.doSearch(0,10,"_id","ASC")},stopProgress:function(){this.socket!=null&&this.socket.emit("stop_process","me")},submitBigcommerce:function(){this.isLoading||(this.readError="Submit to Bigcommerce...",this.isLoading=!0,this.socket!=null&&this.socket.emit("get_process","me"),f.submitCWRToBigcommerce("all",this.searchKey).then(o=>{console.log(o),o.status&&(this.doSearch(0,10,"_id","asc"),this.isLoading=!1)}).catch(o=>{console.log(o),this.readError="Server error!"}))},setPriceManagerForSA:function(){this.isLoading||(this.readError="Updating prices...",this.isLoading=!0,this.socket!=null&&this.socket.emit("get_process","me"),f.setPriceManagerInCWR(this.searchKey).then(o=>{console.log(o),o.status&&this.doSearch(0,10,"_id","asc"),this.isLoading=!1}).catch(o=>{console.log(o),this.readError="Server error!"}))},submitQtyToSellerActive:function(){this.isLoading||(this.readError="Submit to SellerActive...",this.isLoading=!0,this.socket!=null&&this.socket.emit("get_process","me"),f.submitCWRQtyToSellerActive("all",this.searchKey).then(o=>{o.status&&(this.doSearch(0,10,"_id","asc"),this.isLoading=!1)}).catch(o=>{console.log(o),this.readError="Server error!"}))}}},W={class:"row justify-content-center"},x={class:"col-xl-12"},F={class:"row"},O={class:"col-xl-12"},U=L('<ul class="breadcrumb"><li class="breadcrumb-item"><a href="#">CWR</a></li><li class="breadcrumb-item active">Bigcommerce</li></ul><hr class="mb-4">',2),G={key:0},K={key:0},V={style:{color:"red"}},H={key:1},Q=l("h5",null,"The End! Please try again.",-1),j=[Q],q={key:1,id:"vue3TableLite",class:"mb-5"},J={key:0,class:"tab-content pt-3"},Y={class:"row"},Z={class:"col-md-3 col-sm-0"},$={class:"col-md-2 col-sm-12"},ee={class:"col-md-2 col-sm-12"},te={class:"col-md-2 col-sm-12"},le={class:"col-md-3 col-sm-12"},oe={class:"row"},re={class:"col-9"},se=l("div",{class:"col-3"},[l("button",{type:"submit",class:"btn btn-dark w-100 active"},"Search")],-1);function ie(o,r,t,s,e,u){const g=w("card-body"),p=w("card"),P=w("vue-table");return i(),a("div",W,[l("div",x,[l("div",F,[l("div",O,[U,e.isLoading?(i(),_(p,{key:0},{default:b(()=>[m(g,null,{default:b(()=>[l("h2",null,c(e.readError),1),e.process_data?(i(),a("div",G,[e.process_data.process_value=="start"?(i(),a("div",K,[l("button",{type:"button",class:"btn btn-outline-theme ms-20px mb-10px",onClick:r[0]||(r[0]=h(n=>u.stopProgress(),["prevent"]))},"Stop"),l("h5",null,c(e.process_data.message_value),1),l("p",null,c(e.process_data.current_count)+" of "+c(e.process_data.total_count),1),l("p",V,c(e.process_data.fail_reason),1)])):(i(),a("div",H,j))])):d("",!0)]),_:1})]),_:1})):d("",!0),e.isLoading?d("",!0):(i(),a("div",q,[e.isLoading?d("",!0):(i(),a("div",J,[l("div",{class:N(["tab-pane fade",{show:e.tabName=="all",active:e.tabName=="all"}]),id:"all_data"},[l("div",Y,[l("div",Z,[l("h3",null,"All Data ( "+c(this.totalCount)+" )",1)]),l("div",$,[e.totalCount>0?(i(),a("button",{key:0,type:"button",class:"btn btn-outline-theme w-100 mb-10px",onClick:r[1]||(r[1]=h(n=>u.submitBigcommerce(),["prevent"]))},"Submit To Bigcommerce")):d("",!0)]),l("div",ee,[e.totalCount>0?(i(),a("button",{key:0,type:"button",class:"btn btn-outline-theme w-100 mb-10px",onClick:r[2]||(r[2]=h(n=>u.setPriceManagerForSA(),["prevent"]))},"Submit Price To SellerActive")):d("",!0)]),l("div",te,[e.totalCount>0?(i(),a("button",{key:0,type:"button",class:"btn btn-outline-theme w-100 mb-10px",onClick:r[3]||(r[3]=h(n=>u.submitQtyToSellerActive(),["prevent"]))},"Submit Qty To SellerActive")):d("",!0)]),l("div",le,[l("form",{class:"mb-10px",onSubmit:r[5]||(r[5]=h(n=>u.submitSearch(),["prevent"])),method:"POST"},[l("div",oe,[l("div",re,[k(l("input",{type:"text","onUpdate:modelValue":r[4]||(r[4]=n=>e.searchKey=n),class:"form-control",placeholder:"Stock number or Manufacturer PartNumber or Description"},null,512),[[D,e.searchKey]])]),se])],32)])])],2)])),!e.isLoading&&e.table&&e.table.rows.length>0?(i(),_(p,{key:1},{default:b(()=>[m(g,null,{default:b(()=>[m(P,{class:"vue-table",columns:e.table.columns,rows:e.table.rows,total:e.table.totalRecordCount,sortable:e.table.sortable,"is-loading":e.table.isLoading,messages:e.table.messages,onDoSearch:u.doSearch,onIsFinished:r[6]||(r[6]=n=>e.table.isLoading=!1)},null,8,["columns","rows","total","sortable","is-loading","messages","onDoSearch"])]),_:1})]),_:1})):d("",!0),e.isLoading?(i(),_(p,{key:2},{default:b(()=>[m(g,null,{default:b(()=>[l("h2",null,c(e.readError),1)]),_:1})]),_:1})):d("",!0)]))])])])])}const ue=y(X,[["render",ie]]);export{ue as default};
