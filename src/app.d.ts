declare global {
	namespace App {
		interface Locals {
			user: import("lucia").User | null;
			session: import("lucia").Session | null;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		namespace Superforms {
			type Message = {
				status: "error" | "success" | "warning";
				text: string;
			};
		}
	}
}

export {};
