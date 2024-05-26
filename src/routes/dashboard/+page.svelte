<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.js";
	import * as Avatar from "$lib/components/ui/avatar";
	import { buttonVariants } from "$lib/components/ui/button/index.js";
	import { getInitials } from "$lib/utils/get-initials";
	import LogOut from "lucide-svelte/icons/log-out";

	import type { PageData } from "./$types";
	import Button from "$lib/components/ui/button/button.svelte";
	import { UserButton } from "$lib/components/forms";

	export let data: PageData;
	const { user } = data;
</script>

<div class="flex-col md:flex">
	<div class="border-b">
		<div class="flex h-16 items-center px-4">
			<h1 class="font-bold">Sveltekit & Lucia</h1>
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
						<!-- <h2 class="font-semibold">User Button</h2> -->
						<!-- <Button href="/account" variant="outline">Account</Button> -->
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
