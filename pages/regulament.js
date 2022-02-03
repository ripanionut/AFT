import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<div class="container flex justify-center mx-auto pt-4 ">
					<div class="flex flex-col ">
						<div class="w-full">
							<div class="border-b border-gray-200 shadow">
								<table>
									<thead class="bg-gray-200">
										<tr>
											<th class="px-2 py-2 text-xs text-black-600 ">NR</th>

											<th class="px-2 py-2 text-xs text-black-600 ">Regula</th>

											<th class="px-2 py-2 text-xs text-black-600 " >Puncte</th>
										</tr>
									</thead>
									<tbody class="bg-white">
										<tr class="">
											<td class="px-2 py-4 text-sm text-gray-500">1</td>
											<td class="px-2 py-4">
												<div class="text-sm text-gray-900">
													Barbierit Neconform
												</div>
											</td>

											<td class="px-2 py-4">
												<a
													href="#"
													class="px-2 py-1 text-sm text-white bg-red-400 rounded"
												>
													-5
												</a>
											</td>
										</tr>
										<tr class="">
											<td class="px-2 py-4 text-sm text-gray-500">2</td>
											<td class="px-2 py-4">
												<div class="text-sm text-gray-900">
													Consum de Alcool sau alte Substante ilegale in interiorul Uniatii
												</div>
											</td>

											<td class="px-2 py-4">
												<a
													href="#"
													class="px-2 py-1 text-sm text-white bg-red-400 rounded"
												>
													-50
												</a>
											</td>
										</tr>
										<tr class="">
											<td class="px-2 py-4 text-sm text-gray-500">3</td>
											<td class="px-2 py-4">
												<div class="text-sm text-gray-900">Efectuare platonului in tinuta neconforma</div>
											</td>

											<td class="px-2 py-4">
												<a
													href="#"
													class="px-2 py-1 text-sm text-white bg-red-400 rounded"
												>
													-10
												</a>
											</td>
										</tr>
										<tr class="">
											<td class="px-2 py-4 text-sm text-gray-500">4</td>
											<td class="px-2 py-4">
												<div class="text-sm text-gray-900">Locul I la Diferite competitii</div>
											</td>

											<td class="px-2 py-4">
												<a
													href="#"
													class="px-2 py-1 text-sm text-white bg-green-500 rounded"
												>
													+20
												</a>
											</td>
										</tr>
										<tr class="">
											<td class="px-2 py-4 text-sm text-gray-500">4</td>
											<td class="px-2 py-4">
												<div class="text-sm text-gray-900">Efectuare platonului in tinuta neconforma</div>
											</td>

											<td class="px-2 py-4">
												<a
													href="#"
													class="px-2 py-1 text-sm text-white bg-green-500 rounded"
												>
													+10
												</a>
											</td>
										</tr>
                    <tr class="">
											<td class="px-2 py-4 text-sm text-gray-500">...</td>
											<td class="px-2 py-4">
												<div class="text-sm text-gray-900">...</div>
											</td>

											<td class="px-2 py-4">
												<a
													href="#"
													class="px-2 py-1 text-sm text-white bg-green-500 rounded"
												>
													...
												</a>
                        <a
													href="#"
													class="px-2 py-1 text-sm text-white bg-red-400 rounded"
												>
													...
												</a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
}
