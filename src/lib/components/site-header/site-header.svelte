<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
</script>

<div class="flex-col md:flex">
	<div class="border-b">
		<div class="flex h-16 items-center px-4">
			<h1 class="font-bold">Sveltekit & Lucia</h1>
			<div class="ml-auto flex items-center space-x-4">
				<Button variant="secondary" class="rounded-xl">
					<a href="/auth/login">Log in</a>
				</Button>
				<Button class="rounded-xl">
					<a href="/auth/signup">Sign up</a>
				</Button>
			</div>
		</div>
	</div>
</div>
