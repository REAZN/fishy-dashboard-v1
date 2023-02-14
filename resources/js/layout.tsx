import Nav from "./components/Nav"
import React from "react";

export default function Layout({ children, pageName = "Dashboard", image }: any) {
	return (
		<>
			<Nav/>
			<header className="bg-white shadow">
				<div className="flex mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8 space-x-4">
					{image && <img className="h-8 w-8 rounded-full" src={image} alt="" />}
					<h1 className="text-lg font-medium tracking-tight text-gray-900">{pageName}</h1>
				</div>
			</header>
			<main>
				<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
					<div className="px-4 sm:px-6 lg:px-8">
						<div className="mt-8 flex flex-col">
							<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
								{children}
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
