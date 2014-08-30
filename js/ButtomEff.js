// JavaScript Document
function creatButtomEff(now,total,id,arr,target){
	this._now=now;
	this._total=total;
	this._id=id;
	this._arr=arr;
	this._mcArr=[];
	this._target=target||"_blank";
	this.initPlay();
}
creatButtomEff.prototype.clickResult=function(id){
	for(var i=0;i<this._arr.length;i++){
		if(i==id){
			document.getElementById(this._arr[i]).style.display="block";
		}else{
			document.getElementById(this._arr[i]).style.display="none";
		}
	}
}
creatButtomEff.prototype.initPlay=function(){
	var item=this;
	for(var i=0;i<this._total;i++){
		var btn=document.getElementById(this._id+i);
		this._mcArr.push(btn);
		if(i==this._now){
			btn.style.opacity=1;
			btn.style.filter="alpha(opacity=100)"; 
		}else{
			document.getElementById(this._arr[i]).style.display="none";
			btn.style.opacity=0;
			btn.style.filter="alpha(opacity=0)"; 
		}
		btn.onmouseover=function (e){
			var e = window.event || e;
			var srcElement = e.srcElement || e.target;	
			var arr=srcElement.id.split("_");
			var id=arr[arr.length-1];
			if(id!=item._now){
				srcElement.style.cursor="pointer";
				TweenMax.to(srcElement,.4,{css:{alpha:1},ease:Linear.easeInOut});
			}else{
				srcElement.style.cursor="default";
			}
		}
		btn.onmouseout=function (e){
			var e = window.event || e;
			var srcElement = e.srcElement || e.target;	
			var arr=srcElement.id.split("_");
			var id=arr[arr.length-1];
			if(id!=item._now){
				srcElement.style.cursor="pointer";
				TweenMax.to(srcElement,.4,{css:{alpha:0},ease:Linear.easeInOut});
			}
		}
		btn.onclick=function (e){
			var e = window.event || e;
			var srcElement = e.srcElement || e.target;	
			var arr=srcElement.id.split("_");
			var id=arr[arr.length-1];
			if(id!=item._now){
				item._mcArr[item._now].style.opacity=0;
				item._mcArr[item._now].style.filter="alpha(opacity=0)"; 
				item._now=id;
				item.clickResult(id);
				//window.open(item._arr[id],this._target);
			}
		}
	}
}