//baner的轮播图
function rm(){
	this.body = $(".banner img");
	this.init = function(){
		var index = this.body.length-1,
			zi = 0;
		this.timer = setInterval(function(){
			zi--
			this.body.eq(index).animate({opacity:0},1000,function(){
				$(this).css({"zIndex":zi,"opacity":1})
			})
			index--
			if(index==-1){
				index = this.body.length-1
			}
		}.bind(this),4000)
	}
}
//header的二维码显示
function qr(){
	this.body = $(".phone-shopping");
	this.init = function(){
		this.body.bind("mouseenter",function(){
			new ph().body.show().css("zIndex",100);
		}).bind("mouseleave",function(){				
			new ph().body.hide();
		})	
	}
}
	function ph(){
		this.body = $(".header-qrcord");
	}
//NAV的“首页”样式
function headerNav(){
	this.body = $(".nav-header li");
	this.init = function(){
		this.body.eq(1).nextAll().css("width",92);
		this.body.eq(0).children(0).css("color","red");
	}
}
//左侧类型导航的显示隐藏
 function categoryList(){
	this.body = $(".category-list");
	this.init=function(){
		this.body.on("mouseenter","div",function(){
 		$(this).css("background-color","white")
			$(this).children(0).css("color","black").siblings().css("color","black")
			var index = $(this).index()
			new ca().body.css("display","block"); 
			new cad(index).body.css("display","block").siblings().css("display","none")
		}).on("mouseleave","div",function(){		
			$(this).css("background-color","#4d4d4d")
			new caa().body.css("background-color","white")
			new ca().body.css("background-color","white")
			new cad().body.css("background-color","white")
			$(this).children(0).css("color","white").siblings().css("color","width")
			new ca().body.css("display","none")
		})
	}	
}
function ca(){
	this.body = $(".category-dropdown")
}
function cad(index){
	this.body= $(".category-dropdown>div").eq(index)
}
function caa(){
	this.body = $(".category-all")
}
function cab(){
	this.body = $(".category-banner")
}





function ware(){
	var pageNum = 6;//每页的数据量
	this.body =$(".ware-u");
	this.conStr =""
	this.init=function(){
		$.ajax({
			type:"get",
			url:"json/index.json",
			async:true,
			success : function(arr){
				this.showData(arr);
			}.bind(this)
		})
		return this
	}
	
	//封装一个函数 功能是根据页面获取分页后的数据
	this.showData = function(arr){	
		for( var i = 0 ; i < pageNum ; i++ ){
			var pro = arr[i];
				this.conStr += `<li class= "ware-items">
							<div class = "ware-img">
								<a href="page.html?pid=${pro.id}">
									<img src="img/${pro.src}">
								</a>
								<div class = "ware-word">
									<span></span>
								</div>
							</div>
							<div class= "ware-body">
								<p class= "ware-nane"><a href="page.html?pid=${pro.id}">${ pro.uname }</a></p>
								<p class="ware-prs">${ pro.price}</p>
								<div class="ware-time">剩余。。。</div>
							</div>
						</li>`
		}
		this.body.html( this.conStr );
	}
}



//右侧的指定地区三小时
function wareRight(){
	this.body = $(".ware-right-u");
	this.conStr =""
	var index = 1;//页码
	var pageNum = 3;//每页的数据量
	this.init=function(){
		$.ajax({
			type:"get",
			url:"json/ware.json",
			async:true,
			success : function(arr){
				this.showData(arr,index);
			}.bind(this)
		});
	}
	
	//封装一个函数 功能是根据页面获取分页后的数据
	this.showData =function(arr,index){
		for( var i = (index-1)*pageNum ; i < index*pageNum ; i++ ){
			var pro = arr[i];
				this.conStr += `<li class = "ware-right-items">
							<a href="page.html?pid=${pro.id}" class= "ware-pic">
								<img src="img/${pro.src}" alt="">
							</a>
							<div class= "ware-right-body">
								<p class= "ware-right-name"><a href="">${ pro.uname }</a></p>
								<p class= "ware-right-prs"><a href="">${ pro.price }</a></p>
								<div class= "group">
									<span class= "group-sp">指定地区三小时送达</span>
								</div>
								<span class="arrival-btn">到店团</span>
							</div>
						</li>`
		}
		this.body.html( this.conStr );
	}
}

