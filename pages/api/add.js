import { MongoClient } from "mongodb";

export async function connectToDatabase() {
	const client = await MongoClient.connect(
		"mongodb+srv://ripanionut:ripanionut@cluster1.aeufk.mongodb.net/AFT?retryWrites=true&w=majority"
	);

	return client;
}

async function handler(req, res) {
	if (req.method !== "POST") {
		return;
	}

	const data = req.body;
	const {
		enteredid,
		enterednume,
		enteredprenume,
		enteredpluton,
		enteredcompanie,
		enteredbatalion,
		enterednrtelefon,
		enteredistoric,
		enteredpuncte,
	} = data;

	const client = await connectToDatabase();

	const db = client.db();

	const result = await db.collection("posts").insertOne({
		Id: enteredid,
		nume: enterednume,
		prenume: enteredprenume,
		pluton: enteredpluton,
		companie: enteredcompanie,
		batalion: enteredbatalion,
		telefon: enterednrtelefon,
		istoric: enteredistoric,
		puncte: enteredpuncte,
	});

	res.status(201).json({
		message: "Created post!",
	});
	client.close();
}

export default handler;
