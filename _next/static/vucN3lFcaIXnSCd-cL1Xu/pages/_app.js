(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r=c(n("q1tI")),a=c(n("Xuae")),o=n("lwAK"),i=n("FYa8"),u=n("/0+H");function c(e){return e&&e.__esModule?e:{default:e}}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var l=f[u];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var s=a.props[l],d=r[l]||new Set;d.has(s)?o=!1:(d.add(s),r[l]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,a.default)();function h(e){var t=e.children;return(r.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:(0,u.isInAmpMode)(e)},t)}))})))}h.rewind=p.rewind;var v=h;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),o=n("W8MJ"),i=n("7W2i"),u=n("a1gu"),c=n("Nsbk"),l=n("RIqP");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(u){i(l,u);var c=s(l);function l(e){var o;return r(this,l),o=c.call(this,e),d&&(t.add(a(o)),n(a(o))),o}return o(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(f.Component))}},cha2:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n("vOnD"),o=n("8Kt/"),i=n.n(o),u=n("JSsD"),c=n("je2I"),l=r.createElement;function s(){var e,t,n=(e=["\n\n  body {\n    margin: 0px;\n    font-family: Helvetica, Arial, sans-serif;\n    font-weight: 400;\n    \n    background-color: #222;\n    background-image: url('","');\n    background-position: top;\n    background-repeat: no-repeat;\n    background-size: cover;\n    \n    overflow: hidden;\n  }\n  \n  #__next {\n    overflow: auto;\n    height: 100vh;\n  }\n  \n  a {\n    text-decoration: inherit;\n  }\n  \n  a:-webkit-any-link {\n    color: inherit;\n  }\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return s=function(){return n},n}var f=Object(a.b)(s(),Object(c.a)("/spooky.jpg")),d=(t.default=function(e){var t=e.Component,n=e.pageProps,r=e.router;return console.log("/shadowlands-cheatsheet"),l(a.a,{theme:u.a},l(f,null),l(i.a,null,l("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(r.pageLoader?r.pageLoader.assetPrefix:"","/apple-touch-icon.png")}),l("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(r.pageLoader?r.pageLoader.assetPrefix:"","/favicon-32x32.png")}),l("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(r.pageLoader?r.pageLoader.assetPrefix:"","/favicon-16x16.png")}),l("link",{rel:"manifest",href:"".concat(r.pageLoader?r.pageLoader.assetPrefix:"","/site.webmanifest")}),l("link",{href:"https://fonts.googleapis.com/css2?family=Bungee&family=Open+Sans:wght@300;400;600;700;800&family=Stalinist+One&display=swap",rel:"stylesheet",key:"google-fonts"}),l("title",null,"shadowlands tools")),l(d,null,l(t,n)))},a.c.div.withConfig({displayName:"_app__Content",componentId:"sc-1u6es4k-0"})(["overflow-x:auto;"]))},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a}},[[0,0,2,1,3]]]);