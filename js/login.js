function red(){
    $(".formHead").on("click","h3",function(){
        $(this).addClass("red").siblings().removeClass("red")
        $(".form-all-right>div").eq($(this).index()+1).css("display","block").siblings().css("display","none")
        $(".form-all-right>div").eq(0).css("display","block")
    })
}
function login(){
    $(".login-btn").bind("click",function(){
        var ajax =new XMLHttpRequest();
        ajax.open("get","../php/login_register.php?"+`status=register&uname=${$("#username").val()}&upwd=${$("#userpwd").val()}`);
        ajax.send();
        ajax.onreadystatechange = function(){
            if(ajax.status == 200 && ajax.readyState ==4){
                var res = ajax.responseText;
                if(res==0){
                    alert(" 找不到该用户");
                }else if(res ==1){
                    alert("登陆成功")
                    location.href="../index.html"
                }else{
                    alert("密码错误")
                }
            }
        }
    })
	
}