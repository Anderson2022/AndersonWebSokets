import { MongoClient } from "mongodb";

const cliente = new MongoClient(
  "mongodb+srv://admin:admin@cluster0.od0jw1u.mongodb.net/test"
);

let documentosColecao, usuariosColecao;

try {
  await cliente.connect();

  const db = cliente.db("aluracut");
  documentosColecao = db.collection("documentos");
  usuariosColecao = db.collection("usuarios");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao, usuariosColecao };