window.addEventListener('load', function() {
if(post_id.length > 0){
	jsonArray = "";
	$.get('https://www.googleapis.com/blogger/v3/blogs/2380877717001335880/posts/'+post_id+'?key=AIzaSyDU4zZgOm6rPR_6RSHS30E8hzg-dk23uyc', function( data) {
		var Acontents = $.parseHTML(data.content);
	 	var Aimage = ($(Acontents).find('img').attr('src'));
		var Abody = data.content.replace(/<\/?[^>]+(>|$)/g, '');
		jsonArray += {
			"@context": "https://schema.org",
	 		"@type": "Article",
	 		"mainEntityOfPage": "<data:post.url.jsonEscaped/>",
		 	"headline": data.title,
		 	"author": "Pro Patel",
		 	"Aurl" : data.url,
		 	"dateCreated" : data.published,
		 	"datePublished": data.published,
		 	"Aupdated" : data.updated,
		 	"keywords" : data.labels[0],
		 	"genre" : data.labels[0],
		 	"wordcount": "",
	 		"description" : "",
		 	"articleBody": Abody,
		 	"publisher": {
	    	"@type": "Organization",
	    	"name": "Pro Patel",
	    	"logo": {
	      	"@type": "ImageObject",
	     		"url": "https://1.bp.blogspot.com/-LsQZq_7SrGE/XRHRqm1AGuI/AAAAAAAAA1Y/2jU64WWolgg0GPDB89ANYsKotWLcinOtgCLcBGAs/s1600/pro-patel-logo.jpg"
	    	}
	  	},
	    "image": {
	    "@type": "ImageObject",
	    "url": Aimage,
	    "height": 630,
	    "width": 1200
	    }
	  }
	});// $get
var script = document.createElement('script');
script.type = "application/ld+json";
script.text = JSON.stringify(jsonArray);
document.getElementsByTagName('head')[0].appendChild(script);
} // post id length
});
