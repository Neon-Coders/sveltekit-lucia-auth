<script lang="ts">
	import type { PageData } from "./$types";

	import { SignupForm } from "$lib/components/forms";

	export let data: PageData;
</script>

<main class="flex min-h-screen items-center justify-center">
	<SignupForm data={data.form} />
</main>
