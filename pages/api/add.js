import { MongoClient } from "mongodb";

export async function connectToDatabase() {
	const client =
		await MongoClient.connect(
			"mongodb+srv://ripanionut:ripanionut@cluster1.aeufk.mongodb.net/Proiect300?retryWrites=true&w=majority"
		);

	return client;
}

async function handler(
	req,
	res
) {
	if (
		req.method !==
		"POST"
	) {
		return;
	}

	const data =
		req.body;
	const {
		enteredTitle,
		enteredLink,
		enteredDescription,
		enteredH1,
		enteredH2,
		enteredH3,
	} = data;

	const client =
		await connectToDatabase();

	const db =
		client.db();

	const result =
		await db
			.collection(
				"posts"
			)
			.insertOne({
				title:
					enteredTitle,
				link: enteredLink,
				description:
					enteredDescription,
				enteredH1:
					enteredH1,
				enteredH2:
					enteredH2,
				enteredH3:
					enteredH3,
			});

	res
		.status(201)
		.json({
			message:
				"Created post!",
		});
	client.close();
}

export default handler;
