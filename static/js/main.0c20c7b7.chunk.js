(this["webpackJsonpchat-cover"]=this["webpackJsonpchat-cover"]||[]).push([[0],{52:function(e,t,n){e.exports=n(94)},57:function(e,t,n){},58:function(e,t,n){},62:function(e,t){},64:function(e,t){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(46),o=n.n(c),i=(n(57),n(4)),l=n(2),s=(n(58),n(25)),u=n(11),m=n(1),f=n.n(m),p=n(7),d=n(47),E=n(29),y=function(){if(!localStorage.getItem("CONFIG")){localStorage.setItem("CONFIG",JSON.stringify({currentlyPlayingPrefix:"Currently playing",includeCurrentlyPlaying:!1,color1:"rgb(155,31,31)",color2:"rgb(194,76,76)",nickname:"Nickname",server:"Server",spotifyToken:""}))}return JSON.parse(localStorage.getItem("CONFIG"))},v=function(e){localStorage.setItem("CONFIG",JSON.stringify(e))},b=n(26),g=n.n(b),O=function(e){var t=Object(a.useState)({is_playing:!1}),n=Object(l.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),s=Object(l.a)(i,2),u=s[0],m=s[1];Object(a.useEffect)((function(){u||g.a.get("https://evig-nedtur.herokuapp.com/session/".concat(e.token)).then((function(e){m(e.data.SpotifyToken)}))}),[e.token,u]);var y=function(e){return c&&(c.item&&e.data&&e.data.item&&c.item.name!==e.data.item.name||c.is_playing!==e.data.is_playing)},v=function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://api.spotify.com/v1/me/player/currently-playing",{headers:{Authorization:"Bearer ".concat(u)}});case 2:t=e.sent,y(t)&&o(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return function(e,t,n){var r=Object(a.useRef)(e);Object(a.useEffect)((function(){r.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){r.current()}),t);return function(){return clearInterval(e)}}}),[t,n])}((function(){v().catch((function(e){console.error(e)}))}),5e3),r.a.createElement(E.a,null,c&&c.is_playing&&r.a.createElement(E.b.div,{initial:{translateY:"-100%"},animate:{translateY:"0%"},exit:{translateY:"-100%"},className:"currently-playing",style:{width:"calc((100% - ".concat(e.width,"px) - 100px)")}},r.a.createElement(d.a,null,c.is_playing&&c.item&&c.item.name&&c.item.artists&&"Curently playing: ".concat(c.item.artists.map((function(e){return e.name})).join(", ")," - ").concat(c.item.name))))},h=n(51);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var N=function(){var e="".concat(window.location.protocol+"//"+window.location.host+window.location.pathname,"#/spotify-token"),t=Object(h.a)(),n=t.register,c=t.handleSubmit,o=Object(a.useState)(y()),s=Object(l.a)(o,2),u=s[0],m=s[1];return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"logo"}),r.a.createElement("div",{className:"sidebar-background"}),r.a.createElement("nav",null,!y().spotifyToken&&r.a.createElement("a",{href:"https://evig-nedtur.herokuapp.com/login?returnurl=".concat(encodeURIComponent(e)),className:"button spotify"},"Login med Spotify"),u&&u.server&&u.nickname&&r.a.createElement("a",{href:"#/".concat(u.server.toLowerCase(),"/").concat(u.nickname.toLowerCase(),"/").concat(u.spotifyToken),className:"button"},"G\xe5 til overlay"))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Config"),r.a.createElement("div",{className:"card-content"},r.a.createElement("form",{onSubmit:c((function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{includeCurrentlyPlaying:"true"===e.includeCurrentlyPlaying});m(t),v(t)}))},r.a.createElement("div",{className:"card-group"},r.a.createElement("div",{className:"formgroup"},r.a.createElement("label",{htmlFor:"server"},"Server"),r.a.createElement("input",{type:"text",defaultValue:u.server,name:"server",id:"server",ref:n})),r.a.createElement("div",{className:"formgroup"},r.a.createElement("label",{htmlFor:"nickname"},"Nickname"),r.a.createElement("input",{type:"text",defaultValue:u.nickname,name:"nickname",id:"nickname",ref:n}))),r.a.createElement("div",{className:"card-group"},u.spotifyToken&&r.a.createElement("div",{className:"formgroup"},r.a.createElement("label",{htmlFor:"spotifyToken"},"Spotify token"),r.a.createElement("input",{type:"text",defaultValue:u.spotifyToken,name:"spotifyToken",id:"spotifyToken",ref:n,disabled:!0}))),r.a.createElement("button",{className:"green",type:"submit"},"Lagre"))))))},j=function(e,t,n){e&&localStorage.setItem("ACCESS_TOKEN",e),t&&localStorage.setItem("EXPIRES_IN",t),n&&localStorage.setItem("TOKEN_TYPE",n)},w=function(e){return j(e.ACCESS_TOKEN,e.EXPIRES_IN,e.TOKEN_TYPE),r.a.createElement(u.a,{to:"/admin"})};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=function(e){var t=window.location.hash.match(new RegExp(e+"=([^&]*)"));return t?t[1]:null},C=function(){var e=Object(u.g)(),t=e.server,n=e.nickname,c=e.token,o=Object(a.useRef)(null),i=Object(a.useState)(0),s=Object(l.a)(i,2),m=s[0],f=s[1];return Object(a.useEffect)((function(){var e=o&&o.current&&o.current.offsetWidth?o.current.offsetWidth:0;f(e)}),[o]),v(P({},y(),{server:t,nickname:n})),r.a.createElement("div",{className:"cover full-height"},r.a.createElement("div",{className:"top"},r.a.createElement("div",{className:"text",ref:o},r.a.createElement("span",null,t," / ",n)),r.a.createElement(O,{width:m,token:c})),r.a.createElement("div",{className:"area"}))},T=function(){var e=Object(u.g)().token;return v(P({},y(),{spotifyToken:e||""})),r.a.createElement(u.a,{to:"/admin"})},_=function(){var e=I("access_token"),t=I("expires_in"),n=I("token_type");return r.a.createElement(s.a,{basename:"/"},r.a.createElement("div",{className:"App full-height"},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,children:r.a.createElement(N,null)}),r.a.createElement(u.b,{path:"/admin",children:r.a.createElement(N,null)}),r.a.createElement(u.b,{path:"/spotify-token/:token",children:r.a.createElement(T,null)}),r.a.createElement(u.b,{path:"/:callback",exact:!0,children:r.a.createElement(w,{ACCESS_TOKEN:e,EXPIRES_IN:t,TOKEN_TYPE:n})}),r.a.createElement(u.b,{path:"/:server/:nickname/:token?",children:r.a.createElement(C,null)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[52,1,2]]]);
//# sourceMappingURL=main.0c20c7b7.chunk.js.map