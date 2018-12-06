
    //页面加载后 取出cookie中的数据 显示到页面购物车列表中
    function aa(){
        var brr = getLocalstorage("key");
	var conStr = "";
	for( var i = 0 ; i < brr.length ; i++ ){
		var shopinfo = brr[i];
		conStr += '<div class="shop-item clearfix">'+
					'<p class="fl"><input type="checkbox" class="ck"/></p>'+
					'<img class="fl" src="'+ shopinfo.src +'" alt="" />'+
					'<p class="fl">'+ shopinfo.name +'</p>'+
					'<span class="fl">'+ shopinfo.price +'元</span>'+
					'<p class="fl count" '+
						'data-id="'+ shopinfo.id +'" '+
						'data-price="'+ shopinfo.price +'" data-count="'+ shopinfo.count +'"'+
						'data-name="'+ shopinfo.name +'" data-src="'+ shopinfo.src +'"'+
						'>'+
						'<span class="updateCount" data-number="1">+</span>'+
						'<span class="shop-count">'+ shopinfo.count +'</span>'+
						'<span class="updateCount" data-number="-1">-</span>'+
					'</p>'+
					'<em class="fl sumPrice">'+ (shopinfo.count * shopinfo.price) +'元</em>'+
					'<i class="fl delBtn">删除</i>'+
				'</div>'
	}
	$(".shoplist").html( conStr );
	
	//全选功能
	$("#selectAll").click(function(){
		// attr()  属性值是布尔值用prop操作属性
		// alert( $(this).prop("checked") );
		$(".ck").prop( "checked" , $(this).prop("checked") );
		jiesuan();
	})
	//单击复选框 调用结算功能
	$(".ck").click(function(){
		jiesuan();
	})
	
	// :text :password  :button 
	// :checkbox:checked   
	
	//结算功能 : 统计被选中的复选框的商品的数量和金额
	function jiesuan(){
		var count = 0;
		var money = 0;
		//遍历被选中的复选框
		$(".ck:checked").each(function(){
			// this  某个复选框
			count += Number( $(this).parent().parent().find(".shop-count").html() );
			money += parseInt( $(this).parent().parent().find(".sumPrice").html() ); 
		})
		$(".count2").html( count );
		$(".money2").html( money );
	}
	
	
	//加减操作
	$(".updateCount").click(function(){
		//找到要操作的商品的编号
		var id = $(this).parent().data("id");
		//获取商品操作的符号  1  -1
		var sign = $(this).data("number");
		
		//获取商品数量
		var count = $(this).parent().find(".shop-count").html();
		
		//如果sign的值是-1（减法）  并且 商品的数量为1
		if( sign == -1 && count == 1 ){
			return;
		}
		
		//根据编号 在brr中查找要修改的商品
		for( var i = 0 ; i < brr.length ; i++ ){
			if( id == brr[i].id ){
				//修改下标为i的商品的count属性值  
				brr[i].count += sign;
                //将数组重新存入到cookie中
                localStorage.setItem("key",JSON.stringify(brr));
				//修改页面数量
				$(this).parent().find(".shop-count").html( brr[i].count );
				//修改页面的商品总金额
				$(this).parent().next().html( brr[i].count*brr[i].price+"元" );
				
				jiesuan();
				break;
			}
		}
	})
	
	//删除操作
	//为每一个删除按钮添加单击事件
	$(".delBtn").click(function(){
		//获取当前删除按钮对应的商品编号
		var id = $(this).parent().find(".count").data("id");
		if( confirm("确定要删除么?") ){
			//遍历brr  根据编号找到要删除的商品
			for( var i = 0 ; i < brr.length ; i++ ){
				if( id == brr[i].id ){
					//删除数组中下标为i的对象  [{}，{}，{}]
					brr.splice( i,1 );
					//将brr重新存入到cookie
					localStorage.setItem("key",JSON.stringify(brr));
					//修改页面结构
					$(this).parent().remove();
					break;
				}
			}
		}
	})
    }
	