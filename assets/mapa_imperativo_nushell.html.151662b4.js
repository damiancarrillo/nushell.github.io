import{_ as t,o as d,c as r,e}from"./app.954e968d.js";const o={},s=e('<h1 id="mapa-nushell-de-lenguajes-imperativos" tabindex="-1"><a class="header-anchor" href="#mapa-nushell-de-lenguajes-imperativos" aria-hidden="true">#</a> Mapa nushell de lenguajes imperativos</h1><p>La idea detr\xE1s de esta tabla is ayudarte a entender como los comandos internos y plugins en Nu se relacionan con lenguajes imperativos. Hemos intentado producir un mapa de los comandos internos y sus equivalentes en otros lenguajes. Contribuciones son bienvenidas.</p><p>Nota: esta tabla asume Nu 0.14.1 o posterior.</p><table><thead><tr><th>Nushell</th><th>Python</th><th>Kotlin (Java)</th><th>C++</th><th>Rust</th></tr></thead><tbody><tr><td>alias</td><td></td><td></td><td></td><td></td></tr><tr><td>append</td><td>list.append, set.add</td><td>add</td><td>push_back, emplace_back</td><td>push, push_back</td></tr><tr><td>args</td><td></td><td></td><td></td><td></td></tr><tr><td>autoview</td><td></td><td></td><td></td><td></td></tr><tr><td>average(<code>*</code>)</td><td>statistics.mean</td><td></td><td></td><td></td></tr><tr><td>binaryview(<code>*</code>)</td><td>&quot;{:x}&quot;.format</td><td>Integer.toHexString</td><td></td><td></td></tr><tr><td>calc, = math</td><td>math operators</td><td>math operators</td><td>math operators</td><td>math operators</td></tr><tr><td>cd</td><td></td><td></td><td></td><td></td></tr><tr><td>clear</td><td></td><td></td><td></td><td></td></tr><tr><td>clip</td><td></td><td></td><td></td><td></td></tr><tr><td>compact</td><td></td><td></td><td></td><td></td></tr><tr><td>config</td><td></td><td></td><td></td><td></td></tr><tr><td>count</td><td>len</td><td>size, length</td><td>length</td><td>len</td></tr><tr><td>cp</td><td>shutil.copy</td><td></td><td></td><td></td></tr><tr><td>date</td><td>datetime.date.today</td><td>java.time.LocalDate.now</td><td></td><td></td></tr><tr><td>debug</td><td></td><td></td><td></td><td></td></tr><tr><td>default</td><td></td><td></td><td></td><td></td></tr><tr><td>drop</td><td></td><td></td><td></td><td></td></tr><tr><td>du</td><td>shutil.disk_usage</td><td></td><td></td><td></td></tr><tr><td>each</td><td>for</td><td>for</td><td>for</td><td>for</td></tr><tr><td>echo</td><td>print</td><td>println</td><td>printf</td><td>println!</td></tr><tr><td>enter</td><td></td><td></td><td></td><td></td></tr><tr><td>evaluate_by</td><td></td><td></td><td></td><td></td></tr><tr><td>exit</td><td>exit</td><td>System.exit, kotlin.system.exitProcess</td><td>exit</td><td>exit</td></tr><tr><td>fetch(<code>*</code>)</td><td>urllib.request.urlopen</td><td></td><td></td><td></td></tr><tr><td>first</td><td>list[0]</td><td>List[0], peek</td><td>vector[0], top</td><td>vec[0]</td></tr><tr><td>format</td><td>format</td><td></td><td></td><td></td></tr><tr><td>from bson</td><td></td><td></td><td></td><td></td></tr><tr><td>from csv</td><td>csv</td><td></td><td></td><td></td></tr><tr><td>from eml</td><td></td><td></td><td></td><td></td></tr><tr><td>from ics</td><td></td><td></td><td></td><td></td></tr><tr><td>from ini</td><td></td><td></td><td></td><td></td></tr><tr><td>from json</td><td>json</td><td></td><td></td><td></td></tr><tr><td>from ods</td><td></td><td></td><td></td><td></td></tr><tr><td>from sqlite</td><td>sqlite3</td><td></td><td></td><td></td></tr><tr><td>from ssv</td><td></td><td></td><td></td><td></td></tr><tr><td>from toml</td><td></td><td></td><td></td><td></td></tr><tr><td>from tsv</td><td></td><td></td><td></td><td></td></tr><tr><td>from url</td><td></td><td></td><td></td><td></td></tr><tr><td>from vcf</td><td></td><td></td><td></td><td></td></tr><tr><td>from xlsx</td><td></td><td></td><td></td><td></td></tr><tr><td>from xml</td><td></td><td></td><td></td><td></td></tr><tr><td>from yaml</td><td></td><td></td><td></td><td></td></tr><tr><td>get</td><td>dict[&quot;key&quot;]</td><td>Map[&quot;key&quot;]</td><td>map[&quot;key&quot;]</td><td></td></tr><tr><td>group_by</td><td>itertools.groupby</td><td></td><td></td><td></td></tr><tr><td>headers</td><td></td><td></td><td></td><td></td></tr><tr><td>help</td><td>help</td><td></td><td></td><td></td></tr><tr><td>histogram</td><td></td><td></td><td></td><td></td></tr><tr><td>history</td><td></td><td></td><td></td><td></td></tr><tr><td>inc(<code>*</code>)</td><td>x += 1</td><td>x++</td><td>x++</td><td>+= 1</td></tr><tr><td>insert</td><td>list.insert</td><td></td><td></td><td></td></tr><tr><td>is_empty</td><td>is None</td><td>isEmpty</td><td>empty</td><td></td></tr><tr><td>keep</td><td>list[:x]</td><td></td><td></td><td></td></tr><tr><td>keep_until</td><td></td><td></td><td></td><td></td></tr><tr><td>keep_while</td><td>itertools.takewhile</td><td></td><td></td><td></td></tr><tr><td>kill</td><td>os.kill</td><td></td><td></td><td></td></tr><tr><td>last</td><td>list[-1]</td><td></td><td></td><td></td></tr><tr><td>lines</td><td>split, splitlines</td><td>split</td><td>views::split</td><td></td></tr><tr><td>ls</td><td>os.listdir</td><td></td><td></td><td></td></tr><tr><td>map_max_by</td><td></td><td></td><td></td><td></td></tr><tr><td>match(<code>*</code>)</td><td>re</td><td></td><td></td><td></td></tr><tr><td>merge</td><td></td><td></td><td></td><td></td></tr><tr><td>mkdir</td><td>os.mkdir</td><td></td><td></td><td></td></tr><tr><td>mv</td><td>shutil.move</td><td></td><td></td><td></td></tr><tr><td>next</td><td></td><td></td><td></td><td></td></tr><tr><td>nth</td><td>list[x]</td><td></td><td></td><td></td></tr><tr><td>open</td><td>open</td><td></td><td></td><td></td></tr><tr><td>parse</td><td></td><td></td><td></td><td></td></tr><tr><td>pivot</td><td>zip(*matrix)</td><td></td><td></td><td></td></tr><tr><td>post(<code>*</code>)</td><td>urllib.request.urlopen</td><td></td><td></td><td></td></tr><tr><td>prepend</td><td>deque.appendleft</td><td></td><td></td><td></td></tr><tr><td>prev</td><td></td><td></td><td></td><td></td></tr><tr><td>ps(<code>*</code>)</td><td>os.listdir(&#39;/proc&#39;)</td><td></td><td></td><td></td></tr><tr><td>pwd</td><td>os.getcwd</td><td></td><td></td><td></td></tr><tr><td>range</td><td>range</td><td></td><td></td><td></td></tr><tr><td>reduce_by</td><td>functools.reduce</td><td></td><td></td><td></td></tr><tr><td>reject</td><td></td><td></td><td></td><td></td></tr><tr><td>rename</td><td>shutil.move</td><td></td><td></td><td></td></tr><tr><td>reverse</td><td>reversed, list.reverse</td><td></td><td></td><td></td></tr><tr><td>rm</td><td>os.remove</td><td></td><td></td><td></td></tr><tr><td>save</td><td>io.TextIOWrapper.write</td><td></td><td></td><td></td></tr><tr><td>select(<code>***</code>)</td><td>{k:dict[k] for k in keylist}</td><td></td><td></td><td></td></tr><tr><td>shells</td><td></td><td></td><td></td><td></td></tr><tr><td>shuffle</td><td>random.shuffle</td><td></td><td></td><td></td></tr><tr><td>size</td><td>len</td><td></td><td></td><td></td></tr><tr><td>skip</td><td>list[x:]</td><td></td><td></td><td></td></tr><tr><td>skip_until</td><td></td><td></td><td></td><td></td></tr><tr><td>skip_while</td><td>itertools.dropwhile</td><td></td><td></td><td></td></tr><tr><td>sort-by</td><td>sorted, list.sort</td><td></td><td></td><td></td></tr><tr><td>split_by</td><td>re.split</td><td></td><td></td><td></td></tr><tr><td>split_column</td><td></td><td></td><td></td><td></td></tr><tr><td>split_row</td><td></td><td></td><td></td><td></td></tr><tr><td>str(<code>*</code>)</td><td>str functions</td><td></td><td></td><td></td></tr><tr><td>sum</td><td>sum</td><td></td><td></td><td></td></tr><tr><td>sys(<code>*</code>)</td><td>sys</td><td></td><td></td><td></td></tr><tr><td>table</td><td></td><td></td><td></td><td></td></tr><tr><td>tags</td><td></td><td></td><td></td><td></td></tr><tr><td>textview(<code>*</code>)</td><td></td><td></td><td></td><td></td></tr><tr><td>tree(<code>*</code>)</td><td></td><td></td><td></td><td></td></tr><tr><td>to bson</td><td></td><td></td><td></td><td></td></tr><tr><td>to csv</td><td></td><td></td><td></td><td></td></tr><tr><td>to html</td><td></td><td></td><td></td><td></td></tr><tr><td>to json</td><td></td><td></td><td></td><td></td></tr><tr><td>to md</td><td></td><td></td><td></td><td></td></tr><tr><td>to sqlite</td><td></td><td></td><td></td><td></td></tr><tr><td>to toml</td><td></td><td></td><td></td><td></td></tr><tr><td>to tsv</td><td></td><td></td><td></td><td></td></tr><tr><td>to url</td><td></td><td></td><td></td><td></td></tr><tr><td>to yaml</td><td></td><td></td><td></td><td></td></tr><tr><td>touch</td><td>open(path, &#39;a&#39;).close()</td><td></td><td></td><td></td></tr><tr><td>trim</td><td>strip, rstrip, lstrip</td><td></td><td></td><td></td></tr><tr><td>uniq</td><td>set</td><td></td><td></td><td></td></tr><tr><td>update(<code>**</code>)</td><td></td><td></td><td></td><td></td></tr><tr><td>version</td><td>sys.version, sys.version_info</td><td></td><td></td><td></td></tr><tr><td>with_env</td><td>os.environ</td><td></td><td></td><td></td></tr><tr><td>what</td><td></td><td></td><td></td><td></td></tr><tr><td>where</td><td>filter</td><td>filter</td><td>filter</td><td>filter</td></tr><tr><td>which</td><td>shutil.which</td><td></td><td></td><td></td></tr><tr><td>wrap</td><td></td><td></td><td></td><td></td></tr></tbody></table><ul><li><code>*</code> - Pertenecen de los plugins standard</li><li><code>**</code> - renombrada de <code>edit</code> a <code>update</code> en 0.13.1</li><li><code>***</code> - renombrada de <code>pick</code> a <code>select</code> en 0.13.1</li></ul>',5),i=[s];function a(l,n){return d(),r("div",null,i)}var p=t(o,[["render",a],["__file","mapa_imperativo_nushell.html.vue"]]);export{p as default};
