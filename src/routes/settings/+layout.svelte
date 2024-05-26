<script lang="ts">
	import { Separator } from "$lib/components/ui/separator/index.js";
	import { SidebarNav } from "$lib/components/settings/index";
	import Button from "$lib/components/ui/button/button.svelte";
	import { ArrowLeft } from "svelte-radix";

	const sidebarNavItems = [
		{
			title: "Account",
			href: "/settings/account"
		},
		{
			title: "Appearance",
			href: "/settings/appearance"
		}
	];
</script>

<div class="hidden space-y-6 p-10 pb-16 md:block">
	<div class="space-y-0.5">
		<h2 class="text-2xl font-bold tracking-tight">Settings</h2>
		<p class="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
	</div>

	<div>
		<Button href="/dashboard" variant="outline"
			><ArrowLeft class="h-4 w-4" /> <span class="ml-1">Go back</span></Button
		>
	</div>
	<Separator class="my-6" />
	<div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
		<aside class="-mx-4 lg:w-1/5">
			<SidebarNav items={sidebarNavItems} />
		</aside>
		<div class="flex-1 lg:max-w-2xl">
			<slot />
		</div>
	</div>
</div>
