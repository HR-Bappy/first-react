(this.webpackJsonpfirstws=this.webpackJsonpfirstws||[]).push([[0],{103:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(181),i=n(65);test("renders learn react link",(function(){var e=(0,Object(o.a)(a.a.createElement(i.default,null)).getByText)(/learn react/i);expect(e).toBeInTheDocument()}))},149:function(e,t,n){"use strict";n.r(t);n(465)},186:function(e,t,n){e.exports=n(43)},190:function(e,t,n){var r={"./":43,"./App":65,"./App.css":105,"./App.js":65,"./App.test":106,"./App.test.js":106,"./Avatar":64,"./Avatar.css":69,"./Avatar.js":64,"./AvatarList":28,"./AvatarList.js":28,"./index":43,"./index.css":103,"./index.js":43,"./logo.svg":98,"./nayeem.jpg":462,"./neela.jpg":463,"./rakhi.jpg":464,"./serviceWorker":66,"./serviceWorker.js":66,"./setupTests":149,"./setupTests.js":149,"./shammah.jpg":604};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=190},28:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r);n(104),n(69);t.default=function(e){return a.a.createElement("div",{className:"avatarstyle bg-light-purple ma4 dib pa4 tc grow text-white"},a.a.createElement("img",{alt:"avatar",src:n(190)("./"+e.im)}),a.a.createElement("h1",null,e.name),a.a.createElement("p",null,e.work))}},43:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(16),i=n.n(o),c=(n(103),n(64)),s=n(66);i.a.render(a.a.createElement(c.default,null),document.getElementById("root")),s.unregister()},462:function(e,t,n){e.exports=n.p+"static/media/nayeem.18ff58ed.jpg"},463:function(e,t,n){e.exports=n.p+"static/media/neela.71325a7c.jpg"},464:function(e,t,n){e.exports=n.p+"static/media/rakhi.8925b4b5.jpg"},604:function(e,t,n){e.exports=n.p+"static/media/shammah.197a7891.jpg"},64:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(28);n(104),n(69);t.default=function(e){return a.a.createElement("div",null,a.a.createElement("h1",{className:"tc"},"Welcome to avatar world"),a.a.createElement("div",null,a.a.createElement(o.default,{name:"Neela",work:"web developer",im:"neela.jpg"}),a.a.createElement(o.default,{name:"Nayeem",work:"software developer",im:"nayeem.jpg"}),a.a.createElement(o.default,{name:"Rakhi",work:"web developer",im:"rakhi.jpg"}),a.a.createElement(o.default,{name:"Shammah",work:"web developer",im:"shammah.jpg"})),a.a.createElement("button",{className:"btn btn-border-pop"},"subscribe"))}},65:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(98),i=n.n(o);n(105);t.default=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Edit ",a.a.createElement("code",null,"src/App.js")," and save to reload."),a.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}},66:function(e,t,n){"use strict";n.r(t),n.d(t,"register",(function(){return a})),n.d(t,"unregister",(function(){return i}));var r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function a(e){if("serviceWorker"in navigator){if(new URL("/first-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/first-react","/service-worker.js");r?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(t,e)}))}}function o(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function i(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},69:function(e,t,n){},98:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[186,1,2]]]);
//# sourceMappingURL=main.744c3c3b.chunk.js.map