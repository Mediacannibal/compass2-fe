(window.webpackJsonp=window.webpackJsonp||[]).push([[33,37],{608:function(n,e,r){"use strict";var t=r(28),i=r.n(t),o=r(29),a=r.n(o)()(i.a);a.push([n.i,".logos_section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 84vh;\r\n  padding: 2vh 0 7vh;\r\n  align-items: center;\r\n}\r\n\r\n.innerrowtitle {\r\n  position: relative;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  padding-bottom: 1%;\r\n  font-size: var(--TS4);\r\n}\r\n\r\n.loadlogo {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: contain;\r\n}\r\n\r\n/* logo_row_position */\r\n\r\n.row1 {\r\n  height: 40%;\r\n  width: 100%;\r\n  padding: 1%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  opacity: 0;\r\n  animation: fade-in 1s ease;\r\n  animation-delay: 0.7s;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n.row2 {\r\n  height: 60%;\r\n  padding: 1%;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  opacity: 0;\r\n  animation: fade-in 1s ease;\r\n  animation-delay: 0.7s;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n.loadinnerrow {\r\n  width: 100%;\r\n  height: 98%;\r\n  display: flex;\r\n  flex-flow: wrap;\r\n  justify-content: center;\r\n  align-content: center;\r\n  padding: 2vh 0;\r\n}\r\n\r\n.logostyle1 {\r\n  width: 80%;\r\n  height: 100%;\r\n  text-align: center;\r\n  object-fit: contain;\r\n  display: flex;\r\n  padding: 0 12vw;\r\n}\r\n\r\n.logostyle2 {\r\n  width: 45%;\r\n  height: 45%;\r\n  text-align: center;\r\n  object-fit: contain;\r\n  display: flex;\r\n  padding: 0 4vw;\r\n}\r\n\r\n.logostyle3 {\r\n  width: 28%;\r\n  height: 26%;\r\n  text-align: center;\r\n  object-fit: contain;\r\n  display: flex;\r\n  padding: 1%;\r\n}\r\n\r\n/* 9 logo */\r\n\r\n.logostyle4 {\r\n  width: 18%;\r\n  height: 25%;\r\n  text-align: center;\r\n  object-fit: contain;\r\n  display: flex;\r\n  padding: 1%;\r\n}\r\n\r\n.poweredby_text {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--color_1);\r\n  text-align-last: center;\r\n  font-size: var(--TS11);\r\n  font-weight: 300;\r\n  z-index: 999;\r\n}\r\n\r\n.dashboard_poweredby_URL {\r\n  text-decoration: none;\r\n}","",{version:3,sources:["webpack://./src/components/Splash/style.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA,sBAAsB;;AAEtB;EACE,WAAW;EACX,WAAW;EACX,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,0BAA0B;EAC1B,qBAAqB;EACrB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,WAAW;EACX,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,0BAA0B;EAC1B,qBAAqB;EACrB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,WAAW;EACX,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,WAAW;AACb;;AAEA,WAAW;;AAEX;EACE,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,uBAAuB;EACvB,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB",sourcesContent:[".logos_section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 84vh;\r\n  padding: 2vh 0 7vh;\r\n  align-items: center;\r\n}\r\n\r\n.innerrowtitle {\r\n  position: relative;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  padding-bottom: 1%;\r\n  font-size: var(--TS4);\r\n}\r\n\r\n.loadlogo {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: contain;\r\n}\r\n\r\n/* logo_row_position */\r\n\r\n.row1 {\r\n  height: 40%;\r\n  width: 100%;\r\n  padding: 1%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  opacity: 0;\r\n  animation: fade-in 1s ease;\r\n  animation-delay: 0.7s;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n.row2 {\r\n  height: 60%;\r\n  padding: 1%;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  opacity: 0;\r\n  animation: fade-in 1s ease;\r\n  animation-delay: 0.7s;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n.loadinnerrow {\r\n  width: 100%;\r\n  height: 98%;\r\n  display: flex;\r\n  flex-flow: wrap;\r\n  justify-content: center;\r\n  align-content: center;\r\n  padding: 2vh 0;\r\n}\r\n\r\n.logostyle1 {\r\n  width: 80%;\r\n  height: 100%;\r\n  text-align: center;\r\n  object-fit: contain;\r\n  display: flex;\r\n  padding: 0 12vw;\r\n}\r\n\r\n.logostyle2 {\r\n  width: 45%;\r\n  height: 45%;\r\n  text-align: center;\r\n  object-fit: contain;\r\n  display: flex;\r\n  padding: 0 4vw;\r\n}\r\n\r\n.logostyle3 {\r\n  width: 28%;\r\n  height: 26%;\r\n  text-align: center;\r\n  object-fit: contain;\r\n  display: flex;\r\n  padding: 1%;\r\n}\r\n\r\n/* 9 logo */\r\n\r\n.logostyle4 {\r\n  width: 18%;\r\n  height: 25%;\r\n  text-align: center;\r\n  object-fit: contain;\r\n  display: flex;\r\n  padding: 1%;\r\n}\r\n\r\n.poweredby_text {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--color_1);\r\n  text-align-last: center;\r\n  font-size: var(--TS11);\r\n  font-weight: 300;\r\n  z-index: 999;\r\n}\r\n\r\n.dashboard_poweredby_URL {\r\n  text-decoration: none;\r\n}"],sourceRoot:""}]),e.a=a},616:function(n,e,r){"use strict";r.d(e,"a",(function(){return s}));var t=r(8),i=r(617),o=r(14);function a(n,e,r,t,i,o,a){try{var A=n[o](a),l=A.value}catch(n){return void r(n)}A.done?e(l):Promise.resolve(l).then(t,i)}function A(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==r)return;var t,i,o=[],a=!0,A=!1;try{for(r=r.call(n);!(a=(t=r.next()).done)&&(o.push(t.value),!e||o.length!==e);a=!0);}catch(n){A=!0,i=n}finally{try{a||null==r.return||r.return()}finally{if(A)throw i}}return o}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return l(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}var c=new t.a(!1),s=function(){var n=A(Object(t.b)(c),2),e=n[0],r=n[1];return{leveldetails:e,setleveldetails:r,loadleveldetails:function(){return(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(i.a)().then((function(n){r(n.data.results)})).catch((function(n){console.log(n),Object(o.e)(n,n.response)}));case 2:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,i){var o=n.apply(e,r);function A(n){a(o,t,i,A,l,"next",n)}function l(n){a(o,t,i,A,l,"throw",n)}A(void 0)}))})();var n}}}},677:function(n,e,r){"use strict";var t=r(0),i=r.n(t),o=r(27),a=r.n(o),A=r(608),l={insert:"head",singleton:!1},c=(a()(A.a,l),A.a.locals,r(15)),s=r(44),d=r(600),g=r(675),f=r(167),u=r(90),E=r(166),B=r(91),m=r(609);e.a=function(n){var e,r,o=Object(f.a)(),a=o.instance,A=o.loadinstancewithcallback,l=Object(d.a)(),h=l.logo,p=(l.loadlogo,l.loadlogowithcallback,l.loadlogowithid),C=Object(g.a)(),v=C.logoposition,w=C.loadlogo_arrayposition_iid,y=(C.loadlogo_arrayposition,Object(s.a)()),b=y.setinstancecolor,x=y.colourObj,j=(y.setcolourObj,y.loaddefaultcolor),W=Object(f.a)().loadactiveInstancebyID,S=Object(u.a)().setActiveScreen,_=Object(E.a)().loadActiveleveldetailsbyqr,k=Object(c.f)(),O=Object(B.a)().auth,N=Object(c.g)().search,U=Object(c.h)();Object(t.useEffect)((function(){void 0===n.previewScreen&&(a?I(h):A(I)),x||j()}),[]);var I=function(n){n.map((function(n){var e;if(String(U.instanceId)===(null===(e=String(n.i_title))||void 0===e?void 0:e.replace(" ","").toLowerCase()))localStorage.setItem("TempActiveInstanceInfo",JSON.stringify(n)),X(n);else if(null!==localStorage.getItem("TempActiveInstanceInfo")){var r=JSON.parse(String(localStorage.getItem("TempActiveInstanceInfo")));O&&k.replace("/"+String(r.i_title.replace(/\s/g,"").toLowerCase())),X(r)}else k.replace("/"),v||w(37),setTimeout((function(){S("StartScreen")}),3e3)}))},X=function(n){b(n.color_field),p(n.id),v||w(n.id),O?(W(n.id),setTimeout((function(){var n=new URLSearchParams(N).get("id");n?(_(n),S("Level")):S("Home")}),3e3)):setTimeout((function(){S("StartScreen")}),3e3)};return i.a.createElement("div",{className:"logos_section"},i.a.createElement("div",{className:"row1"},i.a.createElement("div",{className:"loadinnerrow"},i.a.createElement("img",{className:"logostyle1",src:m}))),n.previewScreen?i.a.createElement("div",{className:"row2"},i.a.createElement("div",{className:"innerrowtitle"},i.a.createElement("u",null,"PARTNERS")),i.a.createElement("div",{className:"loadinnerrow"},function(n){console.log("objobjobj",n.length);var e,r=1===(e=n.length)?"logostyle1":e>1&&e<4?"logostyle2":e>=4&&e<=6?"logostyle3":e>6?"logostyle4":void 0;return n.map((function(n){return i.a.createElement("img",{className:r,src:n.i_logo})}))}(h))):(null==v||null===(e=v.section2)||void 0===e?void 0:e.length)>0&&i.a.createElement("div",{className:"row2"},i.a.createElement("div",{className:"innerrowtitle"},i.a.createElement("u",null,"PARTNERS")),i.a.createElement("div",{className:"loadinnerrow"},v&&(null==v||null===(r=v.section2)||void 0===r?void 0:r.map((function(n){var e,r=1===(e=n.length)?"logostyle1":e>1&&e<4?"logostyle2":e>=4&&e<=6?"logostyle3":e>6?"logostyle4":void 0;return n.map((function(n){return i.a.createElement("img",{className:r,src:n.i_logo})}))}))))))}}}]);
//# sourceMappingURL=33.1f70e61a437fba617f2f.js.map