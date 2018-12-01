function register(){
    var flagName = null;
	$("#uname").bind("blur",function(){
		var reg=/^\w{6,12}$/
		var str = $("#uname").val()
		if(reg.test(str)){
			$(".s1").html("合法")
			flagName = true;
		}else{
			$(".s1").html("请输入正确名字")
			flagName = false;
		}
    })
    var flagPwd = null;
	$("#upwd").bind("blur",function(){
		var reg=/^\d{6,12}$/
		var str = $("#upwd").val()
		if(reg.test(str)){
			$(".s2").html("合法")
			flagPwd = true;
		}else{
			$(".s2").html("请输入正确密码")
			flagPwd = false;
		}
    })
	$("#btn").bind("click",function(){
		if(flagName&&flagPwd){
			var ajax =new XMLHttpRequest();
			ajax.open("get","../php/login_register.php?"+`status=register&uname=${$("#uname").val()}&upwd=${$("#upwd").val()}`);
			ajax.send();
			ajax.onreadystatechange = function(){
				if(ajax.status == 200 && ajax.readyState ==4){
					var res = ajax.responseText;
					if(res==0){
						alert("该用户已被占用");
					}else if(res ==1){
						alert("注册成功")
						location.href="login.html"
					}
				}
			}
		}
	})
}