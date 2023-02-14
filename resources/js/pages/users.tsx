import { Link, usePage } from "@inertiajs/react";
import Layout from "../layout";
import React from "react";

export default function Users() {
	const { users }: any = usePage().props;

	return(
		<Layout pageName={`Users • ${users.total}`}>
			<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
				<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
						<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
							<table className="min-w-full divide-y divide-gray-300">
								<thead className="bg-gray-50">
									<tr>
										<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
										User
										</th>
										<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
										Rank
										</th>
										<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
										Balance
										</th>
										<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
										XP
										</th>
										<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
										Prestige
										</th>
										<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
										Created / Updated
										</th>
										<th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
										<span className="sr-only">View</span>
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 bg-white">
									{users.data.map((user) => (
										<tr key={user.id}>
											<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
												<div className="flex items-center">
													<Link href={`/users/${user.id}`} className="h-10 w-10 flex-shrink-0">
														<img className="h-10 w-10 rounded-full" src={user.avatar} alt="" />
													</Link>
													<div className="ml-4">
														<Link href={`/users/${user.id}`} className="font-medium text-gray-900 underline-transparent">{user.name}</Link>
														<div className="text-gray-500">{user.id}</div>
													</div>
												</div>
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
												<span className="inline-flex rounded-full bg-gray-200 px-2 text-xs font-semibold leading-5 text-gray-800">
													{user.rank}
												</span>
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
												<div className="text-gray-900">${user.balance}</div>
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
												<div className="text-gray-500">{user.xp}</div>
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
												<div className="text-gray-500">{user.prestige}</div>
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
												<div className="text-gray-900">{user.createdAt}</div>

												<div className="text-gray-500">{user.updatedAt}</div>
											</td>
											<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
												<Link href={`/users/${user.id}`} className="text-indigo-600 hover:text-indigo-900 underline-transparent">
													View<span className="sr-only">, {user.name}</span>
												</Link>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-10">
          <div className="-mt-px flex w-0 flex-1">
            <Link
              href={users.prev_page_url}
              className="underline-transparent inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              {/* <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
              Previous
            </Link>
          </div>
          <div className="hidden md:-mt-px md:flex">
            {users.links.slice(1, -1).map((link) => (
              <Link href={link.url} key={link.label}
                className={link.active ? "inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600 underline-transparent" : "underline-transparent inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"}
              >
                {link.label}
              </Link>
            ))}
          </div>
					<div className="-mt-px flex w-0 flex-1 justify-end">
						<Link
						href={users.next_page_url}
						className="underline-transparent inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
						>
						Next
						{/* <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
						</Link>
					</div>
				</div>
			</div>
		</Layout>
	)
}
