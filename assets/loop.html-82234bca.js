import{_ as t,p as o,q as r,Q as a,t as e,v as n,a1 as p}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-core",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; loop (block)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>block</code>: block to loop</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Loop while a condition is true</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> mut x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> loop <span class="token punctuation">{</span> <span class="token keyword">if</span> <span class="token variable">$x</span> <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token punctuation">{</span> <span class="token builtin class-name">break</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token variable">$x</span> <span class="token operator">=</span> <span class="token variable">$x</span> + <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token variable">$x</span>
<span class="token number">11</span>
</code></pre></div>`,7);function h(s,k){return o(),r("div",null,[a("h1",l,[i,e(),a("code",null,n(s.$frontmatter.title),1),e(" for core")]),a("div",d,n(s.$frontmatter.core),1),u])}const b=t(c,[["render",h],["__file","loop.html.vue"]]);export{b as default};
