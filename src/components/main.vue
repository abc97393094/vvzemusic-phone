<template>
	<div>
		<component-header>
		</component-header>
		<router-view />
		<component-footer>
		</component-footer>
	</div>
</template>
<script>
import componentHeader from './header/indexHeader'
import componentFooter from './footer'
export default {
	components: {
		componentHeader,
		componentFooter
	}
}
</script>
<style lang="scss">
$bgc: '#d43c33';
@import url('https://at.alicdn.com/t/font_498489_0cgs1jdlg3fskyb9.css');
@import '../assets/scss/base.scss'

</style>

