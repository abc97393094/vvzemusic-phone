<template>
	<footer>
		<div class="music-message">
			<img src="../../assets/music.jpeg" alt="">
			<div class="song-desc">
				<p>歌曲名称</p>
				<span>歌手名</span>
			</div>
		</div>
		<div class="button-list">
			<a href="javascript:;" class="iconfont icon-icon-9"></a>
			<a href="javascript:;" class="iconfont icon-icon-"></a>
		</div>
	</footer>
</template>
<script>
export default {
	
}
</script>
<style lang="scss" scoped>
footer {
	width: 100vw;
	height: 8vh;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	padding: 3vw;
	.music-message {
		display: flex;
		align-items: center;
		img {
			height: 8vh;
		}
		.song-desc {
			padding-left: 2vw;
			span {
				font-size: 1vw;
			}
		}
	}
	.button-list {
		display: flex;
		align-items: center;
		a {
			color: #000;
			font-size: 5vh;
		}
	}
}
</style>

