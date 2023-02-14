import Layout from "../layout";
import { Link } from "@inertiajs/react";
import React from "react";

export default function User({ user }) {
	return (
		<Layout pageName={user.name} image={user.avatar}>
			<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
				<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
					<table className="min-w-full divide-y divide-gray-300">
						<thead className="bg-gray-50">
							<tr>
								<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
								Item
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
								amount
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
								Level
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200 bg-white">
							{user.inventory && user.inventory.fish.map((fish) => (
								<tr key={`${fish.id}-${fish.level}`}>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  {fish.id}
								</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{fish.amount}</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{fish.level}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
				<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
					<table className="min-w-full divide-y divide-gray-300">
						<thead className="bg-gray-50">
							<tr>
								<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
								Item
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
								amount
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200 bg-white">
							{user.inventory && user.inventory.items.map((user) => (
								<tr key={user.item_id}>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {user.item_id}
								</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.amount}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
				<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
					<table className="min-w-full divide-y divide-gray-300">
						<thead className="bg-gray-50">
								<tr>
									<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
									Stat
									</th>
									<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									Number
									</th>
								</tr>
						</thead>
						<tbody className="divide-y divide-gray-200 bg-white">
							{user.stat && Object.entries(user.stat).map(([k, v]) => (
								<tr key={k}>
									<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
										{k}
									</td>
									<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{v}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
				<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
					<table className="min-w-full divide-y divide-gray-300">
						<thead className="bg-gray-50">
							<tr>
								<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
								Type
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
								Date/Amount
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200 bg-white">
							{user.cooldown && Object.entries(user.cooldown).map(([k, v]) => (
								<tr key={k}>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
									{k}
								</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{v}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</Layout>
	);
}
