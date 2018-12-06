function getLocalstorage(key){
	//如果cookie中有数据  才可以获取数据
	if(localStorage.getItem("key")){		
		var cookieInfo = localStorage.getItem("key");
		return JSON.parse(cookieInfo);//如果找到 我们想要的键，将值转成数组返回 
	}
	//如果cookie中没有数据，直接返回一个空数组
	return [];
}