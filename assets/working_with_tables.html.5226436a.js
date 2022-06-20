import{_ as l,r as c,o as p,c as i,a as s,b as a,w as t,e as o,d as n}from"./app.954e968d.js";const d={},r=o(`<h1 id="\u5904\u7406\u8868\u683C" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u8868\u683C" aria-hidden="true">#</a> \u5904\u7406\u8868\u683C</h1><p>\u5728 Nu \u4E2D\u67E5\u770B\u6570\u636E\u7684\u4E00\u79CD\u5E38\u89C1\u65B9\u5F0F\u662F\u901A\u8FC7\u8868\u683C\u3002Nu \u63D0\u4F9B\u4E86\u8BB8\u591A\u5904\u7406\u8868\u683C\u7684\u547D\u4EE4\u4EE5\u65B9\u4FBF\u627E\u5230\u4F60\u60F3\u8981\u7684\u5185\u5BB9\u4EE5\u53CA\u5C06\u6570\u636E\u7F29\u5C0F\u5230\u4F60\u9700\u8981\u7684\u8303\u56F4\u3002</p><p>\u9996\u5148\uFF0C\u8BA9\u6211\u4EEC\u83B7\u5F97\u4E00\u4E2A\u53EF\u7528\u7684\u8868\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name          \u2502 type \u2502 size    \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs      \u2502 File \u2502  4.6 KB \u2502 5 days ago
 1 \u2502 lib.rs        \u2502 File \u2502   330 B \u2502 5 days ago
 2 \u2502 lite_parse.rs \u2502 File \u2502  6.3 KB \u2502 5 days ago
 3 \u2502 parse.rs      \u2502 File \u2502 49.8 KB \u2502 1 day ago
 4 \u2502 path.rs       \u2502 File \u2502  2.1 KB \u2502 5 days ago
 5 \u2502 shapes.rs     \u2502 File \u2502  4.7 KB \u2502 5 days ago
 6 \u2502 signature.rs  \u2502 File \u2502  1.2 KB \u2502 5 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u6392\u5E8F" aria-hidden="true">#</a> \u6392\u5E8F</h2>`,5),u=n("\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528"),h=s("code",null,"sort-by",-1),_=n("\u547D\u4EE4\u5BF9\u4E00\u4E2A\u8868\u8FDB\u884C\u6392\u5E8F\uFF0C\u5E76\u6307\u5B9A\u9700\u8981\u6392\u5E8F\u7684\u5217\u3002\u6BD4\u5982\uFF0C\u6309\u7167\u6587\u4EF6\u7684\u5927\u5C0F\u5BF9\u8868\u683C\u8FDB\u884C\u6392\u5E8F\uFF1A"),g=s("div",{class:"language-text ext-text"},[s("pre",{class:"language-text"},[s("code",null,`> ls | sort-by size
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name          \u2502 type \u2502 size    \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 lib.rs        \u2502 File \u2502   330 B \u2502 5 days ago
 1 \u2502 signature.rs  \u2502 File \u2502  1.2 KB \u2502 5 days ago
 2 \u2502 path.rs       \u2502 File \u2502  2.1 KB \u2502 5 days ago
 3 \u2502 files.rs      \u2502 File \u2502  4.6 KB \u2502 5 days ago
 4 \u2502 shapes.rs     \u2502 File \u2502  4.7 KB \u2502 5 days ago
 5 \u2502 lite_parse.rs \u2502 File \u2502  6.3 KB \u2502 5 days ago
 6 \u2502 parse.rs      \u2502 File \u2502 49.8 KB \u2502 1 day ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),m=s("p",null,'\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EFB\u4F55\u53EF\u4EE5\u6BD4\u8F83\u7684\u5217\u6765\u5BF9\u4E00\u4E2A\u8868\u8FDB\u884C\u6392\u5E8F\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u7528 "name", "accessed" \u6216\u8005 "modified" \u5217\u5BF9\u4E0A\u8FF0\u5185\u5BB9\u8FDB\u884C\u6392\u5E8F\u3002',-1),k=s("h2",{id:"\u9009\u53D6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u9009\u53D6","aria-hidden":"true"},"#"),n(" \u9009\u53D6")],-1),b=n("\u6211\u4EEC\u53EF\u4EE5\u4ECE\u8868\u4E2D\u901A\u8FC7\u9009\u62E9\u7279\u5B9A\u7684\u5217\u6216\u884C\u6765\u83B7\u5F97\u6570\u636E\u3002\u8BA9\u6211\u4EEC\u4ECE\u8868\u4E2D\u9009\u62E9\uFF08"),x=s("code",null,"select",-1),f=n("\uFF09\u51E0\u5217\u5427\uFF1A"),v=o(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | select name size
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name          \u2502 size
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs      \u2502  4.6 KB
 1 \u2502 lib.rs        \u2502   330 B
 2 \u2502 lite_parse.rs \u2502  6.3 KB
 3 \u2502 parse.rs      \u2502 49.8 KB
 4 \u2502 path.rs       \u2502  2.1 KB
 5 \u2502 shapes.rs     \u2502  4.7 KB
 6 \u2502 signature.rs  \u2502  1.2 KB
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u8FD9\u6709\u52A9\u4E8E\u521B\u5EFA\u4E00\u4E2A\u66F4\u4E13\u6CE8\u4E8E\u6211\u4EEC\u6240\u9700\u7684\u8868\u683C\u3002\u63A5\u4E0B\u6765\uFF0C\u5047\u8BBE\u6211\u4EEC\u53EA\u60F3\u770B\u8FD9\u4E2A\u76EE\u5F55\u4E2D\u6700\u5C0F\u7684 5 \u4E2A\u6587\u4EF6\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by size | first 5
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name         \u2502 type \u2502 size   \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 lib.rs       \u2502 File \u2502  330 B \u2502 5 days ago
 1 \u2502 signature.rs \u2502 File \u2502 1.2 KB \u2502 5 days ago
 2 \u2502 path.rs      \u2502 File \u2502 2.1 KB \u2502 5 days ago
 3 \u2502 files.rs     \u2502 File \u2502 4.6 KB \u2502 5 days ago
 4 \u2502 shapes.rs    \u2502 File \u2502 4.7 KB \u2502 5 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u4F60\u4F1A\u6CE8\u610F\u5230\u6211\u4EEC\u9996\u5148\u6309\u5927\u5C0F\u5BF9\u8868\u8FDB\u884C\u6392\u5E8F\u4EE5\u5F97\u5230\u6700\u5C0F\u7684\u6587\u4EF6\uFF0C\u7136\u540E\u6211\u4EEC\u7528<code>first 5</code>\u6765\u8FD4\u56DE\u8868\u7684\u524D 5 \u884C\u3002</p><p>\u4F60\u4E5F\u53EF\u4EE5\u8DF3\u8FC7(<code>skip</code>)\u4E0D\u9700\u8981\u7684\u884C\uFF0C\u8BA9\u6211\u4EEC\u8DF3\u8FC7\u4E0A\u9762\u6240\u5F97 5 \u884C\u4E2D\u7684\u524D\u4E24\u884C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by size | first 5 | skip 2
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name      \u2502 type \u2502 size   \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 path.rs   \u2502 File \u2502 2.1 KB \u2502 5 days ago
 1 \u2502 files.rs  \u2502 File \u2502 4.6 KB \u2502 5 days ago
 2 \u2502 shapes.rs \u2502 File \u2502 4.7 KB \u2502 5 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u6211\u4EEC\u5DF2\u5C06\u5176\u7F29\u5C0F\u4E3A\u6211\u4EEC\u5173\u5FC3\u7684\u4E09\u884C\u3002</p><p>\u8BA9\u6211\u4EEC\u770B\u770B\u5176\u4ED6\u51E0\u4E2A\u7528\u4E8E\u9009\u62E9\u6570\u636E\u7684\u547D\u4EE4\u3002\u60A8\u53EF\u80FD\u60F3\u77E5\u9053\u4E3A\u4EC0\u4E48\u9009\u53D6\u8868\u683C\u7684\u884C\u662F\u901A\u8FC7\u6570\u5B57\uFF0C\u8FD9\u662F\u9009\u62E9\u5355\u884C\u6570\u636E\u7684\u4FBF\u6377\u65B9\u5F0F\u3002\u8BA9\u6211\u4EEC\u6309\u6587\u4EF6\u540D\u5BF9\u8868\u8FDB\u884C\u6392\u5E8F\uFF0C\u7136\u540E\u4F7F\u7528 <code>select</code> \u547D\u4EE4\u901A\u8FC7\u884C\u53F7\u6765\u9009\u62E9\u5176\u4E2D\u7684\u4E00\u884C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by name
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name          \u2502 type \u2502 size    \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs      \u2502 File \u2502  4.6 KB \u2502 5 days ago
 1 \u2502 lib.rs        \u2502 File \u2502   330 B \u2502 5 days ago
 2 \u2502 lite_parse.rs \u2502 File \u2502  6.3 KB \u2502 5 days ago
 3 \u2502 parse.rs      \u2502 File \u2502 49.8 KB \u2502 1 day ago
 4 \u2502 path.rs       \u2502 File \u2502  2.1 KB \u2502 5 days ago
 5 \u2502 shapes.rs     \u2502 File \u2502  4.7 KB \u2502 5 days ago
 6 \u2502 signature.rs  \u2502 File \u2502  1.2 KB \u2502 5 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

&gt; ls | sort-by name | select 5
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name          \u2502 type \u2502 size    \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 shapes.rs     \u2502 File \u2502  4.7 KB \u2502 5 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="\u4ECE\u8868\u683C\u63D0\u53D6\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u8868\u683C\u63D0\u53D6\u6570\u636E" aria-hidden="true">#</a> \u4ECE\u8868\u683C\u63D0\u53D6\u6570\u636E</h2>`,10),y=n("\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u4EEC\u5728\u5904\u7406\u8868\u683C\u65F6\u90FD\u662F\u5C06\u8868\u683C\u4FEE\u526A\u6210\u6211\u4EEC\u9700\u8981\u7684\u6837\u5B50\u3002\u6709\u65F6\u6211\u4EEC\u53EF\u80FD\u60F3\u66F4\u8FDB\u4E00\u6B65\uFF0C\u53EA\u770B\u5355\u5143\u683C\u672C\u8EAB\u7684\u503C\uFF0C\u800C\u4E0D\u662F\u53D6\u6574\u5217\u3002\u6BD4\u5982\uFF0C\u6211\u4EEC\u53EA\u60F3\u5F97\u5230\u4E00\u4E2A\u5305\u542B\u6240\u6709\u6587\u4EF6\u540D\u7684\u5217\u8868\u3002\u5728\u6B64\uFF0C\u6211\u4EEC\u4F7F\u7528"),B=s("code",null,"get",-1),K=n(" \u547D\u4EE4\uFF1A"),F=s("div",{class:"language-text ext-text"},[s("pre",{class:"language-text"},[s("code",null,`> ls | get name
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs
 1 \u2502 lib.rs
 2 \u2502 lite_parse.rs
 3 \u2502 parse.rs
 4 \u2502 path.rs
 5 \u2502 shapes.rs
 6 \u2502 signature.rs
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),$=s("p",null,"\u73B0\u5728\u6211\u4EEC\u83B7\u5F97\u4E86\u6BCF\u4E00\u4E2A\u6587\u4EF6\u7684\u6587\u4EF6\u540D\u3002",-1),z=n("\u8FD9\u53EF\u80FD\u770B\u8D77\u6765\u5F88\u50CF\u6211\u4EEC\u4E4B\u524D\u4F7F\u7528\u7684"),w=s("code",null,"select",-1),D=n("\u547D\u4EE4\uFF0C\u6240\u4EE5\u4E5F\u628A\u5B83\u653E\u5728\u8FD9\u91CC\u4EE5\u4FBF\u4E8E\u6BD4\u8F83\uFF1A"),N=s("div",{class:"language-text ext-text"},[s("pre",{class:"language-text"},[s("code",null,`> ls | select name
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs
 1 \u2502 lib.rs
 2 \u2502 lite_parse.rs
 3 \u2502 parse.rs
 4 \u2502 path.rs
 5 \u2502 shapes.rs
 6 \u2502 signature.rs
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),q=s("p",null,"\u8FD9\u770B\u8D77\u6765\u975E\u5E38\u76F8\u4F3C\uFF01\u8BA9\u6211\u4EEC\u770B\u770B\u80FD\u4E0D\u80FD\u628A\u8FD9\u4E24\u4E2A\u547D\u4EE4\u7684\u533A\u522B\u8BF4\u6E05\u695A\uFF1A",-1),V=s("code",null,"select",-1),A=n(" - \u521B\u5EFA\u4E00\u4E2A\u53EA\u5305\u62EC\u6307\u5B9A\u5217\u7684\u65B0\u8868\uFF1B"),C=s("code",null,"get",-1),L=n(" - \u4EE5\u5217\u8868\u5F62\u5F0F\u8FD4\u56DE\u6307\u5B9A\u5217\u5185\u7684\u503C\uFF1B"),R=s("p",null,"\u533A\u5206\u8FD9\u4E9B\u8868\u683C\u7684\u65B9\u6CD5\u662F \u2014\u2014 \u5217\u540D\u6CA1\u6709\u4E86\uFF0C\u4E5F\u8BA9\u6211\u4EEC\u77E5\u9053\u8FD9\u662F\u4E00\u4E2A\u6211\u4EEC\u53EF\u4EE5\u5904\u7406\u7684\u503C\u7684\u5217\u8868\u3002",-1),j=s("code",null,"get",-1),E=n("\u547D\u4EE4\u53EF\u4EE5\u66F4\u8FDB\u4E00\u6B65\uFF0C\u5B83\u53EF\u4EE5\u63A5\u53D7\u8868\u4E2D\u66F4\u6DF1\u7684\u6570\u636E\u8DEF\u5F84\u3002\u8FD9\u7B80\u5316\u4E86\u5BF9\u590D\u6742\u6570\u636E\u7684\u5904\u7406\uFF0C\u6BD4\u5982\u90A3\u4E9B\u4F60\u53EF\u80FD\u5728.json \u6587\u4EF6\u4E2D\u53D1\u73B0\u7684\u7ED3\u6784\u3002"),S=s("h2",{id:"\u4FEE\u6539\u8868\u683C\u6570\u636E",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4FEE\u6539\u8868\u683C\u6570\u636E","aria-hidden":"true"},"#"),n(" \u4FEE\u6539\u8868\u683C\u6570\u636E")],-1),T=s("p",null,"\u9664\u4E86\u4ECE\u8868\u4E2D\u9009\u62E9\u6570\u636E\u5916\uFF0C\u8FD8\u53EF\u4EE5\u66F4\u65B0\u5176\u4E2D\u7684\u6570\u636E\u3002\u6211\u4EEC\u53EF\u80FD\u60F3\u5408\u5E76\u8868\u683C\uFF0C\u6DFB\u52A0\u65B0\u7684\u5217\uFF0C\u6216\u7F16\u8F91\u5355\u5143\u683C\u7684\u5185\u5BB9\u7B49\u3002\u5728 Nushell \u4E2D\uFF0C\u672C\u8282\u4E2D\u7684\u6BCF\u4E2A\u547D\u4EE4\u90FD\u4F1A\u5728\u7BA1\u9053\u4E2D\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u8868\u800C\u975E\u5BF9\u539F\u8868\u8FDB\u884C\u7F16\u8F91\u3002",-1),G=s("h3",{id:"\u62FC\u63A5\u8868\u683C",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u62FC\u63A5\u8868\u683C","aria-hidden":"true"},"#"),n(" \u62FC\u63A5\u8868\u683C")],-1),H=n("\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528"),I=s("code",null,"append",-1),J=n("\u5C06\u5217\u540D\u76F8\u540C\u7684\u8868\u62FC\u63A5\u8D77\u6765\uFF1A"),M=s("div",{class:"language-text ext-text"},[s("pre",{class:"language-text"},[s("code",null,`> let $first = [[a b]; [1 2]]
> let $second = [[a b]; [3 4]]
> $first | append $second
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 # \u2502 a \u2502 b
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 0 \u2502 1 \u2502 2
 1 \u2502 3 \u2502 4
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500
`)])],-1),O=s("h3",{id:"\u5408\u5E76\u8868\u683C",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5408\u5E76\u8868\u683C","aria-hidden":"true"},"#"),n(" \u5408\u5E76\u8868\u683C")],-1),P=n("\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528"),Q=s("code",null,"merge",-1),U=n("\u547D\u4EE4\u5C06\u4E24\u4E2A\uFF08\u6216\u591A\u4E2A\uFF09\u8868\u683C\u5408\u5E76\u5728\u4E00\u8D77\uFF1A"),W=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token variable">$first</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token variable">$second</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>c d<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token operator">&gt;</span> <span class="token variable">$first</span> <span class="token operator">|</span> merge <span class="token punctuation">{</span> <span class="token variable">$second</span> <span class="token punctuation">}</span>
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 <span class="token comment"># \u2502 a \u2502 b \u2502 c \u2502 d</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token number">1</span> \u2502 <span class="token number">2</span> \u2502 <span class="token number">3</span> \u2502 <span class="token number">4</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500
</code></pre></div><p>\u8BA9\u6211\u4EEC\u518D\u52A0\u4E00\u4E2A\u8868\u683C\u5427\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token variable">$third</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>e f<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre></div><p>\u6211\u4EEC\u53EF\u4EE5\u5C06\u4EE5\u4E0A\u4E09\u4E2A\u8868\u683C\u5408\u5E76\u5728\u4E00\u8D77\uFF0C\u64CD\u4F5C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$first</span> <span class="token operator">|</span> merge <span class="token punctuation">{</span> <span class="token variable">$second</span> <span class="token punctuation">}</span> <span class="token operator">|</span> merge <span class="token punctuation">{</span> <span class="token variable">$third</span> <span class="token punctuation">}</span>
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 <span class="token comment"># \u2502 a \u2502 b \u2502 c \u2502 d \u2502 e \u2502 f</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token number">1</span> \u2502 <span class="token number">2</span> \u2502 <span class="token number">3</span> \u2502 <span class="token number">4</span> \u2502 <span class="token number">5</span> \u2502 <span class="token number">6</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500
</code></pre></div>`,5),X=n("\u6216\u8005\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528"),Y=s("code",null,"reduce",-1),Z=n("\u547D\u4EE4\u6765\u52A8\u6001\u5730\u5408\u5E76\u6240\u6709\u7684\u8868\u683C\uFF1A"),ss=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token variable">$first</span> <span class="token variable">$second</span> <span class="token variable">$third</span><span class="token punctuation">]</span> <span class="token operator">|</span> reduce <span class="token punctuation">{</span><span class="token operator">|</span>it, acc<span class="token operator">|</span> <span class="token variable">$acc</span> <span class="token operator">|</span> merge <span class="token punctuation">{</span> <span class="token variable">$it</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 <span class="token comment"># \u2502 a \u2502 b \u2502 c \u2502 d \u2502 e \u2502 f</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token number">1</span> \u2502 <span class="token number">2</span> \u2502 <span class="token number">3</span> \u2502 <span class="token number">4</span> \u2502 <span class="token number">5</span> \u2502 <span class="token number">6</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500
</code></pre></div><h3 id="\u6DFB\u52A0\u65B0\u5217" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u65B0\u5217" aria-hidden="true">#</a> \u6DFB\u52A0\u65B0\u5217</h3>`,2),ns=n("\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528"),es=s("code",null,"insert",-1),as=n("\u547D\u4EE4\u5728\u8868\u4E2D\u589E\u52A0\u65B0\u5217\uFF0C\u8BA9\u6211\u4EEC\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF1A"),ts=o(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2018
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u8BA9\u6211\u4EEC\u6DFB\u52A0\u4E00\u4E2A\u540D\u4E3A &quot;next_edition&quot; \u7684\u5217\u5E76\u5C06 2021 \u4F5C\u4E3A\u503C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml | insert next_edition 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition      \u2502 2018
 next_edition \u2502 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u6CE8\u610F\uFF0C\u6211\u4EEC\u5982\u679C\u6253\u5F00\u539F\u59CB\u6587\u4EF6\uFF0C\u4F1A\u53D1\u73B0\u5185\u5BB9\u6CA1\u53D8\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2018
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,5),os=n("Nu \u7684\u66F4\u6539\u662F\u51FD\u6570\u6027\u66F4\u6539\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u4EEC\u53EA\u5728\u503C\u4E0A\u8D77\u4F5C\u7528\uFF0C\u800C\u4E0D\u662F\u8BD5\u56FE\u5F15\u8D77\u6C38\u4E45\u6027\u53D8\u66F4\u3002\u8FD9\u4F7F\u6211\u4EEC\u53EF\u4EE5\u5728\u7BA1\u9053\u4E2D\u8FDB\u884C\u8BB8\u591A\u4E0D\u540C\u7C7B\u578B\u7684\u64CD\u4F5C\u76F4\u5230\u6211\u4EEC\u51C6\u5907\u597D\u5C06\u7ED3\u679C\u8F93\u51FA(\u5982\u679C\u6211\u4EEC\u9009\u62E9\u8FD9\u6837\u505A\u7684\u8BDD)\u3002\u8FD9\u91CC\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 "),ls=s("code",null,"save",-1),cs=n(" \u547D\u4EE4\u4FDD\u5B58\u7ED3\u679C\uFF1A"),ps=s("div",{class:"language-text ext-text"},[s("pre",{class:"language-text"},[s("code",null,`> open rustfmt.toml | insert next_edition 2021 | save rustfmt2.toml
> open rustfmt2.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition      \u2502 2018
 next_edition \u2502 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),is=s("h3",{id:"\u66F4\u65B0\u4E00\u5217",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u66F4\u65B0\u4E00\u5217","aria-hidden":"true"},"#"),n(" \u66F4\u65B0\u4E00\u5217")],-1),ds=n("\u4E0E"),rs=s("code",null,"insert",-1),us=n("\u547D\u4EE4\u7C7B\u4F3C\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528"),hs=s("code",null,"update",-1),_s=n("\u547D\u4EE4\u5C06\u67D0\u4E00\u5217\u7684\u5185\u5BB9\u4FEE\u6539\u4E3A\u65B0\u503C\u3002\u4E3A\u4E86\u770B\u770B\u6548\u679C\uFF0C\u8BA9\u6211\u4EEC\u6253\u5F00\u540C\u4E00\u4E2A\u6587\u4EF6\uFF1A"),gs=s("div",{class:"language-text ext-text"},[s("pre",{class:"language-text"},[s("code",null,`> open rustfmt.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2018
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),ms=s("p",null,"\u73B0\u5728\uFF0C\u7528\u6211\u4EEC\u5E0C\u671B\u652F\u6301\u7684\u4E0B\u4E00\u4E2A\u7248\u672C\u66F4\u65B0 edition\uFF1A",-1),ks=s("div",{class:"language-text ext-text"},[s("pre",{class:"language-text"},[s("code",null,`> open rustfmt.toml | update edition 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),bs=n("\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528"),xs=s("code",null,"upsert",-1),fs=n("\u547D\u4EE4\u6765\u63D2\u5165\u6216\u66F4\u65B0\uFF0C\u8FD9\u53D6\u51B3\u4E8E\u8BE5\u5217\u662F\u5426\u5DF2\u7ECF\u5B58\u5728\u3002"),vs=o(`<h3 id="\u79FB\u52A8\u5217" tabindex="-1"><a class="header-anchor" href="#\u79FB\u52A8\u5217" aria-hidden="true">#</a> \u79FB\u52A8\u5217</h3><p>\u4F60\u53EF\u4EE5\u4F7F\u7528<code>move</code>\u6765\u79FB\u52A8\u8868\u4E2D\u7684\u5217\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u60F3\u628A<code>ls</code>\u4E2D\u7684 &quot;name&quot; \u5217\u79FB\u5230 &quot;size&quot; \u5217\u4E4B\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u505A\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | move name --after size
\u256D\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 #  \u2502 type \u2502  size   \u2502       name        \u2502   modified   \u2502
\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  0 \u2502 dir  \u2502   256 B \u2502 Applications      \u2502 3 days ago   \u2502
\u2502  1 \u2502 dir  \u2502   256 B \u2502 Data              \u2502 2 weeks ago  \u2502
\u2502  2 \u2502 dir  \u2502   448 B \u2502 Desktop           \u2502 2 hours ago  \u2502
\u2502  3 \u2502 dir  \u2502   192 B \u2502 Disks             \u2502 a week ago   \u2502
\u2502  4 \u2502 dir  \u2502   416 B \u2502 Documents         \u2502 4 days ago   \u2502
...
</code></pre></div><h3 id="\u91CD\u547D\u540D\u5217" tabindex="-1"><a class="header-anchor" href="#\u91CD\u547D\u540D\u5217" aria-hidden="true">#</a> \u91CD\u547D\u540D\u5217</h3><p>\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7<code>rename</code>\u547D\u4EE4\u5BF9\u8868\u4E2D\u7684\u5217\u8FDB\u884C<strong>\u91CD\u547D\u540D</strong>\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u4F8B\u5B50\u6765\u8FD0\u884C<code>ls</code>\u5E76\u91CD\u547D\u540D\u8FD9\u4E9B\u5217\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | rename filename filetype filesize date
\u256D\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 #  \u2502     filename      \u2502 filetype \u2502 filesize \u2502     date     \u2502
\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  0 \u2502 Applications      \u2502 dir      \u2502    256 B \u2502 3 days ago   \u2502
\u2502  1 \u2502 Data              \u2502 dir      \u2502    256 B \u2502 2 weeks ago  \u2502
\u2502  2 \u2502 Desktop           \u2502 dir      \u2502    448 B \u2502 2 hours ago  \u2502
\u2502  3 \u2502 Disks             \u2502 dir      \u2502    192 B \u2502 a week ago   \u2502
\u2502  4 \u2502 Documents         \u2502 dir      \u2502    416 B \u2502 4 days ago   \u2502
...
</code></pre></div>`,6);function ys(Bs,Ks){const e=c("RouterLink");return p(),i("div",null,[r,s("p",null,[u,a(e,{to:"/book/commands/sort-by.html"},{default:t(()=>[h]),_:1}),_]),g,m,k,s("p",null,[b,a(e,{to:"/book/commands/select.html"},{default:t(()=>[x]),_:1}),f]),v,s("p",null,[y,a(e,{to:"/book/commands/get.html"},{default:t(()=>[B]),_:1}),K]),F,$,s("p",null,[z,a(e,{to:"/book/commands/select.html"},{default:t(()=>[w]),_:1}),D]),N,q,s("ul",null,[s("li",null,[a(e,{to:"/book/commands/select.html"},{default:t(()=>[V]),_:1}),A]),s("li",null,[a(e,{to:"/book/commands/get.html"},{default:t(()=>[C]),_:1}),L])]),R,s("p",null,[a(e,{to:"/book/commands/get.html"},{default:t(()=>[j]),_:1}),E]),S,T,G,s("p",null,[H,a(e,{to:"/book/commands/append.html"},{default:t(()=>[I]),_:1}),J]),M,O,s("p",null,[P,a(e,{to:"/book/commands/merge.html"},{default:t(()=>[Q]),_:1}),U]),W,s("p",null,[X,a(e,{to:"/book/commands/reduce.html"},{default:t(()=>[Y]),_:1}),Z]),ss,s("p",null,[ns,a(e,{to:"/book/commands/insert.html"},{default:t(()=>[es]),_:1}),as]),ts,s("p",null,[os,a(e,{to:"/book/commands/save.html"},{default:t(()=>[ls]),_:1}),cs]),ps,is,s("p",null,[ds,a(e,{to:"/book/commands/insert.html"},{default:t(()=>[rs]),_:1}),us,a(e,{to:"/book/commands/update.html"},{default:t(()=>[hs]),_:1}),_s]),gs,ms,ks,s("p",null,[bs,a(e,{to:"/book/commands/upsert.html"},{default:t(()=>[xs]),_:1}),fs]),vs])}var $s=l(d,[["render",ys],["__file","working_with_tables.html.vue"]]);export{$s as default};
