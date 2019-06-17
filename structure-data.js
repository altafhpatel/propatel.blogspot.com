windows.onload = function(){
 var Stitle=document.querySelector('.item-post-inner .post-title').innerText;
var Simage=document.querySelector('.item-post-inner img').getAttribute('src');
var Scontent=document.querySelector('.post-content).innerText;
console.log(Simage);
window.addEventListener(&#39;DOMContentLoaded&#39;, function() {
data = { &quot;@context&quot;: &quot;https://schema.org&quot;, 
 &quot;@type&quot;: &quot;Article&quot;,
 &quot;headline&quot;: Stitle,
 //&quot;alternativeHeadline&quot;: &quot;This article is also about robots and stuff&quot;,
 &quot;image&quot;: Simage,
 &quot;author&quot;: &quot;Altaf Hussain Patel&quot;, 
 &quot;genre&quot;: &quot;search engine optimization&quot;, 
 &quot;keywords&quot;: &quot;seo sales b2b&quot;, 
 &quot;wordcount&quot;: &quot;1120&quot;,
&quot;publisher&quot;: {
    &quot;@type&quot;: &quot;Organization&quot;,
    &quot;name&quot;: &quot;Google&quot;,
    &quot;logo&quot;: {
      &quot;@type&quot;: &quot;ImageObject&quot;,
      &quot;url&quot;: &quot;https://google.com/logo.jpg&quot;
    }
  },
 &quot;url&quot;: &quot;http://www.example.com&quot;,
   &quot;mainEntityOfPage&quot;: {
    &quot;@type&quot;: &quot;WebPage&quot;,
    &quot;@id&quot;: &quot;https://google.com/article&quot;
  },
 &quot;datePublished&quot;: &quot;2015-09-20&quot;,
 &quot;dateCreated&quot;: &quot;2015-09-20&quot;,
 &quot;dateModified&quot;: &quot;2015-09-20&quot;,
 &quot;description&quot;: &quot;We love to do stuff to help people and stuff&quot;,
 &quot;articleBody&quot;: &quot;You can paste your entire post in here, and yes it can get really really long.&quot;
 };
var script = document.createElement(&#39;script&#39;);
script.type = &quot;application/ld+json&quot;;
script.innerHTML = JSON.stringify(data);
document.getElementsByTagName(&#39;head&#39;)[0].appendChild(script);
});
}
