<script lang="ts">
	import type { PageData } from './$types.js';
	// import EmailVerificationForm from '$lib/components/Forms/EmailVerificationForm.svelte';
	// import FormHeader from '$lib/components/Forms/FormHeader.svelte';
	// import LuciaFormContainer from '$lib/components/Forms/LuciaFormContainer.svelte';

	export let data: PageData;
</script>

<div class="flex items-center justify-center w-screen h-svh bg-background">
	<!-- <EmailVerificationForm data={data.form} showBadge showContainer /> -->

	<!-- <LuciaFormContainer showBadge>
		<FormHeader title="Check your email" description="We sent a verification link to your email" />
		<EmailVerificationForm data={data.form} />
	</LuciaFormContainer> -->
</div>
