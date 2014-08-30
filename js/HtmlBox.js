// JavaScript Document
function creatHtmlBox(id,arr){
	this._id=id;
	this._arr=arr;
	this._boxArr=[];
	this._now=0;
	this._top=$(window).scrollTop()||0;
	this._isShow=false;
	this._bg=null;
	this._fun=null;
	this.initPlay();
}
creatHtmlBox.prototype.initPlay=function (){
	var item=this;
	this._bg=document.createElement("div");
	this._bg.style.position="absolute";
	this._bg.style.left=0;
	this._bg.style.top=0;
	this._bg.style.background="#000";
	this._bg.style.opacity=.4;
	this._bg.style.filter="alpha(opacity=40)"; 
	this._bg.style.display="none";
	document.getElementById(this._id).appendChild(this._bg);
	
	for(var i=0;i<this._arr.length;i++){
		var box=document.getElementById(this._arr[i]);
		box.style.display="none";
		box.style.zIndex=99;
		this._boxArr.push(box);
	}
	
	this._bg.onclick=function (){
		item.hide();
	}
}
creatHtmlBox.prototype.hide=function (){
	this._bg.style.display="none";
	this._boxArr[this._now].style.display="none";
	this._isShow=false;
	document.getElementById(this._id).style.display="none";
	if(this._fun){
		this._fun();
		this._fun=null;
	}
}
creatHtmlBox.prototype.show=function (id,fun){
	this._fun=fun||null;
	this._now=id||0;
	this.replay(this._now);
	this._bg.style.display="block";
	this._boxArr[this._now].style.display="block";
	document.getElementById(this._id).style.display="block";
	this._isShow=true;
	this.scale();
}
creatHtmlBox.prototype.replay=function (id){
	for(var i=0;i<this._boxArr.length;i++){
		if(i!=id){
			this._boxArr[i].style.display="none";
		}
	}
}
creatHtmlBox.prototype.scale=function (){
	this._top=$(window).scrollTop()||0;
	var _width=$(window).width();
	var _height=document.body.offsetHeight<$(window).height()?$(window).height():document.body.offsetHeight;
	this._bg.style.width=_width+"px";
	this._bg.style.height=_height+"px";
	this._boxArr[this._now].style.left=(_width-this._boxArr[this._now].offsetWidth)/2+"px";
	var y=($(window).height()-this._boxArr[this._now].offsetHeight)/2+this._top;
	y=y<0?0:y;
	this._boxArr[this._now].style.top=y+"px";
}
creatHtmlBox.prototype.scroll=function (num){
	this._top=num;
}