<script lang="ts">
	import ModeToggle from "$lib/components/mode-toggle/mode-toggle.svelte";
	import Separator from "$lib/components/ui/separator/separator.svelte";
</script>

<div class="space-y-6">
	<div>
		<h3 class="text-lg font-medium">Appearance</h3>
		<p class="text-sm text-muted-foreground">
			Customize the appearance of the app. Automatically switch between day and night themes.
		</p>
	</div>
	<Separator />

	<div>
		<h4 class="text-base font-medium">Theme</h4>
		<p class="text-sm text-muted-foreground">Select the theme for the dashboard.</p>
	</div>

	<ModeToggle />
</div>
