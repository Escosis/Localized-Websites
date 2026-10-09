"use strict";(self.webpackChunkskland_skport_activity=self.webpackChunkskland_skport_activity||[]).push([[9143],{9143:function(e,t,o){o.d(t,{F:function(){return L}});var n=o(31635),r=o(96540),i=o(13432),s=o(18336),a=o(66662);const c=s.Ay.div`
  flex: auto;
  position: relative;
  width: 100%;
  z-index: 2;

  ${({$isShow:e})=>{if(!e)return s.AH`
        visibility: hidden;
      `}}
`,l=s.Ay.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 10;

  ${({$noScroll:e,$offsetTop:t=0,$cntOffsetTop:o=0,$cntOffsetBottom:n=0})=>{if(e)return o=Math.max(0,o),n=Math.max(0,n),s.AH`
        overflow-y: hidden;

        > ${c} {
          height: calc(-${t}dp + 100% - ${`${o+n}px`});
        }
      `}}

  ${a.J};

  &::before {
    content: "";
    position: relative;
    width: 100%;
    display: inline-block;

    ${({$offsetTop:e,$cntOffsetTop:t=0})=>(t<0&&(t=0),s.AH`
        min-height: calc(${e}dp + ${`${t}px`});
      `)}
  }
  &::after {
    content: "";
    position: relative;
    width: 100%;
    display: inline-block;

    ${({$cntOffsetBottom:e=0})=>(e<0&&(e=0),s.AH`
        min-height: ${e}px;
      `)}
  }
`,d=s.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`,f=s.DU`
  body[data-fullscreen="true"] {
    & ${l} {
      display: contents;
      & > ${c} {
        display: contents;
      }
    }
  }
`,u=s.Ay.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: 100%;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
`,p=s.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 1);
  border-bottom: 0.5px solid #cccccc;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;

  ${()=>s.AH`
      height: ${44}dp;
      padding: 0 16dp;
    `}

  ${({$bgColor:e})=>{if(e)return s.AH`
        background-color: ${e};
        border-bottom: 0.5px solid transparent;
      `}}
`,h=s.Ay.img`
  ${()=>s.AH`
      height: 32dp;
    `}
`,g=s.Ay.div`
  ${()=>s.AH`
      width: 72dp;
      height: 28dp;
      border-radius: 6dp;
      box-sizing: border-box;
      background-color: #c8eb21;
      color: rgba(34, 34, 34, 1);
      text-align: center;
      font-size: 12dp;
      font-weight: 600;
      line-height: 28dp;
      cursor: pointer;
    `}
`,b=(0,r.forwardRef)((e,t)=>{var{type:o,onDownload:s}=e,a=(0,n.__rest)(e,["type","onDownload"]);(0,r.useEffect)(()=>{i.Ay.readyApp()},[]);let c="./skland-fe-static/skland-web/images/mobile-logo-1.png",l="rgba(255, 255, 255, 1)";return"black"===o&&(c="./public/skland/image/f920cdfc01ec3885bd27dfdbb5407afc.png",l="rgba(35, 37, 41, 1)"),r.createElement(p,Object.assign({},a,{$bgColor:l,ref:t}),r.createElement(h,{alt:"森空岛Logo",src:c}),r.createElement(g,{onClick:()=>{s?null==s||s():i.Ay.openApp(`skland://web?url=${encodeURIComponent(location.href)}`,i.Ay.downloadApp)}},"下载APP"))}),m=s.Ay.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1000000;
  > .shadow {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(25, 38, 44, 0.5);
  }
`,y=s.Ay.div`
  width: 72dp;
  height: 72dp;
`,$=s.Ay.div`
  color: #fff;
  font-size: 14dp;
  z-index: 1;
`,w=({loading:e})=>{const t=(0,r.useRef)(null),n=(0,r.useRef)();return(0,r.useEffect)(()=>{var r;const i=t.current;i&&(e?Promise.resolve().then(o.t.bind(o,49891,23)).then(e=>{const t=e.default;n.current=t.loadAnimation({container:i,path:"./skland/json/resources/lottie/h5page_loading.json",loop:!0,autoplay:!0})}):null===(r=n.current)||void 0===r||r.destroy())},[e]),e?r.createElement(m,null,r.createElement("div",{className:"shadow"}),r.createElement(y,{ref:t}),r.createElement($,null,"加载中...")):null};var v=o(39676),x=o(52819),A=e=>{var t=(0,n.__rest)(e,[]);return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},t),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.9203 5.23409C15.0579 5.1766 15.2286 5.26811 15.2308 5.45282L15.2501 7.00924C15.2552 7.42342 15.5951 7.75503 16.0093 7.74992C16.4234 7.74481 16.7551 7.4049 16.7499 6.99072L16.7307 5.4343C16.7158 4.22232 15.4932 3.369 14.342 3.85006C12.6806 4.54429 9.74127 5.83115 7.20888 7.2488C5.94612 7.9557 4.75434 8.71167 3.86861 9.45896C3.42616 9.83224 3.03651 10.2229 2.75214 10.6242C2.4724 11.0191 2.25 11.4873 2.25 12C2.25 12.5118 2.47165 12.9793 2.75062 13.3736C3.03416 13.7744 3.4227 14.1644 3.86389 14.537C4.7471 15.2831 5.93562 16.0377 7.19549 16.7437C9.72209 18.1593 12.6571 19.4454 14.3243 20.1425C15.4845 20.6276 16.713 19.7579 16.713 18.5371V17C16.713 16.5858 16.3772 16.25 15.963 16.25C15.5487 16.25 15.213 16.5858 15.213 17V18.5371C15.213 18.7236 15.0411 18.8164 14.903 18.7586C13.2509 18.0679 10.3791 16.808 7.9287 15.4351C6.70006 14.7467 5.60754 14.0463 4.83182 13.3911C4.44355 13.0631 4.15816 12.7659 3.97514 12.5072C3.78755 12.2421 3.75 12.0779 3.75 12C3.75 11.9219 3.78772 11.7573 3.97609 11.4914C4.15984 11.232 4.4463 10.9341 4.83587 10.6054C5.61417 9.94879 6.71001 9.24711 7.94159 8.55766C10.3979 7.18262 13.2741 5.92198 14.9203 5.23409ZM16 11.25C15.5858 11.25 15.25 11.5858 15.25 12C15.25 12.4142 15.5858 12.75 16 12.75H20C20.4142 12.75 20.75 12.4142 20.75 12C20.75 11.5858 20.4142 11.25 20 11.25H16Z",fill:"currentColor"}))};o.dn(A);const _=s.Ay.header`
  box-sizing: content-box;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  ${({$theme:e})=>{switch(e){case"white":return s.AH`
          background-color: rgba(255, 255, 255, 1);
        `;case"black":return s.AH`
          background-color: rgba(255, 255, 255, 0);
        `}}}

  ${({$transitionDuration:e})=>e&&s.AH`
      transition: ${`background-color ${e}ms ease`};
    `}

  ${({$height:e,$paddingTop:t,$offsetTop:o})=>s.AH`
      box-sizing: content-box;
      padding-top: calc(${`${t}px`} + ${o}dp);
    `}
  ${({$height:e})=>{if(null!=e)return s.AH`
      min-height: ${e}dp;
    `}}
`,C=s.Ay.div`
  flex-shrink: 0;
  justify-self: start;
  padding-left: 16dp;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  z-index: 2;
`,k=(0,s.Ay)(A)`
  width: 24dp;
  height: 24dp;
  color: ${e=>"white"===e.$theme?x.Ay.color.icon_primary:x.Ay.color.icon_btn_white};
  ${({$transitionDuration:e})=>e&&s.AH`
      transition: ${`color ${e}ms ease`};
    `}
`,E=s.Ay.div`
  flex: 1;
  width: 100%;
  position: absolute;
  justify-self: center;
  text-align: center;
  z-index: 1;

  ${e=>e.$string&&s.AH`
      ${x.gx.css.h4_w600_16_22}

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}

  padding: 0 40dp;
  box-sizing: border-box;

  ${e=>"white"===e.$theme?s.AH`
        color: ${x.Ay.color.text_primary};
      `:s.AH`
        color: ${x.Ay.color.basic_white};
      `}

  ${({$transitionDuration:e})=>e&&s.AH`
      transition: ${`color ${e}ms ease`};
    `}
`,T=s.Ay.div`
  flex-shrink: 0;
  padding-right: 16dp;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  z-index: 2;
`,H=(0,r.createContext)({offsetTop:0,setLayout:()=>{}}),O=(0,r.createContext)({isLayout:!1,nativeTop:0,nativeBottom:0,offsetTop:0,safeTop:-2,safeBottom:-2,bodyRef:r.createRef()}),j=r.forwardRef((e,t)=>{const{children:o,title:s,hideBackArrow:a,arrow:c,theme:l,onBack:d=i.Ay.pop,transitionDuration:f=0,right:u}=e,p=(0,n.__rest)(e,["children","title","hideBackArrow","arrow","theme","onBack","transitionDuration","right"]),{offsetTop:h,setLayout:g}=(0,r.useContext)(H),b=(0,v.b)(),m=(0,r.useRef)(null);if((0,r.useEffect)(()=>{b&&m.current&&(t&&("function"==typeof t?t(m.current):t.current=m.current),setTimeout(()=>{m.current&&g({safeTop:m.current.clientHeight-1})},40))},[b]),!b)return null;const{top:y}=b;return r.createElement(_,Object.assign({ref:m,$height:44,$paddingTop:y,$offsetTop:h},p,{$theme:l,$transitionDuration:f}),o||r.createElement(r.Fragment,null,r.createElement(C,{onClick:a?void 0:d},a?r.createElement(r.Fragment,null):c||r.createElement(k,{$theme:l,$transitionDuration:f})),r.createElement(E,{$string:"string"==typeof s,$theme:l,$transitionDuration:f},s),u&&r.createElement(T,null,u)))});j.Left=C,j.Center=E,j.Right=T;const R=s.Ay.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 100;

  ${({$bottom:e})=>{const t=`${e}px`;return s.AH`
      padding-bottom: ${t};
    `}}
  ${({$height:e})=>{if(null!=e)return s.AH`
      min-height: ${e}dp;
    `}}
`,z=r.forwardRef((e,t)=>{const{children:o}=e,i=(0,n.__rest)(e,["children"]),s=(0,v.b)(),{setLayout:a}=(0,r.useContext)(H),c=(0,r.useRef)(null);if((0,r.useEffect)(()=>{s&&c.current&&(t&&("function"==typeof t?t(c.current):t.current=c.current),setTimeout(()=>{c.current&&a({safeBottom:c.current.clientHeight-1})},80))},[t,s]),!s)return null;const{bottom:l}=s;return r.createElement(R,Object.assign({},i,{ref:c,$bottom:l}),o)}),B=r.forwardRef((e,t)=>{const{noScroll:o,isLayout:i,cntOffsetTop:s,cntOffsetBottom:a,safeArea:f,background:u,children:p,contentProps:h}=e,g=(0,n.__rest)(e,["noScroll","isLayout","cntOffsetTop","cntOffsetBottom","safeArea","background","children","contentProps"]),[b,m]=(0,r.useState)(!0),{top:y=!0,bottom:$=!0}=f||{top:!0,bottom:!0},{offsetTop:w}=(0,r.useContext)(H),x=(0,r.useRef)(null),[A,_]=(0,r.useState)(0),C=(0,v.b)();if((0,r.useEffect)(()=>{if(!C)return;if(!x.current)return;if(!x.current.parentElement)return;const{height:e}=x.current.parentElement.getBoundingClientRect(),{height:t}=x.current.getBoundingClientRect();t||_(e),m(!1)},[C]),!C)return null;const k=y?w:0,E=y?s:0,T=$?a:0,O={},j=h||{},{style:R}=j,z=(0,n.__rest)(j,["style"]);return R&&Object.assign(O,R),r.createElement(l,Object.assign({ref:t,$noScroll:o,$offsetTop:k,$cntOffsetTop:E,$cntOffsetBottom:T},g),r.createElement(d,null,u),r.createElement(c,Object.assign({ref:x,$isShow:!b&&i},z,{style:O}),!b&&p))}),{isApp:S}=i.Ay.getSystemInfo(),L=r.forwardRef((e,t)=>{var{loading:o,renderLoading:i,showDownloadHeader:s,renderDownloadHeader:a,downloadHeaderType:c,header:l,footer:d,children:p,background:h,onLayout:g,safeArea:m,noScroll:y,onScroll:$,bodyProps:x,contentProps:A}=e,_=(0,n.__rest)(e,["loading","renderLoading","showDownloadHeader","renderDownloadHeader","downloadHeaderType","header","footer","children","background","onLayout","safeArea","noScroll","onScroll","bodyProps","contentProps"]);const[,C]=(0,r.useState)(""),k=(0,r.useRef)(null),E=(0,r.useRef)({nativeTop:0,nativeBottom:0,offsetTop:0,safeTop:-2,safeBottom:-2}),{safeTop:T,safeBottom:R,offsetTop:L}=E.current,D=-2!==T&&-2!==R,P=(0,r.useRef)();(0,r.useEffect)(()=>{D&&(null==g||g(E.current))},[D]);const M=(0,r.useCallback)(e=>{Object.assign(E.current,e),C(Math.random().toString().slice(-8))},[D]),F=(0,v.b)();(0,r.useEffect)(()=>{if(!F)return;const{top:e,bottom:t}=F;M({nativeTop:e,nativeBottom:t})},[F]),(0,r.useEffect)(()=>{if(!k.current)return;const{clientHeight:e}=k.current;M({offsetTop:e})},[]);const I=!S&&s?44:0,U=T-L,V=R;return r.createElement(r.Fragment,null,r.createElement(f,null),r.createElement(u,Object.assign({},_),(null==i?void 0:i(o))||r.createElement(w,{loading:o}),!S&&s?(null==a?void 0:a(c))||r.createElement(b,{type:c,ref:k}):null,r.createElement(O.Provider,{value:Object.assign(Object.assign({isLayout:D},E.current),{bodyRef:P})},r.createElement(H.Provider,{value:{offsetTop:I,setLayout:M}},l||r.createElement(j,{hideBackArrow:!0,$height:0}),r.createElement(B,Object.assign({},x,{contentProps:A,ref:e=>{"function"==typeof t?t(e):t&&(t.current=e),P.current=e},noScroll:y,isLayout:D,cntOffsetTop:U,cntOffsetBottom:V,safeArea:m,background:h,onScroll:$}),p),d||r.createElement(z,{$height:0})))))});L.Loading=w,L.Header=j,L.Footer=z,L.Context=O},39676:function(e,t,o){var n=o(31635),r=o(2543),i=o.n(r),s=o(96540),a=o(13432);const c=["screen_width","screen_height","status_bar_height","top","left","bottom","right"];let l;const d=()=>(0,n.__awaiter)(void 0,void 0,void 0,function*(){const{isApp:e,isAndroid:t,version:{app:o}}=a.Ay.getSystemInfo(),n=yield a.Ay.getPageInfo();if(!e||0===(null==n?void 0:n.code))return e&&(e=>{const{status_bar_height:t,top:o}=e;Object.keys(e).forEach(t=>{if(!c.includes(t))return;const o=e[t];e[t]=o/window.devicePixelRatio}),o<t&&Object.assign(e,{top:e.status_bar_height})})(n),n}),f=(0,n.__awaiter)(void 0,void 0,void 0,function*(){try{const e=yield d();l=e}catch(e){}});let u;setTimeout(()=>(0,n.__awaiter)(void 0,void 0,void 0,function*(){const e=yield d();i().isEqual(l,e)||(u&&u(e),l=e)}),400);const p={screen_width:0,screen_height:0,has_navigation_bar:!1,navigation_bar_height:0,status_bar_height:0,top:0,left:0,bottom:0,right:0};o.d(t,["b",0,()=>{const[e,t]=(0,s.useState)(l);return(0,s.useMemo)(()=>(e||f.then(()=>{u=t,t(l)}),e||p),[!!e])}])}}]);
//# sourceMappingURL=9143.6740d7af.js.map