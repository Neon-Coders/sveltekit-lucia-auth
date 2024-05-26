<script lang="ts">
	import type { User } from "lucia";
	import { enhance } from "$app/forms";
	import { getInitials } from "$lib/utils/get-initials";

	import { Button } from "$lib/components/ui/button";
	import * as Avatar from "$lib/components/ui/avatar";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

	export let user: User;
	$: initials = getInitials(user.name);
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button variant="ghost" builders={[builder]} class="relative h-8 w-8 rounded-full">
			<Avatar.Root class="border-2">
				<Avatar.Image src={user.avatarUrl} alt="profile" />
				<Avatar.Fallback>
					<span class="font-bold tracking-wide">{initials}</span>
				</Avatar.Fallback>
			</Avatar.Root>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56" align="end">
		<DropdownMenu.Label class="font-normal">
			<div class="flex flex-col space-y-1">
				<p class="font-semibold">{user.name}</p>
				<p class="m-0 text-sm font-normal text-muted-foreground">{user.email.toLowerCase()}</p>
			</div>
		</DropdownMenu.Label>
		<DropdownMenu.Separator />
		<DropdownMenu.Group>
			<DropdownMenu.Item>
				<a href="/auth/account">Profile</a>
				<DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				Billing
				<DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				Settings
				<DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
			<DropdownMenu.Item>New Team</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Item>
			<form method="post" action="/signout" use:enhance>
				<button type="submit">
					<span>Log out</span>
				</button>
			</form>
			<DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
