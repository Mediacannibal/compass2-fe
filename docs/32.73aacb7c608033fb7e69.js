(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1128:function(e,t,n){"use strict";var a=n(28),o=n.n(a),r=n(29),i=n.n(r)()(o.a);i.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.a=i},1129:function(e,t,n){e.exports=n.p+"05f46f3334b6a7e92a0c75aec2185156.svg"},1130:function(e,t,n){e.exports=n.p+"3d160a5481135a48df8f17bde6bd7f89.svg"},1154:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(27),i=n.n(r),l=n(1128),s={insert:"head",singleton:!1},c=(i()(l.a,s),l.a.locals,n(118)),u=n(1129),m=n(1130),p=n(572),d=n(695),f=n.n(d),g=n(14),v=n(18),b=n(1133),h=n(91),_=n(560),y=n(175),E=n(176),N=n(44),w=n(174);function S(e,t,n,a,o,r,i){try{var l=e[r](i),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(a,o)}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,o,r=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!t||r.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.default=function(){var e=Object(v.f)(),t=Object(N.a)(),n=t.colourObj,r=t.loaddefaultcolor,i=Object(h.a)(),l=i.auth,s=i.setAuth,j=Object(_.a)(),k=j.selfuser,I=j.setselfuser,x=O(Object(a.useState)(!1),2),A=x[0],M=x[1],T=O(Object(a.useState)(""),2),D=T[0],J=T[1];Object(a.useEffect)((function(){l?"SUPER ADMIN"!==(null==k?void 0:k.user_type)?e.push("/dashboard"):e.push("/"):r(),b.a.pageview(window.location.pathname+window.location.search)}),[]);var C=function(){var t,n=(t=regeneratorRuntime.mark((function t(n,a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:200===n.status?(console.log("response "+JSON.stringify(n)),localStorage.setItem("AuthToken",JSON.stringify(n.data.results.token)),localStorage.setItem("UserDetails",JSON.stringify(n.data.results.user_details)),localStorage.setItem("UsedSocialLoginMethod","true"),s(n.data.results.token),I(n.data.results.user_details),e.push("/Dashboard")):(console.log("error "+JSON.stringify(n)),console.log("error "+JSON.stringify(a)));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(a,o){var r=t.apply(e,n);function i(e){S(r,a,o,i,l,"next",e)}function l(e){S(r,a,o,i,l,"throw",e)}i(void 0)}))});return function(e,t){return n.apply(this,arguments)}}(),L=function(e){return A?e+" fade_out":e+" fade_in"};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:L("login_page")},o.a.createElement(y.a,{screen:"login"}),o.a.createElement("div",{className:L("login_wrapper")},o.a.createElement("div",{className:"login_top_container"},o.a.createElement("img",{className:"login_menu_logo",src:c})),o.a.createElement("div",{className:"loginTitle_Text"},"ADMIN PANNEL"),o.a.createElement("div",{className:"login_form_wrapper"},o.a.createElement("div",{className:"login_form_bg"}),o.a.createElement("div",{className:"loginDescription_Text",style:{textDecorationColor:n.color_m2}},"Login or Sign Up with any of the following:"),o.a.createElement("div",{className:" login_popupformcontainer1"},o.a.createElement("div",{className:"SMlogin_button_container"},o.a.createElement(p.GoogleLogin,{clientId:"581422038025-rte3a06d7kumasu887n64uikerfigmiv.apps.googleusercontent.com",render:function(e){return o.a.createElement("button",{className:"login_SMbutton",onClick:e.onClick,disabled:e.disabled},o.a.createElement("img",{src:u,className:"login_SMicon"}),o.a.createElement("div",{className:"login_buttontext1"},"Continue with Google"))},buttonText:"Login",onSuccess:function(t){console.log(t);var n=new FormData,a=t.profileObj;n.append("lastname",a.familyName),n.append("firstname",a.givenName),n.append("photo_url",a.imageUrl),n.append("auth_provider","google"),n.append("email",a.email),n.append("username",a.googleId),localStorage.setItem("Bearer",JSON.stringify(t.accessToken)),Object(g.a)(C,n),M(!0),setTimeout((function(){e.push("/dashboard")}),290)},onFailure:function(e){J(e.error),console.log(e)},cookiePolicy:"single_host_origin"})),o.a.createElement("div",{className:"SMlogin_button_container"},o.a.createElement(f.a,{appId:"494516388401593"},o.a.createElement(d.Login,{scope:"email",onResponse:function(t){console.log(t.profile),console.log(Response);var n=new FormData,a=t.profile;n.append("lastname",a.first_name),n.append("firstname",a.last_name),n.append("photo_url",""),n.append("auth_provider","fb"),n.append("email",a.email),n.append("username",a.id),Object(g.a)(C,n),M(!0),setTimeout((function(){e.push("/dashboard")}),290)},onError:function(e){console.log(e)}},o.a.createElement("button",{className:"login_SMbutton"},o.a.createElement("img",{src:m,className:"login_SMicon"}),o.a.createElement("div",{className:"login_buttontext1"},"Continue with Facebook")))))))),o.a.createElement(w.a,{googlecookies:D}),o.a.createElement(E.a,{overflow:"hidden"})))}}}]);
//# sourceMappingURL=32.73aacb7c608033fb7e69.js.map