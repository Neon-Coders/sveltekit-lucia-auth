<script lang="ts">
	import type { PageData } from "./$types";

	import { cn } from "$lib/utils";
	import { Icons } from "$lib/components/icons";
	import { UserButton } from "$lib/components/forms";
	import { buttonVariants } from "$lib/components/ui/button";
	import Button from "$lib/components/ui/button/button.svelte";
	import * as PageHeader from "$lib/components/page-header/index.js";

	export let data: PageData;
	const { user } = data;
</script>

<nav class="flex-col md:flex">
	<div class="border-b">
		<div class="flex h-16 items-center px-4">
			<h1 class="font-bold">Sveltekit & Lucia</h1>
			<div class="ml-auto flex items-center space-x-4">
				{#if !user}
					<div>
						<Button href="/auth/signup" variant="outline">Signup</Button>
						<Button href="/auth/login" variant="outline">Login</Button>
					</div>
				{/if}

				{#if user}
					<div class="ml-auto flex items-center space-x-4">
						<Button href="/dashboard" variant="outline">Go to dashboard</Button>
						<UserButton {user} />
					</div>
				{/if}
			</div>
		</div>
	</div>
</nav>

<PageHeader.Root class="pb-8">
	<PageHeader.Heading>Sveltekit Authentication</PageHeader.Heading>
	<PageHeader.Description class="text-muted-foreground">
		Minimal starter project with just the basic authentication pages and components that you can
		build on.
	</PageHeader.Description>

	<div class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
		<a href="/dashboard" class={cn(buttonVariants())}> Get Started </a>
		<a
			target="_blank"
			rel="noreferrer"
			href="https://github.com/ibrahimraimi/sveltekit-lucia-auth"
			class={cn(buttonVariants({ variant: "outline" }))}
		>
			<Icons.gitHub class="mr-2 h-4 w-4" />
			GitHub
		</a>
	</div>
</PageHeader.Root>
