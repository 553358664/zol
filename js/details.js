window.onload=function(){  
    new adc()
    // new border().init();
    border().init()
    $(".category-nav").bind("mouseenter",function(){
        new list().init()
    }).bind("mouseleave",function(){
        list().nexte()
    })
   new mark().init();
    $(".else-add").bind("click",function(){
        new add().init()
    })
    $(".else-ent").bind("click",function(){
        new add().ent()
    })
}

function add(){
    this.body = $(".else-text")
    this.init =function(){
        this.body.val(this.body.val()*1+1)

    }
    this.ent =function(){
        this.body.val(this.body.val()*1-1)
        if(parseInt(this.body.val())<1){
            this.body.val("1")
        }
    }
    return this
}

function adc(){
    var str = location.href;
    var arr = str.split("?");
    var pid = arr[1].split("=")[1];
    $.ajax({
        type:"get",
        url:"../json/index.json",
        async:true,
        success : function(arr){
            var page = " ",
                img = " " ;
            for( var i = 0 ; i < arr.length ; i++ ){
                var pro = arr[i];
                if( pro.id == pid ){
                    //找到了要显示的商品信息
                    page = ` <p>${pro.uname}</p> 
                            <span class="else-sp ">
                            送手机壳，钢化膜，指环支架！千元屏霸，屏占比91%全面屏！
                            </span>`;  
                     img =` <a href="" class="wraper-a">
                                <img src="${pro.img1}" alt="">
                            </a>
                            <a href="" class="wraper-a">
                                <img src="${pro.img2}" alt="">
                            </a>
                            <a href="" class="wraper-a">
                                <img src="${pro.img3}" alt="">
                            </a>
                            <a href="" class="wraper-a">
                                <img src="${pro.img4}" alt="">
                            </a>
                            <div class="wraper-mark"></div>`  
                    bottom1=`
                             <img src="${pro.fimg1}" alt="">
                            `     
                    bottom2=`
                            <img src="${pro.fimg2}" alt="">
                            ` 
                    bottom3=`
                            <img src="${pro.fimg3}" alt="">
                            `
                    bottom4=`
                            <img src="${pro.fimg4}" alt="">
                            `   
                    bImg =`
                            <img src="${pro.bimg1}" alt="">
                            <img src="${pro.bimg2}" alt="">
                            <img src="${pro.bimg3}" alt="">
                            <img src="${pro.bimg4}" alt="">
                    ` 
                    pri =`${pro.price}` 
                    var a = i                                                
                }                
            }
            $(".else-title").html( page );            
            $(".wraper-body-img").prepend( img );
            $(".wf1").html(bottom1);
            $(".wf2").html(bottom2);
            $(".wf3").html(bottom3);	
            $(".wf4").html(bottom4);
            $(".wraper-bigimg")	.html(bImg)	
            $(".else-price-sp").html(pri);
            $(".car-btn").bind("click",function(){
                var flag = true,
                    brr=[],
                    num = $(".else-text").val(),
                    json = {
                        "id": arr[a].id,
                        "name":arr[a].uname,
                        "src":arr[a].img1,
                        "price":(arr[a].price).split("￥").join(""),
                        "count":num
                    },
                    crr = getLocalstorage("key") ;    
       
                if( crr ){ 
                    brr = crr;                     
                    for( var i = 0 ; i < brr.length ; i++ ){
                        if( json.id == brr[i].id ){
                            brr[i].count = parseInt(num)+parseInt(brr[i].count);
                            flag = false;
                            break;
                        }
                    }                                        
                }
                if(flag){
                    brr.push( json ) ;                          
                }                                                                      
                localStorage.setItem("key", JSON.stringify(brr))             
            })
        }
    });
}
// function getLocalstorage(key){
// 	//如果cookie中有数据  才可以获取数据
// 	if(localStorage.getItem("key")){	
//         var cookieInfo = localStorage.getItem("key");
//         return JSON.parse(cookieInfo);//如果找到 我们想要的键，将值转成数组返回        
// 	}
// 	//如果cookie中没有数据，直接返回一个空数组
// 	return [];
// }
function list() {
    if(!list.int){
        list.int={
            body : $(".category-list"),
            init : function(){
                this.body.css({"display":"block","zIndex":100});
                return this;
            },
            nexte : function(){
                this.body.css("display","none");
                return this;
            }
        }
    }
    return list.int
}
function mark(){
    this.body = $(".wraper-mark");
    this.bor = $(".wraper-body-img")
    this.img = $(".wraper-bigimg")
    this.div = $(".wraper-bigimg")
    this.init = function(){
        this.bor.bind("mouseenter",function(e){
            this.fnEnter(e)
            this.bor.bind("mousemove", function(e){
                this.fnMove(e)
            }.bind(this))
        }.bind(this)).bind("mouseleave",function(){
            this.fnLeave()
        }.bind(this))
    }
    this.fnEnter = function(e){
        this.body.css("display","block");
        this.div.css("display","block")
    }
    this.fnMove = function(e){
        var x= e.pageX - this.body.width()/2 -this.bor.offset().left,
            y = e.pageY - this.body.width()/2  -this.bor.offset().top,
            l = Math.max(Math.min(x,this.bor.width()-this.body.width()),0),
            t = Math.max(Math.min(y,this.bor.height()-this.body.height()),0)
        this.body.css("left", l +"px");
        this.body.css("top", t + "px");
        this.img.find("img").css("left",-2*l+"px");
        this.img.find("img").css("top",-2*t+"px");
    }
    this.fnLeave =function(){
        this.body.css("display","none")
        this.div.css("display","none")
    }
    return this
}

var border=()=>{
    this.body = $(".wraper-focus");
    var that =this
    that.wraper = $(".wraper-body-img")
    that.bigimg = $(".wraper-bigimg")
    this.init = function(){
        this.body.on('mouseenter',"li",function(){
            $(this).find("span").css("display","block")
            $(this).siblings().find("span").css("display","none")
        }).on("click","li",function(){
            var index = $(this).index()
            that.wraper.find("a").eq(index).css("display","block").siblings().css("display","none")
            that.bigimg.find("img").eq(index).css("display","block").siblings().css("display","none")
        })
        return this
    }
    return this
}

