// JavaScript Document
var _js=null;
var _footerHeight=30;
var myContent5List=null;

function showContent(){
	//document.getElementById("main").style.display="block";
	//_js._class("loading").style.display="none";
	if(_js){
		sharpResponsiveWebResize(_js._browserWidth,_js._browserHeight,_js);
	//
	}
}
function start_on_video_page(){
	//=============
	_js=new JSResponsiveWeb(null,null,sharpResponsiveWebResize);	
	//_js._class("loading").style.display="none";
	//TweenMax.to(_js._class("loading_div").getElementsByTagName("span")[0],60,{css:{width:150}});
	numNavBtn();
	showContent();
	
	//===============
	$(window).bind('scroll',function(){	
		sharpResponsiveWebScroll();
		//console.log($(this).scrollTop());
	});
}

function sharpResponsiveWebResize(width,height,target){
	
	width=$(window).width();
	height=$(window).height();
	//loading
	var _isPcNavHeight=0;
	//nav
	if(width<1024){
		//数字导航
		TweenMax.to(target._class("num_nav"),.4,{css:{alpha:0},onComplete:function (){
			target._class("num_nav").style.display="none";
		}});
		_isPcNavHeight=50;
	}else{
		target._class("num_nav").style.display="block";
		TweenMax.to(target._class("num_nav"),.4,{css:{alpha:1}});
		_isPcNavHeight=100;
	}
	TweenMax.to(target._class("num_nav"),.4,{css:{top:(height-550)/2}});
	sharpResponsiveWebScroll(target,height,_isPcNavHeight);
}
function sharpResponsiveWebScroll(e,height,isPcNavHeight){
	var _e=e||_js;
	var _height=height||$(window).height();
	var _isPcNavHeight=isPcNavHeight||50;
	//判断导航
	scrollNavNum($(window).scrollTop(),_e);
	//
	
}
function btnEvent(){
	_js._class("badge").checked=false;
	_js._class("badge").onclick=function (){
		this.checked=!this.checked;
		if(this.checked){
			TweenMax.to(_js._class("badge"),.4,{css:{alpha:.9}});
			_js._class("wap_nav").style.left=$(window).width()+"px";
			TweenMax.to(_js._class("wap_nav"),.4,{css:{left:$(window).width()-240,width:240}});
		}else{
			TweenMax.to(_js._class("badge"),.4,{css:{alpha:.5}});
			TweenMax.to(_js._class("wap_nav"),.4,{css:{left:$(window).width(),width:0}});
		}
	}
	//=====
	var _content5_now=0;
	var _content5_wap_arr=[];
	var _content5_pc_arr=[];
	myContent5List.hide(_content5_now);
	
	
}
//不同设备显示不同信息
function equipment(){
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
function isMobile(){
	var userAgentInfo = navigator.userAgent; 
	//, "iPad", "iPod"
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone"); 
	var flag = false; 
	for (var v = 0; v < Agents.length; v++) { 
   		if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = true; break; } 
	} 
	return flag; 
}
