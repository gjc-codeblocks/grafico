$(function() { 
    $("#toImg").click(function() { 
    	html2canvas(document.body, {
    	  onrendered: function(canvas) {
    	    document.body.appendChild(canvas);
    	  }
    	});
    });
}); 
