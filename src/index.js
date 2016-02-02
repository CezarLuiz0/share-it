Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(r){"use strict";if(void 0===r||null===r)throw new TypeError("Cannot convert first argument to object");for(var t=Object(r),e=1;e<arguments.length;e++){var n=arguments[e];if(void 0!==n&&null!==n){n=Object(n);for(var o=Object.keys(Object(n)),a=0,i=o.length;i>a;a++){var c=o[a],u=Object.getOwnPropertyDescriptor(n,c);void 0!==u&&u.enumerable&&(t[c]=n[c])}}}return t}}),Object.keys||(Object.keys=function(){"use strict";var r=Object.prototype.hasOwnProperty,t=!{toString:null}.propertyIsEnumerable("toString"),e=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],n=e.length;return function(o){if("object"!=typeof o&&("function"!=typeof o||null===o))throw new TypeError("Object.keys chamado de non-object");var a,i,c=[];for(a in o)r.call(o,a)&&c.push(a);if(t)for(i=0;n>i;i++)r.call(o,e[i])&&c.push(e[i]);return c}}()),Array.prototype.map||(Array.prototype.map=function(r,t){var e,n,o;if(null==this)throw new TypeError(" this is null or not defined");var a=Object(this),i=a.length>>>0;if("function"!=typeof r)throw new TypeError(r+" is not a function");for(arguments.length>1&&(e=t),n=new Array(i),o=0;i>o;){var c,u;o in a&&(c=a[o],u=r.call(e,c,o,a),n[o]=u),o++}return n});(function(window,document){"use strict";var ShareIt=function(options){var self=this;var defaults={specs:{width:550,height:350},target:"_blank",newTab:false};this.opts=Object.assign(defaults,options);this.elements=[].slice.apply(document.querySelectorAll("[data-share]"));return{init:function(){self.clickElements()}}};ShareIt.prototype={clickElements:function(){var self=this;self.elements.map(function(el){el.addEventListener("click",function(e){e.preventDefault();var url=self.getMediaUrl(el);window.open(encodeURI(url),self.opts.target,self.getSpecs(el))})})},getSpecs:function(el){var self=this;var specs=[];if(!self.opts.newTab){Object.keys(self.opts.specs).map(function(spec){var val=self.opts.specs[spec];if(el.hasAttribute("data-share-"+spec)){specs.push(spec+"="+el.getAttribute("data-share-"+spec))}else{specs.push(spec+"="+val)}})}return specs.join(",")},getMediaUrl:function(el){var url;var obj={};var attrs=[].slice.call(el.attributes);var self=this;attrs.map(function(attr){if(attr.name.toLowerCase().indexOf("data-share")>=0){Object.keys(self.networks).map(function(net){if(attr.name.toLowerCase().indexOf("data-share-"+net)>=0){var network=self.networks[net];url=network.url;network.strings.map(function(s){obj[s]=el.getAttribute("data-share-"+net+"-"+s)||""});return}})}});return this.supplant(url,obj)},supplant:function(url,o){return url.replace(/{([^{}]*)}/g,function(a,b){var r=o[b];return typeof r==="string"||typeof r==="number"?r:a})},networks:{facebook:{url:"http://www.facebook.com/sharer.php?s=100&p[url]={url}",strings:["url"]},twitter:{url:"https://twitter.com/share?url={url}&text={title}&via={via}&hashtags={hashtags}",strings:["title","url","via","hashtags"]},google:{url:"https://plus.google.com/share?url={url}",strings:["url"]},pinterest:{url:"https://pinterest.com/pin/create/bookmarklet/?media={img}&url={url}&is_video={is-video}&description={title}",strings:["img","url","is-video","title"]},linkedin:{url:"https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={summary}&source={source}",strings:["url","title","summary","source"]},buffer:{url:"http://bufferapp.com/add?text={title}&url={url}",strings:["title","url"]},tumblr:{url:"https://www.tumblr.com/widgets/share/tool?canonicalUrl={url}&title={title}&caption={desc}",strings:["url","title","desc"]},digg:{url:"http://digg.com/submit?url={url}&title={title}",strings:["url","title"]},su:{url:"http://www.stumbleupon.com/submit?url={url}&title={title}",strings:["url","title"]},delicious:{url:"https://delicious.com/save?v=5&noui&jump=close&url={url}&title={title}",strings:["url","title"]},reddit:{url:"http://reddit.com/submit?url={url}&title={title}",strings:["url","title"]},evernote:{url:"http://www.evernote.com/clip.action?url={url}&title={title}",strings:["url","title"]},wp:{url:"http://wordpress.com/press-this.php?u={url}&t={title}&s={desc}&i={img}",strings:["url","title","desc","img"]},pocket:{url:"https://getpocket.com/save?url={url}&title={title}",strings:["url","title"]},whatsapp:{url:"whatsapp://send?text={text}",strings:["text"]}}};window.ShareIt=ShareIt})(window,document);