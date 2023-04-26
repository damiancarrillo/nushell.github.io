import{_ as o,p as r,q as n,Q as a,t as e,v as s,a1 as d}from"./framework-344bb0e4.js";const i={},c={id:"frontmatter-title-for-dataframe",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),h={class:"command-title"},p=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr as-date (format) --not-exact</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>format</code>: formatting date string</li><li><code>--not-exact</code> <code>(-n)</code>: the format string may be contained in the date (e.g. foo-2021-01-01-bar could match 2021-01-01)</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>Format example: &quot;%Y-%m-%d&quot; =&gt; 2021-12-31 &quot;%d-%m-%Y&quot; =&gt; 31-12-2021 &quot;%Y%m%d&quot; =&gt; 2021319 (2021-03-19)</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts string to date</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;2021-12-30&quot;</span> <span class="token string">&quot;2021-12-31&quot;</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr as-datetime <span class="token string">&quot;%Y-%m-%d&quot;</span>

</code></pre></div>`,9);function m(t,u){return r(),n("div",null,[a("h1",c,[l,e(),a("code",null,s(t.$frontmatter.title),1),e(" for dataframe")]),a("div",h,s(t.$frontmatter.dataframe),1),p])}const g=o(i,[["render",m],["__file","dfr_as-date.html.vue"]]);export{g as default};
