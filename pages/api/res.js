import nc from "next-connect";
import Post from "../../models/post";
import mongoose from "mongoose";

const connection = {};

async function connect() {
	if (connection.isConnected) {
		console.log("already connected");
		return;
	}
	if (mongoose.connections.length > 0) {
		connection.isConnected =
			mongoose.connections[0].readyState;
		if (connection.isConnected === 1) {
			console.log(
				"Use previous connection"
			);
			return;
		}
		await mongoose.disconnect();
	}
	const db = await mongoose.connect(
		"mongodb+srv://ripanionut:ripanionut@cluster1.aeufk.mongodb.net/AFT?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			// useCreateIndex: true,
		}
	);
	console.log("New connection");
	connection.isConnected =
		db.connections[0].readyState;
}

async function disconnect() {
	if (connection.isConnected) {
		if (
			process.env.NODE_ENV ===
			"production"
		) {
			await mongoose.disconnect();
			connection.isConnected = false;
		} else {
			console.log("Now disconnect");
		}
	}
}

function convertDocToObj(doc) {
	doc._id = doc._id.toString();
	doc.createdAt =
		doc.createdAt.toString();
	doc.updatedAt =
		doc.updatedAt.toString();
	return doc;
}

const db = {
	connect,
	disconnect,
	convertDocToObj,
};

const handler = nc();

handler.get(async (req, res) => {
	await db.connect();
	const posts = await Post.find({});
	res.send(posts);
});

handler.get(async (req, res) => {
	await db.connect();
	const posts = await Post.find({"nume" : "Ripan"});
	res.send(postsbyname);
});

export default handler;
