window.addEventListener('DOMContentLoaded', function() {
data = { 
"@context": "https://schema.org", 
 "@type": "Article",
 "headline": "Stitle",
 "image": "Simage",
 "author": "Altaf Hussain Patel", 
 "genre": "search engine optimization", 
 "keywords": "seo sales b2b", 
 "wordcount": "1120",
"publisher": {
    "@type": "Organization",
    "name": "Google",
    "logo": {
      "@type": "ImageObject",
      "url": "https://google.com/logo.jpg"
    }
  },
 "url": "http://www.example.com",
   "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://google.com/article"
  },
 "datePublished": "2015-09-20",
 "dateCreated": "2015-09-20",
 "dateModified": "2015-09-20",
 "description": "We love to do stuff to help people and stuff",
 "articleBody": "You can paste your entire post in here, and yes it can get really really long."
 };
var script = document.createElement('script');
script.type = "application/ld+json";
script.innerHTML = JSON.stringify(data);
document.getElementsByTagName('head')[0].appendChild(script);
});
