(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1240:function(e,t,a){},1242:function(e,t,a){e.exports=a.p+"static/media/favicon.011201ab.ico"},1243:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(0),l=a.n(r),o=a(1326),i=a(1327),c=a(1328),s=a(15),m=a(16),u=a(19),d=a(17),p=a(20),h=a(38),g=a(25),E=a(40),b=a.n(E),f=a(1319),y=a(5),v=a(1279),w=a(1244),k=a(129),x=a.n(k),C=a(147),O=a(130),S=a.n(O),P=a(131),j=a.n(P),D=a(132),I=a.n(D),M=a(112),T=a.n(M),N=a(1282),B=a(41),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleProfileMenuOpen=function(e){a.setState({anchorEl:e.currentTarget})},a.handleMenuClose=function(){a.setState({anchorEl:null}),a.handleMobileMenuClose()},a.handleMobileMenuOpen=function(e){a.setState({mobileMoreAnchorEl:e.currentTarget})},a.handleMobileMenuClose=function(){a.setState({mobileMoreAnchorEl:null})},a.state={anchorEl:null,mobileMoreAnchorEl:null},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleChangeNavDrawer,a=e.classes,n=e.navDrawerOpen,r=this.state.anchorEl,o=Boolean(r);return l.a.createElement("div",null,l.a.createElement(v.a,{className:b()(a.appBar,Object(g.a)({},a.appBarShift,n))},l.a.createElement(N.a,null,l.a.createElement(w.a,{className:a.menuButton,color:"inherit","aria-label":"Open drawer",onClick:t},l.a.createElement(x.a,null)),l.a.createElement("div",{className:a.search},l.a.createElement("div",{className:a.searchIcon},l.a.createElement(S.a,null)),l.a.createElement(C.a,{placeholder:"TODO Search",classes:{root:a.inputRoot,input:a.inputInput}})),l.a.createElement("div",{className:a.grow}),l.a.createElement("div",{className:a.sectionDesktop},l.a.createElement(w.a,{"aria-owns":o?"material-appbar":null,"aria-haspopup":"true",onClick:function(){return window.open("https://api.publicapis.org/")},color:"inherit"},l.a.createElement(j.a,null)),l.a.createElement(w.a,{"aria-owns":o?"material-appbar":null,"aria-haspopup":"true",onClick:function(){return window.open("https://github.com/zmsp/react-open-api-portal")},color:"inherit"},l.a.createElement(I.a,null))),l.a.createElement("div",{className:a.sectionMobile},l.a.createElement(w.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},l.a.createElement(T.a,null))))))}}]),t}(l.a.Component),L=Object(y.a)(function(e){return{appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(e.drawer.width,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(g.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(g.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(B.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(B.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(g.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(g.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(g.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})(R),A=a(1324),W=a(1320),z=a(1283),F=a(144),G=a(1284),H=a(1245),J=a(1285),q=a(1289),U=a(1288),_=a(133),V=a.n(_),X=a(134),Q=a.n(X),$=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={anchorEl:null,open:!1},a.anchor=null,a.handleClick=function(e){e.stopPropagation(),a.setState({open:!a.state.open,anchorEl:a.anchor})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"renderMiniMenus",value:function(){var e=this,t=this.props,a=t.menu,n=t.key,r=t.classes,o=this.state,i=o.open,c=o.anchorEl;return a.subMenus&&a.subMenus.length?l.a.createElement(G.a,{key:n,classes:{root:r.miniMenuItem},onClick:this.handleClick},l.a.createElement(J.a,{className:r.miniIcon},a.icon),l.a.createElement("div",{ref:function(t){e.anchor=t},style:{position:"absolute",right:0}}),l.a.createElement(F.a,{classes:{paper:r.popupSubMenus},open:i,anchorEl:c},a.subMenus.map(function(e,t){return l.a.createElement(z.a,{key:t,to:e.link},l.a.createElement(G.a,{key:t,classes:{root:r.menuItem}},l.a.createElement(J.a,{style:{color:"white"}},e.icon),l.a.createElement("span",null,e.text)))}))):l.a.createElement(z.a,{key:n,to:a.link},l.a.createElement(G.a,{classes:{root:r.miniMenuItem}},l.a.createElement(J.a,{className:r.miniIcon},a.icon)))}},{key:"renderLargeMenus",value:function(){var e=this.props,t=e.menu,a=e.key,n=e.classes,r=this.state.open;return t.subMenus&&t.subMenus.length?l.a.createElement("div",null,l.a.createElement(H.a,{key:a,classes:{root:n.menuItem},onClick:this.handleClick},l.a.createElement(J.a,{style:{color:"white"}},t.icon),l.a.createElement("span",null,t.text),r?l.a.createElement(V.a,{className:n.chevronIcon}):l.a.createElement(Q.a,{className:n.chevronIcon})),l.a.createElement(q.a,{in:this.state.open,timeout:"auto",unmountOnExit:!0},l.a.createElement(U.a,{component:"div",disablePadding:!0,classes:{root:n.subMenus}},t.subMenus.map(function(e,t){return l.a.createElement(z.a,{key:t,to:e.link},l.a.createElement(G.a,{key:t,classes:{root:n.menuItem}},l.a.createElement(J.a,{style:{color:"white"}},e.icon),l.a.createElement("span",null,e.text)))})))):l.a.createElement(z.a,{key:a,to:t.link},l.a.createElement(G.a,{classes:{root:n.menuItem}},l.a.createElement(J.a,{style:{color:"white"}},t.icon),l.a.createElement("span",null,t.text)))}},{key:"render",value:function(){return this.props.navDrawerOpen?this.renderLargeMenus():this.renderMiniMenus()}}]),t}(l.a.Component),K=Object(y.a)(function(e){return{chevronIcon:{float:"right",marginLeft:"auto"},subMenus:{paddingLeft:20},popupSubMenus:{backgroundColor:"rgb(33, 33, 33)",color:"white",boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px"},menuItem:{padding:"10px 16px",color:"white",fontSize:14,"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}},miniMenuItem:{color:"white",margin:"10px 0",fontSize:14,"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}},miniIcon:{margin:"0 auto",color:"white","&:hover":{backgroundColor:Object(B.fade)(e.palette.common.white,.5)},minWidth:"24px"}}},{withTheme:!0})($),Y=function(e){return e.menus.map(function(t,a){return l.a.createElement(K,{key:a,menu:t,navDrawerOpen:e.navDrawerOpen})})},Z=Object(y.a)(function(e){return{drawerPaper:{width:e.drawer.width,backgroundColor:"rgb(33, 33, 33)",color:"white",borderRight:"0px",boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px"},drawerPaperClose:{overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.drawer.miniWidth},logo:{cursor:"pointer",fontSize:22,color:"white",lineHeight:"64px",fontWeight:300,backgroundColor:e.palette.primary[500],paddingLeft:40,height:64},avatarRoot:{padding:"16px 0 10px 15px",backgroundImage:"url("+a(172)+")",height:45,display:"flex"},avatarRootMini:{padding:"15px 0 10px 10px"},avatarIcon:{float:"left",display:"block",boxShadow:"0px 0px 0px 8px rgba(0,0,0,0.2)"},avatarSpan:{paddingTop:8,paddingLeft:24,display:"block",color:"white",fontWeight:300,textShadow:"1px 1px #444"},menuItem:{color:"white",fontSize:14}}},{withTheme:!0})(function(e){var t=e.navDrawerOpen,a=e.classes,n=e.theme,r=e.handleChangeNavDrawer,o=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:a.logo},"Public API Portal"),l.a.createElement(Y,{menus:e.menus,navDrawerOpen:t}))};return l.a.createElement("div",null,l.a.createElement(W.a,{mdUp:!0},l.a.createElement(A.a,{variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:t,onClose:r,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},o())),l.a.createElement(W.a,{smDown:!0},l.a.createElement(A.a,{open:t,variant:"permanent",classes:{paper:b()(a.drawerPaper,!t&&a.drawerPaperClose)}},o())))}),ee=a(1295),te=a(70),ae=a(113),ne=a.n(ae),re=a(104),le=a(101),oe=a(1290),ie=a(103),ce=a(1291),se=a(105),me=a(100),ue=a(1292),de=a(1293),pe=a(1294),he=a(102),ge=[{title:"Default",primary:re.a,secondary:le.a},{title:"Sunset",primary:oe.a,secondary:ie.a},{title:"Greeny",primary:ce.a,secondary:se.a},{title:"Beach",primary:me.a,secondary:ue.a},{title:"Tech",primary:re.a,secondary:de.a},{title:"Deep Ocean",primary:pe.a,secondary:le.a}],Ee={palette:{primary:re.a,secondary:le.a},error:he.a,appBar:{height:57,color:re.a[600]},drawer:{width:240,color:me.a[900],backgroundColor:me.a[900],miniWidth:56},raisedButton:{primaryColor:re.a[600]},typography:{}},be=ne()(Ee),fe=be,ye=Object(y.a)(function(){return{BackdropRoot:{backgroundColor:"transparent"},selectThemeBtn:{backgroundColor:"rgb(250, 250, 250)",color:"rgba(0, 0, 0, 0.87)",border:"1px solid rgba(0, 0, 0, 0.12)",height:"40px",margin:"16px 0",cursor:"pointer","&.hover":{boxShadow:"inset 0 0 0 20px rgba(0,0,0,.24)"}}}})(function(e){var t=e.rightDrawerOpen,a=e.handleChangeRightDrawer,n=e.handleChangeTheme,r=e.classes;return l.a.createElement(A.a,{variant:"temporary",anchor:"right",open:t,onClose:a,ModalProps:{BackdropProps:{classes:{root:r.BackdropRoot}}}},l.a.createElement("div",{style:{width:240,padding:16}},l.a.createElement("h6",{style:{paddingBottom:"10px"}},"Theme Setting"),ge.map(function(e){return l.a.createElement("div",{style:{paddingLeft:"5px"},key:e.title,onClick:function(){return n(e)},className:r.selectThemeBtn},l.a.createElement("em",null,e.title),l.a.createElement(ee.a,{container:!0},l.a.createElement(ee.a,{item:!0,xs:5},l.a.createElement("div",{style:{height:"10px",background:e.primary[500]}})),l.a.createElement(ee.a,{item:!0,xs:5},l.a.createElement("div",{style:{height:"10px",background:e.secondary[500]}}))))})))}),ve=a(1296),we=a(1303),ke=a(135),xe=a.n(ke),Ce=a(145),Oe=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.color,a=e.title,n=e.value,r=e.Icon,o={content:{padding:"5px 10px",marginLeft:90,height:80},number:{display:"block",fontWeight:400,fontSize:18,color:me.a[800]},text:{fontSize:20,fontWeight:300,color:me.a[800]},iconSpan:{float:"left",height:90,width:90,textAlign:"center",backgroundColor:t},icon:{height:48,width:48,marginTop:20,maxWidth:"100%"}};return l.a.createElement(Ce.a,null,l.a.createElement("span",{style:o.iconSpan},l.a.createElement("div",{style:{color:"white"}},l.a.createElement(r,{style:o.icon}))),l.a.createElement("div",{style:o.content},l.a.createElement("span",{style:o.text},a),l.a.createElement("div",{style:o.number},l.a.createElement(xe.a,{end:n,separator:",",duration:2}))))}}]),t}(l.a.Component),Se=a(1331),Pe=a(1298),je=a(1297),De=a(136),Ie=a.n(De),Me={subheader:{fontSize:24,fontWeight:300,backgroundColor:ve.a[600],color:"white"}},Te=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.state={anchorEl:null},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.data,n=this.state.anchorEl,r=Boolean(n);F.a,this.handleClose,G.a,this.handleClose;return l.a.createElement(Ce.a,null,l.a.createElement(U.a,{subheader:l.a.createElement(je.a,{classes:{root:t.subheader}},"API Category List")},a.map(function(e,t){return l.a.createElement(z.a,{key:e,to:"/table/data/"+e},l.a.createElement(H.a,{key:t},l.a.createElement(Se.a,{style:{marginRight:"10px"}},l.a.createElement(Ie.a,null)),l.a.createElement(Pe.a,{primary:e,secondary:e+" related APIs"})),"   ")})))}}]),t}(l.a.Component),Ne=Object(y.a)(Me)(Te),Be={navigation:{fontSize:15,fontWeight:300,color:me.a[600],paddingBottom:15,display:"block"},title:{fontSize:24,fontWeight:300,marginBottom:20},paper:{padding:30},clear:{clear:"both"}},Re=a(1299),Le=a(1300),Ae=a(1301),We=a(1302),ze=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={entriesCount:0,categories:[],starCount:0,forkCount:0},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.renderMyData()}},{key:"renderMyData",value:function(){var e=this;fetch("https://api.github-star-counter.workers.dev/user/public-apis").then(function(e){return e.json()}).then(function(t){e.setState({starCount:t.stars,forkCount:t.forks})}).catch(function(e){console.error(e)}),fetch("https://api.publicapis.org/categories").then(function(e){return e.json()}).then(function(t){e.setState({categories:t})}).catch(function(e){console.error(e)}),fetch("https://api.publicapis.org/entries").then(function(e){return e.json()}).then(function(t){e.setState({entriesCount:t.count})}).catch(function(e){console.error(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",{style:Be.navigation},"Application / Dashboard"),l.a.createElement(ee.a,{container:!0,spacing:3},l.a.createElement(ee.a,{item:!0,xs:12,sm:6,md:3},l.a.createElement(z.a,{to:"/table/data",className:"button"},l.a.createElement(Oe,{Icon:Re.a,color:le.a[600],title:"API Entries",value:this.state.entriesCount}))),l.a.createElement(ee.a,{item:!0,xs:12,sm:6,md:3},l.a.createElement(Oe,{Icon:Le.a,color:ve.a[600],title:"Categories",value:this.state.categories.length})),l.a.createElement(ee.a,{item:!0,xs:12,sm:6,md:3},l.a.createElement("a",{href:"https://github.com/public-apis/public-apis",target:"_blank"},l.a.createElement(Oe,{Icon:Ae.a,color:se.a[600],title:"Github Stars",value:this.state.starCount}))),l.a.createElement(ee.a,{item:!0,xs:12,sm:6,md:3},l.a.createElement("a",{href:"https://github.com/public-apis/public-apis",target:"_blank"},l.a.createElement(Oe,{Icon:We.a,color:we.a[600],title:"Github Forks",value:this.state.forkCount})))),l.a.createElement(ee.a,{container:!0,spacing:3},l.a.createElement(ee.a,{item:!0,xs:12,sm:12},l.a.createElement(Ne,{data:this.state.categories}))))}}]),t}(l.a.Component),Fe=a(114),Ge=a(1310),He=a(1329),Je=a(1321),qe=a(1308),Ue=a(1309),_e=a(1304),Ve=a(1307),Xe=a(1330),Qe=function(e){var t=e.title,a=e.navigation;return l.a.createElement("div",null,l.a.createElement("span",{style:Be.navigation},a),l.a.createElement(Ce.a,{style:Be.paper},l.a.createElement("h3",{style:Be.title},t),l.a.createElement(_e.a,null),e.children,l.a.createElement("div",{style:Be.clear})))},$e=function(){var e={toggleDiv:{marginTop:20,marginBottom:5},toggleLabel:{color:me.a[400],fontWeight:100},buttons:{marginTop:30,float:"right"},saveButton:{marginLeft:5}};return l.a.createElement(Qe,{title:"Form Page",navigation:"Application / Form Page"},l.a.createElement("form",null,l.a.createElement(He.a,{hintText:"Name",label:"Name",fullWidth:!0,margin:"normal"}),l.a.createElement(Ve.a,{fullWidth:!0},l.a.createElement(Xe.a,{htmlFor:"City"},"City"),l.a.createElement(Je.a,{inputProps:{name:"City",id:"City"},fullWidth:!0,margin:"normal"},l.a.createElement(G.a,{value:""},l.a.createElement("em",null,"None")),l.a.createElement(G.a,{value:"London"},"London"),l.a.createElement(G.a,{value:"Paris"},"Paris"),l.a.createElement(G.a,{value:"Rome"},"Rome"))),l.a.createElement(He.a,{id:"expirationDate",label:"Expiration Date",type:"date",InputLabelProps:{shrink:!0},margin:"normal",fullWidth:!0}),l.a.createElement("div",{style:e.toggleDiv},l.a.createElement(qe.a,{control:l.a.createElement(Ue.a,null),label:"Disabled"})),l.a.createElement(_e.a,null),l.a.createElement("div",{style:e.buttons},l.a.createElement(z.a,{to:"/"},l.a.createElement(Ge.a,{variant:"contained"},"Cancel")),l.a.createElement(Ge.a,{style:e.saveButton,variant:"contained",type:"submit",color:"primary"},"Save"))))},Ke=a(137),Ye=a.n(Ke),Ze=a(1313),et=a(1317),tt=a(1314),at=a(1315),nt=a(1316),rt=a(1311),lt=a(1312),ot=a(76),it=a(52),ct=a.n(it),st=a(71),mt=a.n(st),ut=a(73),dt=a.n(ut),pt=a(72),ht=a.n(pt),gt=a(95),Et=a.n(gt),bt=a(74),ft=a.n(bt),yt={menus:[{text:"Dashboard",icon:l.a.createElement(mt.a,null),link:"/dashboard"},{text:"API List",icon:l.a.createElement(ht.a,null),link:"/table/data"},{text:"Categories",icon:l.a.createElement(dt.a,null),subMenus:[{text:"Animals",icon:l.a.createElement(Et.a,null),link:"/table/basic"},{text:"TODO",icon:l.a.createElement(ft.a,null),link:"/table/data"}]}],user:{userName:"".concat(ct.a.name.firstName()," ").concat(ct.a.name.lastName()),avatar:ct.a.image.avatar()},tablePage:{items:Array.from({length:105},function(e,t){return{id:t,name:ct.a.commerce.productName(),price:ct.a.commerce.price(),category:ct.a.commerce.productMaterial()}})},dashBoardPage:{recentProducts:[{id:1,title:"Samsung TV",text:"Samsung 32 1080p 60Hz LED Smart HDTV."},{id:2,title:"Playstation 4",text:"PlayStation 3 500 GB System"},{id:3,title:"Apple iPhone 6",text:"Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G "},{id:4,title:"Apple MacBook",text:"Apple MacBook Pro MD101LL/A 13.3-Inch Laptop"}],monthlySales:[{name:"Jan",uv:3700},{name:"Feb",uv:3e3},{name:"Mar",uv:2e3},{name:"Apr",uv:2780},{name:"May",uv:2e3},{name:"Jun",uv:1800},{name:"Jul",uv:2600},{name:"Aug",uv:2900},{name:"Sep",uv:3500},{name:"Oct",uv:3e3},{name:"Nov",uv:2400},{name:"Dec",uv:2780}],newOrders:[{pv:2400},{pv:1398},{pv:9800},{pv:3908},{pv:4800},{pv:3490},{pv:4300}],browserUsage:[{name:"Chrome",value:800},{name:"Firefox",value:300},{name:"Safari",value:300}]}},vt={columns:{id:{width:"10%"},name:{width:"40%"},price:{width:"20%"},category:{width:"20%"},edit:{width:"10%"}}},wt=function(){return l.a.createElement(rt.a,null,l.a.createElement(lt.a,null,l.a.createElement(ot.a,{color:"textSecondary",gutterBottom:!0},"Simple Table"),l.a.createElement(_e.a,null),l.a.createElement(Ze.a,null,l.a.createElement(tt.a,null,l.a.createElement(at.a,null,l.a.createElement(nt.a,{style:vt.columns.id},"ID"),l.a.createElement(nt.a,{style:vt.columns.name},"Name"),l.a.createElement(nt.a,{style:vt.columns.price},"Price"),l.a.createElement(nt.a,{style:vt.columns.category},"Category"))),l.a.createElement(et.a,null,yt.tablePage.items.slice(0,5).map(function(e){return l.a.createElement(at.a,{key:e.id},l.a.createElement(nt.a,{style:vt.columns.id},e.id),l.a.createElement(nt.a,{style:vt.columns.name},e.name),l.a.createElement(nt.a,{style:vt.columns.price},e.price),l.a.createElement(nt.a,{style:vt.columns.category},e.category))})))))},kt=Object(y.a)(function(e){return{row:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}},{withTheme:!0})(function(e){var t=e.classes;return l.a.createElement(rt.a,null,l.a.createElement(lt.a,null,l.a.createElement(ot.a,{color:"textSecondary",gutterBottom:!0},"Striped Table"),l.a.createElement(_e.a,null),l.a.createElement(Ze.a,{classes:t.table},l.a.createElement(tt.a,null,l.a.createElement(at.a,null,l.a.createElement(nt.a,{style:vt.columns.id},"ID"),l.a.createElement(nt.a,{style:vt.columns.name},"Name"),l.a.createElement(nt.a,{style:vt.columns.price},"Price"),l.a.createElement(nt.a,{style:vt.columns.category},"Category"))),l.a.createElement(et.a,null,yt.tablePage.items.slice(0,5).map(function(e){return l.a.createElement(at.a,{className:t.row,key:e.id},l.a.createElement(nt.a,{style:vt.columns.id},e.id),l.a.createElement(nt.a,{style:vt.columns.name},e.name),l.a.createElement(nt.a,{style:vt.columns.price},e.price),l.a.createElement(nt.a,{style:vt.columns.category},e.category))})))))}),xt=Object(y.a)(function(e){return{table:{border:"1px solid rgba(0, 0, 0, 0.12)"}}},{withTheme:!0})(function(e){var t=e.classes;return l.a.createElement(rt.a,null,l.a.createElement(lt.a,null,l.a.createElement(ot.a,{color:"textSecondary",gutterBottom:!0},"Bordered Table"),l.a.createElement(_e.a,null),l.a.createElement(Ze.a,{classes:{root:t.table}},l.a.createElement(tt.a,null,l.a.createElement(at.a,null,l.a.createElement(nt.a,{style:vt.columns.id},"ID"),l.a.createElement(nt.a,{style:vt.columns.name},"Name"),l.a.createElement(nt.a,{style:vt.columns.price},"Price"),l.a.createElement(nt.a,{style:vt.columns.category},"Category"))),l.a.createElement(et.a,null,yt.tablePage.items.slice(0,5).map(function(e){return l.a.createElement(at.a,{className:t.row,key:e.id},l.a.createElement(nt.a,{style:vt.columns.id},e.id),l.a.createElement(nt.a,{style:vt.columns.name},e.name),l.a.createElement(nt.a,{style:vt.columns.price},e.price),l.a.createElement(nt.a,{style:vt.columns.category},e.category))})))))}),Ct=function(){return l.a.createElement(rt.a,null,l.a.createElement(lt.a,null,l.a.createElement(ot.a,{color:"textSecondary",gutterBottom:!0},"Table Hover"),l.a.createElement(_e.a,null),l.a.createElement(Ze.a,null,l.a.createElement(tt.a,null,l.a.createElement(at.a,null,l.a.createElement(nt.a,{style:vt.columns.id},"ID"),l.a.createElement(nt.a,{style:vt.columns.name},"Name"),l.a.createElement(nt.a,{style:vt.columns.price},"Price"),l.a.createElement(nt.a,{style:vt.columns.category},"Category"))),l.a.createElement(et.a,null,yt.tablePage.items.slice(0,5).map(function(e){return l.a.createElement(at.a,{key:e.id,hover:!0},l.a.createElement(nt.a,{style:vt.columns.id},e.id),l.a.createElement(nt.a,{style:vt.columns.name},e.name),l.a.createElement(nt.a,{style:vt.columns.price},e.price),l.a.createElement(nt.a,{style:vt.columns.category},e.category))})))))},Ot=Object(y.a)(null,{withTheme:!0})(function(){return l.a.createElement("div",null,l.a.createElement(ee.a,{container:!0,spacing:3},l.a.createElement(ee.a,{item:!0,xs:12,sm:6,md:6},l.a.createElement(wt,null)),l.a.createElement(ee.a,{item:!0,xs:12,sm:6,md:6},l.a.createElement(kt,null)),l.a.createElement(ee.a,{item:!0,xs:12,sm:6,md:6},l.a.createElement(xt,null)),l.a.createElement(ee.a,{item:!0,xs:12,sm:6,md:6},l.a.createElement(Ct,null))),l.a.createElement(z.a,{to:"/form"},l.a.createElement(Ge.a,{mini:!0,variant:"fab",style:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed"},color:"secondary"},l.a.createElement(Ye.a,null))))}),St=a(1325),Pt=a(140),jt=a.n(Pt),Dt=a(1334),It=a(1323),Mt=a(1333),Tt=[{id:"API",numeric:!1,disablePadding:!0,label:"API"},{id:"Description",numeric:!1,disablePadding:!1,label:"Description"},{id:"link",Link:!0,disablePadding:!1,label:"Link"},{id:"Auth",numeric:!1,disablePadding:!1,label:"Auth"},{id:"HTTPS",numeric:!1,disablePadding:!1,label:"HTTPS"},{id:"CORS",numeric:!1,disablePadding:!1,label:"CORS"},{id:"Category",numeric:!1,disablePadding:!1,label:"Category"}],Nt=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).createSortHandler=function(e){return function(t){a.props.onRequestSort(t,e)}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.onSelectAllClick,n=t.order,r=t.orderBy,o=t.numSelected,i=t.rowCount;return l.a.createElement(tt.a,null,l.a.createElement(at.a,null,l.a.createElement(nt.a,{padding:"checkbox"},l.a.createElement(It.a,{indeterminate:o>0&&o<i,checked:o===i,onChange:a})),Tt.map(function(t){return l.a.createElement(nt.a,{key:t.id,sortDirection:r===t.id&&n},l.a.createElement(Mt.a,{title:"Sort",placement:t.numeric?"bottom-end":"bottom-start",enterDelay:300},l.a.createElement(Dt.a,{active:r===t.id,direction:n,onClick:e.createSortHandler(t.id)},t.label)))},this)))}}]),t}(l.a.Component),Bt=a(139),Rt=a.n(Bt),Lt=a(1318),At=function(e){var t=e.numSelected,a=e.classes;return l.a.createElement(N.a,{className:b()(a.root,Object(g.a)({},a.highlight,t>0))},l.a.createElement("div",{className:a.title},t>0?l.a.createElement(ot.a,{color:"inherit",variant:"subtitle1"},t," selected"):l.a.createElement(ot.a,{variant:"h6",id:"tableTitle"},"Table Page")),l.a.createElement("div",{className:a.spacer}),l.a.createElement("div",{className:a.actions},t>0?l.a.createElement(Mt.a,{title:"Export"},l.a.createElement(w.a,{"aria-label":"Delete"},l.a.createElement(Lt.a,null))):l.a.createElement(Mt.a,{title:"Filter list"},l.a.createElement(w.a,{"aria-label":"Filter list"},l.a.createElement(Rt.a,null)))))},Wt=At=Object(y.a)(function(e){return{root:{paddingRight:e.spacing.unit},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(B.lighten)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},spacer:{flex:"1 1 100%"},actions:{color:e.palette.text.secondary},title:{flex:"0 0 auto"}}})(At),zt=function(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0},Ft=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={order:"asc",orderBy:"id",selected:[],data:[],category:a.props.match.params.handle,page:0,rowsPerPage:10},a.handleRequestSort=function(e,t){var n=t,r="desc";a.state.orderBy===t&&"desc"===a.state.order&&(r="asc"),a.setState({order:r,orderBy:n})},a.handleSelectAllClick=function(e){e.target.checked?a.setState(function(e){return{selected:e.data.map(function(e){return e.API})}}):a.setState({selected:[]})},a.handleClick=function(e,t){var n=a.state.selected,r=n.indexOf(t),l=[];-1===r?l=l.concat(n,t):0===r?l=l.concat(n.slice(1)):r===n.length-1?l=l.concat(n.slice(0,-1)):r>0&&(l=l.concat(n.slice(0,r),n.slice(r+1))),a.setState({selected:l})},a.handleChangePage=function(e,t){a.setState({page:t})},a.handleChangeRowsPerPage=function(e){a.setState({rowsPerPage:e.target.value})},a.isSelected=function(e){return-1!==a.state.selected.indexOf(e)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this,t="https://api.publicapis.org/entries";console.log(this.state.category),this.state.category&&(t="https://api.publicapis.org/entries?category="+this.state.category),fetch(t).then(function(e){return e.json()}).then(function(t){e.setState({data:t.entries})}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.data,r=a.order,o=a.orderBy,i=a.selected,c=a.rowsPerPage,s=a.page,m=c-Math.min(c,n.length-s*c);return l.a.createElement(Ce.a,{className:t.root},l.a.createElement(Wt,{numSelected:i.length}),l.a.createElement("div",{className:t.tableWrapper},l.a.createElement(Ze.a,{className:t.table,"aria-labelledby":"tableTitle"},l.a.createElement(Nt,{numSelected:i.length,order:r,orderBy:o,onSelectAllClick:this.handleSelectAllClick,onRequestSort:this.handleRequestSort,rowCount:n.length}),l.a.createElement(et.a,null,function(e,t){var a=e.map(function(e,t){return[e,t]});return a.sort(function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]}),a.map(function(e){return e[0]})}(n,function(e,t){return"desc"===e?function(e,a){return zt(e,a,t)}:function(e,a){return-zt(e,a,t)}}(r,o)).slice(s*c,s*c+c).map(function(t){var a=e.isSelected(t.API);return l.a.createElement(at.a,{hover:!0,onClick:function(a){return e.handleClick(a,t.API)},role:"checkbox","aria-checked":a,tabIndex:-1,key:t.API,selected:a},"   ",l.a.createElement(nt.a,null,l.a.createElement("a",{href:t.Link,target:"_blank"},l.a.createElement(Ge.a,{mini:!0,variant:"fab",zDepth:0},l.a.createElement(jt.a,null)))),l.a.createElement(nt.a,null,t.API),l.a.createElement(nt.a,null,t.Description),l.a.createElement(nt.a,null,t.Link),l.a.createElement(nt.a,null,t.Auth),l.a.createElement(nt.a,null,t.HTTPS?"On":"Off"),l.a.createElement(nt.a,null,t.Cors),l.a.createElement(nt.a,null,t.Category))}),m>0&&l.a.createElement(at.a,{style:{height:49*m}},l.a.createElement(nt.a,{colSpan:6}))))),l.a.createElement(St.a,{rowsPerPageOptions:[5,10,25],component:"div",count:n.length,rowsPerPage:c,page:s,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage}))}}]),t}(l.a.Component),Gt=Object(y.a)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit},table:{minWidth:1020},tableWrapper:{overflowX:"auto"}}})(Ft),Ht=function(){return l.a.createElement("div",null,l.a.createElement("div",null,"404 Page Not Found"))},Jt=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={theme:fe,menus:[{text:"Dashboard",icon:l.a.createElement(mt.a,null),link:"/dashboard"},{text:"API List",icon:l.a.createElement(ht.a,null),link:"/table/data"},{text:"Categories",icon:l.a.createElement(dt.a,null),subMenus:[{text:"Animals",icon:l.a.createElement(Et.a,null),link:"/table/basic"},{text:"TODO",icon:l.a.createElement(ft.a,null),link:"/table/data"}]}],rightDrawerOpen:!1,navDrawerOpen:!!(window&&window.innerWidth&&window.innerWidth>=fe.breakpoints.values.md)},a.handleChangeRightDrawer=a.handleChangeRightDrawer.bind(Object(h.a)(Object(h.a)(a))),a.handleChangeNavDrawer=a.handleChangeNavDrawer.bind(Object(h.a)(Object(h.a)(a))),a.handleChangeTheme=a.handleChangeTheme.bind(Object(h.a)(Object(h.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.renderMyData()}},{key:"renderMyData",value:function(){var e=this;fetch("https://api.publicapis.org/categories").then(function(e){return e.json()}).then(function(t){var a=[];t.map(function(e){a.push({text:e,icon:l.a.createElement(ft.a,null),link:"/table/data/"+e})}),console.log(a),e.setState({menus:[{text:"Dashboard",icon:l.a.createElement(mt.a,null),link:"/dashboard"},{text:"API List",icon:l.a.createElement(ht.a,null),link:"/table/data"},{text:"Categories",icon:l.a.createElement(dt.a,null),subMenus:a}]})}).catch(function(e){console.log("##########################"),console.log("##########################"),console.error(e)})}},{key:"handleChangeNavDrawer",value:function(){this.setState({navDrawerOpen:!this.state.navDrawerOpen})}},{key:"handleChangeRightDrawer",value:function(){this.setState({rightDrawerOpen:!this.state.rightDrawerOpen})}},{key:"handleChangeTheme",value:function(e){var t,a=(t={palette:e},ne()(Object(te.a)({},Ee,t)));this.setState({theme:a})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.navDrawerOpen,n=t.rightDrawerOpen,r=t.theme;return l.a.createElement(f.a,{theme:r},l.a.createElement(L,{handleChangeNavDrawer:this.handleChangeNavDrawer,navDrawerOpen:a}),l.a.createElement(Z,{navDrawerOpen:a,handleChangeNavDrawer:this.handleChangeNavDrawer,menus:this.state.menus}),l.a.createElement(Fe.a,{color:"inherit",classes:{root:e.settingBtn},onClick:this.handleChangeRightDrawer},l.a.createElement("i",{className:"fa fa-cog fa-3x"})),l.a.createElement(ye,{rightDrawerOpen:n,handleChangeRightDrawer:this.handleChangeRightDrawer,handleChangeTheme:this.handleChangeTheme}),l.a.createElement("div",{className:b()(e.container,!a&&e.containerFull)},l.a.createElement(i.a,null,l.a.createElement(c.a,{exact:!0,path:"/",component:ze}),l.a.createElement(c.a,{path:"/dashboard",component:ze}),l.a.createElement(c.a,{path:"/form",component:$e}),l.a.createElement(c.a,{path:"/table/basic",component:Ot}),l.a.createElement(c.a,{path:"/table/data/:handle",component:Gt}),l.a.createElement(c.a,{path:"/table/data",component:Gt}),l.a.createElement(c.a,{component:Ht}))))}}]),t}(l.a.Component),qt=Object(y.a)(function(){return{container:Object(g.a)({margin:"80px 20px 20px 15px",paddingLeft:fe.drawer.width},fe.breakpoints.down("sm"),{paddingLeft:0}),containerFull:Object(g.a)({paddingLeft:fe.drawer.miniWidth},fe.breakpoints.down("sm"),{paddingLeft:0}),settingBtn:{top:80,backgroundColor:"rgba(0, 0, 0, 0.3)",color:"white",width:48,right:0,height:48,opacity:.9,padding:0,zIndex:999,position:"fixed",minWidth:48,borderTopRightRadius:0,borderBottomRightRadius:0}}})(Jt),Ut=a(142),_t=a.n(Ut),Vt=a(143),Xt=a.n(Vt),Qt=function(){var e={loginContainer:{minWidth:320,maxWidth:400,height:"auto",position:"absolute",top:"20%",left:0,right:0,margin:"auto"},paper:{padding:20,overflow:"auto"},buttonsDiv:{textAlign:"center",padding:10},flatButton:{color:me.a[500],margin:5},checkRemember:{style:{float:"left",maxWidth:180,paddingTop:5},labelStyle:{color:me.a[500]},iconStyle:{color:me.a[500],borderColor:me.a[500],fill:me.a[500]}},loginBtn:{float:"right"},btn:{background:"#4f81e9",color:"white",padding:7,borderRadius:2,margin:2,fontSize:13},btnFacebook:{background:"#4f81e9"},btnGoogle:{background:"#e14441"},btnSpan:{marginLeft:5}};return l.a.createElement(f.a,{theme:fe},l.a.createElement("div",null,l.a.createElement("div",{style:e.loginContainer},l.a.createElement(Ce.a,{style:e.paper},l.a.createElement("form",null,l.a.createElement(He.a,{hintText:"E-mail",label:"E-mail",fullWidth:!0}),l.a.createElement("div",{style:{marginTop:16}},l.a.createElement(He.a,{hintText:"Password",label:"Password",fullWidth:!0,type:"password"})),l.a.createElement("div",{style:{marginTop:10}},l.a.createElement(qe.a,{control:l.a.createElement(It.a,{label:"Remember me",style:e.checkRemember.style,labelStyle:e.checkRemember.labelStyle,iconStyle:e.checkRemember.iconStyle}),label:"Remember me"}),l.a.createElement(z.a,{to:"/"},l.a.createElement(Ge.a,{variant:"contained",color:"primary",style:e.loginBtn},"Login"))))),l.a.createElement("div",{style:e.buttonsDiv},l.a.createElement(Ge.a,{href:"/",style:e.flatButton},l.a.createElement(_t.a,null),l.a.createElement("span",{style:{margin:5}},"Register")),l.a.createElement(Ge.a,{href:"/",style:e.flatButton},l.a.createElement(Xt.a,null),l.a.createElement("span",{style:{margin:5}},"Forgot Password?"))),l.a.createElement("div",{style:e.buttonsDiv},l.a.createElement(z.a,{to:"/",style:Object(te.a)({},e.btn,e.btnFacebook)},l.a.createElement("i",{className:"fa fa-facebook fa-lg"}),l.a.createElement("span",{style:e.btnSpan},"Log in with Facebook")),l.a.createElement(z.a,{to:"/",style:Object(te.a)({},e.btn,e.btnGoogle)},l.a.createElement("i",{className:"fa fa-google-plus fa-lg"}),l.a.createElement("span",{style:e.btnSpan},"Log in with Google"))))))},$t=l.a.createElement(o.a,null,l.a.createElement(i.a,null,l.a.createElement(c.a,{exact:!0,path:"/login",component:Qt}),l.a.createElement(c.a,{path:"/",component:qt}))),Kt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Yt(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(1240),a(1241);a(1242),Object(n.render)($t,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/public-apis",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/public-apis","/service-worker.js");Kt?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Yt(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Yt(e)})}}()},164:function(e,t,a){e.exports=a(1243)},172:function(e,t,a){e.exports=a.p+"static/media/material_bg.abe4a318.png"}},[[164,1,2]]]);
//# sourceMappingURL=main.c8780458.chunk.js.map