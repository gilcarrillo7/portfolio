import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const sendEmail = async (name: string, mail: string, msg: string) => {
	const message = `<p>Name: ${name}</p><p>Email: ${mail}</p><p>${msg}</p>`;
	const collectionRef = collection(db, "mail");
	const emailContent = {
		to: ["gilcarrillo7@gmail.com"],
		message: {
			subject: "Portfolio Contact",
			html: message,
		},
	};

	return addDoc(collectionRef, emailContent);
};

export default sendEmail;
