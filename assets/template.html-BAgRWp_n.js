import{_ as a,c as n,a as e,o as t}from"./app-CQ0RYBrR.js";const p={};function o(i,s){return t(),n("div",null,s[0]||(s[0]=[e(`<h1 id="template" tabindex="-1"><a class="header-anchor" href="#template"><span>Template</span></a></h1><p>使用低代码编辑器创建的模板的相关的操作。</p><h2 id="showraw" tabindex="-1"><a class="header-anchor" href="#showraw"><span>showRaw</span></a></h2><p>引用低代码模板，渲染组件到试验场中，<code>id</code> 为模板 id，<code>propsData</code> 为渲染时传入的组件属性。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">static</span> <span class="token function">showRaw</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> propsData<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h2 id="show" tabindex="-1"><a class="header-anchor" href="#show"><span>show</span></a></h2><p>引用低代码模板，渲染组件到试验场中，<code>id</code> 为模板 id，<code>propsData</code> 为渲染时传入的组件属性，<code>wrapperStyle</code> 为 <code>iframe</code> 容器的样式。</p><p>渲染结果会通过 <code>iframe</code> 包裹，支持截图等功能，参考 <code>App.showComponent</code>。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">static</span> <span class="token function">show</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> propsData<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> wrapperStyle<span class="token operator">?</span><span class="token operator">:</span> CSSProperties<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h2 id="use" tabindex="-1"><a class="header-anchor" href="#use"><span>use</span></a></h2><p>引用低代码模板，传入数据，获取组件的构造函数，通常用在脚本的 jsx 中，<code>id</code> 为模板 id，<code>propsData</code> 为渲染时传入的组件属性。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">static</span> <span class="token function">use</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> propsData<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactElement<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">string</span> <span class="token operator">|</span> React<span class="token punctuation">.</span>JSXElementConstructor<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h2 id="rendertostring" tabindex="-1"><a class="header-anchor" href="#rendertostring"><span>renderToString</span></a></h2><p>渲染模板为字符串，<code>id</code> 为模板 id，<code>propsData</code> 为渲染时传入的组件属性。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">static</span> <span class="token function">renderToString</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> propsData<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h2 id="rendertoimage" tabindex="-1"><a class="header-anchor" href="#rendertoimage"><span>renderToImage</span></a></h2><p>渲染模板为图片，<code>id</code> 为模板 id，<code>propsData</code> 为渲染时传入的组件属性，<code>options</code> 为截图配置，返回图片的 base64 编码数据。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">renderToImage</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> propsData<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> options<span class="token operator">:</span> <span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> scale<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,22)]))}const l=a(p,[["render",o],["__file","template.html.vue"]]),c=JSON.parse('{"path":"/builtin/modules/template.html","title":"Template","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"showRaw","slug":"showraw","link":"#showraw","children":[]},{"level":2,"title":"show","slug":"show","link":"#show","children":[]},{"level":2,"title":"use","slug":"use","link":"#use","children":[]},{"level":2,"title":"renderToString","slug":"rendertostring","link":"#rendertostring","children":[]},{"level":2,"title":"renderToImage","slug":"rendertoimage","link":"#rendertoimage","children":[]}],"git":{"updatedTime":1733557745000,"contributors":[{"name":"Erioifpud","username":"Erioifpud","email":"erioifpud.cn@gmail.com","commits":1,"url":"https://github.com/Erioifpud"},{"name":"Erioifpud","username":"Erioifpud","email":"erioifpud@zuo.si","commits":2,"url":"https://github.com/Erioifpud"}]},"filePathRelative":"builtin/modules/template.md"}');export{l as comp,c as data};