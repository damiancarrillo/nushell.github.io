import{_ as o,p,q as r,Q as a,t as s,v as e,a1 as t}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-expression",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-expression","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=t(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr quantile (quantile)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>quantile</code>: quantile value for quantile operation</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Quantile aggregation for a group-by</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>one <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>one <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>two <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> dfr into-df
    <span class="token operator">|</span> dfr group-by a
    <span class="token operator">|</span> dfr agg <span class="token punctuation">(</span>dfr col b <span class="token operator">|</span> dfr quantile <span class="token number">0.5</span><span class="token punctuation">)</span>
╭───┬─────┬────────╮
│ <span class="token comment"># │  a  │   b    │</span>
├───┼─────┼────────┤
│ <span class="token number">0</span> │ one │ <span class="token number">4.0000</span> │
│ <span class="token number">1</span> │ two │ <span class="token number">1.0000</span> │
╰───┴─────┴────────╯

</code></pre></div>`,7),h={id:"frontmatter-title-for-lazyframe",tabindex:"-1"},m=a("a",{class:"header-anchor",href:"#frontmatter-title-for-lazyframe","aria-hidden":"true"},"#",-1),k={class:"command-title"},f=t(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr quantile (quantile)</code></p><h2 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h2><ul><li><code>quantile</code>: quantile value for quantile operation</li></ul><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>quantile value from columns in a dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr quantile <span class="token number">0.5</span>
╭───┬────────┬────────╮
│ <span class="token comment"># │   a    │   b    │</span>
├───┼────────┼────────┤
│ <span class="token number">0</span> │ <span class="token number">4.0000</span> │ <span class="token number">2.0000</span> │
╰───┴────────┴────────╯

</code></pre></div>`,7);function b(n,g){return p(),r("div",null,[a("h1",l,[i,s(),a("code",null,e(n.$frontmatter.title),1),s(" for expression")]),a("div",u,e(n.$frontmatter.expression),1),d,a("h1",h,[m,s(),a("code",null,e(n.$frontmatter.title),1),s(" for lazyframe")]),a("div",k,e(n.$frontmatter.lazyframe),1),f])}const x=o(c,[["render",b],["__file","dfr_quantile.html.vue"]]);export{x as default};
