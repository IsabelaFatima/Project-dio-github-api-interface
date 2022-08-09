(this["webpackJsonpgithub-api"]=this["webpackJsonpgithub-api"]||[]).push([[0],{54:function(n,e,t){"use strict";t.r(e);var i,r,o,a,s,c,l,d,b,p,h,u,x,g,f,j,m,O=t(1),v=t.n(O),y=t(23),w=t.n(y),k=t(6),S=t(2),z=t(3),R=z.b.div(i||(i=Object(S.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: 4px;\n  input {\n    border: 1px solid #000000;\n    box-shadow: 5px 0px 5px 5px #161616;\n    border-radius: 8px;\n    width: 100%;\n    height: 44px;\n    padding: 8px;\n    font-weight: 500;\n  }\n  button {\n    border: 1px solid #000000; \n    box-shadow: 5px 0px 5px 5px #161616;\n    background-color: #161616;\n    padding: 12px 50px;\n    margin: 0 16px;\n    border-radius: 8px;\n    &:hover {\n      background-color: #585858;\n    }\n    span {\n      font-weight: bold;\n      color: #fff;\n    }\n\n  }\n"]))),C=t(5),E=t(27),_=t.n(E).a.create({baseURL:"https://api.github.com/"}),U=t(0),F=Object(O.createContext)({loading:!1,user:{},repositories:[],starred:[]}),I=function(n){var e=n.children,t=Object(O.useState)({hasUser:!1,loading:!1,user:{id:void 0,avatar:void 0,login:void 0,name:void 0,html_url:void 0,blog:void 0,company:void 0,location:void 0,followers:0,following:0,public_gists:0,public_repos:0},repositories:[],starred:[]}),i=Object(k.a)(t,2),r=i[0],o=i[1],a={githubState:r,getUser:Object(O.useCallback)((function(n){return function(n){o((function(n){return Object(C.a)(Object(C.a)({},n),{},{loading:!n.loading})})),_.get("users/".concat(n)).then((function(n){var e=n.data;o((function(n){return Object(C.a)(Object(C.a)({},n),{},{hasUser:!0,user:{id:e.id,avatar:e.avatar_url,login:e.login,name:e.name,html_url:e.html_url,blog:e.blog,company:e.company,location:e.location,followers:e.followers,following:e.following,public_gists:e.public_gists,public_repos:e.public_repos}})}))})).finally((function(){o((function(n){return Object(C.a)(Object(C.a)({},n),{},{loading:!n.loading})}))}))}(n)}),[]),getUserRepos:Object(O.useCallback)((function(n){return function(n){_.get("users/".concat(n,"/repos")).then((function(n){var e=n.data;console.log("data: "+JSON.stringify(e)),o((function(n){return Object(C.a)(Object(C.a)({},n),{},{repositories:e})}))}))}(n)}),[]),getUserStarred:Object(O.useCallback)((function(n){return function(n){_.get("users/".concat(n,"/starred")).then((function(n){var e=n.data;console.log("data: "+JSON.stringify(e)),o((function(n){return Object(C.a)(Object(C.a)({},n),{},{starred:e})}))}))}(n)}),[])};return Object(U.jsx)(F.Provider,{value:a,children:e})},D=function(){var n=Object(O.useContext)(F);return{githubState:n.githubState,getUser:n.getUser,getUserRepos:n.getUserRepos,getUserStarred:n.getUserStarred}},T=function(){var n=D().getUser,e=Object(O.useState)(),t=Object(k.a)(e,2),i=t[0],r=t[1];return Object(U.jsx)("header",{children:Object(U.jsxs)(R,{children:[Object(U.jsx)("input",{type:"text",placeholder:"Enter Username...",onChange:function(n){return r(n.target.value)}}),Object(U.jsx)("button",{type:"submit",onClick:function(){if(i)return n(i)},children:Object(U.jsx)("span",{children:"Search"})})]})})},A=z.b.section(r||(r=Object(S.a)(["margin: 16px;"]))),N=function(n){var e=n.children;return Object(U.jsxs)(A,{children:[Object(U.jsx)(T,{}),e]})},L=z.b.div(o||(o=Object(S.a)(["\n  margin: 25px;\n  display: flex;\n  justify-content: center;\n  h1 {\n    font-weight: bold;\n    font-size: 32px;\n  }\n"]))),B=function(){return Object(U.jsx)(L,{children:Object(U.jsx)("h1",{children:"No User Found"})})},P=z.b.div(a||(a=Object(S.a)(["\n  display: flex;\n  align-items: flex-start;\n  margin: 60px 0px 30px 40px;\n"]))),J=z.b.div(s||(s=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-left: 8px;\n  height: 200px;\n  h1 {\n    font-size: 55px;\n    font-weight: bold;\n    padding-bottom: 40px;\n  }\n  h3 {\n    font-size: 18px;\n    font-weight: bold;\n  }\n  h4 {\n    font-size: 16px;\n    font-weight: bold;\n  }\n"]))),M=z.b.div(c||(c=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: 65px;\n  margin-top: 15px;\n  div {\n    margin: 8px 9px 8px 13px;\n    text-align: center;\n    padding: 5px;\n  }\n"]))),G=z.b.div(l||(l=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 8px;\n  margin-left: 50px;\n  h3 {\n    padding: 5px;\n    margin-right: 8px;\n  }\n  a {\n    font-size: 18px;\n    color: #7B8ACB;\n    font-weight: bold;\n    padding: 5px;\n  }\n"]))),q=z.b.img(d||(d=Object(S.a)(["\n  border-radius: 60%;\n  width: 25%;\n  margin: 10px 100px 0px 50px;\n"]))),H=function(){var n=D().githubState;return Object(U.jsxs)(P,{children:[Object(U.jsx)(q,{src:n.user.avatar,alt:"Avatar of user"}),Object(U.jsxs)(J,{children:[Object(U.jsxs)("div",{children:[Object(U.jsx)("h1",{children:n.user.name}),Object(U.jsxs)(G,{children:[Object(U.jsx)("h3",{children:"Username:"}),Object(U.jsx)("a",{href:n.user.html_url,target:"_blank",rel:"noreferrer",children:n.user.login})]}),Object(U.jsxs)(G,{children:[Object(U.jsx)("h3",{children:"Company:"}),Object(U.jsx)("span",{children:n.user.company})]}),Object(U.jsxs)(G,{children:[Object(U.jsx)("h3",{children:"Location:"}),Object(U.jsx)("span",{children:n.user.location})]}),Object(U.jsxs)(G,{children:[Object(U.jsx)("h3",{children:"Blog:"}),Object(U.jsx)("a",{href:n.user.blog,target:"_blank",rel:"noreferrer",children:n.user.blog})]})]}),Object(U.jsxs)(M,{children:[Object(U.jsxs)("div",{children:[Object(U.jsx)("h4",{children:"Followers"}),Object(U.jsxs)("span",{children:[" ",n.user.followers]})]}),Object(U.jsxs)("div",{children:[Object(U.jsx)("h4",{children:"Followings"}),Object(U.jsxs)("span",{children:[" ",n.user.following]})]}),Object(U.jsxs)("div",{children:[Object(U.jsx)("h4",{children:"Gists"}),Object(U.jsxs)("span",{children:[" ",n.user.public_gists]})]}),Object(U.jsxs)("div",{children:[Object(U.jsx)("h4",{children:"Repos"}),Object(U.jsxs)("span",{children:[" ",n.user.public_repos]})]})]})]})]})},V=z.b.div(b||(b=Object(S.a)(["\n  padding: 8px;\n  border-radius: 30px;\n  border: 1px solid #000000;\n  box-shadow: 5px 5px 5px 5px #161616;\n  margin: 16px 16px;\n  width: 350px;\n  height: 200px;\n  align-content: center;\n"]))),K=z.b.h2(p||(p=Object(S.a)(["\n  font-size: 18px;\n  font-weight: bold;\n  margin: 35px 0;\n"]))),Q=z.b.h2(h||(h=Object(S.a)(["\n  font-size: 16px;\n  font-weight: bold;\n  margin: 8px 0;\n  color: #D7DDDD;\n"]))),W=z.b.a(u||(u=Object(S.a)(["\n  font-size: 16px;\n  font-weight: bold;\n  margin: 8px 0;\n  color: #3182ce;\n"]))),X=function(n){var e=n.name,t=n.linkToRepo,i=n.fullName;return Object(U.jsxs)(V,{children:[Object(U.jsx)(K,{children:e}),Object(U.jsx)(Q,{children:"full name:"}),Object(U.jsx)(W,{href:t,target:"_blank",rel:"noreferrer",children:i})]})},Y=t(7),Z=Object(z.b)(Y.d)(x||(x=Object(S.a)(["\n  font-size: 16px;\n  width: 100%;s\n  margin-top: 16px;\n\n"]))),$=Object(z.b)(Y.b)(g||(g=Object(S.a)(["\n  margin: 0;\n  list-style-type: none;\n  padding: 4px;\n  display: flex;\n  margin-left: 60px\n"])));$.tabsRole="TabList";var nn=Object(z.b)(Y.a)(f||(f=Object(S.a)(['\n  border-radius: 16px;\n  border: 1px solid #000000;\n  box-shadow: 5px 0px 5px 5px #161616;\n  width: 150px;\n  padding: 16px;\n  user-select: none;\n  cursor: pointer;\n  z-index: 99999;\n  background-color: "#fff";\n  margin: 8px;\n  &:focus {\n    outline: none;\n  }\n  &.is-selected {\n    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);\n  }\n'])));nn.tabsRole="Tab";var en=Object(z.b)(Y.c)(j||(j=Object(S.a)(['\n  padding: 16px;\n  border: 1px solid "#ccc";\n  display: none;\n  margin-top: -5px;\n  &.is-selected {\n    display: block;\n  }\n'])));en.tabsRole="TabPanel";var tn,rn=z.b.div(m||(m=Object(S.a)(["\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n"]))),on=function(){var n=D(),e=n.githubState,t=n.getUserRepos,i=n.getUserStarred,r=Object(O.useState)(!1),o=Object(k.a)(r,2),a=o[0],s=o[1];return Object(O.useEffect)((function(){e.user.login&&(t(e.user.login),i(e.user.login)),s(e.repositories)}),[e.user.login]),Object(U.jsx)(U.Fragment,{children:a?Object(U.jsxs)(Z,{selectedTabClassName:"is-selected",selectedTabPanelClassName:"is-selected",children:[Object(U.jsxs)($,{children:[Object(U.jsx)(nn,{children:"Repositories"}),Object(U.jsx)(nn,{children:"Starred"})]}),Object(U.jsx)(en,{children:Object(U.jsx)(rn,{children:e.repositories.map((function(n){return Object(U.jsx)(X,{name:n.name,linkToRepo:n.full_name,fullName:n.full_name},n.id)}))})}),Object(U.jsx)(en,{children:Object(U.jsx)(rn,{children:e.starred.map((function(n){return Object(U.jsx)(X,{name:n.name,linkToRepo:n.html_url,fullName:n.full_name},n.id)}))})})]}):Object(U.jsx)(U.Fragment,{})})},an=function(){var n=D().githubState;return Object(U.jsx)(N,{children:n.hasUser?Object(U.jsx)(U.Fragment,{children:n.loading?Object(U.jsx)("p",{children:"Loading"}):Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(H,{}),Object(U.jsx)(on,{})]})}):Object(U.jsx)(B,{})})},sn=Object(z.a)(tn||(tn=Object(S.a)(['\n  /*! destyle.css v2.0.2 | MIT License | https://github.com/nicolas-cusan/destyle.css */\n/* Reset box-model and set borders */\n/* ============================================ */\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  border-style: solid;\n  border-width: 0;\n}\n/* Document */\n/* ============================================ */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n * 3. Remove gray overlay on links for iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -webkit-tap-highlight-color: transparent; /* 3*/\n}\n/* Sections */\n/* ============================================ */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n  margin-top: 50px;\n  font-family: roboto,sans-serif;\n  background: #1B1C22;\n  color: #DEDEDF;\n  text-align: center;\n}\n/**\n * Render the main element consistently in IE.\n */\nmain {\n  display: block;\n}\n/* Vertical rhythm */\n/* ============================================ */\np,\ntable,\nblockquote,\naddress,\npre,\niframe,\nform,\nfigure,\ndl {\n  margin: 0;\n}\n/* Headings */\n/* ============================================ */\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  line-height: inherit;\n  font-weight: inherit;\n  margin: 0;\n  color: #DEDEDF;\n}\n/* Lists (enumeration) */\n/* ============================================ */\nul,\nol {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n/* Lists (definition) */\n/* ============================================ */\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\n/* Grouping content */\n/* ============================================ */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n  border-top-width: 1px;\n  margin: 0;\n  clear: both;\n  color: inherit;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd em font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: inherit; /* 2 */\n}\naddress {\n  font-style: inherit;\n}\n/* Text-level semantics */\n/* ============================================ */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n  text-decoration: none;\n  color: inherit;\n}\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd em font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: inherit; /* 2 */\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent sub and sup elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content */\n/* ============================================ */\n/**\n * Prevent vertical alignment issues.\n */\nimg,\nembed,\nobject,\niframe {\n  vertical-align: bottom;\n}\n/* Forms */\n/* ============================================ */\n/**\n * Reset form fields to make them styleable\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  -webkit-appearance: none;\n  appearance: none;\n  vertical-align: middle;\n  color: inherit;\n  font: inherit;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  outline: 0;\n  border-radius: 0;\n  text-align: inherit;\n  color: #DEDEDF;\n}\n/**\n * Reset radio and checkbox appearance to preserve their look in iOS.\n */\n[type="checkbox"] {\n  -webkit-appearance: checkbox;\n  appearance: checkbox;\n}\n[type="radio"] {\n  -webkit-appearance: radio;\n  appearance: radio;\n}\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  cursor: pointer;\n  -webkit-appearance: none;\n  appearance: none;\n}\nbutton[disabled],\n[type="button"][disabled],\n[type="reset"][disabled],\n[type="submit"][disabled] {\n  cursor: default;\n}\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Remove arrow in IE10 & IE11\n */\nselect::-ms-expand {\n  display: none;\n}\n/**\n * Remove padding\n */\noption {\n  padding: 0;\n}\n/**\n * Reset to invisible\n */\nfieldset {\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from fieldset elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    fieldset elements in all browsers.\n */\nlegend {\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Correct the outline style in Safari.\n */\n[type="search"] {\n  outline-offset: -2px; /* 1 */\n}\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to inherit in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/**\n * Clickable labels\n */\nlabel[for] {\n  cursor: pointer;\n}\n/* Interactive */\n/* ============================================ */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n/*\n * Remove outline for editable content.\n */\n[contenteditable] {\n  outline: none;\n}\n/* Table */\n/* ============================================ */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ncaption {\n  text-align: left;\n}\ntd,\nth {\n  vertical-align: top;\n  padding: 0;\n}\nth {\n  text-align: left;\n  font-weight: bold;\n}\n/* Misc */\n/* ============================================ */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n']))),cn=function(){return Object(U.jsx)("main",{children:Object(U.jsxs)(I,{children:[Object(U.jsx)(sn,{}),Object(U.jsx)(an,{})]})})};w.a.render(Object(U.jsx)(v.a.StrictMode,{children:Object(U.jsx)(cn,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.86992cbb.chunk.js.map