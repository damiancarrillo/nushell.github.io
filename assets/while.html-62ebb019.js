import{_ as t,p as o,q as r,Q as a,t as s,v as n,a1 as c}from"./framework-344bb0e4.js";const l={},i={id:"frontmatter-title-for-core",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; while (cond) (block)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>cond</code>: condition to check</li><li><code>block</code>: block to loop if check succeeds</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Loop while a condition is true</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> mut x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token keyword">while</span> <span class="token variable">$x</span> <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">{</span> <span class="token variable">$x</span> <span class="token operator">=</span> <span class="token variable">$x</span> + <span class="token number">1</span> <span class="token punctuation">}</span>

</code></pre></div>`,7);function u(e,k){return o(),r("div",null,[a("h1",i,[p,s(),a("code",null,n(e.$frontmatter.title),1),s(" for core")]),a("div",d,n(e.$frontmatter.core),1),h])}const f=t(l,[["render",u],["__file","while.html.vue"]]);export{f as default};
