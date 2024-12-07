import{_ as t,c as p,b as n,e as a,d as i,w as l,a as o,r,o as c}from"./app-CQ0RYBrR.js";const d={};function u(k,s){const e=r("RouteLink");return c(),p("div",null,[s[3]||(s[3]=n("h1",{id:"api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#api"},[n("span",null,"API")])],-1)),s[4]||(s[4]=n("p",null,"Rust 后端服务的包装函数。",-1)),n("p",null,[s[1]||(s[1]=a("具体的响应数据可以参考 ")),i(e,{to:"/apis/"},{default:l(()=>s[0]||(s[0]=[a("接口")])),_:1}),s[2]||(s[2]=a("。"))]),s[5]||(s[5]=o(`<h2 id="接口定义" tabindex="-1"><a class="header-anchor" href="#接口定义"><span>接口定义</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ServerInfo</span> <span class="token punctuation">{</span></span>
<span class="line">  host<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  port<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Args</span> <span class="token punctuation">{</span></span>
<span class="line">  http_addr<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  http_port<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">ResponseWrapper<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span></span>
<span class="line">  success<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  message<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  data<span class="token operator">:</span> <span class="token constant">T</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getserverinfo" tabindex="-1"><a class="header-anchor" href="#getserverinfo"><span>getServerInfo</span></a></h2><p>获取本地 Rust 后端服务的信息，包括监听的地址和端口。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">getServerInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ServerInfo<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h2 id="uploadimage" tabindex="-1"><a class="header-anchor" href="#uploadimage"><span>uploadImage</span></a></h2><p>上传 base64 图片数据到服务器，返回一个临时 ID 用于查询图片。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">uploadImage</span><span class="token punctuation">(</span>base64<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> mimeType <span class="token operator">=</span> <span class="token string">&#39;image/png&#39;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ResponseWrapper<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">|</span> Response<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h2 id="getimage" tabindex="-1"><a class="header-anchor" href="#getimage"><span>getImage</span></a></h2><p>传入临时图片 ID 进行查询，返回图片字节数据。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">getImage</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h2 id="imagecors" tabindex="-1"><a class="header-anchor" href="#imagecors"><span>imageCors</span></a></h2><p>传入图片 URL 进行跨域请求，返回图片字节数据（常用于一些无法通过 HTTP 模块避免跨域的场景）。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">imageCors</span><span class="token punctuation">(</span>imgUrl<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,17))])}const g=t(d,[["render",u],["__file","api.html.vue"]]),v=JSON.parse('{"path":"/builtin/modules/api.html","title":"API","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"接口定义","slug":"接口定义","link":"#接口定义","children":[]},{"level":2,"title":"getServerInfo","slug":"getserverinfo","link":"#getserverinfo","children":[]},{"level":2,"title":"uploadImage","slug":"uploadimage","link":"#uploadimage","children":[]},{"level":2,"title":"getImage","slug":"getimage","link":"#getimage","children":[]},{"level":2,"title":"imageCors","slug":"imagecors","link":"#imagecors","children":[]}],"git":{"updatedTime":1723120340000,"contributors":[{"name":"Erioifpud","username":"Erioifpud","email":"erioifpud@zuo.si","commits":1,"url":"https://github.com/Erioifpud"}]},"filePathRelative":"builtin/modules/api.md"}');export{g as comp,v as data};