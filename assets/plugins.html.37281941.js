import{_ as i,r as a,o as c,c as d,a as e,b as n,w as r,d as s,e as l}from"./app.954e968d.js";const p={},h=e("h1",{id:"\u63D2\u4EF6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u63D2\u4EF6","aria-hidden":"true"},"#"),s(" \u63D2\u4EF6")],-1),_=e("p",null,"Nu \u53EF\u4EE5\u901A\u8FC7\u63D2\u4EF6\u8FDB\u884C\u6269\u5C55\u3002\u63D2\u4EF6\u7684\u884C\u4E3A\u4E0E Nu \u7684\u5185\u7F6E\u547D\u4EE4\u5F88\u76F8\u4F3C\uFF0C\u53E6\u5916\u7684\u597D\u5904\u662F\u5B83\u4EEC\u53EF\u4EE5\u4E0E Nu \u672C\u8EAB\u5206\u5F00\u6DFB\u52A0\u3002",-1),u=s("Nu \u7684\u63D2\u4EF6\u662F\u53EF\u6267\u884C\u7684\uFF1BNu \u5728\u9700\u8981\u65F6\u542F\u52A8\u5B83\u4EEC\uFF0C\u5E76\u901A\u8FC7 "),g={href:"https://en.wikipedia.org/wiki/Standard_streams",target:"_blank",rel:"noopener noreferrer"},m=s("stdin, stdout \u548C stderr"),b=s(" \u4E0E\u5B83\u4EEC\u8FDB\u884C\u901A\u4FE1\u3002Nu \u7684\u63D2\u4EF6\u53EF\u4EE5\u4F7F\u7528 JSON \u6216 "),k={href:"https://capnproto.org/",target:"_blank",rel:"noopener noreferrer"},f=s("Cap'n Proto"),N=s(" \u4F5C\u4E3A\u5B83\u4EEC\u7684\u901A\u4FE1\u7F16\u7801\u65B9\u5F0F\u3002"),x=e("h2",{id:"\u6DFB\u52A0\u4E00\u4E2A\u63D2\u4EF6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6DFB\u52A0\u4E00\u4E2A\u63D2\u4EF6","aria-hidden":"true"},"#"),s(" \u6DFB\u52A0\u4E00\u4E2A\u63D2\u4EF6")],-1),v=s("\u8981\u6DFB\u52A0\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u8BF7\u8C03\u7528"),y=e("code",null,"register",-1),w=s("\u547D\u4EE4\u6765\u544A\u8BC9 Nu \u5728\u54EA\u91CC\u53EF\u4EE5\u627E\u5230\u5B83\uFF0C\u4E0E\u6B64\u540C\u65F6\uFF0C\u4F60\u8FD8\u9700\u8981\u544A\u8BC9 Nushell \u8FD9\u4E2A\u63D2\u4EF6\u4F7F\u7528\u4EC0\u4E48\u65B9\u5F0F\u8FDB\u884C\u7F16\u7801\u3002"),L=l(`<p>Linux+macOS:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> register --encoding<span class="token operator">=</span>capnp ./my_plugins/my-cool-plugin
</code></pre></div><p>Windows:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> register --encoding<span class="token operator">=</span>capnp .<span class="token punctuation">\\</span>my_plugins<span class="token punctuation">\\</span>my-cool-plugin.exe
</code></pre></div>`,4),S=s("\u5F53 "),V=e("code",null,"register",-1),B=s(" \u88AB\u8C03\u7528\u65F6\uFF1A"),C=l(`<ol><li>Nu \u542F\u52A8\u8BE5\u63D2\u4EF6\u5E76\u901A\u8FC7 stdin \u5411\u5176\u53D1\u9001 &quot;\u7B7E\u540D&quot; \u4FE1\u606F\uFF1B</li><li>\u63D2\u4EF6\u901A\u8FC7 stdout \u54CD\u5E94\uFF0C\u5305\u542B\u5176\u7B7E\u540D\uFF08\u540D\u79F0\u3001\u63CF\u8FF0\u3001\u53C2\u6570\u3001\u6807\u5FD7\u7B49\uFF09\u7684\u6D88\u606F\uFF1B</li><li>Nu \u5C06\u63D2\u4EF6\u7684\u7B7E\u540D\u4FDD\u5B58\u5728<code>$nu.plugin-path</code>\u4F4D\u7F6E\u7684\u6587\u4EF6\u4E2D\uFF0C\u56E0\u6B64\u5728\u6CE8\u518C\u4E4B\u540E\u7684\u591A\u6B21\u542F\u52A8\u4E2D\u90FD\u662F\u6709\u6548\u7684\uFF1B</li></ol><p>\u4E00\u65E6\u6CE8\u518C\uFF0C\u8BE5\u63D2\u4EF6\u5C31\u53EF\u4EE5\u4F5C\u4E3A\u4F60\u7684\u547D\u4EE4\u96C6\u7684\u4E00\u90E8\u5206\u88AB\u4F7F\u7528\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> commands <span class="token operator">|</span> where is_plugin <span class="token operator">==</span> <span class="token boolean">true</span>
</code></pre></div><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>Nu \u7684\u4E3B\u7248\u672C\u4E2D\u5305\u542B\u4E86\u4E00\u4E9B\u63D2\u4EF6\u7684\u4F8B\u5B50\uFF0C\u8FD9\u4E9B\u4F8B\u5B50\u5BF9\u5B66\u4E60\u63D2\u4EF6\u534F\u8BAE\u7684\u5DE5\u4F5C\u65B9\u5F0F\u5F88\u6709\u5E2E\u52A9\uFF1A</p>`,5),E={href:"https://github.com/nushell/nushell/tree/main/crates/nu_plugin_example",target:"_blank",rel:"noopener noreferrer"},R=s("Rust"),q={href:"https://github.com/nushell/nushell/blob/main/crates/nu_plugin_python/plugin.py",target:"_blank",rel:"noopener noreferrer"},I=s("Python"),O=e("h2",{id:"\u8C03\u8BD5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8C03\u8BD5","aria-hidden":"true"},"#"),s(" \u8C03\u8BD5")],-1),P=e("p",null,"\u8C03\u8BD5\u63D2\u4EF6\u7684\u6700\u7B80\u5355\u65B9\u6CD5\u662F\u6253\u5370\u5230 stderr\uFF1B\u63D2\u4EF6\u7684\u6807\u51C6\u9519\u8BEF\u6D41\u4F1A\u901A\u8FC7 Nu \u91CD\u5B9A\u5411\u5E76\u663E\u793A\u7ED9\u7528\u6237\u3002",-1),A=e("h2",{id:"\u5E2E\u52A9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5E2E\u52A9","aria-hidden":"true"},"#"),s(" \u5E2E\u52A9")],-1),D=s("Nu \u7684\u63D2\u4EF6\u6587\u6863\u5C1A\u5728\u64B0\u5199\u4E2D\uFF0C\u5982\u679C\u4F60\u5BF9\u67D0\u4EF6\u4E8B\u60C5\u4E0D\u786E\u5B9A "),G={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},J=s("Nu Discord"),T=s("\u4E0A\u7684 #plugins \u9891\u9053\u662F\u4E00\u4E2A\u63D0\u95EE\u7684\u597D\u5730\u65B9!");function W($,j){const t=a("ExternalLinkIcon"),o=a("RouterLink");return c(),d("div",null,[h,_,e("p",null,[u,e("a",g,[m,n(t)]),b,e("a",k,[f,n(t)]),N]),x,e("p",null,[v,n(o,{to:"/book/commands/register.html"},{default:r(()=>[y]),_:1}),w]),L,e("p",null,[S,n(o,{to:"/book/commands/register.html"},{default:r(()=>[V]),_:1}),B]),C,e("ul",null,[e("li",null,[e("a",E,[R,n(t)])]),e("li",null,[e("a",q,[I,n(t)])])]),O,P,A,e("p",null,[D,e("a",G,[J,n(t)]),T])])}var F=i(p,[["render",W],["__file","plugins.html.vue"]]);export{F as default};
