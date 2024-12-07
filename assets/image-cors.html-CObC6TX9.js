import{_ as a,c as t,a as s,o as i}from"./app-CQ0RYBrR.js";const n={};function l(r,e){return i(),t("div",null,e[0]||(e[0]=[s(`<h1 id="图片跨域" tabindex="-1"><a class="header-anchor" href="#图片跨域"><span>图片跨域</span></a></h1><p>内置的 HTTP 模块是 Tauri 请求的包装，所以可以跨域进行请求，不受浏览器限制。</p><p>这个接口用于一些需要跨域访问图片，但又无法使用 HTTP 模块解决的场景。</p><h2 id="跨域访问图片数据" tabindex="-1"><a class="header-anchor" href="#跨域访问图片数据"><span>跨域访问图片数据</span></a></h2><p>访问需要跨域访问的图片。</p><h3 id="请求" tabindex="-1"><a class="header-anchor" href="#请求"><span>请求</span></a></h3><ul><li>Method: <code>GET</code></li><li>Content Type: <code>application/json</code></li><li>URL: <code>/api/image_cors</code></li></ul><h3 id="url-query-参数" tabindex="-1"><a class="header-anchor" href="#url-query-参数"><span>URL Query 参数</span></a></h3><table><thead><tr><th>字段</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td><code>url</code></td><td>string</td><td>true</td><td>需要访问的图片地址</td></tr></tbody></table><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">--location</span> <span class="token string">&#39;localhost:56789/api/image_cors?url=https://www.httpbin.org/image&#39;</span> <span class="token punctuation">\\</span></span>
<span class="line">&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const o=a(n,[["render",l],["__file","image-cors.html.vue"]]),c=JSON.parse('{"path":"/apis/modules/image-cors.html","title":"图片跨域","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"跨域访问图片数据","slug":"跨域访问图片数据","link":"#跨域访问图片数据","children":[{"level":3,"title":"请求","slug":"请求","link":"#请求","children":[]},{"level":3,"title":"URL Query 参数","slug":"url-query-参数","link":"#url-query-参数","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]}],"git":{"updatedTime":1723120845000,"contributors":[{"name":"Erioifpud","username":"Erioifpud","email":"erioifpud@zuo.si","commits":1,"url":"https://github.com/Erioifpud"}]},"filePathRelative":"apis/modules/image-cors.md"}');export{o as comp,c as data};
