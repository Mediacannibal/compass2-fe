(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1128:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e.n(r),i=e(139),s=e.n(i),A=e(724),l={insert:"head",singleton:!1},c=(s()(A.a,l),A.a.locals,e(725)),o=e(473),d=e(726),m=e(727),g=e(728),u=e(729),b=e(730),B=e(731),v=e(732),C=e(14),k=e(472),f=e(471);function p(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,a,i=[],s=!0,A=!1;try{for(e=e.call(n);!(s=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(n){A=!0,a=n}finally{try{s||null==e.return||e.return()}finally{if(A)throw a}}return i}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return I(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return I(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}t.default=function(){var n=Object(C.f)(),t=p(Object(r.useState)({Level_name:"-",Task_Name:"-",about:"-",Description:"-",image:"https://trtappfiles.s3.ap-south-1.amazonaws.com/Eco_CS+Files/LEVELS/LS_lev_01_on.png",Location:"-",taskdata:[{number:1,Level:"Watch",status:"ACTIVE"},{number:2,Level:"Activity",status:"LOCKED"},{number:3,Level:"Quiz",status:"LOCKED"}]}),2),i=t[0],s=t[1];console.log(">>>>>>>>>>>>>>>>",i);var A=p(Object(r.useState)(!0),2),l=A[0],I=A[1],h=p(Object(r.useState)(!1),2),_=(h[0],h[1]),w=Object(C.g)();return Object(r.useEffect)((function(){Object(f.a)(),null===localStorage.getItem("isFirsttime")&&Object(f.b)();var n=JSON.parse(String(localStorage.getItem("TaskData")));s(n[Number(w.id)-1]);var t=JSON.parse(String(localStorage.getItem("EventStatusData")));null!==t&&t.forEach((function(n){"Task"===n.eventType&&n.Level===w.id&&("LOCKED"===n.Status?console.log("task is ",n):"COMPLETED"===n.Status?(console.log("task is ",n.Status),I(!1),_(!0)):"UNLOCKED"===n.Status&&(console.log("clue is ",n.Status),I(!1)))}))}),[]),a.a.createElement("div",{style:{backgroundColor:"#f1fdfd"}},a.a.createElement("div",{className:"tasklist_topbanner"},a.a.createElement("div",{className:"tasklist_banner"},a.a.createElement("div",{className:"tasklist_bannermenu",onClick:function(){n.replace("/TaskListScreen")}},a.a.createElement("img",{className:"tasklist_menuicon rotateimg180",src:o})),a.a.createElement("div",{className:"tasklist_bannerimg"},a.a.createElement("img",{className:"tasklist_level1",src:i.image})),a.a.createElement("div",{className:"tasklist_bannertext"},a.a.createElement("div",{className:"tasklist_sub-text1"},i.Task_Name)),"DONE"===i.taskdata[0].status&&"DONE"===i.taskdata[1].status&&"DONE"===i.taskdata[2].status?a.a.createElement("div",{className:"tasklist_reward_icon_container",onClick:function(){n.replace("/RewardScreen/"+w.id)}},a.a.createElement("img",{className:"tasklist_banner_rewardicon",src:e(749)("./medal"+w.id+".png")})):null)),a.a.createElement("div",{className:"tasklist_bottommaincontainer"},a.a.createElement("div",{className:"tasklist_about"},a.a.createElement("p",{className:"taskscreen_description"},i.Description)),l?a.a.createElement("div",{style:{width:"100vw",height:"100vh",position:"absolute",top:"0",zIndex:1e3,backgroundColor:"#00243a"}},a.a.createElement(k.a,null)):null,a.a.createElement("div",{className:"tasklist_listitem_container"},a.a.createElement("div",{className:"LOCKED"===i.taskdata[0].status?"tasklist_listitem_disabled":"tasklist_listitem",onClick:function(){n.replace("/VideoScreen/"+w.id),console.log("======================>",i.taskdata[0].active)}},a.a.createElement("div",{className:"tasklist_sub_level_container"},a.a.createElement("div",{className:"tasklist_sub_level_subcontainer1"},a.a.createElement("div",{className:"tasklist_listnumber"},i.taskdata[0].number),a.a.createElement("div",{className:"tasklist_listtext"},i.taskdata[0].Level),"DONE"===i.taskdata[0].status?a.a.createElement("img",{className:"tasklist_button",src:m}):a.a.createElement("img",{className:"tasklist_button",src:g})),"DONE"===i.taskdata[0].status?a.a.createElement("img",{className:"tasklist_tick",src:c}):null,"ACTIVE"===i.taskdata[0].status?a.a.createElement("img",{className:"tasklist_arrow",src:d}):null)),a.a.createElement("div",{className:"LOCKED"===i.taskdata[1].status?"tasklist_listitem_disabled":"tasklist_listitem",onClick:function(){n.replace("/ActivityScreen/"+w.id),console.log("======================>",i.taskdata[1].active)}},a.a.createElement("div",{className:"tasklist_sub_level_container"},a.a.createElement("div",{className:"tasklist_sub_level_subcontainer2"},a.a.createElement("div",{className:"tasklist_listnumber"},i.taskdata[1].number),a.a.createElement("div",{className:"tasklist_listtext"},i.taskdata[1].Level),"DONE"===i.taskdata[1].status?a.a.createElement("img",{className:"tasklist_button",src:u}):a.a.createElement("img",{className:"tasklist_button",src:b})),"DONE"===i.taskdata[1].status?a.a.createElement("img",{className:"tasklist_tick",src:c}):null,"ACTIVE"===i.taskdata[1].status?a.a.createElement("img",{className:"tasklist_arrow",src:d}):null)),a.a.createElement("div",{className:"LOCKED"===i.taskdata[2].status?"tasklist_listitem_disabled":"tasklist_listitem",onClick:function(){n.replace("/QuizScreen/"+w.id),console.log("======================>",i.taskdata[2].active)}},a.a.createElement("div",{className:"tasklist_sub_level_container"},a.a.createElement("div",{className:"tasklist_sub_level_subcontainer3"},a.a.createElement("div",{className:"tasklist_listnumber"},i.taskdata[2].number),a.a.createElement("div",{className:"tasklist_listtext"},i.taskdata[2].Level),"DONE"===i.taskdata[2].status?a.a.createElement("img",{className:"tasklist_button",src:B}):a.a.createElement("img",{className:"tasklist_button",src:v})),"DONE"===i.taskdata[2].status?a.a.createElement("img",{className:"tasklist_tick",src:c}):null,"ACTIVE"===i.taskdata[2].status?a.a.createElement("img",{className:"tasklist_arrow",src:d}):null))),a.a.createElement("div",{className:"bgbottombluebar"})))}},469:function(n,t,e){"use strict";var r=e(140),a=e.n(r),i=e(141),s=e.n(i)()(a.a);s.push([n.i,".loader_logoicon_containers {\r\n    display: grid;\r\n    height: 100%;\r\n    width: 100%;\r\n    align-items: center;\r\n    align-self: center;\r\n    align-content: center;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    justify-content: center;\r\n    justify-items: center;\r\n    justify-items: center;\r\n}\r\n\r\n.loader {\r\n    border: calc(0.15vw + 0.45vh + 0.15vmin) solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top: calc(0.15vw + 0.45vh + 0.15vmin) solid #ff9400;\r\n    width: 7vw;\r\n    height: 7vw;\r\n    -webkit-animation: spin 2s linear infinite;\r\n    animation: spin 2s linear infinite;\r\n    z-index: 100;\r\n}\r\n\r\n.loader_logoicon {\r\n    width: 38vw;\r\n    height: 23vh;\r\n    object-fit: contain;\r\n    padding-bottom: 10%;\r\n}\r\n\r\n/* Safari */\r\n\r\n@-webkit-keyframes spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes spin {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}","",{version:3,sources:["webpack://./src/components/Common/Spinner/style.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;IAClB,sBAAsB;IACtB,uBAAuB;IACvB,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,sDAAsD;IACtD,kBAAkB;IAClB,0DAA0D;IAC1D,UAAU;IACV,WAAW;IACX,0CAA0C;IAC1C,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA,WAAW;;AAEX;IACI;QACI,+BAA+B;IACnC;IACA;QACI,iCAAiC;IACrC;AACJ;;AAEA;IACI;QACI,uBAAuB;IAC3B;IACA;QACI,yBAAyB;IAC7B;AACJ",sourcesContent:[".loader_logoicon_containers {\r\n    display: grid;\r\n    height: 100%;\r\n    width: 100%;\r\n    align-items: center;\r\n    align-self: center;\r\n    align-content: center;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    justify-content: center;\r\n    justify-items: center;\r\n    justify-items: center;\r\n}\r\n\r\n.loader {\r\n    border: calc(0.15vw + 0.45vh + 0.15vmin) solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top: calc(0.15vw + 0.45vh + 0.15vmin) solid #ff9400;\r\n    width: 7vw;\r\n    height: 7vw;\r\n    -webkit-animation: spin 2s linear infinite;\r\n    animation: spin 2s linear infinite;\r\n    z-index: 100;\r\n}\r\n\r\n.loader_logoicon {\r\n    width: 38vw;\r\n    height: 23vh;\r\n    object-fit: contain;\r\n    padding-bottom: 10%;\r\n}\r\n\r\n/* Safari */\r\n\r\n@-webkit-keyframes spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes spin {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}"],sourceRoot:""}]),t.a=s},472:function(n,t,e){"use strict";var r=e(1),a=e.n(r),i=e(139),s=e.n(i),A=e(469),l={insert:"head",singleton:!1},c=(s()(A.a,l),A.a.locals,e(470));t.a=function(){return a.a.createElement("div",{className:"loader_logoicon_containers"},a.a.createElement("img",{className:"loader_logoicon",src:c}),a.a.createElement("div",{className:"loader"}))}},473:function(n,t,e){n.exports=e.p+"12c31d4081a9828edb9d938ac731984d.png"},565:function(n,t,e){n.exports=e.p+"00a99a6e9130e670011a403508635bbc.png"},566:function(n,t,e){n.exports=e.p+"bae80f50e90068d496192297a800fc20.png"},567:function(n,t,e){n.exports=e.p+"f5cb9e0e1b5b6889ddee77c1d52f4970.png"},568:function(n,t,e){n.exports=e.p+"a9337ad45313b8b087c872f523d4d031.png"},569:function(n,t,e){n.exports=e.p+"bd0fdfa9e0003b4d4aff6463a05ade76.png"},570:function(n,t,e){n.exports=e.p+"7aa5e1999766d9357e945f8efc7b5393.png"},571:function(n,t,e){n.exports=e.p+"be1428f10c53925bc6dc1db7d45333a9.png"},572:function(n,t,e){n.exports=e.p+"67d9da798b625516d4c1d1a9768020d4.png"},724:function(n,t,e){"use strict";var r=e(140),a=e.n(r),i=e(141),s=e.n(i)()(a.a);s.push([n.i,"h1, * {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.tasklist_sub-text1 {\r\n    font-size: 5vw;\r\n    font-weight: 700;\r\n    color: rgb(255, 255, 255) !important;\r\n}\r\n\r\n.tasklist_sub-text2 {\r\n    font-size: 4.2vw;\r\n    font-weight: 700;\r\n}\r\n\r\n.taskscreen_description {\r\n    font-size: 4.2vw;\r\n    text-align: center;\r\n}\r\n\r\n.tasklist_about {\r\n    color: rgb(255, 255, 255);\r\n    display: block;\r\n    position: relative;\r\n    background-color: #00243a;\r\n    padding: 2vh 10vw 2vh 8vw;\r\n}\r\n\r\n.tasklist_listitem_container {\r\n    display: grid;\r\n    align-content: space-evenly;\r\n    height: 46vh;\r\n    width: 100%;\r\n}\r\n\r\n.tasklist_listitem {\r\n    display: block;\r\n}\r\n\r\n.tasklist_listitem_disabled {\r\n    display: block;\r\n    opacity: 50%;\r\n}\r\n\r\n.tasklist_sub_level_container {\r\n    position: relative;\r\n    display: flex;\r\n}\r\n\r\n.tasklist_sub_level1 {\r\n    width: 70%;\r\n}\r\n\r\n.tasklist_sub_level_subcontainer1 {\r\n    display: flex;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    width: 69vw;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.tasklist_sub_level_subcontainer2 {\r\n    display: flex;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    width: 74vw;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.tasklist_sub_level_subcontainer3 {\r\n    display: flex;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    width: 79vw;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.tasklist_listnumber {\r\n    background-color: #00253a !important;\r\n    font-size: 5.4vw;\r\n    font-weight: 600;\r\n    color: white;\r\n    padding-left: 4vw;\r\n    width: 14vw;\r\n    height: 6vh;\r\n    border-radius: 0 60px 60px 0;\r\n    z-index: 1;\r\n    align-items: center;\r\n    display: flex;\r\n}\r\n\r\n.tasklist_listtext {\r\n    background-color: #3998ac !important;\r\n    font-size: 4.4vw;\r\n    font-weight: 600;\r\n    width: 100%;\r\n    height: calc(5vh + 1vh);\r\n    margin-left: -11vw;\r\n    padding-left: 15vw;\r\n    align-items: center;\r\n    display: flex;\r\n}\r\n\r\n.tasklist_button {\r\n    max-width: 28vw;\r\n    height: 9vh;\r\n    object-fit: contain;\r\n    margin-left: -3.5vw;\r\n}\r\n\r\n.tasklist_tick {\r\n    width: 8vw;\r\n    object-fit: contain;\r\n    margin: -1.6vh 0 0 -4.5vw;\r\n    z-index: 2;\r\n    align-self: flex-start;\r\n}\r\n\r\n.tasklist_arrow {\r\n    display: flex;\r\n    align-self: center;\r\n    max-width: 28vw;\r\n    height: 6vh;\r\n    object-fit: contain;\r\n    padding-left: 2vw;\r\n}\r\n\r\n.tasklist_topbanner {\r\n    height: 19vh;\r\n    background-color: #3998ac;\r\n    display: flex;\r\n    align-items: flex-end;\r\n}\r\n\r\n.tasklist_bottommaincontainer {\r\n    height: 81vh;\r\n    min-height: 81vh;\r\n    align-content: space-between;\r\n    display: grid;\r\n}\r\n\r\n.tasklist_banner {\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: center;\r\n    padding-bottom: 1vh;\r\n}\r\n\r\n.tasklist_reward_icon_container {\r\n    flex: 1;\r\n    text-align: right;\r\n    margin-right: 6vw;\r\n}\r\n\r\n.tasklist_level1 {\r\n    width: 16vw;\r\n}\r\n\r\n.tasklist_menuicon {\r\n    width: 9vw;\r\n}\r\n\r\n.tasklist_bannermenu {\r\n    text-align-last: center;\r\n    margin-left: 7vw;\r\n}\r\n\r\n.tasklist_bannerimg {\r\n    text-align-last: center;\r\n    margin: 0 4vw 0 5vw;\r\n}\r\n\r\n.tasklist_bannertext {\r\n    text-align-last: left;\r\n}\r\n\r\n.tasklist_banner_rewardicon {\r\n    width: 20vw;\r\n    height: 15vh;\r\n    object-fit: contain;\r\n}","",{version:3,sources:["webpack://./src/components/TaskScreen/style.css"],names:[],mappings:"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,4BAA4B;IAC5B,WAAW;IACX,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,4BAA4B;IAC5B,WAAW;IACX,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,4BAA4B;IAC5B,WAAW;IACX,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;IACpC,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,WAAW;IACX,WAAW;IACX,4BAA4B;IAC5B,UAAU;IACV,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,oCAAoC;IACpC,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,yBAAyB;IACzB,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,4BAA4B;IAC5B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,OAAO;IACP,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB",sourcesContent:["h1, * {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.tasklist_sub-text1 {\r\n    font-size: 5vw;\r\n    font-weight: 700;\r\n    color: rgb(255, 255, 255) !important;\r\n}\r\n\r\n.tasklist_sub-text2 {\r\n    font-size: 4.2vw;\r\n    font-weight: 700;\r\n}\r\n\r\n.taskscreen_description {\r\n    font-size: 4.2vw;\r\n    text-align: center;\r\n}\r\n\r\n.tasklist_about {\r\n    color: rgb(255, 255, 255);\r\n    display: block;\r\n    position: relative;\r\n    background-color: #00243a;\r\n    padding: 2vh 10vw 2vh 8vw;\r\n}\r\n\r\n.tasklist_listitem_container {\r\n    display: grid;\r\n    align-content: space-evenly;\r\n    height: 46vh;\r\n    width: 100%;\r\n}\r\n\r\n.tasklist_listitem {\r\n    display: block;\r\n}\r\n\r\n.tasklist_listitem_disabled {\r\n    display: block;\r\n    opacity: 50%;\r\n}\r\n\r\n.tasklist_sub_level_container {\r\n    position: relative;\r\n    display: flex;\r\n}\r\n\r\n.tasklist_sub_level1 {\r\n    width: 70%;\r\n}\r\n\r\n.tasklist_sub_level_subcontainer1 {\r\n    display: flex;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    width: 69vw;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.tasklist_sub_level_subcontainer2 {\r\n    display: flex;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    width: 74vw;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.tasklist_sub_level_subcontainer3 {\r\n    display: flex;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    width: 79vw;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.tasklist_listnumber {\r\n    background-color: #00253a !important;\r\n    font-size: 5.4vw;\r\n    font-weight: 600;\r\n    color: white;\r\n    padding-left: 4vw;\r\n    width: 14vw;\r\n    height: 6vh;\r\n    border-radius: 0 60px 60px 0;\r\n    z-index: 1;\r\n    align-items: center;\r\n    display: flex;\r\n}\r\n\r\n.tasklist_listtext {\r\n    background-color: #3998ac !important;\r\n    font-size: 4.4vw;\r\n    font-weight: 600;\r\n    width: 100%;\r\n    height: calc(5vh + 1vh);\r\n    margin-left: -11vw;\r\n    padding-left: 15vw;\r\n    align-items: center;\r\n    display: flex;\r\n}\r\n\r\n.tasklist_button {\r\n    max-width: 28vw;\r\n    height: 9vh;\r\n    object-fit: contain;\r\n    margin-left: -3.5vw;\r\n}\r\n\r\n.tasklist_tick {\r\n    width: 8vw;\r\n    object-fit: contain;\r\n    margin: -1.6vh 0 0 -4.5vw;\r\n    z-index: 2;\r\n    align-self: flex-start;\r\n}\r\n\r\n.tasklist_arrow {\r\n    display: flex;\r\n    align-self: center;\r\n    max-width: 28vw;\r\n    height: 6vh;\r\n    object-fit: contain;\r\n    padding-left: 2vw;\r\n}\r\n\r\n.tasklist_topbanner {\r\n    height: 19vh;\r\n    background-color: #3998ac;\r\n    display: flex;\r\n    align-items: flex-end;\r\n}\r\n\r\n.tasklist_bottommaincontainer {\r\n    height: 81vh;\r\n    min-height: 81vh;\r\n    align-content: space-between;\r\n    display: grid;\r\n}\r\n\r\n.tasklist_banner {\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: center;\r\n    padding-bottom: 1vh;\r\n}\r\n\r\n.tasklist_reward_icon_container {\r\n    flex: 1;\r\n    text-align: right;\r\n    margin-right: 6vw;\r\n}\r\n\r\n.tasklist_level1 {\r\n    width: 16vw;\r\n}\r\n\r\n.tasklist_menuicon {\r\n    width: 9vw;\r\n}\r\n\r\n.tasklist_bannermenu {\r\n    text-align-last: center;\r\n    margin-left: 7vw;\r\n}\r\n\r\n.tasklist_bannerimg {\r\n    text-align-last: center;\r\n    margin: 0 4vw 0 5vw;\r\n}\r\n\r\n.tasklist_bannertext {\r\n    text-align-last: left;\r\n}\r\n\r\n.tasklist_banner_rewardicon {\r\n    width: 20vw;\r\n    height: 15vh;\r\n    object-fit: contain;\r\n}"],sourceRoot:""}]),t.a=s},725:function(n,t,e){n.exports=e.p+"421fa2dada8602457090380595082ef2.png"},726:function(n,t,e){n.exports=e.p+"0f3498b57dde4509ff00cec313c9e069.png"},727:function(n,t,e){n.exports=e.p+"61170b379095794af0bd29eb0d9fc299.svg"},728:function(n,t,e){n.exports=e.p+"3d5e86a7256b62b07785f3e6a9ea81ee.svg"},729:function(n,t,e){n.exports=e.p+"23573b3a576ab1e8dd18d78c08e0e210.svg"},730:function(n,t,e){n.exports=e.p+"6c36c096c7992d1cc54fcdef6ef436bd.svg"},731:function(n,t,e){n.exports=e.p+"33a27c868788461a12be6b3e073ce53c.svg"},732:function(n,t,e){n.exports=e.p+"f0599c05365009d14c99a19a2139b026.svg"},749:function(n,t,e){var r={"./medal1.png":565,"./medal2.png":566,"./medal3.png":567,"./medal4.png":568,"./medal5.png":569,"./medal6.png":570,"./medal7.png":571,"./medal8.png":572};function a(n){var t=i(n);return e(t)}function i(n){if(!e.o(r,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return r[n]}a.keys=function(){return Object.keys(r)},a.resolve=i,n.exports=a,a.id=749}}]);
//# sourceMappingURL=25.81fcbe2ca588b787c042.js.map