function section(){
	this.body = $(".section-body-u")
	this.conStr=""
	var index = 1;//页码
	var pageNum = 5;//每页的数据量
	this.init=function(){
		$.ajax({
			type:"get",
			url:"json/section.json",
			async:true,
			success : function(arr){
				this.showData(arr,index);
			}.bind(this)
		});
	}
	//封装一个函数 功能是根据页面获取分页后的数据
	this.showData= function(arr,index){
		for( var i = (index-1)*pageNum ; i < index*pageNum ; i++ ){
			var pro = arr[i];
				this.conStr += `<li class= "section-body-list">
						<a href="page.html?pid=${pro.id}" class="section-body-pic"><img src="img/${pro.src}"></a>
						<p class="section-body-name"><a href="">${ pro.uname }</a></p>
						<p class="section-body-show">首发当天部分机型现货</p>
						<div class="sct-d-prs">
							<p class="sct-prs">${ pro.price }</p>
							<p class="sct-cankao">
								<span>电商参考价:</span>${ pro.price }								
							</p>
						</div>
						<div class="sct-pingjia">
							<a href="">商品评价</a>
							<a href="">商品视频</a>
							<a href="">网友点评</a>
						</div>
					</li>`
		}
		this.body.html( this.conStr );
	}
}
function noopsuche(){
	this.body = $(".noopsuche-top-show-u")
	this.init = function(){
		this.body.on("mouseenter","li",function(){
			$(this).css("background","#ce1a1b").siblings().css("background","#ccc")
			this.index = $(this).index()
			new noop(this.index).body.css("display","block").siblings().css("display","none")
		})
		new nopr().body.on("mouseenter","img",function(){
			$(this).stop().animate({"width":220,"height":250,"marginTop":-5},300)
		}).on("mouseleave","img",function(){
			$(this).stop().animate({"width":214,"height":235,"margin-top":0},300)
		})
	}
}
function noop(index){
	this.body = $(".noopsuche-top-u li").eq(index)
}
function nopr(){
	this.body = $(".noop-right")
}


function touch(){
	this.body = $(".clearfix-right")
	this.init = function(){
		this.body.on("mouseenter","img",function(){
			$(this).stop().animate({"width":440,"height":200,"margin-top":-18},300)
		}).on("mouseleave","img",function(){
			$(this).stop().animate({"width":428,"height":182,"margin-top":0},300)
		})
	}	
}
function mark(){
	this.body =$(".clearfix-mark");
	this.init =function(){
		this.body.bind("mouseenter",function(){
			$(this).stop().animate({"top":0},300)
		}).bind('mouseleave',function(){
			$(this).stop().animate({"top":152},300)
		})
	}
}

function sectionfour(){
	this.body = $(".section4-body-u");
	this.conStr =""
	var index = 1;//页码
	var pageNum = 4;//每页的数据量
	this.init=function(){
		$.ajax({
			type:"get",
			url:"json/sectionf.json",
			async:true,
			success : function(arr){
				this.showData(arr,index);
			}.bind(this)
		})
	}
	;
	this.showData = function(arr,index){
		this.conStr += `<li class= "section4-body-list">
						<a href=""><img src="https://mercrt-fd.zol-img.com.cn/g5/M00/09/09/ChMkJ1s_IL6IAAn1AABfITG9iuYAApg0AGcn3kAAF85555.jpg" alt=""></a>
					</li>`
		for( var i = (index-1)*pageNum ; i < index*pageNum ; i++ ){
			var pro = arr[i];
				this.conStr += `<li>
							<a href="page.html?pid=${pro.id}"><img src="${pro.src}" alt=""></a>
							<p class= "s4-items"><a href="">${pro.uname}</a></p>
							<p class= "s4-items">RMB<span>${pro.price}</span></p>
							</li>`
		}		
		this.body.html( this.conStr );
	}
	this.body.on("mouseenter","img",function(){
		$(this).not(".section4-body-list img").stop().animate({"width":216,"height":216,"margin-top":-8,"margin-left":-8},200)
	}).on("mouseleave","img",function(){
		$(this).not(".section4-body-list img").stop().animate({"width":200,"height":200,"margin-top":0,"margin-left":0},200)
	})
}
function search(){
	this.body = $(".search-fixed")
	this.init = function(){
		$(window).scroll(function(){
			var scro = $(document).scrollTop();
			console.log(scro)
			if(scro>400 ){
				this.body.css("display","block")
			}else{
				this.body.css("display","none")
			}
		}.bind(this))
	}
}

