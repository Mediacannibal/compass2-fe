(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1140:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"initialize",(function(){return R})),n.d(r,"ga",(function(){return F})),n.d(r,"set",(function(){return K})),n.d(r,"send",(function(){return M})),n.d(r,"pageview",(function(){return V})),n.d(r,"modalview",(function(){return B})),n.d(r,"timing",(function(){return Z})),n.d(r,"event",(function(){return $})),n.d(r,"exception",(function(){return U})),n.d(r,"plugin",(function(){return H})),n.d(r,"outboundLink",(function(){return Q})),n.d(r,"testModeAPI",(function(){return W})),n.d(r,"default",(function(){return X}));var o=n(1),a=n.n(o),i=n(54),c=n.n(i);function l(e){console.warn("[react-ga]",e)}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?d(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){var e,n;p(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return m(d(n=b(this,(e=y(t)).call.apply(e,[this].concat(o)))),"handleClick",(function(e){var r=n.props,o=r.target,a=r.eventLabel,i=r.to,c=r.onClick,l=r.trackerNames,u={label:a},s="_blank"!==o,f=!(e.ctrlKey||e.shiftKey||e.metaKey||1===e.button);s&&f?(e.preventDefault(),t.trackLink(u,(function(){window.location.href=i}),l)):t.trackLink(u,(function(){}),l),c&&c(e)})),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.to,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},f(e,["to"]),{href:t,onClick:this.handleClick});return"_blank"===this.props.target&&(n.rel="noopener noreferrer"),delete n.eventLabel,delete n.trackerNames,a.a.createElement("a",n)}}])&&g(n.prototype,r),o&&g(n,o),t}(o.Component);function O(e){return e.replace(/^\s+|\s+$/g,"")}m(h,"trackLink",(function(){l("ga tracking not enabled")})),m(h,"propTypes",{eventLabel:c.a.string.isRequired,target:c.a.string,to:c.a.string,onClick:c.a.func,trackerNames:c.a.arrayOf(c.a.string)}),m(h,"defaultProps",{target:null,to:null,onClick:null,trackerNames:null});var w=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function j(e,t){return function(e){return"string"==typeof e&&-1!==e.indexOf("@")}(e)?(l("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):t?O(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(w)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})):e}function k(e){console.info("[react-ga]",e)}var P=[],A={calls:P,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];P.push([].concat(t))},resetCalls:function(){P.length=0}};function S(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var T="undefined"==typeof window||"undefined"==typeof document,q=!1,C=!0,L=!1,I=!0,_=function(){var e;return L?A.ga.apply(A,arguments):!T&&(window.ga?(e=window).ga.apply(e,arguments):l("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function J(e){return j(e,C)}function z(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];"string"==typeof o?(!I&&Array.isArray(e)||_.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){_.apply(void 0,N(["".concat(e,".").concat(o)].concat(n.slice(1))))}))):l("ga command must be a string")}function G(e,t){e?t&&(t.debug&&!0===t.debug&&(q=!0),!1===t.titleCase&&(C=!1),t.useExistingGa)||(t&&t.gaOptions?_("create",e,t.gaOptions):_("create",e,"auto")):l("gaTrackingID is required in initialize()")}function R(e,t){if(t&&!0===t.testMode)L=!0;else{if(T)return!1;t&&!0===t.standardImplementation||function(e){var t,n,r,o,a,i,c,l="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?l=e.gaAddress:e&&e.debug&&(l="https://www.google-analytics.com/analytics_debug.js"),t=window,n=document,r="script",o=l,a="ga",t.GoogleAnalyticsObject=a,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,i=n.createElement(r),c=n.getElementsByTagName(r)[0],i.async=1,i.src=o,c.parentNode.insertBefore(i,c)}(t)}return I=!t||"boolean"!=typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach((function(e){"object"===x(e)?G(e.trackingId,e):l("All configs must be an object")})):G(e,t),!0}function F(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(_.apply(void 0,t),q&&(k("called ga('arguments');"),k("with arguments: ".concat(JSON.stringify(t))))),window.ga}function K(e,t){e?"object"===x(e)?(0===Object.keys(e).length&&l("empty `fieldsObject` given to .set()"),z(t,"set",e),q&&(k("called ga('set', fieldsObject);"),k("with fieldsObject: ".concat(JSON.stringify(e))))):l("Expected `fieldsObject` arg to be an Object"):l("`fieldsObject` is required in .set()")}function M(e,t){z(t,"send",e),q&&(k("called ga('send', fieldObject);"),k("with fieldObject: ".concat(JSON.stringify(e))),k("with trackers: ".concat(JSON.stringify(t))))}function V(e,t,n){if(e){var r=O(e);if(""!==r){var o={};if(n&&(o.title=n),z(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),q){k("called ga('send', 'pageview', path);");var a="";n&&(a=" and title: ".concat(n)),k("with path: ".concat(r).concat(a))}}else l("path cannot be an empty string in .pageview()")}else l("path is required in .pageview()")}function B(e,t){if(e){var n,r="/"===(n=O(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);z(t,"send","pageview",o),q&&(k("called ga('send', 'pageview', path);"),k("with path: ".concat(o)))}else l("modalName cannot be an empty string or a single / in .modalview()")}else l("modalName is required in .modalview(modalName)")}function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,a=arguments.length>1?arguments[1]:void 0;if(t&&n&&r&&"number"==typeof r){var i={hitType:"timing",timingCategory:J(t),timingVar:J(n),timingValue:r};o&&(i.timingLabel=J(o)),M(i,a)}else l("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,a=e.nonInteraction,i=e.transport,c=S(e,["category","action","label","value","nonInteraction","transport"]),u=arguments.length>1?arguments[1]:void 0;if(t&&n){var s={hitType:"event",eventCategory:J(t),eventAction:J(n)};r&&(s.eventLabel=J(r)),void 0!==o&&("number"!=typeof o?l("Expected `args.value` arg to be a Number."):s.eventValue=o),void 0!==a&&("boolean"!=typeof a?l("`args.nonInteraction` must be a boolean."):s.nonInteraction=a),void 0!==i&&("string"!=typeof i?l("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(i)&&l("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),s.transport=i)),Object.keys(c).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){s[e]=c[e]})),Object.keys(c).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){s[e]=c[e]})),M(s,u)}else l("args.category AND args.action are required in event()")}function U(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=J(n)),void 0!==r&&("boolean"!=typeof r?l("`args.fatal` must be a boolean."):o.exFatal=r),M(o,t)}var H={require:function(e,t,n){if(e){var r=O(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==x(t))return void l("Expected `options` arg to be an Object");0===Object.keys(t).length&&l("Empty `options` given to .require()"),F(o,r,t),q&&k("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else F(o,r),q&&k("called ga('require', '".concat(r,"');"))}else l("`name` cannot be an empty string in .require()")}else l("`name` is required in .require()")},execute:function(e,t){var n,r;if(1==(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!=typeof e)l("Expected `pluginName` arg to be a String.");else if("string"!=typeof t)l("Expected `action` arg to be a String.");else{var o="".concat(e,":").concat(t);n=n||null,r&&n?(F(o,r,n),q&&(k("called ga('".concat(o,"');")),k('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(F(o,n),q&&(k("called ga('".concat(o,"');")),k("with payload: ".concat(JSON.stringify(n))))):(F(o),q&&k("called ga('".concat(o,"');")))}}};function Q(e,t,n){if("function"==typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:J(e.label)},o=!1,a=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(a),o||t()},M(r,n)}else l("args.label is required in outboundLink()");else l("hitCallback function is required")}var W=A,X={initialize:R,ga:F,set:K,send:M,pageview:V,modalview:B,timing:Z,event:$,exception:U,plugin:H,outboundLink:Q,testModeAPI:A};function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}h.origTrackLink=h.trackLink,h.trackLink=Q;var te=h;t.a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(n,!0).forEach((function(t){ee(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{OutboundLink:te})}}]);
//# sourceMappingURL=37.779db3d0186f5242c5f5.js.map