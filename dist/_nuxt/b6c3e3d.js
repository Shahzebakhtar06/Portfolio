(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{315:function(t,e,r){"use strict";var o=r(9),n=r(667),l=r.n(n),c=r(666),d=r(316),f=r.n(d),m=r(673);window.ScrollMagic=f.a,window.Gsap=m.a,o.default.use(c.a),o.default.use(f.a),o.default.use(l.a)},370:function(t,e,r){var content=r(750);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("38288fad",content,!0,{sourceMap:!1})},371:function(t,e,r){var content=r(752);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("414ef528",content,!0,{sourceMap:!1})},372:function(t,e,r){var content=r(754);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("5025e491",content,!0,{sourceMap:!1})},670:function(t,e,r){"use strict";var o=r(671),n=r(672),l={components:{theHeader:o.default,theFooter:n.default},data:function(){return{scroll:0,scrollProgress:0}},mounted:function(){var t=this;document.addEventListener("scroll",(function(){return t.getScroll()}))},methods:{getScroll:function(){var content=document.getElementById("__layout"),t=window.scrollY;this.scroll=t;var e=window.scrollY/(content.scrollHeight-window.innerHeight)*100;this.scrollProgress=e},scrollToTop:function(){document.documentElement.scrollTop=0}}},c=(r(753),r(51)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("a-layout",[e("a-layout-header",[e("the-header"),t._v(" "),e("div",{attrs:{id:"scrollProgressBar"}},[e("div",{staticClass:"progressBar",style:"width:".concat(t.scrollProgress,"%;")})])],1),t._v(" "),e("a-layout-content",[e("div",{staticClass:"body-wrapper container"},[e("Nuxt")],1)]),t._v(" "),e("a-layout-footer",[t.scroll>=200?e("div",{staticClass:"scroll-button"},[e("a-button",{attrs:{shape:"circle"},on:{click:t.scrollToTop}},[e("i",{staticClass:"fa-solid fa-up-long"})])],1):t._e(),t._v(" "),e("the-footer")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},671:function(t,e,r){"use strict";r.r(e);var o={methods:{changeThemeMode:function(t){var e=document.querySelector(":root");t?(e.style.setProperty("--bg-primary-color","#efefef"),e.style.setProperty("--text-black-color","#000000")):(e.style.setProperty("--bg-primary-color","#000000"),e.style.setProperty("--text-black-color","#ffffff")),console.log()}}},n=(r(749),r(51)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container",attrs:{id:"main-header-wrapper"}},[e("div",{staticClass:"Header-title"},[e("div",{staticClass:"logo"},[t._v("Portfolio")]),t._v(" "),e("div",{staticClass:"actions"},[e("a-switch",{attrs:{"default-checked":""},on:{change:t.changeThemeMode}},[e("span",{attrs:{slot:"checkedChildren"},slot:"checkedChildren"},[e("i",{staticClass:"fa-regular fa-moon"})]),t._v(" "),e("span",{attrs:{slot:"unCheckedChildren"},slot:"unCheckedChildren"},[e("i",{staticClass:"fa-regular fa-sun"})])])],1)]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"menu"},[e("ul",[e("li",[e("a",{attrs:{href:"#hero-section"}},[t._v("Home")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#about-me"}},[t._v("About")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#my-skill"}},[t._v("Skill")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#my-work"}},[t._v("Portfolio")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#contact-info"}},[t._v("Contact")])])])])}],!1,null,null,null);e.default=component.exports},672:function(t,e,r){"use strict";r.r(e);var o={},n=(r(751),r(51)),component=Object(n.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container",attrs:{id:"footer"}},[e("div",{staticClass:"logo"},[t._v("Portfolio")]),t._v(" "),e("div",{staticClass:"copyright"},[t._v("@2023 Powered by Shahzeb Akhtar")])])}],!1,null,null,null);e.default=component.exports},679:function(t,e,r){r(680),t.exports=r(681)},745:function(t,e,r){var content=r(746);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("2c6794ac",content,!0,{sourceMap:!1})},746:function(t,e,r){var o=r(66)((function(i){return i[1]}));o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap);"]),o.push([t.i,'.ant-layout{background:var(--bg-primary-color)}.ant-layout .ant-layout-header{position:sticky;top:0;z-index:999}.ant-layout .ant-layout-footer{background:transparent;border:.1rem solid var(--box-shadow-color);border-left:none;border-right:none;padding:2rem 4rem}.ant-tabs-nav{background:#fff;border-radius:3.2rem;box-shadow:0 0 .6rem .1rem #d1cbcb;margin:1rem;padding:.2rem}.ant-tabs-nav .ant-tabs-tab:last-child{margin-right:.3rem!important}.ant-tabs-nav .ant-tabs-tab{margin:.3rem;padding:.5rem 2rem;transition:none}.ant-tabs-nav .ant-tabs-tab:active,.ant-tabs-nav .ant-tabs-tab:focus,.ant-tabs-nav .ant-tabs-tab:hover{color:currentColor}.ant-tabs-nav .ant-tabs-tab-active{background:var(--theme-primary-color);border-radius:3rem;color:#fff}.ant-tabs-nav .ant-tabs-tab-active:hover{color:#fff}.ant-tabs-nav .ant-tabs-ink-bar{display:none!important}.ant-switch{background-color:#000!important;color:#fff;line-height:1.5!important}.ant-switch,.ant-switch.ant-switch-checked{border:1px solid #fff;transition:none}.ant-switch.ant-switch-checked:after{content:"\\f185";margin-left:-2px}.ant-switch.ant-switch-checked:after,.ant-switch:after{font-family:"Font Awesome 5 Free";font-size:12px;font-weight:900}.ant-switch:after{align-items:center;background-color:transparent!important;border:2px solid #fff;content:"\\f186";display:flex;justify-content:center;line-height:normal}.ant-switch .ant-switch-inner{color:#fff}.ant-notification{top:10rem!important;z-index:9999}.title{color:var(--text-secondary-color);position:relative}.title .text-line{background-color:var(--text-secondary-color);display:flex;height:90%;justify-content:center;width:.12rem}.title .text-line .text{background:var(--bg-primary-color);left:-4.2rem;padding:0 1rem;position:absolute;text-transform:uppercase;top:6.8rem;transform:rotate(-90deg);width:-moz-max-content;width:max-content}.title-h{color:var(--text-secondary-color);position:relative}.title-h .text-line{align-items:center;background-color:var(--text-secondary-color);display:flex;height:.1rem;justify-content:center;width:100%}.title-h .text-line .text{background:var(--bg-primary-color);padding:0 1rem;position:absolute;text-transform:uppercase;top:-1.5rem;width:-moz-max-content;width:max-content}.fit-width{max-width:-moz-fit-content;max-width:fit-content}.pt-7{padding-top:7rem}.description{margin:0 auto;padding:2rem;text-align:center}.description h1{color:var(--text-black-color);margin-bottom:3rem;text-transform:capitalize}.description p{margin:1rem;padding-left:1rem}@media screen and (max-width:768px){.col,.col-5,.col-6{text-align:center;width:100%!important}.title{position:absolute}.title .text-line{align-items:center;height:.1rem;width:100%}.title .text-line .text{left:auto;top:-1.5rem;transform:none}.poster-wrapper{display:none}.contact-info .contact .message-box .box{margin-top:6rem!important}}@media screen and (max-width:1024px){html{font-size:6px!important}}',""]),o.locals={},t.exports=o},747:function(t,e,r){var content=r(748);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("7a1d8be5",content,!0,{sourceMap:!1})},748:function(t,e,r){var o=r(66)((function(i){return i[1]}));o.push([t.i,'html{font-size:.521vw}div{color:#a19797;color:var(--text-secondary-color);font-size:1.6rem}h1{font-size:4.8rem}h1,h2{color:#000}:root{--logo-font-family:"Saira Stencil One",sans-serif;--bg-primary-color:#efefef;--text-secondary-color:#a19797;--text-black-color:#000;--text-white-color:#fff;--box-shadow-color:#a19797;--theme-primary-color:#ff5a01;--theme-gradient-primary-color:linear-gradient(70deg,#ff5a01 53%,#ff4b00 61%);--primary-transparent-color:rgba(255,90,1,.93);--layout-header-height:6.3rem;--hero-section-height:calc(100vh - var(--layout-header-height))}',""]),o.locals={},t.exports=o},749:function(t,e,r){"use strict";r(370)},750:function(t,e,r){var o=r(66)((function(i){return i[1]}));o.push([t.i,"#main-header-wrapper{text-align:center}@media screen and (max-width:600px){#main-header-wrapper .Header-title{display:flex;justify-content:space-between}}#main-header-wrapper .Header-title .logo{color:var(--text-black-color)!important;float:left;font-family:var(--logo-font-family);font-size:4rem;font-weight:500;text-transform:uppercase}#main-header-wrapper .Header-title .actions{float:right}#main-header-wrapper .menu{display:inline-block}@media screen and (max-width:600px){#main-header-wrapper .menu{display:none}}#main-header-wrapper .menu ul{align-items:center;display:flex;margin:0;padding:0}#main-header-wrapper .menu ul li{list-style:none;padding:0 .5rem}#main-header-wrapper .menu ul li a{background:linear-gradient(0deg,var(--theme-primary-color) 1%,transparent 48%);background-position:top;background-size:102% 200%;color:var(--text-black-color);font-weight:700;padding:1rem;-webkit-text-decoration:none;text-decoration:none;transition:.4s}#main-header-wrapper .menu ul li a:hover{background-position:bottom;border-radius:1rem;color:#fff}",""]),o.locals={},t.exports=o},751:function(t,e,r){"use strict";r(371)},752:function(t,e,r){var o=r(66)((function(i){return i[1]}));o.push([t.i,"#footer{display:flex;justify-content:space-between}#footer .logo{color:var(--text-black-color)!important;float:left;font-family:var(--logo-font-family);font-size:2rem;font-weight:500;text-transform:uppercase}",""]),o.locals={},t.exports=o},753:function(t,e,r){"use strict";r(372)},754:function(t,e,r){var o=r(66)((function(i){return i[1]}));o.push([t.i,".ant-layout .ant-layout-header{height:-moz-fit-content;height:fit-content;line-height:6.4rem;padding:0}.ant-layout .ant-layout-content,.ant-layout .ant-layout-header{background-color:var(--bg-primary-color)!important}.ant-layout .scroll-button .ant-btn{background:linear-gradient(0deg,var(--theme-primary-color) 1%,transparent 48%);background-position:top;background-size:102% 200%;bottom:7.5rem;color:var(--text-black-color);font-size:2rem;height:-moz-fit-content;height:fit-content;padding:.5rem 1.5rem;position:fixed;right:4rem;width:-moz-fit-content;width:fit-content}.ant-layout .scroll-button .ant-btn:hover{background-position:bottom;border-color:var(--theme-primary-color);color:#fff}.ant-layout #scrollProgressBar .progressBar{background:var(--theme-gradient-primary-color);border-radius:0 1rem 1rem 0;height:.7rem;margin-top:-.1rem;transition:.1s;width:0}",""]),o.locals={},t.exports=o},78:function(t,e,r){"use strict";var o={},n=r(51),component=Object(n.a)(o,(function(){return(0,this._self._c)("h1",[this._v(" error page is inprogress")])}),[],!1,null,null,null);e.a=component.exports},937:function(t,e,r){var map={"./af":433,"./af.js":433,"./ar":434,"./ar-dz":435,"./ar-dz.js":435,"./ar-kw":436,"./ar-kw.js":436,"./ar-ly":437,"./ar-ly.js":437,"./ar-ma":438,"./ar-ma.js":438,"./ar-sa":439,"./ar-sa.js":439,"./ar-tn":440,"./ar-tn.js":440,"./ar.js":434,"./az":441,"./az.js":441,"./be":442,"./be.js":442,"./bg":443,"./bg.js":443,"./bm":444,"./bm.js":444,"./bn":445,"./bn-bd":446,"./bn-bd.js":446,"./bn.js":445,"./bo":447,"./bo.js":447,"./br":448,"./br.js":448,"./bs":449,"./bs.js":449,"./ca":450,"./ca.js":450,"./cs":451,"./cs.js":451,"./cv":452,"./cv.js":452,"./cy":453,"./cy.js":453,"./da":454,"./da.js":454,"./de":455,"./de-at":456,"./de-at.js":456,"./de-ch":457,"./de-ch.js":457,"./de.js":455,"./dv":458,"./dv.js":458,"./el":459,"./el.js":459,"./en-au":460,"./en-au.js":460,"./en-ca":461,"./en-ca.js":461,"./en-gb":462,"./en-gb.js":462,"./en-ie":463,"./en-ie.js":463,"./en-il":464,"./en-il.js":464,"./en-in":465,"./en-in.js":465,"./en-nz":466,"./en-nz.js":466,"./en-sg":467,"./en-sg.js":467,"./eo":468,"./eo.js":468,"./es":469,"./es-do":470,"./es-do.js":470,"./es-mx":471,"./es-mx.js":471,"./es-us":472,"./es-us.js":472,"./es.js":469,"./et":473,"./et.js":473,"./eu":474,"./eu.js":474,"./fa":475,"./fa.js":475,"./fi":476,"./fi.js":476,"./fil":477,"./fil.js":477,"./fo":478,"./fo.js":478,"./fr":479,"./fr-ca":480,"./fr-ca.js":480,"./fr-ch":481,"./fr-ch.js":481,"./fr.js":479,"./fy":482,"./fy.js":482,"./ga":483,"./ga.js":483,"./gd":484,"./gd.js":484,"./gl":485,"./gl.js":485,"./gom-deva":486,"./gom-deva.js":486,"./gom-latn":487,"./gom-latn.js":487,"./gu":488,"./gu.js":488,"./he":489,"./he.js":489,"./hi":490,"./hi.js":490,"./hr":491,"./hr.js":491,"./hu":492,"./hu.js":492,"./hy-am":493,"./hy-am.js":493,"./id":494,"./id.js":494,"./is":495,"./is.js":495,"./it":496,"./it-ch":497,"./it-ch.js":497,"./it.js":496,"./ja":498,"./ja.js":498,"./jv":499,"./jv.js":499,"./ka":500,"./ka.js":500,"./kk":501,"./kk.js":501,"./km":502,"./km.js":502,"./kn":503,"./kn.js":503,"./ko":504,"./ko.js":504,"./ku":505,"./ku.js":505,"./ky":506,"./ky.js":506,"./lb":507,"./lb.js":507,"./lo":508,"./lo.js":508,"./lt":509,"./lt.js":509,"./lv":510,"./lv.js":510,"./me":511,"./me.js":511,"./mi":512,"./mi.js":512,"./mk":513,"./mk.js":513,"./ml":514,"./ml.js":514,"./mn":515,"./mn.js":515,"./mr":516,"./mr.js":516,"./ms":517,"./ms-my":518,"./ms-my.js":518,"./ms.js":517,"./mt":519,"./mt.js":519,"./my":520,"./my.js":520,"./nb":521,"./nb.js":521,"./ne":522,"./ne.js":522,"./nl":523,"./nl-be":524,"./nl-be.js":524,"./nl.js":523,"./nn":525,"./nn.js":525,"./oc-lnc":526,"./oc-lnc.js":526,"./pa-in":527,"./pa-in.js":527,"./pl":528,"./pl.js":528,"./pt":529,"./pt-br":530,"./pt-br.js":530,"./pt.js":529,"./ro":531,"./ro.js":531,"./ru":532,"./ru.js":532,"./sd":533,"./sd.js":533,"./se":534,"./se.js":534,"./si":535,"./si.js":535,"./sk":536,"./sk.js":536,"./sl":537,"./sl.js":537,"./sq":538,"./sq.js":538,"./sr":539,"./sr-cyrl":540,"./sr-cyrl.js":540,"./sr.js":539,"./ss":541,"./ss.js":541,"./sv":542,"./sv.js":542,"./sw":543,"./sw.js":543,"./ta":544,"./ta.js":544,"./te":545,"./te.js":545,"./tet":546,"./tet.js":546,"./tg":547,"./tg.js":547,"./th":548,"./th.js":548,"./tk":549,"./tk.js":549,"./tl-ph":550,"./tl-ph.js":550,"./tlh":551,"./tlh.js":551,"./tr":552,"./tr.js":552,"./tzl":553,"./tzl.js":553,"./tzm":554,"./tzm-latn":555,"./tzm-latn.js":555,"./tzm.js":554,"./ug-cn":556,"./ug-cn.js":556,"./uk":557,"./uk.js":557,"./ur":558,"./ur.js":558,"./uz":559,"./uz-latn":560,"./uz-latn.js":560,"./uz.js":559,"./vi":561,"./vi.js":561,"./x-pseudo":562,"./x-pseudo.js":562,"./yo":563,"./yo.js":563,"./zh-cn":564,"./zh-cn.js":564,"./zh-hk":565,"./zh-hk.js":565,"./zh-mo":566,"./zh-mo.js":566,"./zh-tw":567,"./zh-tw.js":567};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=937}},[[679,11,3,12]]]);