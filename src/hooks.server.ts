import { lucia } from "$lib/server/lucia-auth";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get(lucia.sessionCookieName);

	// If threr is no session Id, set user and session to null and continue
	if (!sessionId) {
		event.locals.user = null;
		event.locals.session = null;

		// Continue processing the request
		return resolve(event);
	}

	// Validate session with Lucia
	const { session, user } = await lucia.validateSession(sessionId);

	// if valid session, update cookie and set user/session in locals
	if (session && session.fresh) {
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: ".",
			...sessionCookie.attributes
		});
	}

	// if invalid session, set a blank cookie
	if (!session) {
		const sessionCookie = lucia.createBlankSessionCookie();
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: ".",
			...sessionCookie.attributes
		});
	}

	event.locals.user = user;
	event.locals.session = session;

	return resolve(event);
};
