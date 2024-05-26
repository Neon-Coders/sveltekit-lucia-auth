<script lang="ts">
	import { toast } from "svelte-sonner";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { superForm, type Infer, type SuperValidated } from "sveltekit-superforms";

	import * as Form from "$lib/components/ui/form";
	import * as Card from "$lib/components/ui/card/index.js";
	import Spinner from "$lib/components/icons/spinner.svelte";
	import { Input } from "$lib/components/ui/input/index.js";
	import { signupSchema, type SignupSchema } from "$lib/validation/auth-zod-schema";
	import OauthButton from "../oauth-button/oauth-button.svelte";

	export let data: SuperValidated<Infer<SignupSchema>>;

	const form = superForm(data, {
		validators: zodClient(signupSchema),
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

<Card.Root>
	<Card.Header class="space-y-1">
		<Card.Title class="text-2xl">Create an account</Card.Title>
		<Card.Description>Enter your email below to create your account</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="my-2 grid gap-6">
			<OauthButton />
		</div>
		<form class="flex flex-col gap-x-4" method="POST" use:enhance>
			<!-- name -->
			<Form.Field {form} name="name">
				<Form.Control let:attrs>
					<Form.Label>Full Name</Form.Label>
					<Input {...attrs} bind:value={$formData.name} placeholder="Anna Johnson" />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<!-- email -->
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label>Email</Form.Label>
					<Input {...attrs} bind:value={$formData.email} placeholder="m@example.com" />
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
					<span>Create account</span>
				{/if}
			</Form.Button>
		</form>
	</Card.Content>

	<div class="mb-4 mt-2 text-center text-sm">
		Already have an account?
		<a href="/auth/login" class="underline">Login</a>
	</div>
</Card.Root>
