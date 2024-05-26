import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { zod } from "sveltekit-superforms/adapters";
import { superValidate } from "sveltekit-superforms";

import { loginSchema, signupSchema } from "$lib/validation/auth-zod-schema";

export const load = (async (event) => {
	const user = await event.locals.user;

	// Redirect unauthenticated users only for specific routes
	if (!user && event.url.pathname !== "/login" && event.url.pathname !== "/signup") {
		return redirect(302, "/login"); // Or a more appropriate route based on context
	}

	const loginForm = await superValidate(zod(loginSchema));
	const signupForm = await superValidate(zod(signupSchema));

	return { loginForm, signupForm, user };
}) satisfies PageServerLoad;
