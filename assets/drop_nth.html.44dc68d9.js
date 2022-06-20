import{_ as e,o as t,c as o,a,t as n,d as p,e as r}from"./app.954e968d.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=p(),i={style:{"white-space":"pre-wrap"}},h=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; drop nth (row number or row range) ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>row number or row range</code>: the number of the row to drop or a range to drop consecutive rows</li><li><code>...rest</code>: the number of the row to drop</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Drop the first, second, and third row</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>sam,sarah,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> drop nth <span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span>
</code></pre></div><p>Drop the first, second, and third row</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> drop nth <span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span>
</code></pre></div><p>Drop rows 0 2 4</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> drop nth <span class="token number">0</span> <span class="token number">2</span> <span class="token number">4</span>
</code></pre></div><p>Drop rows 2 0 4</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> drop nth <span class="token number">2</span> <span class="token number">0</span> <span class="token number">4</span>
</code></pre></div><p>Drop range rows from second to fourth</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>first second third fourth fifth<span class="token punctuation">]</span> <span class="token operator">|</span> drop nth <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre></div><p>Drop all rows except first row</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> drop nth <span class="token number">1</span><span class="token punctuation">..</span>
</code></pre></div><p>Drop rows 3,4,5</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> drop nth <span class="token number">3</span><span class="token punctuation">..</span>
</code></pre></div>`,19);function k(s,g){return t(),o("div",null,[a("h1",l,[u,d,a("code",null,n(s.$frontmatter.title),1)]),a("div",i,n(s.$frontmatter.usage),1),h])}var m=e(c,[["render",k],["__file","drop_nth.html.vue"]]);export{m as default};
