import{_ as t,o as n,c as o,a as e,t as s,d as r,e as c}from"./app.954e968d.js";const l={},d={id:"frontmatter-title",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=r(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; g (shell_number)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>shell_number</code>: shell number to change to</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Make two directories and enter new shells for them, use <code>g</code> to jump to the specific shell</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mkdir</span> foo bar<span class="token punctuation">;</span> enter foo<span class="token punctuation">;</span> enter <span class="token punctuation">..</span>/bar<span class="token punctuation">;</span> g <span class="token number">1</span>
</code></pre></div><p>Use <code>shells</code> to show all the opened shells and run <code>g 2</code> to jump to the third one</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> shells<span class="token punctuation">;</span> g <span class="token number">2</span>
</code></pre></div>`,9);function m(a,g){return n(),o("div",null,[e("h1",d,[i,p,e("code",null,s(a.$frontmatter.title),1)]),e("div",h,s(a.$frontmatter.usage),1),u])}var f=t(l,[["render",m],["__file","g.html.vue"]]);export{f as default};
