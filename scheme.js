window.addEventListener('DOMContentLoaded', function() {
var data = { 
"@context": "https://schema.org", 
 "@type": "Article",
 "headline": Stitle,
 "image": Simage,
 "author": "Altaf Hussain Patel", 
 "genre": Sgenre, 
 "keywords": "seo sales b2b", 
 "wordcount": Swords,
"publisher": {
    "@type": "Organization",
    "name": "Pro Patel",
   "logo": {
      "@type": "ImageObject",
     "url": "https://1.bp.blogspot.com/-LsQZq_7SrGE/XRHRqm1AGuI/AAAAAAAAA1Y/2jU64WWolgg0GPDB89ANYsKotWLcinOtgCLcBGAs/s1600/pro-patel-logo.jpg"
    }
  },
 "url": Surl,
 "datePublished": Spublished,
 "dateCreated": Spublished,
 "dateModified": Spublished,
 "description": Sdescription,
 "articleBody": Sbody
 };
 //console.log(JSON.stringify(data));
var script = document.createElement('script');
script.type = "application/ld+json";
script.innerHTML = JSON.stringify(data);
document.getElementsByTagName('head')[0].appendChild(script);
 });
