import{_ as a,c as n,o as e,a as s}from"./app-C9xD3bv1.js";const t={},i=s(`<h1 id="远程调用" tabindex="-1"><a class="header-anchor" href="#远程调用"><span>远程调用</span></a></h1><p>顾名思义，就是通过外部方式去执行脚本，再让脚本返回数据作为响应。</p><p>目前只有 HTTP 这一种远程调用方式。</p><h2 id="http" tabindex="-1"><a class="header-anchor" href="#http"><span>HTTP</span></a></h2><h3 id="调用脚本" tabindex="-1"><a class="header-anchor" href="#调用脚本"><span>调用脚本</span></a></h3><h4 id="请求" tabindex="-1"><a class="header-anchor" href="#请求"><span>请求</span></a></h4><ul><li>Method: <code>POST</code></li><li>Content Type: <code>application/json</code></li><li>URL: <code>/api/run</code></li></ul><h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h4><table><thead><tr><th>字段</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td><code>id</code></td><td>string</td><td>true</td><td>脚本 id</td></tr><tr><td><code>data</code></td><td>any</td><td>true</td><td>传入脚本的参数</td></tr></tbody></table><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">--location</span> <span class="token string">&#39;localhost:56789/api/run&#39;</span> <span class="token punctuation">\\</span></span>
<span class="line"><span class="token parameter variable">--header</span> <span class="token string">&#39;Content-Type: application/json&#39;</span> <span class="token punctuation">\\</span></span>
<span class="line"><span class="token parameter variable">--data</span> <span class="token string">&#39;{</span>
<span class="line">    &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,</span>
<span class="line">    &quot;data&quot;: {</span>
<span class="line">        &quot;hello&quot;: &quot;world&quot;</span>
<span class="line">    }</span>
<span class="line">}&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[i];function d(c,o){return e(),n("div",null,l)}const p=a(t,[["render",d],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/remote-call/","title":"远程调用","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"HTTP","slug":"http","link":"#http","children":[{"level":3,"title":"调用脚本","slug":"调用脚本","link":"#调用脚本","children":[]}]}],"git":{"updatedTime":1720787457000,"contributors":[{"name":"Erioifpud","email":"erioifpud@zuo.si","commits":1}]},"filePathRelative":"remote-call/index.md"}');export{p as comp,h as data};
