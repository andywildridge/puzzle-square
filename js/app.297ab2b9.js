(function(t){function e(e){for(var o,s,r=e[0],c=e[1],h=e[2],u=0,d=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,h||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],o=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var o={},n={app:0},i=[];function s(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=o,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(a,o,function(e){return t[e]}.bind(null,o));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/puzzle-square/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var h=0;h<r.length;h++)e(r[h]);var p=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00bc":function(t,e,a){"use strict";a("a37c")},"0e15":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("7a23");function n(t,e,a,n,i,s){var r=Object(o["m"])("Stage");return Object(o["i"])(),Object(o["c"])(r,{shapes:i.shapes,pegs:i.pegs},null,8,["shapes","pegs"])}a("d81d");Object(o["k"])("data-v-4b5e54d2");var i={class:"backstage"},s={class:"offSet"},r={key:0},c={key:1,class:"info"};function h(t,e,a,n,h,p){var u=Object(o["m"])("Board3"),d=Object(o["m"])("Board2"),l=Object(o["m"])("Board"),f=Object(o["m"])("Shape");return Object(o["i"])(),Object(o["e"])(o["a"],null,[Object(o["g"])(u),Object(o["f"])("div",i,[Object(o["g"])(d)]),Object(o["f"])("div",{onMouseup:e[0]||(e[0]=function(){return p.mouseup&&p.mouseup.apply(p,arguments)}),onMousedown:e[1]||(e[1]=function(){return p.mousedown&&p.mousedown.apply(p,arguments)}),onMousemove:e[2]||(e[2]=function(){return p.mousemove&&p.mousemove.apply(p,arguments)}),class:"stage"},[Object(o["f"])("div",s,[Object(o["g"])(l,{pegs:a.pegs},null,8,["pegs"]),(Object(o["i"])(!0),Object(o["e"])(o["a"],null,Object(o["l"])(a.shapes,(function(t,e){return Object(o["i"])(),Object(o["c"])(f,{key:e,id:e,onMove:p.move,onRotate:p.rotate,onFlip:p.flip,shapeData:h.shapeData[e],position:{x:h.shapeData[e].x,y:h.shapeData[e].y,z:h.shapeData[e].z,size:h.shapeData[e].size,flip:h.shapeData[e].flip,rotate:h.shapeData[e].rotate||0}},null,8,["id","onMove","onRotate","onFlip","shapeData","position"])})),128))])],32),h.completed?(Object(o["i"])(),Object(o["e"])("div",r,"Completed!")):Object(o["d"])("",!0),h.completed?Object(o["d"])("",!0):(Object(o["i"])(),Object(o["e"])("p",c," Drag the shapes into posiotion to fill the grid. Drag the edge of a shape to rotate, double click to filp. "))],64)}Object(o["j"])();var p=a("2909");a("159b");Object(o["k"])("data-v-b8530ebe");var u={class:"board"};function d(t,e,a,n,i,s){var r=Object(o["m"])("Peg");return Object(o["i"])(),Object(o["e"])("div",u,[(Object(o["i"])(!0),Object(o["e"])(o["a"],null,Object(o["l"])(a.pegs,(function(t,e){return Object(o["i"])(),Object(o["c"])(r,{key:e,position:t},null,8,["position"])})),128))])}Object(o["j"])(),Object(o["k"])("data-v-08430529");var l=["x"];function f(t,e,a,n,i,s){return Object(o["i"])(),Object(o["e"])("div",{class:"peg",x:t.x,style:Object(o["h"])(s.cssProps)},null,12,l)}Object(o["j"])();a("99af");function m(){return Math.round(40*Math.random())+30}var v={name:"Peg",props:{position:Object},computed:{cssProps:function(){return{"--x":50*this.position.x+2+"px","--y":50*this.position.y+2+"px","border-radius":"".concat(m(),"% ").concat(m(),"% ").concat(m(),"% ").concat(m(),"% / ").concat(m(),"% ").concat(m(),"% ").concat(m(),"% ").concat(m(),"%")}}}};a("8963");v.render=f,v.__scopeId="data-v-08430529";var b=v,g={name:"Shape",components:{Peg:b},props:{pegs:Array},created:function(){console.log(this.pegs)}};a("d0d6");g.render=d,g.__scopeId="data-v-b8530ebe";var y=g;Object(o["k"])("data-v-e5bd3dac");var j={class:"board"};function x(t,e){return Object(o["i"])(),Object(o["e"])("div",j)}Object(o["j"])();a("00bc");const O={};O.render=x,O.__scopeId="data-v-e5bd3dac";var D=O;Object(o["k"])("data-v-255548cc");var I={class:"board"};function w(t,e){return Object(o["i"])(),Object(o["e"])("div",I)}Object(o["j"])();a("661b");const k={};k.render=w,k.__scopeId="data-v-255548cc";var M=k;Object(o["k"])("data-v-7e2a4b94");var z=["viewBox"],S=["x","y","fill"];function _(t,e,a,n,i,s){return Object(o["i"])(),Object(o["e"])("div",{ref:"shape",onMousedown:e[0]||(e[0]=function(){return s.mousedown&&s.mousedown.apply(s,arguments)}),onMousemove:e[1]||(e[1]=function(){return s.mousemove&&s.mousemove.apply(s,arguments)}),onMouseout:e[2]||(e[2]=function(){return s.mouseout&&s.mouseout.apply(s,arguments)}),onDblclick:e[3]||(e[3]=function(){return s.dblclick&&s.dblclick.apply(s,arguments)}),class:"shape"},[(Object(o["i"])(),Object(o["e"])("svg",{width:"100%",viewBox:i.viewbox},[Object(o["f"])("g",null,[(Object(o["i"])(!0),Object(o["e"])(o["a"],null,Object(o["l"])(i.defnCoords,(function(t,e){return Object(o["i"])(),Object(o["e"])("rect",{key:e,x:t.x+.02,y:t.y+.02,width:"0.975",height:"0.975",stroke:"rgb(85 85 85 / 75%)","stroke-width":"0.025",rx:"0.1",fill:a.shapeData.color,"data-target":"true"},null,8,S)})),128))])],8,z))],544)}Object(o["j"])();a("a9e3");var P=10,X=1;function Y(t){var e=t.reduce((function(t,e,a){return e.forEach((function(e,o){e&&t.push({x:o,y:a})})),t}),[]);return e}var B={name:"Shape",props:{id:Number,shapeData:Object,position:Object},watch:{position:function(t){this.render(t.x,t.y,t.rotate,t.size,t.flip,t.z)}},mounted:function(){this.render(this.shapeData.x,this.shapeData.y)},data:function(){return{moveStart:{x:null,y:null},moveNow:{x:null,y:null},defnCoords:Y(this.shapeData.defn),width:this.shapeData.defn[0].length,height:this.shapeData.defn.length,viewbox:"0 0 ".concat(this.shapeData.defn[0].length," ").concat(this.shapeData.defn.length)}},methods:{mouseout:function(){this.render(this.shapeData.x,this.shapeData.y,this.shapeData.rotate,this.shapeData.size,this.shapeData.flip,this.shapeData.z),P=10,X*=-1},mousemove:function(t){if(t.target.dataset.target){var e=this.$refs.shape.getBoundingClientRect(),a=t.target.getBoundingClientRect();(e.bottom-t.pageY<P||e.top-t.pageY>-P||e.right-t.pageX<P||e.left-t.pageX>-P)&&(a.top-t.pageY>-P&&a.left-t.pageX>-P||a.top-t.pageY>-P&&a.right-t.pageX<P||a.bottom-t.pageY<P&&a.left-t.pageX>-P||a.bottom-t.pageY<P&&a.right-t.pageX<P)?(this.render(this.shapeData.x,this.shapeData.y,this.shapeData.rotate+X,this.shapeData.size,this.shapeData.flip,this.shapeData.z),P=15):(this.render(this.shapeData.x,this.shapeData.y,this.shapeData.rotate,this.shapeData.size,this.shapeData.flip,this.shapeData.z),P=10,X*=-1)}},mousedown:function(t){if(t.target.dataset.target){var e=this.$refs.shape.getBoundingClientRect();if(e.bottom-t.pageY<10||e.top-t.pageY>-10||e.right-t.pageX<10||e.left-t.pageX>-10){var a={x:e.left+e.width/2,y:e.top+e.height/2},o=180*Math.atan2(t.pageY-a.y,t.pageX-a.x)/Math.PI;this.$emit("rotate",{id:this.id,startAngle:o-this.position.rotate,centre:a})}else this.$emit("move",this.id)}},dblclick:function(){this.$emit("flip",this.id)},render:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,s=this.$refs.shape,r={width:"".concat(50*this.width,"px"),height:"".concat(50*this.height,"px"),transform:"translate(".concat(t,"px, ").concat(e,"px) rotate(").concat(a,"deg) scale(").concat(o,", ").concat(n,")"),transformOrigin:"center",zIndex:i};s.animate([r,r],{duration:0,fill:"forwards"})}}};a("87d8");B.render=_,B.__scopeId="data-v-7e2a4b94";var C=B;a("b64b");function A(t,e,a){var o=Object.keys(t).reduce((function(e,o){return a===~~o&&"pegs"!==o||t[o].forEach((function(t){return e.push(t)})),e}),[]),n=e.some((function(t){return o.some((function(e){return e.x===t.x&&e.y===t.y}))}));return!n}var E=A;function R(t){var e=Object.keys(t).reduce((function(e,a){return t[a].forEach((function(t){t.x>=2&&t.x<=7&&t.y>=2&&t.y<=7&&e++})),e}),0);return e}var $=R;function T(t,e,a,o,n){return 180===n?{x:a-t,y:o-e}:90===n?{x:o-e,y:t}:270===n?{x:e,y:a-t}:{x:t,y:e}}var F=T,J=50,N=J;function q(t,e){var a,o=0,n=t[e].defn[0].length,i=t[e].defn.length,s=t[e].rotate?90*Math.round(t[e].rotate/90)%360:0;s<0&&(s=360+s);var r=null!==(a=t[e])&&void 0!==a&&a.flip?t[e].flip:1;s%180===90&&n!==i&&(o=N/2*(n-i));var c=Math.round((t[e].x+o)/N)*N-o,h=Math.round((t[e].y-o)/N)*N+o,u=c/N+o/N,d=h/N-o/N,l=Object(p["a"])(t[e].defn);-1===r&&(l=l.reverse());var f=G(l,s,u,d);return{x:c,y:h,rotate:s,gridCoords:f}}function G(t,e,a,o){var n=t[0].length-1,i=t.length-1,s=t.reduce((function(t,e,a){return e.forEach((function(o,n){e[n]&&t.push({x:n,y:a})})),t}),[]),r=s.map((function(t){return F(t.x,t.y,n,i,e)}));return r.map((function(t){return{x:t.x+a,y:t.y+o}}))}var L=q,H={},K={},Q={name:"Stage",components:{Board:y,Board2:D,Board3:M,Shape:C},props:{shapes:Array,pegs:Array},created:function(){var t=this;H.pegs=Object(p["a"])(this.pegs),this.shapeData.forEach((function(e,a){H[a]=L(t.shapeData,a).gridCoords}))},data:function(){return{moveStart:{x:null,y:null},moveItem:null,completed:!1,shapeData:this.shapes.map((function(t){var e=t.x,a=t.y,o=t.color,n=t.defn;return{x:e*N,y:a*N,color:o,defn:n}}))}},methods:{move:function(t){this.moveItem={id:t,type:"move",startX:this.shapeData[t].x,startY:this.shapeData[t].y},this.shapeData[this.moveItem.id].z=1,this.shapeData[this.moveItem.id].size=1.025,K={x:this.shapeData[this.moveItem.id].x,y:this.shapeData[this.moveItem.id].y,rotate:this.shapeData[this.moveItem.id].rotate}},rotate:function(t){var e=t.centre,a=t.id,o=t.startAngle;this.moveItem={id:a,centre:e,startAngle:o,type:"rotate"},this.shapeData[this.moveItem.id].z=1,this.shapeData[this.moveItem.id].size=1.025,K={x:this.shapeData[this.moveItem.id].x,y:this.shapeData[this.moveItem.id].y,rotate:this.shapeData[this.moveItem.id].rotate}},flip:function(t){console.log("flip",t);var e=this.shapeData[t].flip?this.shapeData[t].flip:1;K={x:this.shapeData[t].x,y:this.shapeData[t].y,rotate:this.shapeData[t].rotate,flip:this.shapeData[t].flip},this.shapeData[t].flip=-1*e},mousedown:function(t){this.moveStart.x=t.pageX,this.moveStart.y=t.pageY},mouseup:function(){if(null===this.moveItem)return!1;this.moveStart.x=null,this.moveStart.y=null;var t=L(this.shapeData,this.moveItem.id),e=t.x,a=t.y,o=t.rotate,n=t.gridCoords;if(E(H,n,this.moveItem.id))H[this.moveItem.id]=n;else{var i=K;e=i.x,a=i.y,o=i.rotate,this.shapeData[this.moveItem.id].x=e,this.shapeData[this.moveItem.id].y=a,this.shapeData[this.moveItem.id].rotate=o;var s=L(this.shapeData,this.moveItem.id);e=s.x,a=s.y,o=s.rotate}this.shapeData[this.moveItem.id].x=e,this.shapeData[this.moveItem.id].y=a,console.log(e,a),this.shapeData[this.moveItem.id].rotate=o,this.shapeData[this.moveItem.id].z=0,this.shapeData[this.moveItem.id].size=1,this.moveItem=null,36===$(H)?(console.log("GRID COMPLETE!"),this.completed=!0):this.completed=!1},mousemove:function(t){if(null===this.moveItem)return!1;var e=t.pageX-this.moveStart.x,a=t.pageY-this.moveStart.y;if("move"===this.moveItem.type)this.shapeData[this.moveItem.id].x=this.moveItem.startX+e,this.shapeData[this.moveItem.id].y=this.moveItem.startY+a;else if("rotate"===this.moveItem.type){var o=this.moveItem.centre,n=180*Math.atan2(t.pageY-o.y,t.pageX-o.x)/Math.PI;this.shapeData[this.moveItem.id].rotate=n-this.moveItem.startAngle}var i=L(this.shapeData,this.moveItem.id),s=i.gridCoords;E(H,s,this.moveItem.id)&&(H[this.moveItem.id]=s,K={x:this.shapeData[this.moveItem.id].x,y:this.shapeData[this.moveItem.id].y,rotate:this.shapeData[this.moveItem.id].rotate})}}};a("ab15");Q.render=h,Q.__scopeId="data-v-4b5e54d2";var U=Q,V=[[[0,5],[5,0]],[[2,0],[2,1],[1,2],[1,1],[0,1],[1,0]],[[4,4],[4,5],[3,5],[4,3],[3,4],[5,4]],[[1,3],[1,4],[0,2],[2,5],[0,0],[0,3]],[[3,1],[2,4],[3,3],[3,2],[2,3],[2,2]],[[3,0],[5,5],[5,3],[4,2],[5,2],[4,1]],[[4,0],[5,1],[1,5],[0,4],[1,5]]];function W(){return V.reduce((function(t,e){var a=e[Math.floor(Math.random()*e.length)];return t.push({x:a[0],y:a[1]}),t}),[])}var Z=W,tt=[{x:0,y:10,color:"purple",defn:[[0,1],[1,1]]},{x:2,y:10,color:"yellow",defn:[[0,1,0],[1,1,1]]},{x:6,y:10,color:"orange",defn:[[1,1,1]]},{x:0,y:8,color:"cadetblue",defn:[[1,0,0],[1,1,1]]},{x:4,y:10,color:"red",defn:[[1,1,0],[0,1,1]]},{x:7,y:9,color:"brown",defn:[[1,1]]},{x:3,y:9,color:"grey",defn:[[1,1,1,1]]},{x:9,y:10,color:"green",defn:[[1,1],[1,1]]},{x:9,y:9,color:"blue",defn:[[1]]}],et=tt,at={name:"App",components:{Stage:U},data:function(){return{pegs:Z().map((function(t){return{x:t.x+2,y:t.y+2}})),shapes:et}}};a("c5a2");at.render=n;var ot=at;Object(o["b"])(ot).mount("#app")},"661b":function(t,e,a){"use strict";a("ff01")},"87d8":function(t,e,a){"use strict";a("0e15")},8963:function(t,e,a){"use strict";a("9e0e")},"9e0e":function(t,e,a){},a37c:function(t,e,a){},ab15:function(t,e,a){"use strict";a("be53")},be50:function(t,e,a){},be53:function(t,e,a){},c5a2:function(t,e,a){"use strict";a("be50")},d0d6:function(t,e,a){"use strict";a("f210")},f210:function(t,e,a){},ff01:function(t,e,a){}});
//# sourceMappingURL=app.297ab2b9.js.map