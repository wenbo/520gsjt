// JavaScript Document
var _product_list2_nav_id=0;
var _menu_now=1;
var _img_now=0;
var _my_product_img=null;
var _htmlBox=null;
function start(){
	_htmlBox=new creatHtmlBox("product_box",["product_box_content_0","product_box_content_1","product_box_content_2","product_box_content_3"]);
	listNav();
	menuEvent();
	menuScroll();
	imgEvent();
	$(window).bind('resize',function(){	
		_htmlBox.scale();
	});
	$(window).bind('scroll',function(){	
		productScroll();
		menuScroll();
	});
	_my_product_img=new ImagesMove("product_tv_img2","li",700,["img_left_arrow2","img_right_arrow2", imgComplete],true,4000);
	$("#product_box_content_0_mask").mCustomScrollbar({scrollInertia:0,mouseWheelPixels:18,advanced:{updateOnContentResize:true}});
	$("#product_box_content_1_mask").mCustomScrollbar({scrollInertia:0,mouseWheelPixels:18,advanced:{updateOnContentResize:true}});
	$("#product_box_content_2_mask").mCustomScrollbar({scrollInertia:0,mouseWheelPixels:18,advanced:{updateOnContentResize:true}});
	$("#product_box_content_3_mask").mCustomScrollbar({scrollInertia:0,mouseWheelPixels:18,advanced:{updateOnContentResize:true}});
}
function box(id){
	_htmlBox.scale();
	_htmlBox.show(id);
}
function productScroll(){
	if($(window).scrollTop()>320){
		document.getElementById("left_menu").style.position="fixed";
		document.getElementById("left_menu").style.top="88px";
	}else{
		document.getElementById("left_menu").style.position="absolute";
		document.getElementById("left_menu").style.top="409px";
	}
	if($(window).scrollTop()>320){
		document.getElementById("product_list2").style.position="fixed";
		document.getElementById("product_list2").style.top="0";
	}else{
		document.getElementById("product_list2").style.position="absolute";
		document.getElementById("product_list2").style.top="320px";
	}
}
function listNav(){
	listStyle(_product_list2_nav_id);
	var _el=document.getElementById("product_list2_nav").getElementsByTagName("a");
	for(var i=0;i<_el.length;i++){
		var _item=_el[i];
		_item.index=i;
		_item.onmouseover=function(){
			if(_product_list2_nav_id!=this.index){
				this.style.background="url(images/product_nav_bg.gif) no-repeat";
				this.style.color="#fff";
				this.style.textDecoration="none";
			}
		}
		_item.onmouseout=function(){
			if(_product_list2_nav_id!=this.index){
				this.style.background="none";
				this.style.color="#3f3f3f";

			}
		}
		_item.onclick=function(){
			if(_product_list2_nav_id!=this.index){
				_product_list2_nav_id=this.index;
				listStyle(_product_list2_nav_id);
			}
		}
	}
}
function listStyle(id){
	if(id==0){
		document.getElementById("left_menu").style.display="block";
	}else{
		document.getElementById("left_menu").style.display="none";
	}
	var _el=document.getElementById("product_list2_nav").getElementsByTagName("a");
	for(var i=0;i<_el.length;i++){
		if(i==id){
			_el[i].style.background="url(images/product_nav_bg.gif) no-repeat";
			_el[i].style.color="#fff";
			_el[i].style.textDecoration="none";
			document.getElementById("tab_"+i).style.display="block";
		}else{
			_el[i].style.background="none";
			_el[i].style.color="#3f3f3f";
			document.getElementById("tab_"+i).style.display="none";
		}
	}
}

function menuScroll(){
	if($(window).scrollTop()<document.getElementById("tab_0_1").offsetTop){
		_menu_now=1;
	}else if($(window).scrollTop()>=document.getElementById("tab_0_1").offsetTop&&$(window).scrollTop()<document.getElementById("tab_0_2").offsetTop){
		_menu_now=2;
	}else if($(window).scrollTop()>=document.getElementById("tab_0_2").offsetTop&&$(window).scrollTop()<document.getElementById("tab_0_3").offsetTop){
		_menu_now=3;
	}else{
		_menu_now=4;
	}
	menuStyle(_menu_now);
}
function menuEvent(){
	var _el=document.getElementById("left_menu").getElementsByTagName("a");
	for(var i=0;i<_el.length;i++){
		_el[i].index=i;
		_el[i].onmouseover=function (){
			if(_menu_now!=this.index){
				TweenMax.to(this,.4,{css:{background:"#333333"}});
			}
		}
		_el[i].onmouseout=function (){
			if(_menu_now!=this.index){
				TweenMax.to(this,.4,{css:{background:"#7e7e7e"}});
			}
		}
		_el[i].onclick=function (){
			if(this.index==0){
			 $('html, body').animate({scrollTop:0},1000,"swing");
			}else{
				var _totalNum=document.getElementById("tab_0_"+(this.index-1)).offsetTop;
			 $('html, body').animate({scrollTop:_totalNum+260},1000,"swing");
			}
		}
	}
}
function menuStyle(id){
	var _el=document.getElementById("left_menu").getElementsByTagName("a");
	for(var i=0;i<_el.length;i++){
		if(id==i){
			TweenMax.to(_el[i],.4,{css:{background:"#333333"}});
		}else{
			TweenMax.to(_el[i],.4,{css:{background:"#7e7e7e"}});
		}
	}
}

function imgEvent(){
	imgStyle(_img_now);
	var _small_el=document.getElementById("product_tv_img").getElementsByTagName("a");
	if(_small_el.length==1){
		document.getElementById("img_left_arrow2").style.display="none";
		document.getElementById("img_right_arrow2").style.display="none";
		return false;
	}
	for(var i=0;i<_small_el.length;i++){
		var _item=_small_el[i];
		_item.index=i;
		_item.onmouseover=function(){
			if(_img_now!=this.index){
				TweenMax.to(this,.4,{css:{alphs:.7}});
			}
		}
		_item.onmouseout=function(){
			if(_img_now!=this.index){
				TweenMax.to(this,.4,{css:{alphs:1}});
			}
		}
		_item.onclick=function(){
			if(_img_now!=this.index){
				_my_product_img.showDiv(this.index,_my_product_img._now>this.index);
				_img_now=this.index;
				imgStyle(_img_now);
			}
		}
	}
}
function imgComplete(id){
	_img_now=id;
	imgStyle(id);
}
function imgStyle(id){
	var _small_el=document.getElementById("product_tv_img").getElementsByTagName("a");
	for(var i=0;i<_small_el.length;i++){
		if(i==id){
			TweenMax.to(_small_el[i],.4,{css:{border:"1px #000 solid"}});
		}else{
			TweenMax.to(_small_el[i],.4,{css:{border:"1px #ccc solid"}});
		}
	}
}

