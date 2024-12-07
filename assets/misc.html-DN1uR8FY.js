import{_ as a,c as n,a as e,o as t}from"./app-CQ0RYBrR.js";const p={};function i(l,s){return t(),n("div",null,s[0]||(s[0]=[e(`<h1 id="misc" tabindex="-1"><a class="header-anchor" href="#misc"><span>Misc</span></a></h1><p>一些杂项操作，相当于 utils。</p><h2 id="接口描述" tabindex="-1"><a class="header-anchor" href="#接口描述"><span>接口描述</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ServerInfo</span> <span class="token punctuation">{</span></span>
<span class="line">  host<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  port<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="retry" tabindex="-1"><a class="header-anchor" href="#retry"><span>retry</span></a></h2><p>用于对 <code>Promise</code> 任务进行重试，<code>times</code> 为重试次数，<code>delay</code> 为每次重试的间隔时间。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token generic-function"><span class="token function">retry</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>task<span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> times<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> delay<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h2 id="sleep" tabindex="-1"><a class="header-anchor" href="#sleep"><span>sleep</span></a></h2><p>等待一段时间，<code>ms</code> 为毫秒。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">sleep</span><span class="token punctuation">(</span>ms<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h2 id="saveas" tabindex="-1"><a class="header-anchor" href="#saveas"><span>saveAs</span></a></h2><p>打开弹窗选择路径，保存字节数据到本地文件，<code>binaryData</code> 为数据内容，<code>title</code> 为弹窗标题。</p><p>文件类型不限，扩展名需要自己填写。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">saveAs</span><span class="token punctuation">(</span>binaryData<span class="token operator">:</span> Uint8Array<span class="token punctuation">,</span> title <span class="token operator">=</span> <span class="token string">&#39;download&#39;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h2 id="saveaszip" tabindex="-1"><a class="header-anchor" href="#saveaszip"><span>saveAsZip</span></a></h2><p>打开弹窗选择路径，保存字节数据到本地文件，<code>binaryData</code> 为数据内容，<code>title</code> 为弹窗标题。</p><p>文件类型为 <code>.zip</code>，会自动补充。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">saveAsZip</span><span class="token punctuation">(</span>binaryData<span class="token operator">:</span> Uint8Array<span class="token punctuation">,</span> title <span class="token operator">=</span> <span class="token string">&#39;download&#39;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h2 id="tobase64" tabindex="-1"><a class="header-anchor" href="#tobase64"><span>toBase64</span></a></h2><p>将字符串转换为 Base64 编码，<code>str</code> 为字符串内容。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">static</span> <span class="token function">toBase64</span><span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h2 id="frombase64" tabindex="-1"><a class="header-anchor" href="#frombase64"><span>fromBase64</span></a></h2><p>将 Base64 编码转换为字符串，<code>b64</code> 为 Base64 编码内容。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">static</span> <span class="token function">fromBase64</span><span class="token punctuation">(</span>b64<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,29)]))}const r=a(p,[["render",i],["__file","misc.html.vue"]]),c=JSON.parse('{"path":"/builtin/modules/misc.html","title":"Misc","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"接口描述","slug":"接口描述","link":"#接口描述","children":[]},{"level":2,"title":"retry","slug":"retry","link":"#retry","children":[]},{"level":2,"title":"sleep","slug":"sleep","link":"#sleep","children":[]},{"level":2,"title":"saveAs","slug":"saveas","link":"#saveas","children":[]},{"level":2,"title":"saveAsZip","slug":"saveaszip","link":"#saveaszip","children":[]},{"level":2,"title":"toBase64","slug":"tobase64","link":"#tobase64","children":[]},{"level":2,"title":"fromBase64","slug":"frombase64","link":"#frombase64","children":[]}],"git":{"updatedTime":1733557745000,"contributors":[{"name":"Erioifpud","username":"Erioifpud","email":"erioifpud.cn@gmail.com","commits":1,"url":"https://github.com/Erioifpud"},{"name":"Erioifpud","username":"Erioifpud","email":"erioifpud@zuo.si","commits":3,"url":"https://github.com/Erioifpud"}]},"filePathRelative":"builtin/modules/misc.md"}');export{r as comp,c as data};
