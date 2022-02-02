import Head from "next/head";
import Layout from "../components/layout";
import { useState } from "react";

export default function Calculator() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<Layout>
				<h1 class="text-center text-3xl font-bold text-black-500 mb-10 mt-4">
					Contact
				</h1>

				<p class=" text-2xl font-bold text-black-500  mt-4 ml-4 mb-3">
					Profesor coordonator:
					Conferentiar Doctor Inginer
					Grindei Laura
				</p>
				<p class=" text-2xl font-bold text-black-500  mt-4 ml-4 mb-5">
					Programator: Paula Adnana
					Sireteanu
				</p>
				<p class="text-xl font-bold text-black-500 mt-2 ml-4">
					Specializarea: SMCIE
				</p>
				<p class="text-xl font-bold text-black-500 ml-4">
					Mr. Tel: 0757168307
					<p>Grupa: 11221</p>
				</p>
				<h1
					class="text-center text-3xl font-bold text-black-500 mb-10 mt-4"
				>
					Scopul Proiectului
				</h1>

				<h1 class="text-xl font-bold text-black-500 mt-2 ml-4">
					Inbunatatirea proceslui de
					invatare online prin
					intermediul platformei create.
				</h1>

				<h1 class="text-xl font-bold text-black-500 mt-0 ml-4">
					Limbajele folosit in
					realizarea proiectului sunt
					cele clasice Html, Css si
					JavaScript.<br></br>
					Ca Framework pentru Css am
					folosit Tailwind.<br></br>
					Iar Framework pentru
					Javascript am folosit Next.js.
				</h1>
			</Layout>
		</div>
	);
}
