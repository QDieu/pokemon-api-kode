(this["webpackJsonppokemon-apilog-qdieu-pas-123-code-123456"]=this["webpackJsonppokemon-apilog-qdieu-pas-123-code-123456"]||[]).push([[0],{16:function(t,e,n){t.exports={mainContainer:"Select_mainContainer__12wQr",formContainer:"Select_formContainer__46A4B",selectForm:"Select_selectForm__1oZn1"}},17:function(t,e,n){t.exports={formLogin:"Login_formLogin__2-ClA",buttonLogin:"Login_buttonLogin__220TM",inputPassword:"Login_inputPassword__3gwBU",inputLogin:"Login_inputLogin__3yXeo"}},18:function(t,e,n){t.exports={cardsContainer:"CardsItem_cardsContainer__3uOUM",cardItemWrapper:"CardsItem_cardItemWrapper__36pzM",cardItem:"CardsItem_cardItem__1LKkZ",imgPokemon:"CardsItem_imgPokemon__1c_Jf",link:"CardsItem_link__39u8d",description:"CardsItem_description__2MBPn"}},19:function(t,e,n){t.exports={pagination:"Pagination_pagination__66u2l",paginationItem:"Pagination_paginationItem__32vay",prev:"Pagination_prev__2jGJ0",next:"Pagination_next__22Rxy",active:"Pagination_active__3OGaA",disabled:"Pagination_disabled__1jOKK"}},23:function(t,e,n){t.exports={infoContainer:"CardItemInfo_infoContainer__1Y0QR",leftSectionWrapper:"CardItemInfo_leftSectionWrapper__2NUlm",imgPokemonInfo:"CardItemInfo_imgPokemonInfo__22qe7",description:"CardItemInfo_description__1U3MB",rightSectionWrapper:"CardItemInfo_rightSectionWrapper__bBHbR"}},27:function(t,e,n){t.exports={navigation:"Header_navigation__1NvSa",logoutImg:"Header_logoutImg__2B9k1",logout:"Header_logout__1UGPC",button:"Header_button__3kSo_"}},43:function(t,e,n){t.exports={mainContainer:"Cards_mainContainer__3bhu4",cardsContainer:"Cards_cardsContainer__prY-G"}},74:function(t,e,n){},75:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(28),c=n.n(s),i=n(11),o=n(26),u=n(5),p=n(2),l="SET_CARDS",d="SET_TOTAL_COUNT",j="SET_CURRENT_PAGE",b="SET_UNIC_ID_CARD",h={cards:[],currentPage:1,totalCount:100,unicIdCard:null},O=function(t){return{type:l,cards:t}},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return Object(p.a)(Object(p.a)({},t),{},{cards:Object(u.a)(e.cards)});case d:return Object(p.a)(Object(p.a)({},t),{},{totalCount:e.totalCount});case j:return Object(p.a)(Object(p.a)({},t),{},{currentPage:e.currentPage});case b:return Object(p.a)(Object(p.a)({},t),{},{unicIdCard:e.unicIdCard});default:return t}},g="CHECK_LOGIN_PASSWORD",f="CHECK_CODE_OTP",x="LOGOUT",v={login:"qdieu",password:"123",isAuth:!1,codeOTP:"123456",isAuthOTP:!1},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return e.login===t.login&&e.password===t.password?Object(p.a)(Object(p.a)({},t),{},{isAuth:!0}):Object(p.a)({},t);case f:return e.code===t.codeOTP?Object(p.a)(Object(p.a)({},t),{},{isAuthOTP:!0}):Object(p.a)({},t);case x:return Object(p.a)(Object(p.a)({},t),{},{isAuth:!1,isAuthOTP:!1});default:return Object(p.a)({},t)}},_="SET_TYPES",y="SET_SUBTYPES",P="SET_SUPERTYPES",S="SET_RARITIES",I="SET_SELECT",k={types:[],subtypes:[],supertypes:[],rarities:[],selectFilter:{types:"",subtypes:"",supertypes:"",rarities:""}},N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case _:return Object(p.a)(Object(p.a)({},t),{},{types:Object(u.a)(e.data)});case y:return Object(p.a)(Object(p.a)({},t),{},{subtypes:Object(u.a)(e.data)});case P:return Object(p.a)(Object(p.a)({},t),{},{supertypes:Object(u.a)(e.data)});case S:return Object(p.a)(Object(p.a)({},t),{},{rarities:Object(u.a)(e.data)});case I:var n={};for(var a in e.selectFilter)n[a]=e.selectFilter[a];return Object(p.a)(Object(p.a)({},t),{},{selectFilter:n});default:return t}},T=Object(o.a)({cardItems:m,select:N,auth:C}),A=Object(o.c)(T);window.store=A;var w=A,L=n(3),F=n(43),E=n.n(F),U=n(6),R=n(7),D=n(14),J=n(13),W=n(15),M=n.n(W),B=n(12),G=n(20),H=n(18),q=n.n(H),K=n(19),Y=n.n(K),z=n(1),Q=function(t){var e=function(e){var n=Number(e.target.textContent);console.log(n),t.onPageChanged(n)},n=t.totalCount/20;return Object(z.jsxs)("div",{className:Y.a.pagination,children:[Object(z.jsx)("button",{onClick:function(){t.onPageChanged(t.currentPage-1)},className:"".concat(Y.a.prev," ").concat(1===t.currentPage?"".concat(Y.a.disabled):""),children:"prev"}),function(){var e=t.currentPage-1;return e<=0&&(e=0),new Array(5).fill().map((function(t,n){return e+n+1}))}().map((function(n,a){return Object(z.jsx)("button",{onClick:e,className:"".concat(Y.a.paginationItem," ").concat(t.currentPage===n?"".concat(Y.a.active):null),children:Object(z.jsx)("span",{children:n})},a)})),Object(z.jsx)("button",{onClick:function(){t.onPageChanged(t.currentPage+1)},className:"".concat(Y.a.prev," ").concat(t.currentPage===n?"".concat(Y.a.disabled):""),children:"next"})]})},Z=function(t){return Object(z.jsxs)("div",{children:[Object(z.jsx)("ul",{className:q.a.cardsContainer,children:t.cards.map((function(e,n){var a;return Object(z.jsx)("li",(a={className:q.a.card},Object(B.a)(a,"className",q.a.cardItemWrapper),Object(B.a)(a,"children",Object(z.jsxs)("div",{className:q.a.cardItem,children:[Object(z.jsx)("div",{className:q.a.imgPokemon,children:Object(z.jsx)("img",{src:e.images.small,alt:""})}),Object(z.jsx)(G.b,{to:"/card/".concat(e.id),className:q.a.link,onClick:function(){t.setUnicIdCard(n)},children:Object(z.jsxs)("div",{className:q.a.description,children:[Object(z.jsx)("p",{children:e.name}),Object(z.jsx)("p",{children:e.artist})]})})]})),a),e.id)}))}),Object(z.jsx)(Q,{totalCount:t.totalCount,onPageChanged:t.onPageChanged,currentPage:t.currentPage})]})},X=function(t){Object(D.a)(n,t);var e=Object(J.a)(n);function n(){var t;Object(U.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).onPageChanged=function(e){t.props.setCurrentPage(e)},t}return Object(R.a)(n,[{key:"componentDidMount",value:function(){var t=this;0===this.props.cards.length&&M.a.get("https://api.pokemontcg.io/v2/cards",{params:{pageSize:20}}).then((function(e){t.props.setCards(e.data.data),t.props.setTotalCount(e.data.totalCount)}))}},{key:"componentDidUpdate",value:function(t){var e=this;if(JSON.stringify(t.filter)!==JSON.stringify(this.props.filter)||JSON.stringify(t.currentPage)!==JSON.stringify(this.props.currentPage)){var n="";for(var a in this.props.filter)this.props.filter[a]&&(n=n+a+":"+this.props.filter[a].split(" ").join("")+" ");M.a.get("https://api.pokemontcg.io/v2/cards",{params:{pageSize:20,page:this.props.currentPage,q:n}}).then((function(t){e.props.setCards(t.data.data),e.props.setTotalCount(t.data.totalCount)})),JSON.stringify(t.filter)!==JSON.stringify(this.props.filter)&&this.props.setCurrentPage(1)}}},{key:"render",value:function(){return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(Z,{cards:this.props.cards,totalCount:this.props.totalCount,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,setUnicIdCard:this.props.setUnicIdCard})})}}]),n}(r.a.Component),V=Object(i.b)((function(t){return{cards:t.cardItems.cards,currentPage:t.cardItems.currentPage,totalCount:t.cardItems.totalCount,filter:t.select.selectFilter}}),(function(t){return{setCards:function(e){t(O(e))},setTotalCount:function(e){t(function(t){return{type:d,totalCount:t}}(e))},setCurrentPage:function(e){t(function(t){return{type:j,currentPage:t}}(e))},setUnicIdCard:function(e){t(function(t){return{type:b,unicIdCard:t}}(e))}}}))(X),$=n(16),tt=n.n($),et=function(t){var e={types:"",subtypes:"",supertypes:"",rarities:""},n=function(n){switch(n.target.name){case"filterTypes":e.types=n.target.value;break;case"filterSubtypes":e.subtypes=n.target.value;break;case"filterSupertypes":e.supertypes=n.target.value;break;case"filterRarities":e.rarities=n.target.value}t.onChangeFilter(e)};return Object(z.jsxs)("div",{className:tt.a.mainContainer,children:[Object(z.jsx)("div",{className:tt.a.formContainer,children:Object(z.jsxs)("select",{name:"filterTypes",id:"filterTypes",onChange:n,className:tt.a.selectForm,children:[Object(z.jsx)("option",{value:"",children:"Select types"}),t.types.map((function(t,e){return Object(z.jsx)("option",{value:t,children:t},e)}))]})}),Object(z.jsx)("div",{className:tt.a.formContainer,children:Object(z.jsxs)("select",{name:"filterSubtypes",id:"filterSubtypes",onChange:n,className:tt.a.selectForm,children:[Object(z.jsx)("option",{value:"",children:"Select subtypes"}),t.subtypes.map((function(t,e){return Object(z.jsx)("option",{value:t,children:t},e)}))]})}),Object(z.jsx)("div",{className:tt.a.formContainer,children:Object(z.jsxs)("select",{name:"filterSupertypes",id:"filterSupertypes",onChange:n,className:tt.a.selectForm,children:[Object(z.jsx)("option",{value:"",children:"Select supertypes"}),t.supertypes.map((function(t,e){return Object(z.jsx)("option",{value:t,children:t},e)}))]})}),Object(z.jsx)("div",{className:tt.a.formContainer,children:Object(z.jsxs)("select",{name:"filterRarities",id:"filterRarities",onChange:n,className:tt.a.selectForm,children:[Object(z.jsx)("option",{value:"",children:"Select rarities"}),t.rarities.map((function(t,e){return Object(z.jsx)("option",{value:t,children:t},e)}))]})})]})},nt=function(t){Object(D.a)(n,t);var e=Object(J.a)(n);function n(){var t;Object(U.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).onChangeFilter=function(e){t.props.setSelect(e)},t}return Object(R.a)(n,[{key:"componentDidMount",value:function(){var t=this;0===this.props.types.length&&M.a.get("https://api.pokemontcg.io/v2/types").then((function(e){t.props.setTypes(e.data.data)})),0===this.props.subtypes.length&&M.a.get("https://api.pokemontcg.io/v2/subtypes").then((function(e){t.props.setSubtypes(e.data.data)})),0===this.props.supertypes.length&&M.a.get("https://api.pokemontcg.io/v2/supertypes").then((function(e){t.props.setSupertypes(e.data.data)})),0===this.props.rarities.length&&M.a.get("https://api.pokemontcg.io/v2/rarities").then((function(e){t.props.setRarities(e.data.data)}))}},{key:"render",value:function(){return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(et,{types:this.props.types,subtypes:this.props.subtypes,supertypes:this.props.supertypes,rarities:this.props.rarities,onChangeFilter:this.onChangeFilter})})}}]),n}(r.a.Component),at=Object(i.b)((function(t){return{types:t.select.types,subtypes:t.select.subtypes,supertypes:t.select.supertypes,rarities:t.select.rarities}}),(function(t){return{setTypes:function(e){t(function(t){return{type:_,data:t}}(e))},setSubtypes:function(e){t(function(t){return{type:y,data:t}}(e))},setSupertypes:function(e){t(function(t){return{type:P,data:t}}(e))},setRarities:function(e){t(function(t){return{type:S,data:t}}(e))},setCards:function(e){t(O(e))},setSelect:function(e){t(function(t){return{type:I,selectFilter:t}}(e))}}}))(nt),rt=function(){return Object(z.jsxs)("div",{className:E.a.mainContainer,children:[Object(z.jsx)(at,{}),Object(z.jsx)(V,{})]})},st=n(23),ct=n.n(st),it=function(t){var e=t.name,n=t.data,a=void 0===n?null:n;return a?Object(z.jsxs)("p",{children:[Object(z.jsx)("b",{children:e})," : ",a]}):null},ot=function(t){var e=t.card;return console.log(e),Object(z.jsxs)("div",{className:ct.a.infoContainer,children:[Object(z.jsxs)("div",{className:ct.a.leftSectionWrapper,children:[Object(z.jsx)("img",{src:e.images.large,alt:"",className:ct.a.imgPokemonInfo}),Object(z.jsxs)("div",{className:ct.a.description,children:[e.abilities?e.abilities.map((function(t,e){return Object(z.jsxs)("div",{children:[Object(z.jsx)(it,{name:"Abilities Name",data:t.name}),Object(z.jsx)(it,{name:"Abilities Text",data:t.text})]},e)})):null,e.attacks?e.attacks.map((function(t,e){return Object(z.jsxs)("div",{children:[Object(z.jsx)(it,{name:"Attack Name #".concat(e+1),data:t.name}),Object(z.jsx)(it,{name:"Attack Damage ",data:t.damage}),Object(z.jsx)(it,{name:"Attack Cost ",data:t.cost.join(" ")}),Object(z.jsx)(it,{name:"Attack desription",data:t.text})]},e)})):null]})]}),Object(z.jsxs)("div",{className:ct.a.rightSectionWrapper,children:[Object(z.jsx)("div",{children:Object(z.jsxs)("ul",{children:[Object(z.jsx)(it,{name:"Pokemon name",data:e.name}),Object(z.jsx)(it,{name:"Pokemon ID",data:e.id}),Object(z.jsx)(it,{name:"Type",data:e.types}),Object(z.jsx)(it,{name:"SubType",data:e.subtypes})]})}),Object(z.jsx)("div",{children:Object(z.jsxs)("ul",{children:[Object(z.jsx)(it,{name:"Hp",data:e.hp}),e.resistances?e.resistances.map((function(t){return Object(z.jsx)(it,{name:"resistances",data:t.type+" "+t.value})})):null,Object(z.jsx)(it,{name:"Evolve from",data:e.evolvesFrom})]})})]})]})},ut=function(t){Object(D.a)(n,t);var e=Object(J.a)(n);function n(){var t;Object(U.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={cardTemp:{}},t}return Object(R.a)(n,[{key:"componentDidMount",value:function(){var t=this;null!==this.props.unicId?this.setState({cardTemp:this.props.cards[this.props.unicId]}):M.a.get("https://api.pokemontcg.io/v2/cards/".concat(this.props.match.params.cardId)).then((function(e){var n=e.data.data;t.setState({cardTemp:n})}))}},{key:"render",value:function(){return 0!==Object.keys(this.state.cardTemp).length?Object(z.jsx)(ot,{card:this.state.cardTemp}):Object(z.jsx)("div",{children:"Loading..."})}}]),n}(r.a.Component),pt=Object(o.b)(Object(i.b)((function(t){return{cards:t.cardItems.cards,unicId:t.cardItems.unicIdCard}}),null),L.f)(ut),lt=n(27),dt=n.n(lt),jt=function(t){return Object(z.jsx)("div",{className:dt.a.navigation,children:Object(z.jsxs)("div",{className:dt.a.button,children:[Object(z.jsx)("img",{src:"https://freepikpsd.com/media/2019/10/logout-button-png-3-1-Transparent-Images.png",alt:"",className:dt.a.logoutImg}),Object(z.jsx)("div",{onClick:t.logout,className:dt.a.logout,children:"LOGOUT"})]})})},bt=function(t){Object(D.a)(n,t);var e=Object(J.a)(n);function n(){return Object(U.a)(this,n),e.apply(this,arguments)}return Object(R.a)(n,[{key:"render",value:function(){return Object(z.jsx)(z.Fragment,{children:this.props.isAuth&&this.props.isAuthOTP?Object(z.jsx)(jt,{logout:this.props.logout}):Object(z.jsx)(L.a,{to:"/login"})})}}]),n}(r.a.Component),ht=Object(i.b)((function(t){return{isAuth:t.auth.isAuth,isAuthOTP:t.auth.isAuthOTP}}),(function(t){return{logout:function(){t({type:x})}}}))(bt),Ot=n(30),mt=n(17),gt=n.n(mt),ft=function(t){var e=Object(Ot.a)(),n=e.register,a=e.handleSubmit;return Object(z.jsx)("div",{className:gt.a.formLogin,children:Object(z.jsxs)("form",{onSubmit:a((function(e){return t.checkLoginPassword(e.login,e.password)})),children:[Object(z.jsx)("input",Object(p.a)({className:gt.a.inputLogin,placeholder:"login"},n("login"))),Object(z.jsx)("input",Object(p.a)({className:gt.a.inputPassword,placeholder:"password",type:"password"},n("password"))),Object(z.jsx)("input",{type:"submit",value:"login",className:gt.a.buttonLogin})]})})},xt=function(t){var e=Object(Ot.a)(),n=e.register,a=e.handleSubmit;return Object(z.jsx)("div",{children:Object(z.jsxs)("form",{onSubmit:a((function(e){return t.checkCodeOtp(e.codeOTP)})),className:gt.a.formLogin,children:[Object(z.jsx)("input",Object(p.a)(Object(p.a)({placeholder:"code",autoFocus:!0},n("codeOTP")),{},{className:gt.a.inputLogin})),Object(z.jsx)("input",{type:"submit",className:gt.a.buttonLogin,value:"confirm"})]})})},vt=function(t){Object(D.a)(n,t);var e=Object(J.a)(n);function n(){return Object(U.a)(this,n),e.apply(this,arguments)}return Object(R.a)(n,[{key:"render",value:function(){return console.log(this.props.isAuth),Object(z.jsx)(z.Fragment,{children:this.props.isAuth&&this.props.isAuthOTP?Object(z.jsx)(L.a,{to:"/"}):this.props.isAuth?Object(z.jsx)(xt,{checkCodeOtp:this.props.checkCodeOtp}):Object(z.jsx)(ft,{checkLoginPassword:this.props.checkLoginPassword})})}}]),n}(r.a.Component),Ct=Object(i.b)((function(t){return{isAuth:t.auth.isAuth,isAuthOTP:t.auth.isAuthOTP}}),(function(t){return{checkLoginPassword:function(e,n){t(function(t,e){return{type:g,login:t,password:e}}(e,n))},checkCodeOtp:function(e){t(function(t){return{type:f,code:t}}(e))}}}))(vt);n(74);function _t(){return Object(z.jsxs)("div",{className:"App",children:[Object(z.jsx)(L.b,{exact:!0,path:"/",render:function(){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(ht,{}),Object(z.jsx)(rt,{})]})}}),Object(z.jsx)(L.b,{path:"/login",render:function(){return Object(z.jsx)(Ct,{})}}),Object(z.jsx)(L.b,{path:"/card/:cardId?",render:function(){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(ht,{}),Object(z.jsx)(pt,{})]})}})]})}var yt=document.getElementById("root");c.a.render(Object(z.jsx)(G.a,{children:Object(z.jsx)(i.a,{store:w,children:Object(z.jsx)(a.StrictMode,{children:Object(z.jsx)(_t,{})})})}),yt)}},[[75,1,2]]]);
//# sourceMappingURL=main.078a5196.chunk.js.map