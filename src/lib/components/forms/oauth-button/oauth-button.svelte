<script>
	import { Icons } from "$lib/components/icons";
	import Button from "$lib/components/ui/button/button.svelte";
</script>

<section class={$$props.class}>
	<Button href="/login/google" variant="outline" class="w-full">
		<Icons.google class="w mr-2 h-4 w-4" />
		Google
	</Button>
</section>
