// JavaScript Document
var _numNavId=0;
var _numNavClick=false;
function numNavBtn(){
	numNavEvent();
	//numWapNavEvent();
	var _navId=getUrlParam("id")||null;
	if(_navId){
		setTimeout(function(){goto(_navId);},250);
	}
}
//pc数字导航
function numNavEvent(){
	numNavEff(_numNavId);
	for(var i=0;i<18;i++){
		var _item=_js._class("num_nav").getElementsByTagName("li")[i];
		_item.index=i;
		
		_item.onmouseover=function (){
			if(this.index<16&&this.index!=0){
				if(this.index-1!=_numNavId){
					TweenMax.to(this.getElementsByTagName("span")[0],.4,{css:{background:"#66583e"}});
					TweenMax.to(this.getElementsByTagName("p")[0],.4,{css:{width:93,left:34}});
				}
			}else{
				TweenMax.to(this,.4,{css:{alpha:.7}});
			}
		}
		_item.onmouseout=function (){
			if(this.index<17&&this.index!=0){
				if(this.index-1!=_numNavId&&!_numNavClick){
					TweenMax.to(this.getElementsByTagName("span")[0],.4,{css:{background:"#a6a5a5"}});
					TweenMax.to(this.getElementsByTagName("p")[0],.4,{css:{width:0,left:0}});
				}
			}else{
				TweenMax.to(this,.4,{css:{alpha:1}});
			}
		}
		_item.onclick=function (){
			if(this.index<17&&this.index!=0){
				if(this.index-1!=_numNavId){
					_numNavId=this.index-1;
					_numNavClick=true;
					//numWapNavEff(_numNavId);
					numNavEff(_numNavId);
				}
			}else{
				
				if(this.index==17){
					_numNavId--;
					if(_numNavId<0){
						_numNavId=0;
						return;
					}
				}else if(this.index==18){
					_numNavId++;
					if(_numNavId>16){
						_numNavId=16;
						return;
					}
				}else{
					window.open("index.html","_self");
					return false;
				}
			}
			goto(_numNavId+1);
		}
		
	}
}
function numNavEff(id,e){
	var _e=_js||e;
	for(var i=0;i<17;i++){
		if(i!=0){
			var _item=_e._class("num_nav").getElementsByTagName("li")[i];
			if(i==id+1){
				TweenMax.to(_item.getElementsByTagName("span")[0],.4,{css:{background:"#66583e"}});
				TweenMax.to(_item.getElementsByTagName("p")[0],.4,{css:{width:93,left:34}});
			}else{
				TweenMax.to(_item.getElementsByTagName("span")[0],.4,{css:{background:"#a6a5a5"}});
				TweenMax.to(_item.getElementsByTagName("p")[0],.4,{css:{width:0,left:0}});
			}
		}
	}
}

function goto(id){
	
	//$(window).scrollTop()-
	var _totalNum=_js._class("video_container content_"+id).offsetTop;
	//var _centerNum=Math.abs(_totalNum-$(window).scrollTop());
	//console.log(_centerNum);
	//var _time=(_centerNum);
	 $('html, body').animate({scrollTop:_totalNum+40},1000,"swing",function (){_numNavClick=false;});
}
function scrollNavNum(num,_e){
	if(num>=0&&num<_e._class("video_container content_2").offsetTop){
		_numNavId=0;
	}else if(num>=_e._class("video_container content_2").offsetTop&&num<_e._class("video_container content_3").offsetTop){
		_numNavId=1;
	}else if(num>=_e._class("video_container content_3").offsetTop&&num<_e._class("video_container content_4").offsetTop){
		_numNavId=2;
	}else if(num>=_e._class("video_container content_4").offsetTop&&num<_e._class("video_container content_5").offsetTop){
		_numNavId=3;
	}else if(num>=_e._class("video_container content_5").offsetTop&&num<_e._class("video_container content_6").offsetTop){
		_numNavId=4;
	}else if(num>=_e._class("video_container content_6").offsetTop&&num<_e._class("video_container content_7").offsetTop){
		_numNavId=5;
	}else if(num>=_e._class("video_container content_7").offsetTop&&num<_e._class("video_container content_8").offsetTop){
		_numNavId=6;
	}else if(num>=_e._class("video_container content_8").offsetTop&&num<_e._class("video_container content_9").offsetTop){
		_numNavId=7;
	}else if(num>=_e._class("video_container content_9").offsetTop&&num<_e._class("video_container content_10").offsetTop){
		_numNavId=8;
	}else if(num>=_e._class("video_container content_10").offsetTop&&num<_e._class("video_container content_11").offsetTop){
		_numNavId=9;
	}else if(num>=_e._class("video_container content_11").offsetTop&&num<_e._class("video_container content_12").offsetTop){
		_numNavId=10;
	}else if(num>=_e._class("video_container content_12").offsetTop&&num<_e._class("video_container content_13").offsetTop){
		_numNavId=11;
	}else if(num>=_e._class("video_container content_13").offsetTop&&num<_e._class("video_container content_14").offsetTop){
		_numNavId=12;
	}else if(num>=_e._class("video_container content_14").offsetTop&&num<_e._class("video_container content_15").offsetTop){
		_numNavId=13;
	}else if(num>=_e._class("video_container content_15").offsetTop&&num<_e._class("video_container content_16").offsetTop){
		_numNavId=14;
	}else if(num>=_e._class("video_container content_16").offsetTop){
		_numNavId=15;
	}
	if(!_numNavClick){
		numNavEff(_numNavId,_e);
	}
}
function getUrlParam(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r!=null) return unescape(r[2]); return null; //返回参数值
}
