(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{497:function(t,n,e){"use strict";e.d(n,"a",(function(){return h}));var r=e(452),o=e(571),a=e(572),u=e(573),i=e(574);function c(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||p(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?n(c):Promise.resolve(c).then(r,o)}function f(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function u(t){s(a,r,o,u,i,"next",t)}function i(t){s(a,r,o,u,i,"throw",t)}u(void 0)}))}}function l(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],u=!0,i=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(i)throw o}}return a}(t,n)||p(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,n){if(t){if("string"==typeof t)return v(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?v(t,n):void 0}}function v(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var d=new r.a(!1),h=function(){var t=l(Object(r.b)(d),2),n=t[0],e=t[1];return{level:n,setlevel:e,c:function(){return f(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("").then((function(t){e(t.data.results)}));case 2:case"end":return t.stop()}}),t)})))()},loadlevelwithid:function(t){return f(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(o.a)(t).then((function(t){e(t.data.results),console.log(t.data.results)}));case 2:case"end":return n.stop()}}),n)})))()},postlevel:function(t){return f(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(a.a)(t).then((function(t){console.log(t),e((function(n){return[].concat(c(n),[t.data])}))})).catch((function(t){console.log(t)}));case 2:case"end":return n.stop()}}),n)})))()},editlevel:function(t,n){return f(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(u.a)(t,n).then((function(r){console.log(r),e((function(e){return e&&e.map((function(e){var r;return String(e.id)===String(t)?((r=e).l_level=n.l_level,r.instance_id=n.instance_id,r.l_icon=n.l_icon,r.l_qrcode=n.l_qrcode,r.l_title=n.l_title,r.l_stitle=n.l_stitle,r.l_body=n.l_body,r.l_bodytype=n.l_bodytype,r.l_bodyoptions=n.l_bodyoptions,r.locations=n.locations,r.l_media=n.l_media,r.l_misc=n.l_misc,r.completion_image=n.completion_image,r.clue_image=n.clue_image,r.l_qr_id=n.l_qr_id,r.unlock_after=n.unlock_after,r):e}))}))})).catch((function(t){console.log(t)}));case 2:case"end":return r.stop()}}),r)})))()},deletelevel:function(t){return f(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(i.a)(t).then((function(r){console.log(r),e(n&&n.filter((function(n){return n.id!==t})))})).catch((function(t){console.log(t)}));case 2:case"end":return r.stop()}}),r)})))()}}}},516:function(t,n,e){"use strict";e.d(n,"a",(function(){return h}));var r=e(452),o=e(555),a=e(556),u=e(557),i=e(558);function c(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||p(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?n(c):Promise.resolve(c).then(r,o)}function f(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function u(t){s(a,r,o,u,i,"next",t)}function i(t){s(a,r,o,u,i,"throw",t)}u(void 0)}))}}function l(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],u=!0,i=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(i)throw o}}return a}(t,n)||p(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,n){if(t){if("string"==typeof t)return v(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?v(t,n):void 0}}function v(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var d=new r.a(!1),h=function(){var t=l(Object(r.b)(d),2),n=t[0],e=t[1];return{logo:n,setlogo:e,loadlogo:function(){return f(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("").then((function(t){e(t.data.results)}));case 2:case"end":return t.stop()}}),t)})))()},loadlogowithcallback:function(t){return f(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(o.a)("").then((function(n){t(n.data.results),e(n.data.results)}));case 2:case"end":return n.stop()}}),n)})))()},loadlogowithid:function(t){return f(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(o.a)(t).then((function(t){e(t.data.results)}));case 2:case"end":return n.stop()}}),n)})))()},postlogo:function(t){return f(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.a)(t).then((function(t){e((function(n){return[].concat(c(n),[t.data])}))})).catch((function(t){console.log(t)}));case 2:case"end":return n.stop()}}),n)})))()},editlogo:function(t,n){return f(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(a.a)(t,n).then((function(r){e((function(e){return e&&e.map((function(e){var r;return String(e.id)===String(t)?((r=e).instance_id=n.instance_id,r.i_logo=n.i_logo,r.position=n.position,r.section=n.section,r):e}))}))})).catch((function(t){console.log(t)}));case 2:case"end":return r.stop()}}),r)})))()},deletelogo:function(t){return f(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(i.a)(t).then((function(r){e(n&&n.filter((function(n){return n.id!==t})))})).catch((function(t){console.log(t)}));case 2:case"end":return r.stop()}}),r)})))()}}}},555:function(t,n,e){"use strict";var r=e(447),o=e(448);function a(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?n(c):Promise.resolve(c).then(r,o)}var u=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("api/v1/appdata/instancelogo/info/?instance_id=".concat(n),{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var u=t.apply(n,e);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}();n.a=u},556:function(t,n,e){"use strict";var r=e(447),o=e(448);function a(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?n(c):Promise.resolve(c).then(r,o)}var u=function(){var t,n=(t=regeneratorRuntime.mark((function t(n,e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.put("api/v1/appdata/instance/logo/".concat(n,"/"),e,{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var u=t.apply(n,e);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))});return function(t,e){return n.apply(this,arguments)}}();n.a=u},557:function(t,n,e){"use strict";var r=e(447),o=e(448);function a(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?n(c):Promise.resolve(c).then(r,o)}var u=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.post("api/v1/appdata/instancelogo/info/",n,{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var u=t.apply(n,e);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}();n.a=u},558:function(t,n,e){"use strict";var r=e(447),o=e(448);function a(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?n(c):Promise.resolve(c).then(r,o)}var u=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.delete("api/v1/appdata/instance/logo/".concat(n,"/"),{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var u=t.apply(n,e);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}();n.a=u},559:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var r=e(452),o=e(560),a=e(561);function u(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?n(c):Promise.resolve(c).then(r,o)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){u(a,r,o,i,c,"next",t)}function c(t){u(a,r,o,i,c,"throw",t)}i(void 0)}))}}function c(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],u=!0,i=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(i)throw o}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return s(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var f=new r.a(!1),l=function(){var t=c(Object(r.b)(f),2),n=t[0],e=t[1];return{logoposition:n,setlogoposition:e,loadlogo_arrayposition:function(){return i(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)().then((function(t){e(t.data.results)}));case 2:case"end":return t.stop()}}),t)})))()},loadlogo_arrayposition_iid:function(t){return i(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(a.a)(t).then((function(t){e(t.data.results)}));case 2:case"end":return n.stop()}}),n)})))()}}}},560:function(t,n,e){"use strict";var r=e(447),o=e(448);function a(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?n(c):Promise.resolve(c).then(r,o)}var u=function(){var t,n=(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("api/v1/appdata/instance/logo/position/",{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var u=t.apply(n,e);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))});return function(){return n.apply(this,arguments)}}();n.a=u},561:function(t,n,e){"use strict";var r=e(447),o=e(448);function a(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?n(c):Promise.resolve(c).then(r,o)}var u=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("api/v1/appdata/instance/logo/position/".concat(n),{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var u=t.apply(n,e);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}();n.a=u},562:function(t,n,e){"use strict";var r=e(447),o=e(448);function a(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?n(c):Promise.resolve(c).then(r,o)}var u=function(){var t,n=(t=regeneratorRuntime.mark((function t(n,e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.put("api/v1/appdata/instance/".concat(n,"/"),e,{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var u=t.apply(n,e);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))});return function(t,e){return n.apply(this,arguments)}}();n.a=u},563:function(t,n,e){"use strict";var r=e(447),o=e(448);function a(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?n(c):Promise.resolve(c).then(r,o)}var u=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.post("api/v1/appdata/instance/info/",n,{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var u=t.apply(n,e);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}();n.a=u},564:function(t,n,e){"use strict";var r=e(447),o=e(448);function a(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?n(c):Promise.resolve(c).then(r,o)}var u=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.delete("api/v1/appdata/instance/".concat(n,"/"),{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var u=t.apply(n,e);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}();n.a=u},571:function(t,n,e){"use strict";var r=e(447),o=e(448);function a(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?n(c):Promise.resolve(c).then(r,o)}var u=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("api/v1/appdata/level/info/?instance_id=".concat(n),{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var u=t.apply(n,e);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}();n.a=u},572:function(t,n,e){"use strict";var r=e(447),o=e(448);function a(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?n(c):Promise.resolve(c).then(r,o)}var u=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.post("api/v1/appdata/level/info/",n,{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var u=t.apply(n,e);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}();n.a=u},573:function(t,n,e){"use strict";var r=e(447),o=e(448);function a(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?n(c):Promise.resolve(c).then(r,o)}var u=function(){var t,n=(t=regeneratorRuntime.mark((function t(n,e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.put("api/v1/appdata/level/".concat(n,"/"),e,{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var u=t.apply(n,e);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))});return function(t,e){return n.apply(this,arguments)}}();n.a=u},574:function(t,n,e){"use strict";var r=e(447),o=e(448);function a(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?n(c):Promise.resolve(c).then(r,o)}var u=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.delete("api/v1/appdata/level/".concat(n,"/"),{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var u=t.apply(n,e);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}();n.a=u},575:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(452),o=e(576);function a(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?n(c):Promise.resolve(c).then(r,o)}function u(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],u=!0,i=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(i)throw o}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var c=new r.a(!1),s=function(){var t=u(Object(r.b)(c),2),n=t[0],e=t[1];return{leveldetails:n,setleveldetails:e,loadleveldetails:function(){return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)().then((function(t){console.log(t.data.results),e(t.data.results)}));case 2:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var u=t.apply(n,e);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))})();var t}}}},576:function(t,n,e){"use strict";var r=e(447),o=e(448);function a(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void e(t)}i.done?n(c):Promise.resolve(c).then(r,o)}var u=function(){var t,n=(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("api/v1/appdata/level/list/",{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var u=t.apply(n,e);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))});return function(){return n.apply(this,arguments)}}();n.a=u}}]);
//# sourceMappingURL=25.59884e4f85938cd59e73.js.map