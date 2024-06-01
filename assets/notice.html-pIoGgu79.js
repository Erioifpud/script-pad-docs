import{_ as s,c as n,o as a,a as e}from"./app-DtzgLddT.js";const t={},o=e(`<h1 id="notice" tabindex="-1"><a class="header-anchor" href="#notice"><span>Notice</span></a></h1><p>系统提醒相关的操作。</p><p>由于 tauri/app 系统提醒 API 较弱，所以只能实现图标、标题、内容的修改，无法设置事件。</p><p><s>因为 Notification 是浏览器内置 API，所以把该模块名字换成了 Notice</s></p><h2 id="send" tabindex="-1"><a class="header-anchor" href="#send"><span>send</span></a></h2><p>弹出系统提醒，如果没有权限就不会生效，注意开通系统提醒权限。</p><p>其中标题 <code>title</code> 是必须的，内容 <code>description</code> 可选。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">send</span><span class="token punctuation">(</span>title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> body<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),i=[o];function p(c,l){return a(),n("div",null,i)}const d=s(t,[["render",p],["__file","notice.html.vue"]]),u=JSON.parse('{"path":"/builtin/modules/notice.html","title":"Notice","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"send","slug":"send","link":"#send","children":[]}],"git":{"updatedTime":1717226069000,"contributors":[{"name":"Erioifpud","email":"erioifpud@zuo.si","commits":1}]},"filePathRelative":"builtin/modules/notice.md"}');export{d as comp,u as data};
