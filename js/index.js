
function tm(){
	var img = $(".banner img"),
		index = img.length-1,
		zi = 0
	var timer = setInterval(function(){	
		zi--	
		$(".banner img").eq(index).animate({opacity:0},1000,function(){
			$(this).css({"zIndex":zi,"opacity":1})
		})
		index--
		if(index==-1){
			index = img.length-1
		}
	},2000)
}
function qr(){
	$(".phone-shopping").bind("mouseenter",function(){
		$(".header-qrcord").show().css("zIndex",100);
	}).bind("mouseleave",function(){
		$(".header-qrcord").hide();
	})
}
function headerNav(){
	$(".nav-header li").eq(1).nextAll().css("width",92);
	$(".nav-header li").eq(0).children(0).css("color","red")
}
 function categoryList(){
 	$(".category-list").on("mouseenter","div",function(){
 		$(this).css("background-color","white")
 		$(this).children(0).css("color","black").siblings().css("color","black")
 		var index = $(this).index()
 		$(".category-dropdown").css("display","block");
 		$(".category-dropdown>div").eq(index).css("display","block").siblings().css("display","none")
 	}).on("mouseleave","div",function(){		
 		$(this).css("background-color","#4d4d4d")
 		$(".category-all").css("background-color","white")
 		$(".category-dropdown").css("background-color","white")
 		$(".category-banner").css("background-color","white")
 		$(this).children(0).css("color","white").siblings().css("color","width")
 		$(".category-dropdown").css("display","none")
    })
}
function ware(){
	var index = 1;//页码
	var pageNum = 6;//每页的数据量
	$.ajax({
		type:"get",
		url:"json/index.json",
		async:true,
		success : function(arr){
			showData(arr,index);
		}
	});
	//封装一个函数 功能是根据页面获取分页后的数据
	function showData(arr,index){
		var conStr = "";
		for( var i = (index-1)*pageNum ; i < index*pageNum ; i++ ){
			var pro = arr[i];
				conStr += `<li class= "ware-items">
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
		$(".ware-u").html( conStr );
	}
}
function wareRight(){
	var index = 1;//页码
	var pageNum = 3;//每页的数据量
	$.ajax({
		type:"get",
		url:"json/ware.json",
		async:true,
		success : function(arr){
			showData(arr,index);
		}
	});
	//封装一个函数 功能是根据页面获取分页后的数据
	function showData(arr,index){
		var conStr = "";
		for( var i = (index-1)*pageNum ; i < index*pageNum ; i++ ){
			var pro = arr[i];
				conStr += `<li class = "ware-right-items">
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
		$(".ware-right-u").html( conStr );
	}
}

function section(){
	var index = 1;//页码
	var pageNum = 5;//每页的数据量
	$.ajax({
		type:"get",
		url:"json/section.json",
		async:true,
		success : function(arr){
			showData(arr,index);
		}
	});
	//封装一个函数 功能是根据页面获取分页后的数据
	function showData(arr,index){
		var conStr = "";
		for( var i = (index-1)*pageNum ; i < index*pageNum ; i++ ){
			var pro = arr[i];
				conStr += `<li class= "section-body-list">
						<a href="page.html?pid=${pro.id}" class="section-body-pic"><img src="img/${pro.src}"></a>
						<p class="section-body-name"><a href="">${ pro.uname }</a></p>
						<p class="section-body-show">首发当天部分机型现货</p>
						<div class="sct-d-prs">
							<p class="sct-prs">${ pro.price }</p>
							<p class="sct-cankao">
								<span>电商参考价:</span>
							</p>
						</div>
						<div class="sct-pingjia">
							<a href="">商品评价</a>
							<a href="">商品视频</a>
							<a href="">网友点评</a>
						</div>
					</li>`
		}
		$(".section-body-u").html( conStr );
	}
}
function noopsuche(){
	$(".noopsuche-top-show-u").on("mouseenter","li",function(){
		$(this).css("background","#ce1a1b").siblings().css("background","#ccc")
		$(".noopsuche-top-u li").eq($(this).index()).css("display","block").siblings().css("display","none")
	})
	$(".noop-right").on("mouseenter","img",function(){
		$(this).stop().animate({"width":214},300)
	}).on("mouseleave","img",function(){
		$(this).stop().animate({"width":210},300)
	})
}
function sectionfour(){
	var index = 1;//页码
	var pageNum = 4;//每页的数据量
	$.ajax({
		type:"get",
		url:"json/sectionf.json",
		async:true,
		success : function(arr){
			showData(arr,index);
		}
	});
	function showData(arr,index){
		var conStr = "";
		conStr += `<li class= "section4-body-list">
						<a href=""><img src="https://mercrt-fd.zol-img.com.cn/g5/M00/09/09/ChMkJ1s_IL6IAAn1AABfITG9iuYAApg0AGcn3kAAF85555.jpg" alt=""></a>
					</li>`
		for( var i = (index-1)*pageNum ; i < index*pageNum ; i++ ){
			var pro = arr[i];
				conStr += `<li>
							<a href="page.html?pid=${pro.id}"><img src="${pro.src}" alt=""></a>
							<p class= "s4-items"><a href="">${pro.uname}</a></p>
							<p class= "s4-items">RMB<span>${pro.price}</span></p>
							</li>`
		}		
		$(".section4-body-u").html( conStr );
	}
	$(".section4-body-u").on("mouseenter","img",function(){
		$(this).not(".section4-body-list img").stop().animate({"width":215,"height":215},200)
	}).on("mouseleave","img",function(){
		$(this).not(".section4-body-list img").stop().animate({"width":200,"height":200},200)
	})
}

