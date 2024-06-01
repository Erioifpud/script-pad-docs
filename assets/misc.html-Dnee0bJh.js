import{_ as s,c as a,o as n,a as e}from"./app-DtzgLddT.js";const t={},o=e(`<h1 id="misc" tabindex="-1"><a class="header-anchor" href="#misc"><span>Misc</span></a></h1><p>一些杂项操作，相当于 utils。</p><h2 id="retry" tabindex="-1"><a class="header-anchor" href="#retry"><span>retry</span></a></h2><p>用于对 <code>Promise</code> 任务进行重试，<code>times</code> 为重试次数，<code>delay</code> 为每次重试的间隔时间。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token generic-function"><span class="token function">retry</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>task<span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> times<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> delay<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),c=[o];function p(i,r){return n(),a("div",null,c)}const d=s(t,[["render",p],["__file","misc.html.vue"]]),u=JSON.parse('{"path":"/builtin/modules/misc.html","title":"Misc","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"retry","slug":"retry","link":"#retry","children":[]}],"git":{"updatedTime":1717226184000,"contributors":[{"name":"Erioifpud","email":"erioifpud@zuo.si","commits":1}]},"filePathRelative":"builtin/modules/misc.md"}');export{d as comp,u as data};
