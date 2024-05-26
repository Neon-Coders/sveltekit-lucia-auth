<script lang="ts">
	import * as Form from "$lib/components/ui/form";
	import * as Card from "$lib/components/ui/card/index.js";
	import { Input } from "$lib/components/ui/input/index.js";

	import Spinner from "$lib/components/icons/spinner.svelte";
	import OauthButton from "../oauth-button/oauth-button.svelte";
	import { loginSchema, type LoginSchema } from "$lib/validation/auth-zod-schema";

	import { toast } from "svelte-sonner";
	import { type SuperValidated, type Infer, superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";

	export let data: SuperValidated<Infer<LoginSchema>>;

	const form = superForm(data, {
		validators: zodClient(loginSchema),
		delayMs: 500,
		timeoutMs: 8000,
		onUpdated: () => {
			if (!$message) return;
			const { status, text } = $message;
			if (status === "error") toast.error(text);
			if (status === "success") toast.success(text);
		}
	});
	const { form: formData, enhance, delayed, timeout, message } = form;
</script>

<Card.Root class="mx-auto max-w-sm">
	<Card.Header>
		<Card.Title class="text-2xl">Login</Card.Title>
		<Card.Description>Enter your email below to login to your account</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="my-2 grid gap-6">
			<OauthButton />
		</div>
		<form class="flex flex-col gap-y-2" method="POST" use:enhance>
			<!-- email -->
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label>Email</Form.Label>
					<Input {...attrs} bind:value={$formData.email} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<!-- password -->
			<Form.Field {form} name="password">
				<Form.Control let:attrs>
					<Form.Label>Password</Form.Label>
					<Input type="password" {...attrs} bind:value={$formData.password} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Button disabled={$delayed || $timeout}>
				{#if $delayed || $timeout}
					<Spinner class="mr-1 h-5 w-5" />
				{:else}
					<span>Login</span>
				{/if}
			</Form.Button>
		</form>
	</Card.Content>
	<div class="mb-4 mt-2 text-center text-sm">
		Don&apos;t have an account?
		<a href="/auth/signup" class="underline"> Sign up </a>
	</div>
</Card.Root>
