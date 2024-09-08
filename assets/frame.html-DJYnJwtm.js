import{_ as s,c as n,o as a,a as e}from"./app-BJ9HRwS6.js";const p={},t=e(`<h1 id="frame" tabindex="-1"><a class="header-anchor" href="#frame"><span>Frame</span></a></h1><p>Webview 窗口相关的操作。</p><h2 id="接口描述" tabindex="-1"><a class="header-anchor" href="#接口描述"><span>接口描述</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">WindowOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  userAgent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  fileDropEnabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  center<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  x<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  y<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  height<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  minWidth<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  minHeight<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  resizable<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  maximizable<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  minimizable<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  closable<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  fullscreen<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  focused<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  transparent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  maximized<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  visible<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  decorations<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  alwaysOnTop<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  contentProtected<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  skipTaskbar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  theme<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;Light&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Dark&#39;</span><span class="token punctuation">;</span></span>
<span class="line">  titleBarStyle<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;Visible&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Transparent&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Overlay&#39;</span><span class="token punctuation">;</span></span>
<span class="line">  hiddenTitle<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  acceptFirstMouse<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  tabbingIdentifier<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  additionalBroswerArgs<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="createwindow" tabindex="-1"><a class="header-anchor" href="#createwindow"><span>createWindow</span></a></h2><p>创建 Webview 窗口，参考 Tauri 文档，返回窗口的 <code>label</code>。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">createWindow</span><span class="token punctuation">(</span>options<span class="token operator">:</span> WindowOptions<span class="token punctuation">,</span> reusable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h2 id="closewindow" tabindex="-1"><a class="header-anchor" href="#closewindow"><span>closeWindow</span></a></h2><p>通过窗口的 <code>label</code> 关闭窗口。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">closeWindow</span><span class="token punctuation">(</span>label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),o=[t];function l(i,c){return a(),n("div",null,o)}const u=s(p,[["render",l],["__file","frame.html.vue"]]),d=JSON.parse('{"path":"/builtin/modules/frame.html","title":"Frame","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"接口描述","slug":"接口描述","link":"#接口描述","children":[]},{"level":2,"title":"createWindow","slug":"createwindow","link":"#createwindow","children":[]},{"level":2,"title":"closeWindow","slug":"closewindow","link":"#closewindow","children":[]}],"git":{"updatedTime":1725784837000,"contributors":[{"name":"Erioifpud","email":"erioifpud@zuo.si","commits":1}]},"filePathRelative":"builtin/modules/frame.md"}');export{u as comp,d as data};
