function parseList(ul, title) {
	var items = ul.getElementsByTagName("div");
	var out = "";
	for (i=0;i<items.length;i=i+1) {
		out += items[i].id + ",";
	}
	return out;
}


var handleFailure = function(o){
	//alert('fail');
	}
var handleSuccess = function(o){ 
	}
var callback =
{
  success:handleSuccess,
  failure:handleFailure,
  argument: { foo:"foo", bar:"bar" }
};


function blindUpOrDown(lclass, mclass, skindir, name)
{
    var YAHOO;
	var request;
	var plus = skindir + "/plus.gif";
	var minus = skindir + "/minus.gif";
	var imgel = document.getElementById("img_" + name);
	var element = document.getElementById("internal_" + name);

	var ajaxstring = 'frm_action=update&frm_subaction=boxposopen&frm_' + lclass + '_c_title_name=' + name + '&frm_' + lclass + '_c_title_class=' + mclass + '&frm_' + lclass + '_c_title_open=';

	if (element.style.display == 'none') {
		element.style.display = 'block';
		imgel.src = minus;
		request = YAHOO.util.Connect.asyncRequest('post', "/ajax.php", callback, ajaxstring + "on");
	} else {
		element.style.display = 'none';
		imgel.src = plus;
		request = YAHOO.util.Connect.asyncRequest('post', "/ajax.php", callback, ajaxstring + 'off');
	}
}

