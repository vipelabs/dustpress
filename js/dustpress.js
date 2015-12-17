var $dp = function( path, args, success, error, get ) {
	
	var dp = window.DustPressAjax,
		
		data = {
			dustpress_data: {
				path: path,
				args: args
			}
		};

	if ( get )
		dp.ajaxGet(window.location, encodeURIComponent(JSON.stringify(data)), success, error );
	else
		dp.ajaxPost(window.location, data, success, error);

};

window.DustPressAjax = ( function( window, document ) {

	var dp = {};

	dp.xhr = function(a) {
	    for ( // for all a
	        a = 0; // from 0
	        a < 4; // to 4,
	        a++ // incrementing
	    ) try { // try
	            return a ? new ActiveXObject( // a new ActiveXObject
	                    [ // reflecting
	                        , // (elided)
	                        "Msxml2", // the various
	                        "Msxml3", // working
	                        "Microsoft" // options
	                    ][a] + // for Microsoft implementations, and
	                    ".XMLHTTP" // the appropriate suffix,
	                ) // but make sure to
	                : new XMLHttpRequest(); // try the w3c standard first, and
	        } catch (e) {} // ignore when it fails.
	};

	dp.onreadystatechange = function( xmlhttp ) {

	    if (xmlhttp.readyState != 4) return;

	    if (xmlhttp.status != 200)
	    	dp.error(xmlhttp, 'error', xmlhttp.statusText);
	    else	        	
	    	dp.success(xmlhttp, 'success', xmlhttp.statusText);
	        
	};


	dp.ajaxGet = function(url, success, error) {

	    var xmlhttp = dp.xhr();

	    dp.success = success;
	    dp.error 	= error;

	    xmlhttp.onreadystatechange = dp.onreadystatechange;

	    xmlhttp.open('GET', url, true);
	    xmlhttp.setRequestHeader("Accept", "json");
	    xmlhttp.send();

	    return xmlhttp;
	};
	
	dp.ajaxPost = function(url, data, success, error) {

	    var xmlhttp = dp.xhr();

	    dp.success = success;
	    dp.error 	= error;
	    
	    xmlhttp.onreadystatechange = dp.onreadystatechange;

	    xmlhttp.open('POST', url, true);
	    xmlhttp.setRequestHeader('Content-type', 'application/json');
	    xmlhttp.send(JSON.stringify(data));

	    return xmlhttp;
	};

	return dp;

})( window, document );
