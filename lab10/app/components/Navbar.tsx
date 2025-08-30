"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/blog", label: "Blog" },
	{ href: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<header className="border-b border-gray-200/60 dark:border-gray-800/60 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
			<nav className="container-max flex items-center justify-between py-4">
				<Link
					href="/"
					className="flex items-center gap-3 text-lg font-semibold tracking-tight"
				>
					<Image
						src="/vercel.svg"
						alt="logo"
						width={96}
						height={24}
						className="dark:invert"
					/>
					<span className="sr-only">Home</span>
				</Link>

				<button
					className="md:hidden rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
					aria-label="Toggle menu"
					onClick={() => setOpen((v) => !v)}
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						className="fill-current"
						aria-hidden
					>
						<path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
					</svg>
				</button>

				<ul className="hidden md:flex items-center gap-6">
					{links.map(({ href, label }) => {
						const active = pathname === href;
						return (
							<li key={href}>
								<Link
									href={href}
									className={`px-2 py-1 rounded transition ${
										active
											? "text-sky-700 dark:text-sky-300 font-medium"
											: "hover:text-sky-600"
									}`}
								>
									{label}
								</Link>
							</li>
						);
					})}
					<li>
						<a
							href="https://nextjs.org"
							target="_blank"
							rel="noreferrer"
							className="btn-primary"
						>
							Next.js
						</a>
					</li>
				</ul>
			</nav>

			{open && (
				<div className="md:hidden border-t border-gray-200/60 dark:border-gray-800/60">
					<ul className="container-max py-2 space-y-1">
						{links.map(({ href, label }) => {
							const active = pathname === href;
							return (
								<li key={href}>
									<Link
										href={href}
										onClick={() => setOpen(false)}
										className={`block px-2 py-2 rounded transition ${
											active
												? "text-sky-700 dark:text-sky-300 font-medium"
												: "hover:bg-gray-100 dark:hover:bg-gray-800"
										}`}
									>
										{label}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</header>
	);
}