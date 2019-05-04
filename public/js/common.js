// 回顶部
function to_top() {
	(() => {
		// 防止还在回顶部的过程中重复设置定时器
		clearInterval(timer);
		// 当前屏幕滚动位置
		var target = document.documentElement.scrollTop | document.body.scrollTop;
		console.log(target);
		// 回到首页字样隐藏
		to_top_hover.style.display = "none";
		// 开始回滚图标的动画并保持最后一帧
		to_top_btn.style.animation = "totop1 0.2s 1 forwards";
		var timer = setInterval(function () {
			// console.log(target);
			//做减速运动 每0.005秒回滚当前的5%
			target -= target / 20;
			window.scrollTo(0, target);	
			// document.documentElement.scrollTop != 0 ? document.documentElement.scrollTop = target : document.body.scrollTop = target;
			if (target < 1) {
				clearInterval(timer);
				// 回滚图标恢复原样
				to_top_btn.style.animation = "totop2 0.2s 1 forwards";
				// 恢复原样后回到首页字样重新显示 0.5s更舒适
				setTimeout(function () {
					to_top_hover.style.display = "block";
				}, 500)
			}
		}, 5);
	})()
}
