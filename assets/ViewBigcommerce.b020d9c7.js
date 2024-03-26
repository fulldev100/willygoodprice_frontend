import{_ as F,a as k,B as w,D as C,A as L,n as x,S as N,r as P,o as s,c as p,b as t,e as D,w as y,p as f,g as u,h as d,G as c,t as b,d as K,v as S,f as g}from"./index.c9c94c12.js";import{u as B,h as T,v as I}from"./app-variable.3f08ab6c.js";import{n as A}from"./NavScrollTo.ea3bcc36.js";import{l as R}from"./index.95329077.js";B();const v=k(),G={data(){const r=w({isLoading:!1,isReSearch:!1,rowClasses:o=>o.id==1?["aaa","is-id-one"]:["bbb","other"],columns:[{label:"item Type",field:"item Type",width:"5%",sortable:!0,isKey:!0},{label:"Product Name",field:"Product Name",width:"5%",sortable:!0,isKey:!0},{label:"Product Type",field:"Product Type",width:"5%",sortable:!0},{label:"Product Code/SKU",field:"Product Code/SKU",width:"5%",sortable:!0},{label:"SKU",field:"SKU",width:"5%",sortable:!0},{label:"Brand Name",field:"Brand Name",width:"5%",sortable:!0},{label:"Option Set Align",field:"Option Set Align",width:"5%",sortable:!0},{label:"Product Description",field:"Product Description",width:"30%",sortable:!0,display:function(o){return'<p title="'+o["Product Description"]+'" style="width: 300px !important">'+o["Product Description"]+"</p>"}},{label:"BC Price",field:"BC Price",width:"5%",sortable:!0},{label:"Total Cost",field:"Total Cost",width:"5%",sortable:!0},{label:"Cost",field:"Cost",width:"5%",sortable:!0},{label:"Retail Price",field:"Retail Price",width:"5%",sortable:!0},{label:"Total Shipping Cost",field:"Total Shipping Cost",width:"5%",sortable:!0},{label:"Free Shipping",field:"Free Shipping",width:"5%",sortable:!0},{label:"Product Weight",field:"Product Weight",width:"5%",sortable:!0},{label:"Product Width",field:"Product Width",width:"5%",sortable:!0},{label:"Product Height",field:"Product Height",width:"5%",sortable:!0},{label:"Product Depth",field:"Product Depth",width:"5%",sortable:!0},{label:"Allow Purchases?",field:"Allow Purchases?",width:"5%",sortable:!0},{label:"Product Visible?",field:"Product Visible?",width:"5%",sortable:!0},{label:"Product Availability",field:"Product Availability",width:"5%",sortable:!0},{label:"Track Inventory",field:"Track Inventory",width:"5%",sortable:!0},{label:"Current Stock Level",field:"Current Stock Level",width:"5%",sortable:!0},{label:"Category",field:"Category",width:"5%",sortable:!0},{label:"Product Image File - 1",field:"Product Image File - 1",width:"5%",sortable:!0,display:function(o){return'<a href="'+o["Product Image File - 1"]+'" target="_blank"><img src="'+o["Product Image File - 1"]+'" style="width:150px"></a>'}},{label:"Product Image Is Thumbnail - 1",field:"Product Image Is Thumbnail - 1",width:"5%",sortable:!0},{label:"Search Keywords",field:"Search Keywords",width:"30%",sortable:!0,display:function(o){return'<p title="'+o["Search Keywords"]+'" style="width: 300px !important">'+o["Search Keywords"]+"</p>"}},{label:"Meta Description",field:"Meta Description",width:"30%",sortable:!0,display:function(o){return'<p title="'+o["Meta Description"]+'" style="width: 300px !important">'+o["Meta Description"]+"</p>"}},{label:"Product Condition",field:"Product Condition",width:"5%",sortable:!0},{label:"Show Product Condition?",field:"Show Product Condition?",width:"5%",sortable:!0},{label:"Product UPC/EAN",field:"Product UPC/EAN",width:"5%",sortable:!0},{label:"Stop Processing Rules",field:"Stop Processing Rules",width:"3%",sortable:!0},{label:"Redirect Old URL?",field:"Redirect Old URL?",width:"3%",sortable:!0},{label:"GPS Global Trade Item Number",field:"GPS Global Trade Item Number",width:"3%",sortable:!0},{label:"GPS Manufacturer Part Number",field:"GPS Manufacturer Part Number",width:"5%",sortable:!0},{label:"GPS Gender",field:"GPS Gender",width:"5%",sortable:!0},{label:"GPS Age Group",field:"GPS Age Group",width:"5%",sortable:!0},{label:"GPS Enabled",field:"GPS Enabled",width:"5%",sortable:!0},{label:"Manufacturer Part Number",field:"Manufacturer Part Number",width:"5%",sortable:!0}],rows:[],totalRecordCount:C(()=>this.totalCount),sortable:{order:"id",sort:"asc"},messages:{pagingInfo:"Showing {0}-{1} of {2}",pageSizeChangeLabel:"Row count:",gotoPageLabel:"Go to page:",noDataAvailable:"No data"}}),_=w({isLoading:!1,isReSearch:!1,rowClasses:o=>o.id==1?["aaa","is-id-one"]:["bbb","other"],columns:[{label:"id",field:"id",width:"5%",sortable:!0,isKey:!0},{label:"parent_id",field:"parent_id",width:"5%",sortable:!0,isKey:!0},{label:"name",field:"name",width:"5%",sortable:!0,isKey:!0},{label:"description",field:"description",width:"5%",sortable:!0,isKey:!0},{label:"views",field:"views",width:"5%",sortable:!0,isKey:!0},{label:"sort_order",field:"sort_order",width:"5%",sortable:!0,isKey:!0},{label:"page_title",field:"page_title",width:"5%",sortable:!0,isKey:!0},{label:"meta_keywords",field:"meta_keywords",width:"5%",sortable:!0,display:function(o){return'<p title="'+o.meta_keywords[0]+'" style="width: 300px !important">'+o.meta_keywords[0]+"</p>"}},{label:"meta_description",field:"meta_description",width:"5%",sortable:!0,isKey:!0},{label:"layout_file",field:"layout_file",width:"5%",sortable:!0,isKey:!0},{label:"image_url",field:"image_url",width:"10%",sortable:!0,display:function(o){return o.image_url&&o.image_url!=""?'<a href="'+o.image_url+'" target="_blank"><img src="'+o.image_url+'" style="width:100px"></a>':"<p></p>"}},{label:"is_visible",field:"is_visible",width:"5%",sortable:!0,isKey:!0},{label:"search_keywords",field:"search_keywords",width:"5%",sortable:!0,isKey:!0},{label:"default_product_sort",field:"default_product_sort",width:"5%",sortable:!0,isKey:!0},{label:"custom_url",field:"custom_url",width:"5%",sortable:!0,display:function(o){return'<p title="'+o.custom_url.url+'" style="width: 300px !important">'+o.custom_url.url+"</p>"}}],rows:[],totalRecordCount:C(()=>this.totalCountForCategory),sortable:{order:"id",sort:"asc"},messages:{pagingInfo:"Showing {0}-{1} of {2}",pageSizeChangeLabel:"Row count:",gotoPageLabel:"Go to page:",noDataAvailable:"No data"}}),n=w({isLoading:!1,isReSearch:!1,rowClasses:o=>o.id==1?["aaa","is-id-one"]:["bbb","other"],columns:[{label:"mpn",field:"mpn",width:"5%",sortable:!0,isKey:!0},{label:"id",field:"id",width:"5%",sortable:!0,isKey:!0},{label:"name",field:"name",width:"5%",sortable:!0,isKey:!0},{label:"type",field:"type",width:"5%",sortable:!0,isKey:!0},{label:"sku",field:"sku",width:"5%",sortable:!0,isKey:!0},{label:"description",field:"description",width:"30%",sortable:!0,display:function(o){return'<p title="'+o.description+'" style="width: 700px !important">'+o.description+"</p>"}},{label:"weight",field:"weight",width:"5%",sortable:!0,isKey:!0},{label:"width",field:"width",width:"5%",sortable:!0,isKey:!0},{label:"depth",field:"depth",width:"5%",sortable:!0,isKey:!0},{label:"height",field:"height",width:"5%",sortable:!0,isKey:!0},{label:"price",field:"price",width:"5%",sortable:!0,isKey:!0},{label:"cost_price",field:"cost_price",width:"5%",sortable:!0,isKey:!0},{label:"retail_price",field:"retail_price",width:"5%",sortable:!0,isKey:!0},{label:"sale_price",field:"sale_price",width:"5%",sortable:!0,isKey:!0},{label:"map_price",field:"map_price",width:"5%",sortable:!0,isKey:!0},{label:"tax_class_id",field:"tax_class_id",width:"5%",sortable:!0,isKey:!0},{label:"product_tax_code",field:"product_tax_code",width:"5%",sortable:!0,isKey:!0},{label:"calculated_price",field:"calculated_price",width:"5%",sortable:!0,isKey:!0},{label:"categories",field:"categories",width:"5%",sortable:!0,display:function(o){return'<p title="'+o.categories[0]+'" style="width: 300px !important">'+o.categories[0]+"</p>"}},{label:"brand_id",field:"brand_id",width:"5%",sortable:!0,isKey:!0},{label:"option_set_id",field:"option_set_id",width:"5%",sortable:!0,isKey:!0},{label:"option_set_display",field:"option_set_display",width:"5%",sortable:!0,isKey:!0},{label:"inventory_level",field:"inventory_level",width:"5%",sortable:!0,isKey:!0},{label:"inventory_warning_level",field:"inventory_warning_level",width:"5%",sortable:!0,isKey:!0},{label:"inventory_tracking",field:"inventory_tracking",width:"5%",sortable:!0,isKey:!0},{label:"reviews_rating_sum",field:"reviews_rating_sum",width:"5%",sortable:!0,isKey:!0},{label:"reviews_count",field:"reviews_count",width:"5%",sortable:!0,isKey:!0},{label:"total_sold",field:"total_sold",width:"5%",sortable:!0,isKey:!0},{label:"fixed_cost_shipping_price",field:"fixed_cost_shipping_price",width:"5%",sortable:!0,isKey:!0},{label:"is_free_shipping",field:"is_free_shipping",width:"5%",sortable:!0,isKey:!0},{label:"is_visible",field:"is_visible",width:"5%",sortable:!0,isKey:!0},{label:"is_featured",field:"is_featured",width:"5%",sortable:!0,isKey:!0},{label:"related_products",field:"related_products",width:"5%",sortable:!0,display:function(o){return'<p title="'+o.related_products[0]+'" style="width: 300px !important">'+o.related_products[0]+"</p>"}},{label:"warranty",field:"warranty",width:"5%",sortable:!0,isKey:!0},{label:"bin_picking_number",field:"bin_picking_number",width:"5%",sortable:!0,isKey:!0},{label:"layout_file",field:"layout_file",width:"5%",sortable:!0,isKey:!0},{label:"upc",field:"upc",width:"5%",sortable:!0,isKey:!0},{label:"gtin",field:"gtin",width:"5%",sortable:!0,isKey:!0},{label:"search_keywords",field:"search_keywords",width:"5%",sortable:!0,isKey:!0},{label:"availability",field:"availability",width:"5%",sortable:!0,isKey:!0},{label:"availability_description",field:"availability_description",width:"5%",sortable:!0,isKey:!0},{label:"gift_wrapping_options_type",field:"gift_wrapping_options_type",width:"5%",sortable:!0,isKey:!0},{label:"gift_wrapping_options_list",field:"gift_wrapping_options_list",width:"5%",sortable:!0,display:function(o){let a="";for(let h=0;h<o.gift_wrapping_options_list.length;h++)a=o.gift_wrapping_options_list[h]+", ";return'<p title="'+a+'" style="width: 300px !important">'+a+"</p>"}},{label:"sort_order",field:"sort_order",width:"5%",sortable:!0,isKey:!0},{label:"condition",field:"condition",width:"5%",sortable:!0,isKey:!0},{label:"is_condition_shown",field:"is_condition_shown",width:"5%",sortable:!0,isKey:!0},{label:"order_quantity_minimum",field:"order_quantity_minimum",width:"5%",sortable:!0,isKey:!0},{label:"order_quantity_maximum",field:"order_quantity_maximum",width:"5%",sortable:!0,isKey:!0},{label:"page_title",field:"page_title",width:"5%",sortable:!0,isKey:!0},{label:"meta_keywords",field:"meta_keywords",width:"5%",sortable:!0,display:function(o){let a="";for(let h=0;h<o.meta_keywords.length;h++)a=o.meta_keywords[h]+", ";return'<p title="'+a+'" style="width: 300px !important">'+a+"</p>"}},{label:"meta_description",field:"meta_description",width:"10%",sortable:!0,isKey:!0},{label:"date_created",field:"date_created",width:"5%",sortable:!0,isKey:!0},{label:"date_modified",field:"date_modified",width:"5%",sortable:!0,isKey:!0},{label:"view_count",field:"view_count",width:"5%",sortable:!0,isKey:!0},{label:"preorder_release_date",field:"preorder_release_date",width:"5%",sortable:!0,isKey:!0},{label:"preorder_message",field:"preorder_message",width:"5%",sortable:!0,isKey:!0},{label:"is_preorder_only",field:"is_preorder_only",width:"5%",sortable:!0,isKey:!0},{label:"is_price_hidden",field:"is_price_hidden",width:"5%",sortable:!0,isKey:!0},{label:"price_hidden_label",field:"price_hidden_label",width:"5%",sortable:!0,isKey:!0},{label:"custom_url",field:"custom_url",width:"5%",sortable:!0,display:function(o){return'<p title="'+o.custom_url.url+'" style="width: 300px !important">'+o.custom_url.url+"</p>"}},{label:"base_variant_id",field:"base_variant_id",width:"5%",sortable:!0,isKey:!0},{label:"open_graph_type",field:"open_graph_type",width:"5%",sortable:!0,isKey:!0},{label:"open_graph_title",field:"open_graph_title",width:"5%",sortable:!0,isKey:!0},{label:"open_graph_description",field:"open_graph_description",width:"5%",sortable:!0,isKey:!0},{label:"open_graph_use_meta_description",field:"open_graph_use_meta_description",width:"5%",sortable:!0,isKey:!0},{label:"open_graph_use_product_name",field:"open_graph_use_product_name",width:"5%",sortable:!0,isKey:!0},{label:"open_graph_use_image",field:"open_graph_use_image",width:"5%",sortable:!0,isKey:!0}],rows:[],totalRecordCount:C(()=>this.totalCountForProduct),sortable:{order:"id",sort:"asc"},messages:{pagingInfo:"Showing {0}-{1} of {2}",pageSizeChangeLabel:"Row count:",gotoPageLabel:"Go to page:",noDataAvailable:"No products"}});return{table:r,tableForCategory:_,tableForProduct:n,data:w([]),dataForCategory:w([]),readError:"",readErrorForCategory:"",isLoading:!1,isLoadingForCategory:!1,totalCount:0,totalCountForCategory:0,totalCountForProduct:0,searchKey:"",searchKeyForCategory:"",tabName:"create",tabForCategory:"category",hostURL:L,hostURLWithPort:x,socket:null,process_data:null}},components:{highlightjs:T,navScrollTo:A,vueTable:I},created(){this.doSearch(0,10,"id","asc"),this.doSearchFromBigcommerce(0,10,"id","asc"),this.socket=R(this.hostURLWithPort,{path:"/inventory"})},mounted(){new N(document.body,{target:"#sidebar-bootstrap",offset:200}),this.socket!=null&&(setInterval(()=>{this.socket.emit("get_process","me")},2e3),this.socket.on("set_process",i=>{this.process_data=i}))},methods:{doSearchFromBigcommerce:function(i,r,m,_){this.isLoadingForCategory||(this.tabForCategory=="category"?(this.tableForCategory.isLoading=!0,v.getAllCategoriesForTable(i,r,m,_,this.tabName,this.searchKey).then(e=>{e.status&&(this.tableForCategory.rows=e.data,this.totalCountForCategory=parseInt(e.numberOfInventories),this.tableForCategory.sortable.order=m,this.tableForCategory.sortable.sort=_,this.tableForCategory.isLoading=!1)}).catch(e=>{console.log(e),this.readErrorForCategory=e.message})):(this.tableForProduct.isLoading=!0,v.getAllProductsForTable(i,r,m,_,this.tabName,this.searchKey).then(e=>{e.status&&(this.tableForProduct.rows=e.data,this.totalCountForProduct=parseInt(e.numberOfInventories),this.tableForProduct.sortable.order=m,this.tableForProduct.sortable.sort=_,this.tableForProduct.isLoading=!1)}).catch(e=>{console.log(e),this.readErrorForCategory=e.message})))},onDownload:function(){v.GetDownloadBigcommerceInventoryFull().then(i=>{i.status&&alert("done")}).catch(i=>{console.log(i),this.readError=i.message})},doSearch:function(i,r,m,_){this.isLoading||(this.table.isLoading=!0,v.getBigcommerceHeaderMappingForTable(i,r,m,_,this.tabName,this.searchKey).then(e=>{e.status&&(this.table.rows=e.data,this.totalCount=e.numberOfInventories[0].NumberOfInventories,this.table.sortable.order=m,this.table.sortable.sort=_,this.table.isLoading=!1)}).catch(e=>{console.log(e),this.readError=e.message}))},submitSearch:function(){this.doSearch(0,10,"id","ASC")},stopProgress:function(){this.socket!=null&&this.socket.emit("stop_process","me")},submitBigcommerce:function(){if(this.tabName=="create"||this.tabName=="update"||this.tabName=="delete"){if(this.isLoading)return;this.readError="Submit to Bigcommerce...",this.isLoading=!0,this.socket!=null&&this.socket.emit("get_process","me"),v.submitBigcommerce(this.tabName,this.searchKey).then(i=>{console.log(i),i.status&&(this.doSearch(0,10,"id","asc"),this.doSearchFromBigcommerce(0,10,"id","asc"),this.isLoading=!1)}).catch(i=>{console.log(i),this.readError="Server error!"})}}}},E={class:"row justify-content-center"},U={class:"col-xl-12"},V=t("ul",{class:"breadcrumb"},[t("li",{class:"breadcrumb-item"},[t("a",{href:"#"},"Bigcommerce")]),t("li",{class:"breadcrumb-item active"},"API")],-1),O={class:"page-header"},M=t("hr",{class:"mb-4"},null,-1),W={class:"row"},q={class:"col-xl-12 col-sm-12"},z={id:"vue3TableLite",class:"mb-5"},H={key:0},j={key:0},J={style:{color:"red"}},Q={key:1},X=t("h5",null,"The End! Please try again.",-1),Y=[X],Z={key:1,class:"nav nav-tabs"},$={class:"nav-item me-1 dropdown"},ee={class:"dropdown-menu"},te={key:2,class:"tab-content pt-3"},oe={class:"row"},re={class:"col-md-3 col-sm-0"},le={class:"col-md-3 col-sm-12"},ie={class:"col-md-6 col-sm-12"},se={class:"row"},ae={class:"col-9"},de=t("div",{class:"col-3"},[t("button",{type:"submit",class:"btn btn-dark w-100 active"},"Search")],-1),ne={class:"row"},ue={class:"col-md-3 col-sm-0"},ce={class:"col-md-3 col-sm-12"},be={class:"col-md-6 col-sm-12"},he={class:"row"},pe={class:"col-9"},_e=t("div",{class:"col-3"},[t("button",{type:"submit",class:"btn btn-dark w-100 active"},"Search")],-1),me={class:"row"},ge={class:"col-md-3 col-sm-0"},ye={class:"col-md-3 col-sm-12"},fe={class:"col-md-6 col-sm-12"},we={class:"row"},ve={class:"col-9"},Ce=t("div",{class:"col-3"},[t("button",{type:"submit",class:"btn btn-dark w-100 active"},"Search")],-1),Pe={class:"col-xl-12 col-sm-12"},Ke={id:"vue3TableLite",class:"mb-5"},Se={key:0,class:"nav nav-tabs"},Fe={class:"nav-item me-1 dropdown"},ke={class:"dropdown-menu"},Le={key:1,class:"tab-content pt-3"},xe={class:"row mb-8px"},Ne={class:"col-md-6 col-sm-0"},De=t("div",{class:"col-md-6 col-sm-12 mb-10px"},null,-1),Be={class:"row mb-8px"},Te={class:"col-md-6 col-sm-0"},Ie=t("div",{class:"col-md-6 col-sm-12 mb-10px"},null,-1);function Ae(i,r,m,_,e,n){const o=P("card-body"),a=P("card"),h=P("vue-table");return s(),p("div",E,[t("div",U,[V,t("h1",O,[D(" Are you ready to post new products to Bigcommerce "),t("button",{type:"button",class:"btn btn-outline-theme",onClick:r[0]||(r[0]=y(l=>n.onDownload(),["prevent"]))}," Download CSV ")]),M,t("div",W,[t("div",q,[t("div",z,[e.isLoading?(s(),f(a,{key:0},{default:u(()=>[g(o,null,{default:u(()=>[t("h2",null,b(e.readError),1),e.process_data?(s(),p("div",H,[e.process_data.process_value=="start"?(s(),p("div",j,[t("button",{type:"button",class:"btn btn-outline-theme ms-20px mb-10px",onClick:r[1]||(r[1]=y(l=>n.stopProgress(),["prevent"]))},"Stop"),t("h5",null,b(e.process_data.message_value),1),t("p",null,b(e.process_data.current_count)+" of "+b(e.process_data.total_count),1),t("p",J,b(e.process_data.fail_reason),1)])):(s(),p("div",Q,Y))])):d("",!0)]),_:1})]),_:1})):d("",!0),e.isLoading?d("",!0):(s(),p("ul",Z,[t("li",$,[t("a",{href:"#",class:c(["nav-link dropdown-toggle",{active:e.tabName=="create"||e.tabName=="update"||e.tabName=="delete"}]),"data-bs-toggle":"dropdown"}," SWD Raw Data ",2),t("div",ee,[t("a",{href:"#added_data",class:c(["dropdown-item",{active:e.tabName=="create"}]),"data-bs-toggle":"tab",onClick:r[2]||(r[2]=l=>{l.preventDefault(),e.tabName="create",this.doSearch(0,10,"id","asc")})}," All Data ",2),t("a",{href:"#cost_changed",class:c(["dropdown-item",{active:e.tabName=="update"}]),"data-bs-toggle":"tab",onClick:r[3]||(r[3]=l=>{l.preventDefault(),e.tabName="update",this.doSearch(0,10,"id","asc")})}," Updated Data ",2),t("a",{href:"#delete_data",class:c(["dropdown-item",{active:e.tabName=="delete"}]),"data-bs-toggle":"tab",onClick:r[4]||(r[4]=l=>{l.preventDefault(),e.tabName="delete",this.doSearch(0,10,"id","asc")})}," Deleted Data ",2)])])])),e.isLoading?d("",!0):(s(),p("div",te,[t("div",{class:c(["tab-pane fade",{show:e.tabName=="create",active:e.tabName=="create"}]),id:"added_data"},[t("div",oe,[t("div",re,[t("h3",null,"All Data ( "+b(this.totalCount)+" )",1)]),t("div",le,[e.totalCount>0?(s(),p("button",{key:0,type:"button",class:"btn btn-outline-theme w-100 mb-10px",onClick:r[5]||(r[5]=y(l=>n.submitBigcommerce(),["prevent"]))},"Submit To Bigcommerce")):d("",!0)]),t("div",ie,[t("form",{class:"mb-10px",onSubmit:r[7]||(r[7]=y(l=>n.submitSearch(),["prevent"])),method:"POST"},[t("div",se,[t("div",ae,[K(t("input",{type:"text","onUpdate:modelValue":r[6]||(r[6]=l=>e.searchKey=l),class:"form-control",placeholder:"Vender name or VCPN or Description"},null,512),[[S,e.searchKey]])]),de])],32)])])],2),t("div",{class:c(["tab-pane fade",{show:e.tabName=="update",active:e.tabName=="update"}]),id:"cost_changed"},[t("div",ne,[t("div",ue,[t("h3",null,"Changed ( "+b(this.totalCount)+" )",1)]),t("div",ce,[e.totalCount>0?(s(),p("button",{key:0,type:"button",class:"btn btn-outline-theme w-100 mb-10px",onClick:r[8]||(r[8]=y(l=>n.submitBigcommerce(),["prevent"]))},"Update to Bigcommerce")):d("",!0)]),t("div",be,[t("form",{class:"mb-10px",onSubmit:r[10]||(r[10]=y(l=>n.submitSearch(),["prevent"])),method:"POST"},[t("div",he,[t("div",pe,[K(t("input",{type:"text","onUpdate:modelValue":r[9]||(r[9]=l=>e.searchKey=l),class:"form-control",placeholder:"Vender name or VCPN or Description"},null,512),[[S,e.searchKey]])]),_e])],32)])])],2),t("div",{class:c(["tab-pane fade",{show:e.tabName=="delete",active:e.tabName=="delete"}]),id:"delete_data"},[t("div",me,[t("div",ge,[t("h3",null,"Deleted ( "+b(this.totalCount)+" )",1)]),t("div",ye,[e.totalCount>0?(s(),p("button",{key:0,type:"button",class:"btn btn-outline-theme w-100 mb-10px",onClick:r[11]||(r[11]=y(l=>n.submitBigcommerce(),["prevent"]))},"Delete from Bigcommerce")):d("",!0)]),t("div",fe,[t("form",{class:"mb-10px",onSubmit:r[13]||(r[13]=y(l=>n.submitSearch(),["prevent"])),method:"POST"},[t("div",we,[t("div",ve,[K(t("input",{type:"text","onUpdate:modelValue":r[12]||(r[12]=l=>e.searchKey=l),class:"form-control",placeholder:"Vender name or VCPN or Description"},null,512),[[S,e.searchKey]])]),Ce])],32)])])],2)])),!e.isLoading&&e.table&&e.table.rows.length>0?(s(),f(a,{key:3},{default:u(()=>[g(o,null,{default:u(()=>[g(h,{class:"vue-table",columns:e.table.columns,rows:e.table.rows,total:e.table.totalRecordCount,sortable:e.table.sortable,"is-loading":e.table.isLoading,messages:e.table.messages,onDoSearch:n.doSearch,onIsFinished:r[14]||(r[14]=l=>e.table.isLoading=!1)},null,8,["columns","rows","total","sortable","is-loading","messages","onDoSearch"])]),_:1})]),_:1})):d("",!0)])]),t("div",Pe,[t("div",Ke,[e.isLoading?d("",!0):(s(),p("ul",Se,[t("li",Fe,[t("a",{href:"#",class:c(["nav-link dropdown-toggle",{active:e.tabForCategory=="category"||e.tabForCategory=="product"}]),"data-bs-toggle":"dropdown"}," Bigcommerce Data ",2),t("div",ke,[t("a",{href:"#category_data",class:c(["dropdown-item",{active:e.tabForCategory=="category"}]),"data-bs-toggle":"tab",onClick:r[15]||(r[15]=l=>{l.preventDefault(),e.tabForCategory="category",this.doSearchFromBigcommerce(0,10,"id","asc")})}," All Category ",2),t("a",{href:"#product_data",class:c(["dropdown-item",{active:e.tabForCategory=="product"}]),"data-bs-toggle":"tab",onClick:r[16]||(r[16]=l=>{l.preventDefault(),e.tabForCategory="product",this.doSearchFromBigcommerce(0,10,"id","asc")})}," All Product ",2)])])])),!e.isLoading&&!e.isLoadingForCategory?(s(),p("div",Le,[t("div",{class:c(["tab-pane fade",{show:e.tabForCategory=="category",active:e.tabForCategory=="category"}]),id:"category_data"},[t("div",xe,[t("div",Ne,[t("h3",null,"Categories ( "+b(this.totalCountForCategory)+" )",1)]),De]),!e.isLoadingForCategory&&e.tableForCategory&&e.tableForCategory.rows.length>0?(s(),f(a,{key:0},{default:u(()=>[g(o,null,{default:u(()=>[g(h,{class:"vue-table",columns:e.tableForCategory.columns,rows:e.tableForCategory.rows,total:e.tableForCategory.totalRecordCount,sortable:e.tableForCategory.sortable,"is-loading":e.tableForCategory.isLoading,messages:e.tableForCategory.messages,onDoSearch:n.doSearchFromBigcommerce,onIsFinished:r[17]||(r[17]=l=>e.tableForCategory.isLoading=!1)},null,8,["columns","rows","total","sortable","is-loading","messages","onDoSearch"])]),_:1})]),_:1})):d("",!0),e.isLoadingForCategory?(s(),f(a,{key:1},{default:u(()=>[g(o,null,{default:u(()=>[t("h2",null,b(e.readErrorForCategory),1)]),_:1})]),_:1})):d("",!0)],2),t("div",{class:c(["tab-pane fade",{show:e.tabForCategory=="product",active:e.tabForCategory=="product"}]),id:"product_data"},[t("div",Be,[t("div",Te,[t("h3",null,"Products ( "+b(this.totalCountForProduct)+" )",1)]),Ie]),!e.isLoadingForCategory&&e.tableForProduct&&e.tableForProduct.rows.length>0?(s(),f(a,{key:0},{default:u(()=>[g(o,null,{default:u(()=>[g(h,{class:"vue-table",columns:e.tableForProduct.columns,rows:e.tableForProduct.rows,total:e.tableForProduct.totalRecordCount,sortable:e.tableForProduct.sortable,"is-loading":e.tableForProduct.isLoading,messages:e.tableForProduct.messages,onDoSearch:n.doSearchFromBigcommerce,onIsFinished:r[18]||(r[18]=l=>e.tableForProduct.isLoading=!1)},null,8,["columns","rows","total","sortable","is-loading","messages","onDoSearch"])]),_:1})]),_:1})):d("",!0),e.isLoadingForCategory?(s(),f(a,{key:1},{default:u(()=>[g(o,null,{default:u(()=>[t("h2",null,b(e.readErrorForCategory),1)]),_:1})]),_:1})):d("",!0)],2)])):d("",!0)])])])])])}const Ve=F(G,[["render",Ae]]);export{Ve as default};
