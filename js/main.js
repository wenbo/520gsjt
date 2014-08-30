var _html5_video='<video width="100%" height="100%" controls="controls" autoplay="autoplay"> <source src="/BIGPAD/video/SHARP_VP_BIG_PAD.mp4" type="video/mp4" /></video>';
function start(){
  htmlBox=new creatHtmlBox("tips",["video1"]);
}
function loadVideoFlash(url,id){
	document.getElementById("video1").innerHTML='<div id="video_player_1"></div>';
        document.getElementById("video2").innerHTML='<div id="video_player_2"></div>';
        document.getElementById("video3").innerHTML='<div id="video_player_3"></div>';

	var flashvars = {};
	var params = {
		menu: "false",
		wmode: "transparent",
		scale: "noScale",
		allowFullscreen: "true",
		allowScriptAccess: "always",
		bgcolor: "#FFFFFF"	
	};  
	var attributes = {  };  
	swfobject.embedSWF(url, id, 640, 360, "9.0.0", "js/expressInstall.swf", flashvars, params, attributes); 
}

function closeVideo(){
  document.getElementById("video1").innerHTML="";
}

function addVideo(id){
        var loaded_url = '/swf/video.swf?url=/video/flv/' + id;
	document.getElementById("video1").style.background="#fff";
	if(isFlash()){
                loadVideoFlash(loaded_url, 'video_player_1') ; 
	}else{
		if(!understands_video()){
			loadVideoFlash(loaded_url, 'video_player_1') ; 
		}else{
			if(navigator.userAgent.search('MSIE 7.0')>-1 || navigator.userAgent.search('MSIE 8.0')>-1 || navigator.userAgent.search('MSIE 9.0')>-1){
				loadVideoFlash(loaded_url, 'video_player_1') ; 
			}else{
				document.getElementById("video1").style.background="none";
				document.getElementById("video1").innerHTML='<div id="video_player_1" style="width:640px; height:360px;"></div>';
				document.getElementById(id).innerHTML=_html5_video;
			}
		}
	}
	htmlBox.scale() ; 
	htmlBox.show(0,closeVideo);
}

function understands_video() {
  return !!document.createElement('video').canPlayType; // boolean
}
//判断是否安装flash插件
function isFlash(){
	var i_flash;
	var v_flash;
	if (navigator.plugins) {
		for (var i=0; i < navigator.plugins.length; i++) {
			if (navigator.plugins[i].name.toLowerCase().indexOf("shockwave flash") >= 0) {
				i_flash = true;
				v_flash = navigator.plugins[i].description.substring(navigator.plugins[i].description.toLowerCase().lastIndexOf("flash ") + 6, navigator.plugins[i].description.length);
			}
		}
	}
	if (i_flash) {
		if (v_flash) {
			if(parseFloat(v_flash.substring(0,2))>=10){
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
	} else {
		return false;
	}
}
