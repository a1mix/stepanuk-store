<template>
  <footer>
		<div class="upFooter">
			<div class="formWrapper">
				<span class="subText">Для связи можете написать сюды</span>
				<v-responsive
						class="mx-auto "
						max-width="344"
				>
						<v-text-field
						hide-details="auto"
						label="Email address"
						type="email"
						d-inline
						>
						</v-text-field>
				</v-responsive>
				<v-btn id="subBtnID" class="subBtn d-inline" size="small">Отправить</v-btn>
			</div>   
		</div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
  padding: 10px;
  background-color: #bebebe;
  margin-top: 20px;
}

</style>