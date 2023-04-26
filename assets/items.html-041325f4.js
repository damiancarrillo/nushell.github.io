import{_ as n,p as o,q as r,Q as e,t as s,v as t,a1 as c}from"./framework-344bb0e4.js";const i={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),p={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; items (closure)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>closure</code>: the closure to run</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>This is a the fusion of <code>columns</code>, <code>values</code> and <code>each</code>.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Iterate over each key-value pair of a record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span> new: york, san: francisco <span class="token punctuation">}</span> <span class="token operator">|</span> items <span class="token punctuation">{</span><span class="token operator">|</span>key, value<span class="token operator">|</span> <span class="token builtin class-name">echo</span> <span class="token string">$&#39;($key) ($value)&#39;</span> <span class="token punctuation">}</span>
╭───┬───────────────╮
│ <span class="token number">0</span> │ new york      │
│ <span class="token number">1</span> │ san francisco │
╰───┴───────────────╯

</code></pre></div>`,9);function u(a,f){return o(),r("div",null,[e("h1",l,[d,s(),e("code",null,t(a.$frontmatter.title),1),s(" for filters")]),e("div",p,t(a.$frontmatter.filters),1),h])}const k=n(i,[["render",u],["__file","items.html.vue"]]);export{k as default};
