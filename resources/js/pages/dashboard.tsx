import Layout from "../layout"
import { usePage, router } from "@inertiajs/react";
import Switch from "../components/Switch";
import React from "react";
export default function Example() {
	const { commands } = usePage().props;

	const toggle = (command, v) => {
		router.patch(`/commands/${command.id}`, { enabled: v })
	}

	return (
		<Layout>
			<div className="inline-block py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                Command
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Uses
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Enabled
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {commands.map((command) => (
                <tr key={command.id}>
                  <td className="whitespace-nowrap py-[6px] pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {command.id}
                  </td>
                  <td className="whitespace-nowrap px-3 py-[6px] text-sm text-gray-500">{command.uses}</td>
                  <td className="whitespace-nowrap px-3 py-[6px] text-sm text-gray-500">
                    <Switch enabled={command.enabled} toggle={(v)=>toggle(command, v)}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
		</Layout>
	)
}
