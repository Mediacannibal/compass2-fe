(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1133:function(n,r,e){"use strict";var t=e(0),a=e.n(t),o=e(27),i=e.n(o),c=e(934),A={insert:"head",singleton:!1},s=(i()(c.a,A),c.a.locals,e(168)),l=e(44);function p(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var t,a,o=[],i=!0,c=!1;try{for(e=e.call(n);!(i=(t=e.next()).done)&&(o.push(t.value),!r||o.length!==r);i=!0);}catch(n){c=!0,a=n}finally{try{i||null==e.return||e.return()}finally{if(c)throw a}}return o}(n,r)||function(n,r){if(!n)return;if("string"==typeof n)return d(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return d(n,r)}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}r.a=function(n){var r=n.title,e=n.desc1,o=n.desc2,i=n.popup_body,c=n.confirmClick,A=(n.cancelClick,n.actionable,Object(l.a)().colourObj),d=p(Object(t.useState)(!1),2),u=d[0],f=d[1],C=p(Object(t.useState)(""),2),m=C[0],g=(C[1],p(Object(t.useState)(!0),2)),b=g[0],v=(g[1],p(Object(t.useState)(!0),2)),h=v[0],B=(v[1],p(Object(t.useState)(!0),2)),x=B[0];B[1];return Object(t.useEffect)((function(){}),[]),a.a.createElement("div",{className:"popup_bg1"},a.a.createElement("div",{className:"popup_container1"},a.a.createElement("div",{className:"popup1"},u?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"title1"},m),a.a.createElement("div",{className:"popup_button_container1"},a.a.createElement("div",{onClick:function(){console.log("***CANCEL***"),f(!1)},className:"popup_cancel_button1"},"OK"))):a.a.createElement(a.a.Fragment,null,b?a.a.createElement("div",{className:"popup_title1",style:{color:A.color_m1}},r):null,h?a.a.createElement("div",{className:"popup_description1"},a.a.createElement("div",{className:"popup_text1",style:{color:A.color_s1}},e),a.a.createElement("div",{className:"popup_text1",style:{color:A.color_s1}},o)):null,a.a.createElement("div",{className:"mobile_mockup_wrapper"},a.a.createElement("img",{className:"mobile_mockup",src:"https://comp2ass.s3.ap-south-1.amazonaws.com/logo_url/phone+(1).png"}),x?i:null,a.a.createElement("img",{className:"close_icon",src:s,onClick:c}),'"')))))}},527:function(n,r,e){"use strict";var t=e(27),a=e.n(t),o=e(656),i={insert:"head",singleton:!1},c=(a()(o.a,i),o.a.locals,e(0)),A=e.n(c),s=e(579),l=e(44);function p(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var t,a,o=[],i=!0,c=!1;try{for(e=e.call(n);!(i=(t=e.next()).done)&&(o.push(t.value),!r||o.length!==r);i=!0);}catch(n){c=!0,a=n}finally{try{i||null==e.return||e.return()}finally{if(c)throw a}}return o}(n,r)||function(n,r){if(!n)return;if("string"==typeof n)return d(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return d(n,r)}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}r.a=function(n){var r=n.classname,e=n.card_title,t=n.card_dropdown,a=n.card_preview,o=n.card_body,i=(n.onexpand,n.expandable),d=Object(l.a)().colourObj,u=p(Object(c.useState)(!0),2),f=u[0],C=u[1];return A.a.createElement("div",{className:r?"dashboard_card "+r:"dashboard_card"},A.a.createElement("div",{className:"card_title",style:{color:d.color_m1,textDecorationColor:d.color_m1}},e,t,a,i&&A.a.createElement("img",{className:f?"open_close_arrow_icon":"open_close_arrow_icon rotate180",src:s,onClick:function(){C(!f)}})),f&&A.a.createElement("div",{className:e?"card_details_wrapper":"card_details_wrapper_notitle"},o))}},559:function(n,r,e){n.exports=e.p+"3fb6926972efb0a74caa4003f5e2d7ed.svg"},579:function(n,r,e){n.exports=e.p+"a91fe3ab65e8faaf82bee175dbd27e87.svg"},597:function(n,r,e){n.exports=e.p+"1f0a63d7cc6408ed53faba9d16cb2f33.svg"},598:function(n,r,e){n.exports=e.p+"a55a9d9270697dfb3c0309a7b75de8f3.svg"},599:function(n,r,e){n.exports=e.p+"6468d42ddefb81051e7c8944477b3419.svg"},600:function(n,r,e){n.exports=e.p+"0697da8bc4fbee309d13954f7e244ea2.svg"},602:function(n,r,e){n.exports=e.p+"38aaa05e30638cf43f8cf78790b449aa.png"},606:function(n,r,e){n.exports=e.p+"69392b7b786e1cc2f4db80622f63076d.png"},607:function(n,r,e){n.exports=e.p+"aed88bb24648ef6d321bcb9d900d8f0b.svg"},608:function(n,r,e){n.exports=e.p+"38aaa05e30638cf43f8cf78790b449aa.png"},609:function(n,r,e){"use strict";var t=e(28),a=e.n(t),o=e(29),i=e.n(o)()(a.a);i.push([n.i,".pie_cirlce_container circle {\r\n    transition: all 0.7s ease-in-out;\r\n    -webkit-filter: drop-shadow( 2px 3px 6px rgba(0, 0, 0, .25));\r\n    filter: drop-shadow( 2px 3px 6px rgba(0, 0, 0, .25));\r\n}\r\n\r\n.pie_cirlce_container {\r\n    position: absolute;\r\n}\r\n\r\ng {\r\n    transform: translate(50%, 50%) rotate(-23deg);\r\n}","",{version:3,sources:["webpack://./src/components/Common/Pie/style.css"],names:[],mappings:"AAAA;IACI,gCAAgC;IAChC,4DAA4D;IAC5D,oDAAoD;AACxD;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,6CAA6C;AACjD",sourcesContent:[".pie_cirlce_container circle {\r\n    transition: all 0.7s ease-in-out;\r\n    -webkit-filter: drop-shadow( 2px 3px 6px rgba(0, 0, 0, .25));\r\n    filter: drop-shadow( 2px 3px 6px rgba(0, 0, 0, .25));\r\n}\r\n\r\n.pie_cirlce_container {\r\n    position: absolute;\r\n}\r\n\r\ng {\r\n    transform: translate(50%, 50%) rotate(-23deg);\r\n}"],sourceRoot:""}]),r.a=i},656:function(n,r,e){"use strict";var t=e(28),a=e.n(t),o=e(29),i=e.n(o)()(a.a);i.push([n.i,"/* Card */\r\n\r\n.dashboard_card {\r\n    background-color: var(--color_0);\r\n    border-radius: 10px;\r\n    margin: calc(0.3vw + 0.9vh + 0.3vmin);\r\n    padding: calc(0.3vw + 0.9vh + 0.3vmin);\r\n    -webkit-box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;\r\n    -moz-box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;\r\n    box-shadow: 0 4px 6px -2px rgb(0 0 0 / 12%), 0 2px 2px -1px rgb(0 0 0 / 5%);\r\n    box-sizing: border-box;\r\n    overflow: scroll;\r\n    max-height: 87vh;\r\n}\r\n\r\n.card_title {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-weight: 600;\r\n    font-size: var(--TS7);\r\n    align-self: center;\r\n    text-decoration: underline;\r\n    text-underline-offset: calc(0.1vw + 0.3vh + 0.1vmin);\r\n}\r\n\r\n.card_details {\r\n    font-family: 'Barlow';\r\n    font-weight: 500;\r\n    font-size: var(--TS9);\r\n    align-self: center;\r\n}\r\n\r\n.card_details_wrapper {\r\n    padding: var(--TS9) 0 0 0;\r\n    max-height: 84vh;\r\n    max-width: 84vw;\r\n}\r\n\r\n.card_details_wrapper_notitle {\r\n    max-height: 84vh;\r\n    max-width: 84vw;\r\n}\r\n\r\n.open_close_arrow_icon {\r\n    object-fit: contain;\r\n    width: calc(0.3vw + 0.9vh + 0.3vmin);\r\n    height: calc(0.3vw + 0.9vh + 0.3vmin);\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n}","",{version:3,sources:["webpack://./src/components/Common/Card/style.css"],names:[],mappings:"AAAA,SAAS;;AAET;IACI,gCAAgC;IAChC,mBAAmB;IACnB,qCAAqC;IACrC,sCAAsC;IACtC,iDAAiD;IACjD,8CAA8C;IAC9C,2EAA2E;IAC3E,sBAAsB;IACtB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;IAChB,qBAAqB;IACrB,kBAAkB;IAClB,0BAA0B;IAC1B,oDAAoD;AACxD;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,oCAAoC;IACpC,qCAAqC;IACrC,sBAAsB;IACtB,eAAe;AACnB",sourcesContent:["/* Card */\r\n\r\n.dashboard_card {\r\n    background-color: var(--color_0);\r\n    border-radius: 10px;\r\n    margin: calc(0.3vw + 0.9vh + 0.3vmin);\r\n    padding: calc(0.3vw + 0.9vh + 0.3vmin);\r\n    -webkit-box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;\r\n    -moz-box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;\r\n    box-shadow: 0 4px 6px -2px rgb(0 0 0 / 12%), 0 2px 2px -1px rgb(0 0 0 / 5%);\r\n    box-sizing: border-box;\r\n    overflow: scroll;\r\n    max-height: 87vh;\r\n}\r\n\r\n.card_title {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-weight: 600;\r\n    font-size: var(--TS7);\r\n    align-self: center;\r\n    text-decoration: underline;\r\n    text-underline-offset: calc(0.1vw + 0.3vh + 0.1vmin);\r\n}\r\n\r\n.card_details {\r\n    font-family: 'Barlow';\r\n    font-weight: 500;\r\n    font-size: var(--TS9);\r\n    align-self: center;\r\n}\r\n\r\n.card_details_wrapper {\r\n    padding: var(--TS9) 0 0 0;\r\n    max-height: 84vh;\r\n    max-width: 84vw;\r\n}\r\n\r\n.card_details_wrapper_notitle {\r\n    max-height: 84vh;\r\n    max-width: 84vw;\r\n}\r\n\r\n.open_close_arrow_icon {\r\n    object-fit: contain;\r\n    width: calc(0.3vw + 0.9vh + 0.3vmin);\r\n    height: calc(0.3vw + 0.9vh + 0.3vmin);\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n}"],sourceRoot:""}]),r.a=i},666:function(n,r,e){"use strict";var t=e(0),a=e.n(t),o=e(27),i=e.n(o),c=e(609),A={insert:"head",singleton:!1},s=(i()(c.a,A),c.a.locals,function(n){var r=n.colour,e=n.pct,t=n.radius,o=n.strokewidth,i=r||"hsl("+(350-2*e)+", 70%, 45%)",c=t+o/2,A=2*Math.PI*c,s=(100-e)*A/100;return a.a.createElement("circle",{r:c,cx:0,cy:0,fill:"transparent",stroke:s!==A?i:"",strokeWidth:o,strokeDasharray:A,strokeDashoffset:e?s:0,strokeLinecap:"round"})}),l=function(n){var r=n.percentage;return a.a.createElement("text",{x:"50%",y:"50%",dominantBaseline:"central",textAnchor:"middle",fontSize:"1.5em"},r.toFixed(0),"%")};r.a=function(n){var r=n.percentage,e=(n.colour,n.radius),t=n.strokewidth,o=n.text,i=function(n){return!Number.isFinite(+n)||n<0?0:n>100?100:+n}(r);return a.a.createElement("svg",{className:"pie_cirlce_container",width:2*e+5*t,height:2*e+5*t},a.a.createElement("g",null,a.a.createElement(s,{pct:i,radius:e,strokewidth:t})),o&&a.a.createElement(l,{percentage:i}))}},924:function(n,r,e){n.exports=e.p+"47a84ef0c02ceb0ea89d020dee46915b.png"},925:function(n,r,e){n.exports=e.p+"798ba812f30ec732b69789c94e789626.png"},926:function(n,r,e){n.exports=e.p+"ba938a3f411d5387aaface52eb19e0e3.svg"},927:function(n,r,e){n.exports=e.p+"945b2b4a0ce47e946803c21863686175.svg"},928:function(n,r,e){n.exports=e.p+"5544263d35e5d1532d1ff20666b88556.svg"},929:function(n,r,e){n.exports=e.p+"a7c106668c4dcf9b17515731bea20ebc.png"},930:function(n,r,e){n.exports=e.p+"b3200554752f51885bff2174e52f17b9.svg"},931:function(n,r,e){n.exports=e.p+"bc48c38d4284035b2ce59897ea060c7e.svg"},932:function(n,r,e){n.exports=e.p+"b659aee0aa0e005c9fe0b7c5d18a022f.svg"},933:function(n,r,e){n.exports=e.p+"e4191dab19ee1e038072d3a30bd2404c.png"},934:function(n,r,e){"use strict";var t=e(28),a=e.n(t),o=e(29),i=e.n(o)()(a.a);i.push([n.i,"/* popup */\r\n\r\n.popup_bg1 {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    /* background-color: var(--color_10); */\r\n    z-index: 1000;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    overflow: scroll;\r\n    background: var(--color_109);\r\n}\r\n\r\n.popup_container1 {\r\n    align-self: center;\r\n    display: grid;\r\n    height: 80%;\r\n    width: 40%;\r\n    align-content: center;\r\n    justify-content: center;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .popup_container1 {\r\n        align-self: center;\r\n        display: grid;\r\n        height: 80%;\r\n        width: 70%;\r\n        align-content: center;\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\n.popup1 {\r\n    position: relative;\r\n    z-index: 200;\r\n    border-radius: calc(0.1vw + 0.3vh + 0.1vmin);\r\n    margin: 0vh 5vw;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-width: calc(0.05vw + 0.15vh + 0.05vmin);\r\n    padding: calc(0.4vw + 1.2vh + 0.4vmin);\r\n}\r\n\r\n.popup_title1 {\r\n    text-align: center;\r\n    padding-bottom: calc(0.4vw + 1.2vh + 0.4vmin);\r\n    font-weight: 600;\r\n    font-size: var(--TS6);\r\n    align-self: center;\r\n}\r\n\r\n.popup_text1 {\r\n    font-size: var(--TS7);\r\n    text-align: center;\r\n    font-weight: 500;\r\n}\r\n\r\n.popup_button_container1 {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    padding-top: var(--TS5);\r\n    width: 100%;\r\n}\r\n\r\n.popup_cancel_button1 {\r\n    box-shadow: 0 4px 6px -2px rgb(0 0 0 / 12%), 0 2px 2px -1px rgb(0 0 0 / 5%);\r\n    cursor: pointer;\r\n}\r\n\r\n.mobile_mockup_wrapper {\r\n    position: relative;\r\n    display: flex;\r\n    height: 80vh;\r\n    width: 80vh;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.mobile_mockup {\r\n    position: absolute;\r\n    height: 100%;\r\n}\r\n\r\n\r\n/* Safari */\r\n\r\n@-webkit-keyframes spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes spin {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}","",{version:3,sources:["webpack://./src/components/Common/MobilePopup/style.css"],names:[],mappings:"AAAA,UAAU;;AAEV;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,MAAM;IACN,OAAO;IACP,uCAAuC;IACvC,aAAa;IACb,oBAAoB;IACpB,aAAa;IACb,qBAAqB;IACrB,uBAAuB;IACvB,gBAAgB;IAChB,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,UAAU;IACV,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI;QACI,kBAAkB;QAClB,aAAa;QACb,WAAW;QACX,UAAU;QACV,qBAAqB;QACrB,uBAAuB;IAC3B;AACJ;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,4CAA4C;IAC5C,eAAe;IACf,6BAA6B;IAC7B,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,8CAA8C;IAC9C,sCAAsC;AAC1C;;AAEA;IACI,kBAAkB;IAClB,6CAA6C;IAC7C,gBAAgB;IAChB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,2EAA2E;IAC3E,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;;AAGA,WAAW;;AAEX;IACI;QACI,+BAA+B;IACnC;IACA;QACI,iCAAiC;IACrC;AACJ;;AAEA;IACI;QACI,uBAAuB;IAC3B;IACA;QACI,yBAAyB;IAC7B;AACJ",sourcesContent:["/* popup */\r\n\r\n.popup_bg1 {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    /* background-color: var(--color_10); */\r\n    z-index: 1000;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    overflow: scroll;\r\n    background: var(--color_109);\r\n}\r\n\r\n.popup_container1 {\r\n    align-self: center;\r\n    display: grid;\r\n    height: 80%;\r\n    width: 40%;\r\n    align-content: center;\r\n    justify-content: center;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .popup_container1 {\r\n        align-self: center;\r\n        display: grid;\r\n        height: 80%;\r\n        width: 70%;\r\n        align-content: center;\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\n.popup1 {\r\n    position: relative;\r\n    z-index: 200;\r\n    border-radius: calc(0.1vw + 0.3vh + 0.1vmin);\r\n    margin: 0vh 5vw;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-width: calc(0.05vw + 0.15vh + 0.05vmin);\r\n    padding: calc(0.4vw + 1.2vh + 0.4vmin);\r\n}\r\n\r\n.popup_title1 {\r\n    text-align: center;\r\n    padding-bottom: calc(0.4vw + 1.2vh + 0.4vmin);\r\n    font-weight: 600;\r\n    font-size: var(--TS6);\r\n    align-self: center;\r\n}\r\n\r\n.popup_text1 {\r\n    font-size: var(--TS7);\r\n    text-align: center;\r\n    font-weight: 500;\r\n}\r\n\r\n.popup_button_container1 {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    padding-top: var(--TS5);\r\n    width: 100%;\r\n}\r\n\r\n.popup_cancel_button1 {\r\n    box-shadow: 0 4px 6px -2px rgb(0 0 0 / 12%), 0 2px 2px -1px rgb(0 0 0 / 5%);\r\n    cursor: pointer;\r\n}\r\n\r\n.mobile_mockup_wrapper {\r\n    position: relative;\r\n    display: flex;\r\n    height: 80vh;\r\n    width: 80vh;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.mobile_mockup {\r\n    position: absolute;\r\n    height: 100%;\r\n}\r\n\r\n\r\n/* Safari */\r\n\r\n@-webkit-keyframes spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes spin {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}"],sourceRoot:""}]),r.a=i}}]);
//# sourceMappingURL=23.860a23845288e0ced5cc.js.map