import{_ as t,p as o,q as p,Q as a,t as s,v as e,a1 as r}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-lazyframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-lazyframe","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr filter (filter expression)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>filter expression</code>: Expression that define the column selection</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Filter dataframe using an expression</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr filter <span class="token punctuation">((</span>dfr col a<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">4</span><span class="token punctuation">)</span>
╭───┬───┬───╮
│ <span class="token comment"># │ a │ b │</span>
├───┼───┼───┤
│ <span class="token number">0</span> │ <span class="token number">6</span> │ <span class="token number">2</span> │
│ <span class="token number">1</span> │ <span class="token number">4</span> │ <span class="token number">2</span> │
╰───┴───┴───╯

</code></pre></div>`,7);function m(n,f){return o(),p("div",null,[a("h1",l,[i,s(),a("code",null,e(n.$frontmatter.title),1),s(" for lazyframe")]),a("div",u,e(n.$frontmatter.lazyframe),1),d])}const k=t(c,[["render",m],["__file","dfr_filter.html.vue"]]);export{k as default};
