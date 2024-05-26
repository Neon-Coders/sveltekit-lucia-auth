<script lang="ts">
	import type { PageData } from "./$types";

	import { LoginForm } from "$lib/components/forms";

	export let data: PageData;
</script>

<main class="flex min-h-screen items-center justify-center">
	<LoginForm data={data.form} />
</main>
