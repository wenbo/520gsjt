// JavaScript Document
function JSResponsiveWeb(parameter,callback,resize){
	this._browserWidth,this._browserHeight;
	this._callback=callback||null;
	this._resize=resize||null;
	this.init(this);
	var _item=this;
	window.onresize=function (){
		_item.init(_item);
	};
}
JSResponsiveWeb.prototype.init=function (_this){
	_this._browserWidth=_this.getBrowserWidth();
	_this._browserHeight=_this.getBrowserHeight();
	_this.browserWidthHandle();
	if(_this._resize){_this._resize(_this._browserWidth,_this._browserHeight,_this);}
}
JSResponsiveWeb.prototype.getBrowserWidth=function (){
	if ( window.innerWidth ) { return window.innerWidth; }
	else if ( document.documentElement && document.documentElement.clientWidth != 0 ) { return document.documentElement.clientWidth; }
	else if ( document.body ) { return document.body.clientWidth; }
	return 0;
}
JSResponsiveWeb.prototype.getBrowserHeight=function (){
	if ( window.innerHeight ) { return window.innerHeight; }
	else if ( document.documentElement && document.documentElement.clientHeight != 0 ) { return document.documentElement.clientHeight; }
	else if ( document.body ) { return document.body.clientHeight; }
	return 0;
}

JSResponsiveWeb.prototype.browserWidthHandle=function(){
	if(this._browserWidth>1600){
		if(this._callback)this._callback("1600+",this._browserWidth,this);
	}else if(this._browserWidth<=1600&&this._browserWidth>1400){
		if(this._callback)this._callback("1400-1600",this._browserWidth,this);
	}else if(this._browserWidth<=1400&&this._browserWidth>1200){
		if(this._callback)this._callback("1200-1400",this._browserWidth,this);
	}else if(this._browserWidth<=1200&&this._browserWidth>1024){
		if(this._callback)this._callback("1024-1200",this._browserWidth,this);
	}else if(this._browserWidth<=1024&&this._browserWidth>768){
		if(this._callback)this._callback("768-1024",this._browserWidth,this);
	}else if(this._browserWidth<=768&&this._browserWidth>640){
		if(this._callback)this._callback("640-768",this._browserWidth,this);
	}else if(this._browserWidth<=640&&this._browserWidth>480){
		if(this._callback)this._callback("480-640",this._browserWidth,this);
	}else if(this._browserWidth<=480&&this._browserWidth>360){
		if(this._callback)this._callback("360-480",this._browserWidth,this);
	}else if(this._browserWidth<=360&&this._browserWidth>320){
		if(this._callback)this._callback("320-360",this._browserWidth,this);
	}else if(this._browserWidth<320){
		if(this._callback)this._callback("320-",this._browserWidth,this);
	}
}
JSResponsiveWeb.prototype._class=function (str){
	var classElements = [],allElements = document.getElementsByTagName('*');
	for (var i=0; i< allElements.length; i++ ){
		if (allElements[i].className == str) {
			classElements[classElements.length] = allElements[i];
		}
	}
	 return classElements[0];
}
JSResponsiveWeb.prototype._tag=function (str){
	var classElements = [],allElements = document.getElementsByTagName('*');
	for (var i=0; i< allElements.length; i++ ){
		if (allElements[i].tagName.toLowerCase() == str) {
			classElements[classElements.length] = allElements[i];
		}
	}
	return classElements[0];
}
JSResponsiveWeb.prototype._$=function(id){
	return document.getElementById(id);
}