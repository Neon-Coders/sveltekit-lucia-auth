<script lang="ts">
	import type { PageData } from "./$types";
	import { UserButton } from "$lib/components/forms";
	import Button from "$lib/components/ui/button/button.svelte";
	import { ArrowLeft } from "svelte-radix";

	export let data: PageData;
	const { user } = data;
</script>

<div class="flex-col md:flex">
	<div class="border-b">
		<div class="flex h-16 items-center px-4">
			<Button href="/" variant="outline"
				><ArrowLeft class="h-4 w-4" /> <span class="ml-1">Go back</span></Button
			>
			<div class="ml-auto flex items-center space-x-4">
				{#if !user}
					<div>
						<h2 class="font-semibold">Links</h2>

						<Button href="/auth/signup" variant="outline">Signup</Button>
						<Button href="/auth/login" variant="outline">Login</Button>
					</div>
				{/if}

				{#if user}
					<div class="flex w-fit flex-col gap-y-2">
						<UserButton {user} />
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<div class="flex-1 space-y-4 p-8 pt-6">
	<div class="flex items-center justify-between space-y-2">
		<h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
	</div>
</div>
