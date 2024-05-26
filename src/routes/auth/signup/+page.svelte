<script lang="ts">
	import type { PageData } from "./$types";

	import { SignupForm } from "$lib/components/forms";

	export let data: PageData;
</script>

<SignupForm data={data.form} />
