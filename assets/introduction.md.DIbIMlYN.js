import{_ as s,c as a,o as t,a2 as i}from"./chunks/framework.Caz9KI1J.js";const F=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[],"relativePath":"introduction.md","filePath":"introduction.md"}'),e={name:"introduction.md"},n=i(`<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><p>NestJs是一个用于构建高效、可伸缩的NodeJs服务端的应用框架。NestJs同时支持JS和TS，同时支持OOP（Object Oriented Programming）、FP（Functional Programming）、FRP（Functional Reactive Programming）编程方式。</p><p>同时NestJs底层默认是使用的Express框架同时可选的支持Fastify.</p><p>NestJs在这些框架（Express、Fastify）之上做了一层抽象，但是也直接暴露了他们的API给开发者。这就给了开发者足够的自由去使用大量的第三方模块。</p><h2 id="设计哲学" tabindex="-1">设计哲学 <a class="header-anchor" href="#设计哲学" aria-label="Permalink to &quot;设计哲学&quot;">​</a></h2><p>这些年，感谢NodeJs。使得JavaScript变成了一个Web通用语，即同时可以写前后端应用。我们有了像Angular，React和Vue等令人敬畏的项目，从而提高了开发人员的生产率，并能够创建快速，可测试和可扩展的前端应用程序。然而虽然有大量出色的libraries，helper和tools用于NodeJS（即服务器端的JavaScript），但它们都没有有效地解决一个核心的问题即 <strong>架构问题</strong>。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>首先，要开始一个NestJs项目，您可以使用Nest CLI脚手架，也可以克隆一个入门项目（两者都会产生相同的结果）。 要使用Nest CLI脚打脚本，请运行以下命令，将创建一个常规的结构。建议首次使用Nest CLI创建一个新项目。我们将以第一步继续进行这种方法。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i -g @nestjs/cli</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new project-name</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>要创建一个严格模式的TS项目，需使用 --strict 参数</p></div><h2 id="可替换" tabindex="-1">可替换 <a class="header-anchor" href="#可替换" aria-label="Permalink to &quot;可替换&quot;">​</a></h2><p>Git安装TypeScript启动项目：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone https://github.com/nestjs/typescript-starter.git project</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run start</span></span></code></pre></div><p>另外，用Git安装JavaScript启动项目：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone https://github.com/nestjs/javascript-starter.git project</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run start</span></span></code></pre></div><p>::: 如果你不想要GIT history，可以使用 <a href="https://github.com/Rich-Harris/degit" target="_blank" rel="noreferrer">degit</a> :::</p><p>Open your browser and navigate to <a href="http://localhost:3000/" target="_blank" rel="noreferrer">http://localhost:3000/</a>.</p><h2 id="支持nestjs" tabindex="-1">支持NestJS <a class="header-anchor" href="#支持nestjs" aria-label="Permalink to &quot;支持NestJS&quot;">​</a></h2><p>NestJS是一个MIT的开源项目，如果你有兴趣，可以去<a href="https://docs.nestjs.com/" target="_blank" rel="noreferrer">官网</a>。Buy a cup of coffee for them.</p>`,19),l=[n];function p(r,h,o,c,d,k){return t(),a("div",null,l)}const u=s(e,[["render",p]]);export{F as __pageData,u as default};