webpackJsonp([0x8ed1e0a7a4a4],{517:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Coming soon.</p>\n<h2 id="importing-modules"><a href="#importing-modules" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Importing modules</h2>\n<p><strong>NOTE - this article needs editing</strong></p>\n<p>Your application state is a tree of data. Your UI is a separate tree of views. They don’t always map 1-1. Keep your UIs dumb, project state into the UI. Keep your logic for manipulating data, or transitioning state separate from the UI.</p>\n<p>It is, however, possible to import actions from components or modules of the application. One could imagine doing something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>\n    dashboard<span class="token punctuation">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./modules/dashboards/actions\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    feed<span class="token punctuation">:</span> dashboard<span class="token punctuation">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./modules/feed/actions\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    settings<span class="token punctuation">:</span> dashboard<span class="token punctuation">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./modules/settings/actions\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// somewere in modules/feed/post.js</span>\n\n<span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'feed/addComment\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> text<span class="token punctuation">:</span> hello <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// in modules/feed/actions.js</span>\n\nmodule<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>addComment <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">get</span><span class="token punctuation">,</span> split<span class="token punctuation">,</span> payload<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> postId <span class="token operator">=</span> <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>feed<span class="token punctuation">.</span>currentPostId\n  <span class="token function">split</span><span class="token punctuation">(</span><span class="token punctuation">{</span> display<span class="token punctuation">:</span> <span class="token punctuation">{</span> spinner<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> comment <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`/posts/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>postId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/comments`</span></span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>\n  <span class="token function">split</span><span class="token punctuation">(</span><span class="token punctuation">{</span> display<span class="token punctuation">:</span> <span class="token punctuation">{</span> spinner<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token function">split</span><span class="token punctuation">(</span><span class="token punctuation">{</span> entities<span class="token punctuation">:</span> <span class="token punctuation">{</span> comments<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>comment<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">:</span> comment <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> comments <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'entities\'</span><span class="token punctuation">,</span> <span class="token string">\'posts\'</span><span class="token punctuation">,</span> postId<span class="token punctuation">,</span> <span class="token string">\'comments\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token function">split</span><span class="token punctuation">(</span><span class="token punctuation">{</span> entities<span class="token punctuation">:</span> <span class="token punctuation">{</span> posts<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>postId<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> comments<span class="token punctuation">:</span> comments<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>comment<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',excerpt:"Coming soon. Importing modules NOTE - this article needs editing Your application state is a tree of data. Your UI is a separate tree of…",timeToRead:1,frontmatter:{title:"Patterns"},parent:{__typename:"File",relativePath:"patterns.md"}}},pathContext:{slug:"/patterns/"}}}});
//# sourceMappingURL=path---patterns-c3a776cb51ad55694438.js.map