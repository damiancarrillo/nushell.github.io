import{_ as t,o as n,c as r,a as s,t as e,d as o,e as p}from"./app.954e968d.js";const l={},c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(),h={style:{"white-space":"pre-wrap"}},g=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str substring (range) ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>range</code>: the indexes to substring [start end]</li><li><code>...rest</code>: optionally substring text by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get a substring &quot;nushell&quot; from the text &quot;good nushell&quot;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;good nushell&#39;</span> <span class="token operator">|</span> str substring <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">12</span><span class="token punctuation">]</span>
</code></pre></div><p>Alternatively, you can use the form</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;good nushell&#39;</span> <span class="token operator">|</span> str substring <span class="token string">&#39;5,12&#39;</span>
</code></pre></div><p>Drop the last <code>n</code> characters from the string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;good nushell&#39;</span> <span class="token operator">|</span> str substring <span class="token string">&#39;,-5&#39;</span>
</code></pre></div><p>Get the remaining characters from a starting index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;good nushell&#39;</span> <span class="token operator">|</span> str substring <span class="token string">&#39;5,&#39;</span>
</code></pre></div><p>Get the characters from the beginning until ending index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;good nushell&#39;</span> <span class="token operator">|</span> str substring <span class="token string">&#39;,7&#39;</span>
</code></pre></div>`,15);function u(a,b){return n(),r("div",null,[s("h1",c,[i,d,s("code",null,e(a.$frontmatter.title),1)]),s("div",h,e(a.$frontmatter.usage),1),g])}var m=t(l,[["render",u],["__file","str_substring.html.vue"]]);export{m as default};
