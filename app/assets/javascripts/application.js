// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

function youtubeFeedCallback(data) {
	var meta = data["data"];
       
    $('#video header h2').text(meta["title"]);
    $('#video p').html(meta["description"].replace(/[\n\r]/g, "<br />"));

    $('#video a').attr('href',meta["content"]["5"]);
    $('#video img').attr('src',meta["thumbnail"]["hqDefault"]);
    $('#video a').attr('alt',meta["title"]);
    
    var date = new Date(meta["uploaded"]);
	publish_data = "Published on "+ date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
	publish_data += " by "+meta["uploader"];
	$('#video-meta').text(publish_data);
}

