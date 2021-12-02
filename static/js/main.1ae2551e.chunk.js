(this["webpackJsonpcountries-task-scale-force"]=this["webpackJsonpcountries-task-scale-force"]||[]).push([[0],{85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(24),s=a.n(r),i=a(41),l=a.n(i),o=a(27),u=a(6),d=Object(o.b)({name:"countries",initialState:{loading:!0,error:null,selectedCountry:null,result:[]},reducers:{fetchCountries:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{error:null,loading:!0})},fetchCountriesSuccess:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{loading:!1,result:t.payload})},fetchCountriesFailure:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:t.payload})},cancelUserAction:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{selectedCountry:null})},beginUserAction:function(e,t){return Object(u.a)({},e)},selectCountry:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{selectedCountry:t.payload})},fetchCountryByName:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{loading:!0})}}}),j=d.actions,b=j.fetchCountries,m=j.fetchCountriesSuccess,O=j.fetchCountriesFailure,h=j.selectCountry,p=j.fetchCountryByName,f=j.cancelUserAction,x=j.beginUserAction,v=d.reducer,g=a(9),N=a.n(g),y=a(8),C=a(31),w=a(42),k=a.n(w).a.create({baseURL:"https://api.worldbank.org/v2/",withCredentials:!1,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}}),P=function(){var e=Object(C.a)(N.a.mark((function e(t,a){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="country?format=json",t&&(n+="&page=".concat(t)),a&&(n+="&per_page=".concat(a)),e.next=5,k.get(n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),A=function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("country/".concat(t,"?format=json"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(e){return e.countries.result},S=function(e){return e.countries.selectedCountry},E=function(e){return e.countries.loading},T=function(e){return e.countries.error},B=N.a.mark(D),I=N.a.mark(R),F=N.a.mark(z),M=N.a.mark(_),U=N.a.mark(H);function D(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.i)(b.type,R);case 2:return e.next=4,Object(y.i)(p.type,z);case 4:case"end":return e.stop()}}),B)}function R(e){var t,a,n,c,r,s;return N.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,t=e.payload,a=t.page,n=t.itemsPerPage,c=t.reload,i.next=4,Object(y.f)(L);case 4:if(!((r=i.sent).length>0)||c){i.next=11;break}return s=Object(u.a)({},r),i.next=9,Object(y.d)(m(Object(u.a)({},s)));case 9:i.next=16;break;case 11:return i.next=13,Object(y.b)(P,a,n);case 13:return s=i.sent,i.next=16,Object(y.d)(m(Object(u.a)(Object(u.a)({},s.data[0]),{},{items:s.data[1]})));case 16:i.next=22;break;case 18:return i.prev=18,i.t0=i.catch(0),i.next=22,Object(y.d)(O(i.t0));case 22:case"end":return i.stop()}}),I,null,[[0,18]])}function z(e){var t,a;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=e.payload.name,n.next=4,Object(y.b)(A,t);case 4:if(!(a=n.sent)||!a.data[0].message){n.next=10;break}return n.next=8,Object(y.d)(O(Object(u.a)({},a.data[0])));case 8:n.next=12;break;case 10:return n.next=12,Object(y.d)(m(Object(u.a)(Object(u.a)({},a.data[0]),{},{items:a.data[1]})));case 12:n.next=18;break;case 14:return n.prev=14,n.t0=n.catch(0),n.next=18,Object(y.d)(O(n.t0));case 18:case"end":return n.stop()}}),F,null,[[0,14]])}function _(){var e;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object(y.h)(x.type);case 3:return e=t.sent,t.next=6,Object(y.g)(H,e);case 6:t.next=0;break;case 8:case"end":return t.stop()}}),M)}function H(e){var t,a;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=3,Object(y.e)({undo:Object(y.h)((function(e){return e.type===f.type})),proceed:Object(y.c)(3e3)});case 3:if(a=n.sent,!a.undo){n.next=10;break}return n.next=8,Object(y.d)(f(null));case 8:n.next=12;break;case 10:return n.next=12,Object(y.d)(h(t));case 12:case"end":return n.stop()}}),U)}var J=N.a.mark(W);function W(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.a)([D(),_()]);case 2:case"end":return e.stop()}}),J)}var G=a(50),q=Object(G.a)(),K=Object(o.a)({reducer:{countries:v},middleware:[l.a,q]});q.run(W);var Q,V=a(11),X=a(49),Y=a(17),Z=a(7),$=a(0),ee=function(e){var t=e.country,a=e.cssClassName,c=e.dissableActions,r=Object(V.b)(),s=Object(n.useRef)(null);return t?Object($.jsxs)("div",{className:a?"".concat(a," country-tile"):"country-tile",onMouseDownCapture:function(){s.current&&!c&&(r(x(t)),s.current.className=s.current.className+" animate")},onMouseUpCapture:function(){s.current&&s.current.className&&s.current.className.includes("animate")&&(r(f(null)),s.current.className=s.current.className.replace("animate",""))},children:[Object($.jsx)("div",{ref:s,className:"country-tile-inner"}),Object($.jsx)("span",{className:"country-tile-item",children:t.iso2Code||"N/A"}),Object($.jsx)("span",{className:"country-tile-item",children:t.name||"N/A"}),Object($.jsx)("span",{className:"country-tile-item",children:t.capitalCity||"N/A"}),Object($.jsx)("span",{className:"country-tile-item",children:t.longitude||"N/A"}),Object($.jsx)("span",{className:"country-tile-item",children:t.latitude||"N/A"})]}):null},te=["title","titleId"];function ae(){return ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ae.apply(this,arguments)}function ne(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}function ce(e,t){var a=e.title,c=e.titleId,r=ne(e,te);return n.createElement("svg",ae({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-down",className:"svg-inline--fa fa-chevron-down fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",ref:t,"aria-labelledby":c},r),a?n.createElement("title",{id:c},a):null,Q||(Q=n.createElement("path",{fill:"currentColor",d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"})))}var re,se=n.forwardRef(ce),ie=(a.p,function(e){var t=e.filterBy,a=e.searchByName,n=e.itemsPerPage,c=e.onChange,r=e.onSelect;return Object($.jsxs)("form",{className:"filter",children:[Object($.jsx)("input",{type:"text",placeholder:"filter countries by name",name:"filterBy",value:t,onChange:c}),Object($.jsx)("input",{type:"text",placeholder:"get country by name",name:"searchByName",value:a,onChange:c}),Object($.jsx)("label",{htmlFor:"per_page",children:"Item per page"}),Object($.jsxs)("div",{className:"svg-holder",children:[Object($.jsxs)("select",{name:"per_page",value:n,onChange:r,children:[Object($.jsx)("option",{selected:20===n,value:20,children:"20"}),Object($.jsx)("option",{selected:50===n,value:50,children:"50"}),Object($.jsx)("option",{selected:100===n,value:100,children:"100"}),Object($.jsx)("option",{selected:150===n,value:150,children:"150"}),Object($.jsx)("option",{selected:200===n,value:200,children:"200"})]}),Object($.jsx)(se,{className:"svg"})]})]})}),le=function(e){var t=e.onPress,a=e.clasName;return Object($.jsxs)("div",{className:a,children:[Object($.jsx)("span",{className:"list-header-item","data-prop":"Iso Code",onClick:t,children:"Iso Code"}),Object($.jsx)("span",{className:"list-header-item","data-prop":"Name",onClick:t,children:"Name"}),Object($.jsx)("span",{className:"list-header-item","data-prop":"Capital City",onClick:t,children:"Capital City"}),Object($.jsx)("span",{className:"list-header-item","data-prop":"Longitude",onClick:t,children:"Longitude"}),Object($.jsx)("span",{className:"list-header-item","data-prop":"Latitude",onClick:t,children:"Latitude"})]})},oe=function(e){var t=e.title,a=e.onPress;return Object($.jsxs)("section",{className:"error-page",children:[Object($.jsx)("h2",{children:t}),a&&Object($.jsx)("span",{className:"error-page-button",onClick:a,children:"Try again."})]})},ue=function(e){var t=e.numberItems,a=void 0===t?0:t,n=[];return Object($.jsx)("div",{className:"shimmer",children:function(e){for(var t=1;t<=e;t++)n.push(Object($.jsx)("div",{className:"lines shine"},t));return n}(a)})},de=function(e){var t=e.itemsPerPage,a=Object(V.b)(),c=Object(V.c)(L),r=c.pages,s=c.page,i=Object(n.useState)([]),l=Object(Y.a)(i,2),o=l[0],u=l[1];Object(n.useEffect)((function(){!function(){for(var e=[],t=1;t<=r;t++)e.push(t);u([].concat(e))}()}),[r,t]);var d=function(e){var n=e.currentTarget.innerHTML;a(b({page:n,itemsPerPage:t,reload:!0}))};return Object($.jsx)("div",{className:"pagination-controls",children:o.map((function(e){return Object($.jsx)("span",{onClick:d,className:e===s?"pagination-controls-item pagination-controls-item--current":"pagination-controls-item",children:e},e)}))})},je=a(44),be=a.n(je),me=function(e){var t=Object(V.c)(L),a=Object(V.c)(S),c=Object(V.c)(E),r=Object(V.c)(T),s=Object(V.b)(),i=Object(Z.f)(),l=Object(n.useState)([]),o=Object(Y.a)(l,2),u=o[0],d=o[1],j=Object(n.useState)(""),m=Object(Y.a)(j,2),O=m[0],h=m[1],f=Object(n.useState)(""),x=Object(Y.a)(f,2),v=x[0],g=x[1],N=Object(n.useState)(0),y=Object(Y.a)(N,2),C=y[0],w=y[1],k=t.items,P=void 0===k?[]:k,A=t.page,B=t.pages,I=t.per_page,F=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return s(b({page:e,itemsPerPage:t,reload:a}))}),[s]);Object(n.useEffect)((function(){F(A,I)}),[F,A,I]),Object(n.useEffect)((function(){a&&i.push("/details")}),[i,a]),Object(n.useEffect)((function(){B>0&&w(I)}),[B,I]),Object(n.useEffect)((function(){d(P)}),[P]);var M=Object(n.useMemo)((function(){return be.a.debounce((function(e){e.name?s(p(e)):F(A,I)}),800)}),[F,A,I,s]),U=function(e){var t=e.currentTarget.value;"searchByName"===e.currentTarget.name?(g(t),M({name:t})):(h(t),function(e){var t=[];t=e?P.filter((function(t){return t.name.toLowerCase().startsWith(e.toLowerCase())})):P,d(t)}(t))},D=function(e){var t=e.target.value;w(t),s(b({page:1,itemsPerPage:t}))},R=function(e,t){var a=Object(X.a)(P).sort((function(a,n){return a[e].localeCompare(n[e])*t}));d(a)},z=function(e){switch(e.currentTarget.dataset.prop){case"Iso Code":R("iso2Code",1);break;case"Name":R("name",1);break;case"Capital City":R("capitalCity",1);break;case"Longitude":R("longitude",1);break;case"Latitude":R("latitude",1)}};return c?Object($.jsxs)("section",{className:"list",children:[Object($.jsx)("h2",{children:"Countries List"}),Object($.jsx)(ue,{numberItems:25})]}):r?r&&r.message?Object($.jsxs)("section",{className:"list",children:[Object($.jsx)("h2",{children:"Countries List"}),Object($.jsx)(ie,{filterBy:O,searchByName:v,onChange:U,itemsPerPage:C,onSelect:D}),Object($.jsx)(le,{clasName:"list-header",onPress:z}),Object($.jsx)(oe,{title:r.message[0].value,onPress:F})]}):Object($.jsxs)("section",{className:"list",children:[Object($.jsx)("h2",{children:"Countries List"}),Object($.jsx)(ie,{filterBy:O,searchByName:v,onChange:U,itemsPerPage:C,onSelect:D}),Object($.jsx)(le,{clasName:"list-header",onPress:z}),Object($.jsx)(oe,{title:"Something went wrong.",onPress:F})]}):Object($.jsxs)("section",{className:"list",children:[Object($.jsx)("h2",{children:"Countries List"}),Object($.jsx)(ie,{filterBy:O,searchByName:v,onChange:U,itemsPerPage:C,onSelect:D}),Object($.jsx)(le,{clasName:"list-header",onPress:z}),0===u.length&&Object($.jsx)(oe,{title:"We coudn't find any data. Try to change filtration!"}),u.map((function(e,t){return Object($.jsxs)("section",{className:"list-row",children:[Object($.jsx)(le,{clasName:"list-header list-header--vertical",onPress:z},"".concat(e.iso2Code,"-").concat(t)),Object($.jsx)(ee,{country:e},e.id)]},t)})),Object($.jsx)(de,{itemsPerPage:C})]})},Oe=["title","titleId"];function he(){return he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},he.apply(this,arguments)}function pe(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}function fe(e,t){var a=e.title,c=e.titleId,r=pe(e,Oe);return n.createElement("svg",he({"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"arrow-alt-circle-left",className:"svg-inline--fa fa-arrow-alt-circle-left fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":c},r),a?n.createElement("title",{id:c},a):null,re||(re=n.createElement("path",{fill:"currentColor",d:"M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"})))}var xe=n.forwardRef(fe),ve=(a.p,function(e){var t=Object(V.c)(S),a=Object(Z.f)(),c=Object(V.b)();Object(n.useEffect)((function(){return function(){c(f(null))}}),[c]);var r=function(){a.push("/")};return t?Object($.jsxs)("section",{className:"details",children:[Object($.jsx)("h2",{children:"Country Details"}),Object($.jsx)("div",{className:"details-item",onClick:r,children:Object($.jsx)(xe,{className:"svg"})}),Object($.jsxs)("div",{className:"details-item details-item--row",children:[Object($.jsxs)("div",{className:"details-item",children:[Object($.jsx)("span",{className:"details-item-header",children:"Iso Code"}),Object($.jsx)("span",{className:"details-item-header",children:"Name"}),Object($.jsx)("span",{className:"details-item-header",children:"CapitalCity"}),Object($.jsx)("span",{className:"details-item-header",children:"Longitude"}),Object($.jsx)("span",{className:"details-item-header",children:"Latitude"})]}),Object($.jsx)(ee,{country:t,dissableActions:!0,cssClassName:"column"})]}),Object($.jsxs)("div",{className:"details-item details-item--row",children:[Object($.jsx)("div",{className:"details-item",children:Object($.jsx)("span",{className:"details-item-header",children:"Region"})}),Object($.jsxs)("div",{className:"details-item",children:[Object($.jsx)("span",{className:"details-item-label",children:t.region.value||"N/A"}),Object($.jsx)("span",{className:"details-item-label",children:t.region.id||"N/A"}),Object($.jsx)("span",{className:"details-item-label",children:t.region.iso2code||"N/A"})]})]}),Object($.jsxs)("div",{className:"details-item details-item--row",children:[Object($.jsx)("div",{className:"details-item",children:Object($.jsx)("span",{className:"details-item-header",children:"Adminregion"})}),Object($.jsxs)("div",{className:"details-item",children:[Object($.jsx)("span",{className:"details-item-label",children:t.adminregion.id||"N/A"}),Object($.jsx)("span",{className:"details-item-label",children:t.adminregion.iso2code||"N/A"}),Object($.jsx)("span",{className:"details-item-label",children:t.adminregion.value||"N/A"})]})]}),Object($.jsxs)("div",{className:"details-item details-item--row",children:[Object($.jsx)("div",{className:"details-item",children:Object($.jsx)("span",{className:"details-item-header",children:"IncomeLevel"})}),Object($.jsxs)("div",{className:"details-item",children:[Object($.jsx)("span",{className:"details-item-label",children:t.incomeLevel.id||"N/A"}),Object($.jsx)("span",{className:"details-item-label",children:t.incomeLevel.iso2code||"N/A"}),Object($.jsx)("span",{className:"details-item-label",children:t.incomeLevel.value||"N/A"})]})]}),Object($.jsxs)("div",{className:"details-item details-item--row",children:[Object($.jsx)("div",{className:"details-item",children:Object($.jsx)("span",{className:"details-item-header",children:"LendingType"})}),Object($.jsxs)("div",{className:"details-item",children:[Object($.jsx)("span",{className:"details-item-label",children:t.lendingType.id||"N/A"}),Object($.jsx)("span",{className:"details-item-label",children:t.lendingType.iso2Code||"N/A"}),Object($.jsx)("span",{className:"details-item-label",children:t.lendingType.value||"N/A"})]})]})]}):(r(),null)}),ge=a.p+"static/media/not-found-img.e3d986b7.jpg",Ne=function(e){var t=Object(Z.f)();return Object($.jsxs)("section",{className:"not-found",children:[Object($.jsx)("div",{className:"not-found-item",onClick:function(){return t.replace("/")},children:Object($.jsx)(xe,{className:"svg"})}),Object($.jsx)("div",{className:"not-found-img",children:Object($.jsx)("img",{src:ge,alt:"not found page"})})]})},ye=a(46),Ce=a(47),we=a(51),ke=a(48),Pe=function(e){Object(we.a)(a,e);var t=Object(ke.a)(a);function a(e){var n;return Object(ye.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(Ce.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?Object($.jsx)(oe,{title:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(c.a.Component),Ae=a(19),Le=(a(85),function(){return Object($.jsx)("div",{className:"App",children:Object($.jsx)(V.a,{store:K,children:Object($.jsx)(Ae.a,{children:Object($.jsxs)(Z.c,{children:[Object($.jsx)(Z.a,{exact:!0,path:"/",children:function(e){var t=e.match;return Object($.jsx)(Pe,{children:Object($.jsx)(me,{match:t})})}}),Object($.jsx)(Z.a,{exact:!0,path:"/details",children:function(e){var t=e.match;return Object($.jsx)(Pe,{children:Object($.jsx)(ve,{match:t})})}}),Object($.jsx)(Z.a,{path:"*",children:Object($.jsx)(Ne,{})})]})})})})}),Se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,88)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};a(86);s.a.render(Object($.jsx)(c.a.StrictMode,{children:Object($.jsx)(Le,{})}),document.getElementById("root")),Se()}},[[87,1,2]]]);
//# sourceMappingURL=main.1ae2551e.chunk.js.map