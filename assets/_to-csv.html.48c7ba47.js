import{_ as e,o as t,c as o,a,t as n,d as p,e as c}from"./app.954e968d.js";const r={},i={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=p(),u={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; to-csv (file) --delimiter --no-header</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>file</code>: file path to save dataframe</li><li><code>--delimiter {string}</code>: file delimiter character</li><li><code>--no-header</code>: Indicates if file doesn&#39;t have header</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Saves dataframe to csv file</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> to-df <span class="token operator">|</span> to-csv test.csv
</code></pre></div><p>Saves dataframe to csv file using other delimiter</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> to-df <span class="token operator">|</span> to-csv test.csv -d <span class="token string">&#39;|&#39;</span>
</code></pre></div>`,9);function k(s,m){return t(),o("div",null,[a("h1",i,[l,d,a("code",null,n(s.$frontmatter.title),1)]),a("div",u,n(s.$frontmatter.usage),1),h])}var _=e(r,[["render",k],["__file","_to-csv.html.vue"]]);export{_ as default};
