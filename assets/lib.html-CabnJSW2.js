import{_ as a,c as s,o as n,a as e}from"./app-DtzgLddT.js";const t={},o=e(`<h1 id="lib" tabindex="-1"><a class="header-anchor" href="#lib"><span>Lib</span></a></h1><p>远程代码加载相关的操作。</p><h2 id="load" tabindex="-1"><a class="header-anchor" href="#load"><span>load</span></a></h2><p>加载远程代码或者 npm 包，参数 <code>name</code> 可以是代码地址或者 npm 包名，也可以带有 <code>@</code> 指定版本号，比如 <code>vue@3</code>。</p><p>加载的是 <strong>UMD</strong> 模块的导出，会挂载到 <code>iframe</code> 的 <code>window</code> 上，返回值是模块挂载后的名称列表。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">load</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),i=[o];function l(p,c){return n(),s("div",null,i)}const r=a(t,[["render",l],["__file","lib.html.vue"]]),u=JSON.parse('{"path":"/builtin/modules/lib.html","title":"Lib","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"load","slug":"load","link":"#load","children":[]}],"git":{"updatedTime":1717225823000,"contributors":[{"name":"Erioifpud","email":"erioifpud@zuo.si","commits":1}]},"filePathRelative":"builtin/modules/lib.md"}');export{r as comp,u as data};
