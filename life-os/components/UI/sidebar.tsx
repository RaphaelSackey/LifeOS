"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
	const pathname = usePathname();
	const links = [
		{ label: "Dashboard", href: "/", activePath: "/" },
		{ label: "Documents", href: "/documents", activePath: "/documents" },
		{ label: "Purchases", href: "", activePath: "/purchases" },
		{ label: "Warranties", href: "", activePath: "/warranties" },
		{ label: "Subscriptions", href: "", activePath: "/subscriptions" },
		{ label: "Tasks", href: "", activePath: "/tasks" },
		{ label: "Calender", href: "", activePath: "/calender" },
		{ label: "Automation", href: "", activePath: "/automation" },
	];

	return (
		<aside className='w-full shrink-0 bg-sidebar px-4 py-4 md:sticky md:top-0 md:h-screen md:w-64 md:overflow-y-auto md:px-6 md:py-6'>
			<div className='flex flex-col gap-4 md:gap-0'>
				<div className='shrink-0'>
					<div className='text-3xl font-bold md:text-4xl'>LifeOS</div>
					<div className='text-sm font-bold opacity-50'>
						PERSONAL ADMIN
					</div>
				</div>
				<nav
					aria-label='Main navigation'
					className='-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 md:mx-0 md:mt-10 md:flex-col md:overflow-visible md:px-0 md:pb-0'>
					{links.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							className={`card flex shrink-0 items-center gap-3 whitespace-nowrap text-base font-bold opacity-70 md:w-full md:text-lg ${pathname === link.activePath ? "bg-blue-600" : ""}`}>
							<span
								aria-hidden='true'
								className='size-1 rounded-full bg-current'
							/>
							{link.label}
						</Link>
					))}
				</nav>
			</div>
		</aside>
	);
}
