(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{553:function(e,r,t){"use strict";t.d(r,"a",(function(){return x}));var n=t(12),o=t(3),a=t(15);function u(e,r,t,n,o,a,u){try{var i=e[a](u),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,o)}var i=function(){var e,r=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("user/list/",{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})),function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function i(e){u(a,n,o,i,c,"next",e)}function c(e){u(a,n,o,i,c,"throw",e)}i(void 0)}))});return function(){return r.apply(this,arguments)}}();function c(e,r,t,n,o,a,u){try{var i=e[a](u),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,o)}var s=function(){var e,r=(e=regeneratorRuntime.mark((function e(r,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.put("user/edit_profile/".concat(r,"/"),t,{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})),function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function u(e){c(a,n,o,u,i,"next",e)}function i(e){c(a,n,o,u,i,"throw",e)}u(void 0)}))});return function(e,t){return r.apply(this,arguments)}}();function f(e,r,t,n,o,a,u){try{var i=e[a](u),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,o)}var l=function(){var e,r=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("user/profile/",{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})),function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function u(e){f(a,n,o,u,i,"next",e)}function i(e){f(a,n,o,u,i,"throw",e)}u(void 0)}))});return function(){return r.apply(this,arguments)}}();function p(e,r,t,n,o,a,u){try{var i=e[a](u),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,o)}var d=function(){var e,r=(e=regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.put("user/profile/edit/",r,{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})),function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function u(e){p(a,n,o,u,i,"next",e)}function i(e){p(a,n,o,u,i,"throw",e)}u(void 0)}))});return function(e){return r.apply(this,arguments)}}(),h=t(14);function m(e,r,t,n,o,a,u){try{var i=e[a](u),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,o)}function v(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function u(e){m(a,n,o,u,i,"next",e)}function i(e){m(a,n,o,u,i,"throw",e)}u(void 0)}))}}function g(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,o,a=[],u=!0,i=!1;try{for(t=t.call(e);!(u=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);u=!0);}catch(e){i=!0,o=e}finally{try{u||null==t.return||t.return()}finally{if(i)throw o}}return a}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return w(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var y=new n.a(!1),b=new n.a("undefined"!=typeof localStorage&&(!!localStorage.getItem("UserDetails")&&JSON.parse(String(localStorage.getItem("UserDetails"))))),x=function(){var e=g(Object(n.b)(y),2),r=e[0],t=e[1],o=g(Object(n.b)(b),2),a=o[0],u=o[1];return{user:r,setuser:t,selfuser:a,setselfuser:u,loaduser:function(){return v(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().then((function(e){t(e.data),console.log("selfuser selfuser selfuser :",e.data)})).catch((function(e){console.log(e),Object(h.e)(e,e.response)}));case 2:case"end":return e.stop()}}),e)})))()},edituser:function(e,r){return v(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s(e,r).then((function(n){t((function(t){return t&&t.map((function(t){var n;return String(t.id)===String(e)?((n=t).image=r.image,n.firstname=r.firstname,n.lastname=r.lastname,n.email=r.email,n.address=r.address,n.dob=r.dob,n.user_type=r.user_type,n.gender=r.gender,n.auth_type=r.auth_type,n.photo_url=r.photo_url,n.dial_code=r.dial_code,n.phone=r.phone,n):t}))}))})).catch((function(e){console.log(e),Object(h.e)(e,e.response)}));case 2:case"end":return n.stop()}}),n)})))()},loadcurrentuser:function(){return v(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().then((function(e){console.log("currentuser :",e.data.result),u(e.data.result)})).catch((function(e){console.log(e),Object(h.e)(e,e.response)}));case 2:case"end":return e.stop()}}),e)})))()},editprofileuser:function(e){return v(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d(e).then((function(r){console.log("edit >>> :",e,r),u((function(r){var t=r;return t.firstname=e.firstname,t.lastname=e.lastname,t.email=e.email,t.image=e.image,t.photo_url=e.photo_url,t.dob=e.dob,t.gender=e.gender,t.address=e.address,t.dial_code=e.dial_code,t.phone=e.phone,localStorage.setItem("UserDetails",JSON.stringify(t)),t}))})).catch((function(e){console.log(e),Object(h.e)(e,e.response)}));case 2:case"end":return r.stop()}}),r)})))()}}}}}]);
//# sourceMappingURL=0.465c30e53c630bb2bdfd.js.map