// JavaScript Document
//id: 最外层div,type:需要移动的标签，width:移动的宽度，btnArr(数组)：左箭头，右箭头，返回当前展示id,点击整个内容回调方法，isAuto：是否自动播放，time：自动播放的间隔时间，now：打开页面需要显示的图片索引
//new ImagesMove("div","img",500,[left,right,null,null]);
function ImagesMove(id,type,width,btnArr,isAuto,time,now){
	this.arr=[];//装载所有div
	this._btnArr=btnArr;
	this._width=width;
	this._pic_setNum;
	this._pic_isClick=true;
	this._isAuto=isAuto||false;
	this._time=time||5000;
	this._isClick=this._btnArr[3]||null;
	this._now=now||0;
	this._backImageEff=this._btnArr[2]||null;
	this._total=document.getElementById(id).getElementsByTagName(type).length;
	for(var i=0;i<this._total;i++){
		this.arr.push(document.getElementById(id).getElementsByTagName(type)[i]);
		this.arr[i].style.display="none";
		if(this._isClick){
			this.arr[i].style.cursor="pointer";
			this.arr[i].onclick=function (){
				this.value._isClick(this.id);
			}
		}
	}

	this.arr[this._now].style.display="block";
	this.recordOld=this.arr[this._now];
	if(this._total>1){
		if(this._btnArr[0]!=null){
			this.btnClick();
		}
	}
	if(this._isAuto){
		this._pic_setNum=window.setInterval(this.autoPlay,this._time,this);
	}
}
ImagesMove.prototype.showDiv=function(divNum,isRight){
	this._now=divNum;
	clearInterval(this._pic_setNum);
	if(this._backImageEff){
		switch(typeof(this._backImageEff)){
			case "function":
				this._backImageEff(divNum);
			break;
			case "object":
				this._backImageEff.backImageEffId(divNum);
			break;
		}
	}

	//==========初始当前div
	if(isRight){
		this.arr[divNum].style.left=-this._width+'px';
	}else{
		this.arr[divNum].style.left=this._width+'px';
	}
	if(this.recordOld!=null){
		if(isRight){
			TweenMax.to(this.recordOld,.4,{css:{left:this._width}});
		}else{
			TweenMax.to(this.recordOld,.4,{css:{left:-this._width}});
		}
	}
	
	this.startMove(this.arr[divNum],divNum,isRight);
	this.arr[divNum].style.display='block';
}
ImagesMove.prototype.startMove=function (id,num,isRight){
	var item=this;
	TweenMax.to(id,.4,{css:{left:0},onComplete:function (){
		if(item._isAuto){
			item._pic_setNum=window.setInterval(item.autoPlay,item._time,item);
		}
		item._pic_isClick=true;
	}});
	this.recordOld=this.arr[num];
}
ImagesMove.prototype.btnClick=function (){
	var left=document.getElementById(this._btnArr[0]);
	var right=document.getElementById(this._btnArr[1]);
	left.value=this;
	right.value=this;
	left.style.cursor="pointer";
	right.style.cursor="pointer";
	left.onmouseover=right.onmouseover=function (e){
		var e = window.event || e;
		var srcElement = e.srcElement || e.target;	
		TweenMax.to(srcElement,.4,{css:{alpha:.5},ease:Linear.easeInOut});
	}
	left.onmouseout=right.onmouseout=function (e){
		var e = window.event || e;
		var srcElement = e.srcElement || e.target;	
		TweenMax.to(srcElement,.4,{css:{alpha:1},ease:Linear.easeInOut});
	}
	left.onclick=function (){
		if(this.value._pic_isClick){
			this.value._pic_isClick=false;
			this.value.count(true);
		}
	}
	right.onclick=function (){
		if(this.value._pic_isClick){
			this.value._pic_isClick=false;
			this.value.count(false);
		}
	}
}
ImagesMove.prototype.count=function (isRight){
	if(!isRight){
		this._now++;
		if(this._now>=this._total){
			this._now=0;
		}
	}else{
		this._now--;
		if(this._now<0){
			this._now=this._total-1;
		}	
	}
	this.showDiv(this._now,isRight);
}
ImagesMove.prototype.autoPlay=function (a){
	a.count(false);
}
ImagesMove.prototype.clearSetInterval=function(){
	clearInterval(this._pic_setNum);
}
var _sto = setInterval;
window.setInterval=function (callback,timeout,param){
	var args = Array.prototype.slice.call(arguments,2);  
	var _cb = function(){  
		callback.apply(null,args);  
	}   
	return this._sto(_cb,timeout);
}
