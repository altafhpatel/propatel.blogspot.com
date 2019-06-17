/*! Optify by Templateify | v1.5.0 - https://www.templateify.com */
!function(a){a.fn.optify=function(){return this.each(function(){var t=a(this),i=t.attr('data-image'),n=new Image();n.onload=function(){t.attr('style','background-image:url('+this.src+')').addClass('opt-ify');},n.src=i;});}}(jQuery);
