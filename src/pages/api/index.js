import connectToDB from "../../../utils/db"; 
function handler(req, res) {
  connectToDB()
  return res.json({ message: "Hi deare!" });
}
export default handler;
