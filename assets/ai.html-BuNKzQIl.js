import{_ as s,c as n,o as a,a as e}from"./app-D5czWaTr.js";const p={},l=e(`<h1 id="ai" tabindex="-1"><a class="header-anchor" href="#ai"><span>AI</span></a></h1><p>AI 相关的操作，比如使用通义千问模型进行问答。</p><h2 id="接口定义" tabindex="-1"><a class="header-anchor" href="#接口定义"><span>接口定义</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">CommonMessage</span> <span class="token punctuation">{</span></span>
<span class="line">  role<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  content<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Message</span> <span class="token operator">=</span> CommonMessage</span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Choice</span> <span class="token punctuation">{</span></span>
<span class="line">  message<span class="token operator">:</span> Message</span>
<span class="line">  finish_reason<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">QwenOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  model<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  input<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    prompt<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">    messages<span class="token operator">?</span><span class="token operator">:</span> Message<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  parameters<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    result_format<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">    seed<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">    max_tokens<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">    top_p<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">    top_k<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">    repetition_penalty<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">    temperature<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">    stop<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    enable_search<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">    incremental_output<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">QwenResponse</span> <span class="token punctuation">{</span></span>
<span class="line">  output<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    text<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">    finish_reason<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">    choices<span class="token operator">:</span> Choice<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  usage<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    output_tokens<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">    input_tokens<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">    total_tokens<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  request_id<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">QwenChatRawOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  model<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  messages<span class="token operator">:</span> Message<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  key<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">QwenChatOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  model<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  question<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  key<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="qwenchatraw" tabindex="-1"><a class="header-anchor" href="#qwenchatraw"><span>qwenChatRaw</span></a></h2><p>通过千问 HTTP 接口进行问答，不对结果进行预处理，返回<strong>原始响应</strong>。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">qwenChatRaw</span><span class="token punctuation">(</span>options<span class="token operator">:</span> QwenChatRawOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>QwenResponse<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h2 id="qwenchatsimple" tabindex="-1"><a class="header-anchor" href="#qwenchatsimple"><span>qwenChatSimple</span></a></h2><p>通过千问 HTTP 接口进行问答，主要参数是 question 字符串，返回的是<strong>字符串形式的答案</strong>。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">qwenChatSimple</span><span class="token punctuation">(</span>options<span class="token operator">:</span> QwenChatOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h2 id="qwenchat" tabindex="-1"><a class="header-anchor" href="#qwenchat"><span>qwenChat</span></a></h2><p>通过千问 HTTP 接口进行问答，主要参数 messages 数组，用于定义聊天上下文，返回是<strong>字符串形式的答案</strong>。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">qwenChat</span><span class="token punctuation">(</span>options<span class="token operator">:</span> QwenChatRawOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),t=[l];function i(o,c){return a(),n("div",null,t)}const u=s(p,[["render",i],["__file","ai.html.vue"]]),d=JSON.parse('{"path":"/builtin/modules/ai.html","title":"AI","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"接口定义","slug":"接口定义","link":"#接口定义","children":[]},{"level":2,"title":"qwenChatRaw","slug":"qwenchatraw","link":"#qwenchatraw","children":[]},{"level":2,"title":"qwenChatSimple","slug":"qwenchatsimple","link":"#qwenchatsimple","children":[]},{"level":2,"title":"qwenChat","slug":"qwenchat","link":"#qwenchat","children":[]}],"git":{"updatedTime":1716976716000,"contributors":[{"name":"Erioifpud","email":"erioifpud@zuo.si","commits":1}]},"filePathRelative":"builtin/modules/ai.md"}');export{u as comp,d as data};
