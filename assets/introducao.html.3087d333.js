import{_ as s,o as a,c as n,e as o}from"./app.954e968d.js";const e={},p=o(`<h1 id="introducao" tabindex="-1"><a class="header-anchor" href="#introducao" aria-hidden="true">#</a> Introdu\xE7\xE3o</h1><p>Ol\xE1! Seja bem vindo ao projeto Nushell. O objetivo desse projeto \xE9 trazer a filosofia de shells do Unix, onde pipes conectam comandos simples, para o estilo moderno de desenvolvimento.</p><p>Nu usa dicas de v\xE1rios terrenos familiares: shells tradicionais como bash, shells avan\xE7ados como PowerShell, programa\xE7\xE3o funcional, programa\xE7\xE3o de sistemas, e outros. Por\xE9m, mais do que tentar ser &quot;pau pra toda obra&quot;, Nu foca sua energia em fazer poucas coisas muito bem:</p><ul><li>Criar um shell multiplataforma flex\xEDvel para o programador moderno da era GitHub</li><li>Permitir que voc\xEA combine aplica\xE7\xF5es de linha de comando com um shell que entende a estrutura dos seus dados</li><li>Ter o mesmo n\xEDvel de polimento de UX (exper\xEAncia do usu\xE1rio) fornecido pelas aplica\xE7\xF5es CLI modernas</li></ul><p>O jeito mais f\xE1cil de ver o que o Nu pode fazer \xE9 come\xE7ar com alguns exemplos, ent\xE3o vamos nessa.</p><p>A primeira coisa que voc\xEA vai perceber quando rodar um comando como <code>ls</code> \xE9 que ao inv\xE9s de um bloco de texto, voc\xEA recebe de volta uma tabela estruturada.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
----+------------------+-----------+----------+----------+----------------+----------------
 <span class="token comment">#  | name             | type      | readonly | size     | accessed       | modified</span>
----+------------------+-----------+----------+----------+----------------+----------------
 <span class="token number">0</span>  <span class="token operator">|</span> .azure           <span class="token operator">|</span> Directory <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">4.1</span> KB   <span class="token operator">|</span> <span class="token number">2</span> months ago   <span class="token operator">|</span> a week ago
 <span class="token number">1</span>  <span class="token operator">|</span> IMG_1291.jpg     <span class="token operator">|</span> File      <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">115.5</span> KB <span class="token operator">|</span> a month ago    <span class="token operator">|</span> <span class="token number">4</span> months ago
 <span class="token number">2</span>  <span class="token operator">|</span> Cargo.toml       <span class="token operator">|</span> File      <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">3.1</span> KB   <span class="token operator">|</span> <span class="token number">17</span> minutes ago <span class="token operator">|</span> <span class="token number">17</span> minutes ago
 <span class="token number">3</span>  <span class="token operator">|</span> LICENSE          <span class="token operator">|</span> File      <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">1.1</span> KB   <span class="token operator">|</span> <span class="token number">2</span> months ago   <span class="token operator">|</span> <span class="token number">2</span> months ago
 <span class="token number">4</span>  <span class="token operator">|</span> readonly.txt     <span class="token operator">|</span> File      <span class="token operator">|</span> <span class="token builtin class-name">readonly</span> <span class="token operator">|</span> <span class="token operator">&lt;</span>empty<span class="token operator">&gt;</span>  <span class="token operator">|</span> a month ago    <span class="token operator">|</span> a month ago
 <span class="token number">5</span>  <span class="token operator">|</span> target           <span class="token operator">|</span> Directory <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">4.1</span> KB   <span class="token operator">|</span> <span class="token number">2</span> days ago     <span class="token operator">|</span> <span class="token number">15</span> minutes ago
<span class="token punctuation">..</span>.
</code></pre></div><p>Essa tabela faz mais do que somente mostrar o diret\xF3rio de um jeito diferente. Assim como uma planilha, ela nos permite trabalhar com os dados interativamente.</p><p>A primeira coisa que vamos fazer \xE9 ordenar a tabela por nome. Para isso, vamos direcionar a sa\xEDda do <code>ls</code> para um comando capaz de ordenar tabelas com base no conte\xFAdo de uma coluna.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by name
----+------------------+-----------+----------+----------+----------------+----------------
 <span class="token comment">#  | name             | type      | readonly | size     | accessed       | modified</span>
----+------------------+-----------+----------+----------+----------------+----------------
 <span class="token number">0</span>  <span class="token operator">|</span> .azure           <span class="token operator">|</span> Directory <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">4.1</span> KB   <span class="token operator">|</span> <span class="token number">2</span> months ago   <span class="token operator">|</span> a week ago
 <span class="token number">1</span>  <span class="token operator">|</span> .cargo           <span class="token operator">|</span> Directory <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">4.1</span> KB   <span class="token operator">|</span> <span class="token number">2</span> months ago   <span class="token operator">|</span> <span class="token number">2</span> months ago
 <span class="token number">2</span>  <span class="token operator">|</span> .editorconfig    <span class="token operator">|</span> File      <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">148</span> B    <span class="token operator">|</span> <span class="token number">2</span> months ago   <span class="token operator">|</span> <span class="token number">2</span> months ago
 <span class="token number">3</span>  <span class="token operator">|</span> .git             <span class="token operator">|</span> Directory <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">4.1</span> KB   <span class="token operator">|</span> <span class="token number">2</span> months ago   <span class="token operator">|</span> <span class="token number">20</span> minutes ago
 <span class="token number">4</span>  <span class="token operator">|</span> .gitignore       <span class="token operator">|</span> File      <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">58</span> B     <span class="token operator">|</span> a week ago     <span class="token operator">|</span> a week ago
 <span class="token number">5</span>  <span class="token operator">|</span> .vscode          <span class="token operator">|</span> Directory <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">4.1</span> KB   <span class="token operator">|</span> a month ago    <span class="token operator">|</span> a month ago
<span class="token punctuation">..</span>.
</code></pre></div><p>Voc\xEA pode ver que, para fazer isso funcionar, n\xE3o passamos par\xE2metros de linha de comando para o <code>ls</code>. Ao inv\xE9s disso, usamos o comando <code>sort-by</code>, fornecido pelo Nu, para ordenar a sa\xEDda do comando <code>ls</code>.</p><p>O Nu fornece muitos comandos que trabalham com tabelas. Por exemplo, podemos filtrar o conte\xFAdo da tabela do <code>ls</code> para que ela mostre apenas os arquivos com mais de 4 kilobytes:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 4kb
----+----------------+------+----------+----------+----------------+----------------
 <span class="token comment">#  | name           | type | readonly | size     | accessed       | modified</span>
----+----------------+------+----------+----------+----------------+----------------
 <span class="token number">0</span>  <span class="token operator">|</span> IMG_1291.jpg   <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">115.5</span> KB <span class="token operator">|</span> a month ago    <span class="token operator">|</span> <span class="token number">4</span> months ago
 <span class="token number">1</span>  <span class="token operator">|</span> README.md      <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">11.1</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago     <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">2</span>  <span class="token operator">|</span> IMG_1291.png   <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">589.0</span> KB <span class="token operator">|</span> a month ago    <span class="token operator">|</span> a month ago
 <span class="token number">3</span>  <span class="token operator">|</span> IMG_1381.jpg   <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">81.0</span> KB  <span class="token operator">|</span> a month ago    <span class="token operator">|</span> <span class="token number">4</span> months ago
 <span class="token number">4</span>  <span class="token operator">|</span> butterfly.jpeg <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">4.2</span> KB   <span class="token operator">|</span> a month ago    <span class="token operator">|</span> a month ago
 <span class="token number">5</span>  <span class="token operator">|</span> Cargo.lock     <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">199.6</span> KB <span class="token operator">|</span> <span class="token number">22</span> minutes ago <span class="token operator">|</span> <span class="token number">22</span> minutes ago
</code></pre></div><p>Assim como na filosofia Unix, fazer os comandos conversarem uns com os outros nos permite combin\xE1-los de muitas maneiras diferentes. Vamos ver outro comando:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span>
-----+-------+----------+------+--------------------------------------------------------------------------------
 <span class="token comment">#   | pid   | status   | cpu  | name</span>
-----+-------+----------+------+--------------------------------------------------------------------------------
 <span class="token number">0</span>   <span class="token operator">|</span> <span class="token number">1003</span>  <span class="token operator">|</span> Unknown  <span class="token operator">|</span> <span class="token number">0.00</span> <span class="token operator">|</span>
 <span class="token number">1</span>   <span class="token operator">|</span> <span class="token number">1515</span>  <span class="token operator">|</span> Sleeping <span class="token operator">|</span> <span class="token number">0.00</span> <span class="token operator">|</span> /usr/lib/gnome-settings-daemon/gsd-screensaver-proxy
 <span class="token number">2</span>   <span class="token operator">|</span> <span class="token number">2128</span>  <span class="token operator">|</span> Sleeping <span class="token operator">|</span> <span class="token number">0.00</span> <span class="token operator">|</span> /usr/lib/gnome-settings-daemon/gsd-screensaver-proxy
 <span class="token number">3</span>   <span class="token operator">|</span> <span class="token number">2285</span>  <span class="token operator">|</span> Unknown  <span class="token operator">|</span> <span class="token number">0.00</span> <span class="token operator">|</span>
 <span class="token number">4</span>   <span class="token operator">|</span> <span class="token number">8872</span>  <span class="token operator">|</span> Sleeping <span class="token operator">|</span> <span class="token number">0.00</span> <span class="token operator">|</span> /usr/lib/gvfs/gvfsd-dnssd--spawner:1.23/org/gtk/gvfs/exec_spaw/4
 <span class="token number">5</span>   <span class="token operator">|</span> <span class="token number">1594</span>  <span class="token operator">|</span> Sleeping <span class="token operator">|</span> <span class="token number">0.00</span> <span class="token operator">|</span> /usr/lib/ibus/ibus-engine-simple
</code></pre></div><p>Voc\xEA deve conhecer o comando <code>ps</code> se j\xE1 usou Linux. Com ele, vemos uma lista com todos os processos que o sistema est\xE1 rodando atualmente, seus estados e seus nomes. Tamb\xE9m podemos ver a carga de CPU para cada processo.</p><p>E se quis\xE9ssemos mostrar somente os processos que est\xE3o usando a CPU de fato? Exatamente como fizemos com o comando <code>ls</code> anteriormente, podemos tamb\xE9m manipular a tabela que o comando <code>ps</code> nos retorna:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where cpu <span class="token operator">&gt;</span> <span class="token number">10</span>
---+-------+----------+-------+-----------------------------
 <span class="token comment"># | pid   | status   | cpu   | name</span>
---+-------+----------+-------+-----------------------------
 <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">1992</span>  <span class="token operator">|</span> Sleeping <span class="token operator">|</span> <span class="token number">44.52</span> <span class="token operator">|</span> /usr/bin/gnome-shell
 <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">1069</span>  <span class="token operator">|</span> Sleeping <span class="token operator">|</span> <span class="token number">16.15</span> <span class="token operator">|</span>
 <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">24116</span> <span class="token operator">|</span> Sleeping <span class="token operator">|</span> <span class="token number">13.70</span> <span class="token operator">|</span> /opt/google/chrome/chrome
 <span class="token number">3</span> <span class="token operator">|</span> <span class="token number">21976</span> <span class="token operator">|</span> Sleeping <span class="token operator">|</span> <span class="token number">12.67</span> <span class="token operator">|</span> /usr/share/discord/Discord
</code></pre></div><p>At\xE9 agora vimos como usar <code>ls</code> e <code>ps</code> para listar arquivos e processos. O Nu tamb\xE9m oferece outros comandos que podem criar tabelas com informa\xE7\xF5es \xFAteis. A seguir vamos explorar <code>date</code> e <code>sys</code>.</p><p>Ao executar <code>date</code> obtemos informa\xE7\xF5es sobre a data e hora correntes:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span>
------+-------+-----+------+--------+--------+----------
 year <span class="token operator">|</span> month <span class="token operator">|</span> day <span class="token operator">|</span> hour <span class="token operator">|</span> minute <span class="token operator">|</span> second <span class="token operator">|</span> timezone
------+-------+-----+------+--------+--------+----------
 <span class="token number">2019</span> <span class="token operator">|</span> <span class="token number">8</span>     <span class="token operator">|</span> <span class="token number">17</span>  <span class="token operator">|</span> <span class="token number">19</span>   <span class="token operator">|</span> <span class="token number">20</span>     <span class="token operator">|</span> <span class="token number">50</span>     <span class="token operator">|</span> +12:00
------+-------+-----+------+--------+--------+----------
</code></pre></div><p>E ao executar <code>sys</code> obtemos informa\xE7\xF5es sobre o sistema em que o Nu est\xE1 rodando:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys
----------+----------+-----------+----------+-----------+-----------
 <span class="token function">host</span>     <span class="token operator">|</span> cpu      <span class="token operator">|</span> disks     <span class="token operator">|</span> mem      <span class="token operator">|</span> temp      <span class="token operator">|</span> net
----------+----------+-----------+----------+-----------+-----------
 <span class="token punctuation">[</span>object<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span>object<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token number">3</span> items<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span>object<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token number">3</span> items<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token number">3</span> items<span class="token punctuation">]</span>
----------+----------+-----------+----------+-----------+-----------
</code></pre></div><p>Essa tabela \xE9 um pouco diferente das que vimos antes. O comando <code>sys</code> retorna uma tabela que cont\xE9m tabelas estruturadas em suas c\xE9lulas, ao inv\xE9s de valores simples. Para dar uma olhada nesses dados, precisamos selecionar a coluna que queremos ver:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get <span class="token function">host</span>
-------+------------------+----------+--------+----------+----------
 name  <span class="token operator">|</span> release          <span class="token operator">|</span> <span class="token function">hostname</span> <span class="token operator">|</span> arch   <span class="token operator">|</span> <span class="token function">uptime</span>   <span class="token operator">|</span> <span class="token function">users</span>
-------+------------------+----------+--------+----------+----------
 Linux <span class="token operator">|</span> <span class="token number">5.0</span>.0-21-generic <span class="token operator">|</span> pop-os   <span class="token operator">|</span> x86_64 <span class="token operator">|</span> <span class="token punctuation">[</span>object<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token number">1</span> item<span class="token punctuation">]</span>
-------+------------------+----------+--------+----------+----------
</code></pre></div><p>O comando <code>get</code> permite que tenhamos acesso ao conte\xFAdo de uma coluna da tabela. Aqui, estamos olhando para dentro da coluna <code>host</code>, que cont\xE9m informa\xE7\xF5es a respeito da m\xE1quina host em que o Nu est\xE1 rodando, como nome do SO (sistema operacional), o nome de host, a CPU e outros dados mais. Vamos ver os nomes dos usu\xE1rios do sistema:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.users
jonathan
</code></pre></div><p>Nesse momento s\xF3 tem um \xFAnico usu\xE1rio no sistema, chamado &quot;jonathan&quot;. Note que n\xF3s podemos passar um caminho e n\xE3o apenas o nome de uma coluna. O Nu vai seguir esse caminho at\xE9 o dado correspondente na tabela.</p><p>Talvez voc\xEA tenha notado mais alguma coisa de diferente. Ao inv\xE9s de uma tabela, recebemos apenas um elemento simples: a string &quot;jonathan&quot;. O Nu trabalha tanto com tabelas de dados como com strings, que s\xE3o uma parte importante da intera\xE7\xE3o com comandos externos ao Nu.</p><p>Vejamos como as strings funcionam fora do Nu. Vamos usar nosso exemplo anterior e executar o comando externo <code>echo</code>, presente na maioria dos SOs:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.users <span class="token operator">|</span> <span class="token builtin class-name">echo</span> <span class="token variable">$it</span>
jonathan
</code></pre></div><p>Se isso lhe parece bastante similar ao que t\xEDnhamos anteriormente, voc\xEA tem um olho afiado! \xC9 similar, mas com uma diferen\xE7a importante: chamamos <code>echo</code> com o valor retornado antes. Isso permite que passemos dados para o <code>echo</code> fora do Nu (ou para qualquer outro comando de fora do Nu, como <code>git</code>, por exemplo).</p><p><em>Nota: voc\xEA pode obter um texto de ajuda para quaisquer comandos embutidos do Nu usando o comando <code>help</code></em>:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> config
Configuration management.
Usage:
  <span class="token operator">&gt;</span> config <span class="token operator">&lt;</span>subcommand<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>

Subcommands:
  config get -
  config <span class="token builtin class-name">set</span> -
  config set_into -
  config <span class="token function">clear</span> -
  config load -
  config remove -
  config path -

Flags:
  -h, --help: Display this <span class="token builtin class-name">help</span> message
</code></pre></div>`,34),t=[p];function r(c,l){return a(),n("div",null,t)}var u=s(e,[["render",r],["__file","introducao.html.vue"]]);export{u as default};
