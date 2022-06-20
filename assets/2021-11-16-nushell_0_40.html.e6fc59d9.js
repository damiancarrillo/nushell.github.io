import{_ as o,r as a,o as r,c as l,a as e,b as s,d as t,e as i}from"./app.954e968d.js";const d={},c=e("h1",{id:"nushell-0-40",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-40","aria-hidden":"true"},"#"),t(" Nushell 0.40")],-1),h=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),u=e("p",null,"Today, we're releasing 0.40 of Nu. This release is includes better table imports and much smaller release size.",-1),p=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),m=t("Nu 0.40 is available as "),_={href:"https://github.com/nushell/nushell/releases/tag/0.40.0",target:"_blank",rel:"noopener noreferrer"},f=t("pre-built binaries"),g=t(" or from "),b={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},v=t("crates.io"),w=t(". If you have Rust installed you can install it using "),y=e("code",null,"cargo install nu",-1),x=t("."),k=i(`<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="detecting-columns-jt" tabindex="-1"><a class="header-anchor" href="#detecting-columns-jt" aria-hidden="true">#</a> Detecting columns (jt)</h2><p>Nushell now supports a new command: <code>detect columns</code>. This command is intended as an easy way to handle tabular data that&#39;s written as text. Commands like <code>ps</code>, <code>ls -l</code>, <code>netstat</code>, <code>df</code>, and others commonly output their output as text. With <code>detect columns</code>, you can run the external command, and convert them into Nushell&#39;s tabular data format.</p><p>Let&#39;s look at an example:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; df
Filesystem     1K-blocks      Used Available Use% Mounted on
udev             8108824         0   8108824   0% /dev
tmpfs            1631284      2068   1629216   1% /run
/dev/nvme1n1p2 490691512 346066860 119629172  75% /
tmpfs            8156408    251332   7905076   4% /dev/shm
tmpfs               5120         4      5116   1% /run/lock
tmpfs            8156408         0   8156408   0% /sys/fs/cgroup
/dev/nvme0n1p1    508932    211684    297248  42% /boot/efi
tmpfs            1631280       128   1631152   1% /run/user/1000
/dev/nvme0n1p2 238810780 136867812  89742316  61% /media/jt/Data
</code></pre></div><p>The <code>df</code> command comes with most Unix-based systems and prints out a table of data for each of the devices on the system. Let&#39;s turn this into a table we can work with in Nushell:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; df | detect columns
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502   Filesystem   \u2502 1K-blocks \u2502   Used    \u2502 Available \u2502 Use% \u2502    Mounted     \u2502       on
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 udev           \u2502 8108824   \u2502 0         \u2502 8108824   \u2502 0%   \u2502 /dev           \u2502
 1 \u2502 tmpfs          \u2502 1631284   \u2502 2068      \u2502 1629216   \u2502 1%   \u2502 /run           \u2502
 2 \u2502 /dev/nvme1n1p2 \u2502 490691512 \u2502 346067044 \u2502 119628988 \u2502 75%  \u2502 /              \u2502
 3 \u2502 tmpfs          \u2502 8156408   \u2502 251332    \u2502 7905076   \u2502 4%   \u2502 /dev/shm       \u2502
 4 \u2502 tmpfs          \u2502 5120      \u2502 4         \u2502 5116      \u2502 1%   \u2502 /run/lock      \u2502 /run/lock
 5 \u2502 tmpfs          \u2502 8156408   \u2502 0         \u2502 8156408   \u2502 0%   \u2502 /sys/fs/cgroup \u2502 /sys/fs/cgroup
 6 \u2502 /dev/nvme0n1p1 \u2502 508932    \u2502 211684    \u2502 297248    \u2502 42%  \u2502 /boot/efi      \u2502 /boot/efi
 7 \u2502 tmpfs          \u2502 1631280   \u2502 128       \u2502 1631152   \u2502 1%   \u2502 /run/user/1000 \u2502 /run/user/1000
 8 \u2502 /dev/nvme0n1p2 \u2502 238810780 \u2502 136867812 \u2502 89742316  \u2502 61%  \u2502 /media/jt/Data \u2502 /media/jt/Data
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Ahh, that&#39;s close to what we want in just one step. Let&#39;s go ahead and clean this up a little. First, let&#39;s drop that last column. &quot;Mounted on&quot; being two words confused the importer, but all the data is there, we just need to drop the last column.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; df | detect columns | drop column
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502   Filesystem   \u2502 1K-blocks \u2502   Used    \u2502 Available \u2502 Use% \u2502    Mounted
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 udev           \u2502 8108824   \u2502 0         \u2502 8108824   \u2502 0%   \u2502 /dev
 1 \u2502 tmpfs          \u2502 1631284   \u2502 2068      \u2502 1629216   \u2502 1%   \u2502 /run
 2 \u2502 /dev/nvme1n1p2 \u2502 490691512 \u2502 346067188 \u2502 119628844 \u2502 75%  \u2502 /
 3 \u2502 tmpfs          \u2502 8156408   \u2502 251332    \u2502 7905076   \u2502 4%   \u2502 /dev/shm
 4 \u2502 tmpfs          \u2502 5120      \u2502 4         \u2502 5116      \u2502 1%   \u2502 /run/lock
 5 \u2502 tmpfs          \u2502 8156408   \u2502 0         \u2502 8156408   \u2502 0%   \u2502 /sys/fs/cgroup
 6 \u2502 /dev/nvme0n1p1 \u2502 508932    \u2502 211684    \u2502 297248    \u2502 42%  \u2502 /boot/efi
 7 \u2502 tmpfs          \u2502 1631280   \u2502 128       \u2502 1631152   \u2502 1%   \u2502 /run/user/1000
 8 \u2502 /dev/nvme0n1p2 \u2502 238810780 \u2502 136867812 \u2502 89742316  \u2502 61%  \u2502 /media/jt/Data
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Finally, it&#39;d be nice to be able to have real file sizes for the middle columns, so let&#39;s convert the numbers into Nushell&#39;s filesize type:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; df | detect columns | drop column | into filesize 1K-blocks Used Available
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502   Filesystem   \u2502 1K-blocks \u2502   Used   \u2502 Available \u2502 Use% \u2502    Mounted
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 udev           \u2502    8.1 MB \u2502      0 B \u2502    8.1 MB \u2502 0%   \u2502 /dev
 1 \u2502 tmpfs          \u2502    1.6 MB \u2502   2.1 KB \u2502    1.6 MB \u2502 1%   \u2502 /run
 2 \u2502 /dev/nvme1n1p2 \u2502  490.7 MB \u2502 346.1 MB \u2502  119.6 MB \u2502 75%  \u2502 /
 3 \u2502 tmpfs          \u2502    8.2 MB \u2502 251.3 KB \u2502    7.9 MB \u2502 4%   \u2502 /dev/shm
 4 \u2502 tmpfs          \u2502    5.1 KB \u2502      4 B \u2502    5.1 KB \u2502 1%   \u2502 /run/lock
 5 \u2502 tmpfs          \u2502    8.2 MB \u2502      0 B \u2502    8.2 MB \u2502 0%   \u2502 /sys/fs/cgroup
 6 \u2502 /dev/nvme0n1p1 \u2502  508.9 KB \u2502 211.7 KB \u2502  297.2 KB \u2502 42%  \u2502 /boot/efi
 7 \u2502 tmpfs          \u2502    1.6 MB \u2502    128 B \u2502    1.6 MB \u2502 1%   \u2502 /run/user/1000
 8 \u2502 /dev/nvme0n1p2 \u2502  238.8 MB \u2502 136.9 MB \u2502   89.7 MB \u2502 61%  \u2502 /media/jt/Data
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>In just a couple steps, we&#39;ve converted the text-based table into tabular data we can use just like any other Nushell command. To make this easy to do in the future, we can alias <code>df</code> to do these steps:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; alias df = (^df | detect columns | drop column | into filesize 1K-blocks Used Available)
</code></pre></div><h2 id="smaller-binaries-fdncred" tabindex="-1"><a class="header-anchor" href="#smaller-binaries-fdncred" aria-hidden="true">#</a> Smaller binaries (fdncred)</h2><p>The size of the Nushell release binaries has come up as regular feedback from Nushell users. &quot;Why does the shell have to be so big?&quot; And we&#39;ve heard you!</p><p>Today&#39;s release now uses a combination of <code>strip</code> and <code>upx</code> to bring considerable savings in binary size. The Linux release (plugins incl.) has dropped from 475mb to 58mb(!!), making it <strong>88% smaller</strong>. We&#39;re seeing similar improvements in the sizes of the macOS and Windows releases.</p><h2 id="additional-fixes" tabindex="-1"><a class="header-anchor" href="#additional-fixes" aria-hidden="true">#</a> Additional fixes</h2>`,19),B=t("Upgraded "),N={href:"https://github.com/nushell/nushell/pull/4122",target:"_blank",rel:"noopener noreferrer"},M=t("polars dataframe support"),q=t(" (nmandery)"),j=t("Fixed a "),K={href:"https://github.com/nushell/nushell/pull/4107",target:"_blank",rel:"noopener noreferrer"},U=t("panic during parsing"),A=t(" (ahkrr)"),T=t("File matching between "),W=e("code",null,"rm",-1),F=t(" and "),z=e("code",null,"ls",-1),I=t(" is now "),L={href:"https://github.com/nushell/nushell/pull/4099",target:"_blank",rel:"noopener noreferrer"},D=t("more consistent"),E=t(" (yogi)"),S=e("h1",{id:"engine-q-progress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#engine-q-progress","aria-hidden":"true"},"#"),t(" Engine-q progress")],-1),V=e("p",null,"We've also hit a milestone with engine-q: now over 100 commands have been ported to engine-q! Special thanks to onthebridgetonowhere, CBenoit, luccasmmg, stormasm, and aslynatilla for their work in these ports since the last Nushell release.",-1),C=t("We've also added support for "),$={href:"https://github.com/nushell/engine-q/pull/332",target:"_blank",rel:"noopener noreferrer"},G=e("code",null,"$config",-1),H=t(", "),J={href:"https://github.com/nushell/engine-q/pull/309",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"$in",-1),P=t(", a new "),Q={href:"https://github.com/nushell/engine-q/pull/326",target:"_blank",rel:"noopener noreferrer"},R=t("record syntax"),X=t(", "),Y={href:"https://github.com/nushell/engine-q/pull/340",target:"_blank",rel:"noopener noreferrer"},Z=e("code",null,"ls",-1),ee=t(" colors"),te=t(", "),ne={href:"https://github.com/nushell/engine-q/pull/331",target:"_blank",rel:"noopener noreferrer"},se=t("environment variable module imports"),oe=t(", and much more. While engine-q isn't quite ready to be tested as a daily driver, with each day its capabilities and stability grows."),ae=t("If you're interested in how some of the upcoming support for parallel processing in engine-q works, contributor JT "),re={href:"https://www.youtube.com/watch?v=3o8b_QcrFHc",target:"_blank",rel:"noopener noreferrer"},le=t("made a video explaining it"),ie=t("."),de=e("h1",{id:"looking-forward",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-forward","aria-hidden":"true"},"#"),t(" Looking forward")],-1),ce=e("p",null,"We're excited to see Nushell continue to gain more ability to work with data in easier ways as well as doing so in as a much smaller binary. Progress on engine-q continues to grow, and covers a large amount of ground in the engine internals, porting commands, plugin support, modules, and more.",-1),he=t("If you're interested in helping out, come "),ue={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},pe=t("join us on the discord"),me=t(". We're more than happy to help answer questions and point you towards on-going projects!");function _e(fe,ge){const n=a("ExternalLinkIcon");return r(),l("div",null,[c,h,u,p,e("p",null,[m,e("a",_,[f,s(n)]),g,e("a",b,[v,s(n)]),w,y,x]),k,e("ul",null,[e("li",null,[B,e("a",N,[M,s(n)]),q]),e("li",null,[j,e("a",K,[U,s(n)]),A]),e("li",null,[T,W,F,z,I,e("a",L,[D,s(n)]),E])]),S,V,e("p",null,[C,e("a",$,[G,s(n)]),H,e("a",J,[O,s(n)]),P,e("a",Q,[R,s(n)]),X,e("a",Y,[Z,ee,s(n)]),te,e("a",ne,[se,s(n)]),oe]),e("p",null,[ae,e("a",re,[le,s(n)]),ie]),de,ce,e("p",null,[he,e("a",ue,[pe,s(n)]),me])])}var ve=o(d,[["render",_e],["__file","2021-11-16-nushell_0_40.html.vue"]]);export{ve as default};
