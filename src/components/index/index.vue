<template>
	<div class="home">
		
				<img data-v-160bc72a="" src="http://upload.pzsrx.xyz/2018/07/1204d201807271058354224.jpg">
				<img data-v-160bc72a="" src="http://upload.pzsrx.xyz/2018/07/1204d201807271058354224.jpg">
				<img data-v-160bc72a="" src="http://upload.pzsrx.xyz/2018/07/1204d201807271058354224.jpg">
				<img data-v-160bc72a="" src="http://upload.pzsrx.xyz/2018/07/1204d201807271058354224.jpg">
				<img data-v-160bc72a="" src="http://upload.pzsrx.xyz/2018/07/1204d201807271058354224.jpg">
				<img data-v-160bc72a="" src="http://upload.pzsrx.xyz/2018/07/1204d201807271058354224.jpg">
				<img data-v-160bc72a="" src="http://upload.pzsrx.xyz/2018/07/1204d201807271058354224.jpg">
				<img data-v-160bc72a="" src="http://upload.pzsrx.xyz/2018/07/1204d201807271058354224.jpg">
				<img data-v-160bc72a="" src="http://upload.pzsrx.xyz/2018/07/1204d201807271058354224.jpg">
				<img data-v-160bc72a="" src="http://upload.pzsrx.xyz/2018/07/1204d201807271058354224.jpg">
				<img data-v-160bc72a="" src="http://upload.pzsrx.xyz/2018/07/1204d201807271058354224.jpg">
				<img data-v-160bc72a="" src="http://upload.pzsrx.xyz/2018/07/1204d201807271058354224.jpg">
				<div class="navBar">
					<navBar></navBar>
				</div>

	</div>
	

</template>

<style scope>
.index{
	position: relative;
}
.navBar{
	position: fixed;
	left:0;
	bottom: 0;
	width: 100%;
	height: 60px;
	z-index: 999;
	background:#000;
}
.navBar a{
		font-size: 30px;
		color:#fff;
		line-heihgt:40px;
	}
	
</style>

<script>
	import Loading from '@/components/loading/loading.js'
	import navBar from "@/components/navBar"
	export default {
		mounted() {
			this.showLoading();
			setTimeout(() => {
				this.hideLoading();
			}, 1000)
		},
		methods: {
			
			showLoading: function () {
				Loading.show()
			},
			hideLoading: function () {
				Loading.hide()
			}
		},
		components:{
			navBar:navBar
		},

	};
</script>
