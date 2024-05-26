import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { zod } from "sveltekit-superforms/adapters";
import { superValidate } from "sveltekit-superforms";

import { editAccountSchema } from "$lib/validation/auth-zod-schema";

export const load = (async (event) => {
	const { user } = event.locals;
	if (!user) {
		redirect(302, "/auth/login");
	}

	return {
		form: await superValidate(zod(editAccountSchema)),
		user
	};
}) satisfies PageServerLoad;
