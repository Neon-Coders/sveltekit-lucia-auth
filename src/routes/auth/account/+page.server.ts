import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { zod } from "sveltekit-superforms/adapters";
import { superValidate } from "sveltekit-superforms";

import { editAccountSchema } from "$lib/validation/auth-zod-schema";

export const load = (async (event) => {
	const { user } = event.locals;
	if (!user) error(401, "Unauthorized!");

	return {
		form: await superValidate(zod(editAccountSchema)),
		user
	};
}) satisfies PageServerLoad;
