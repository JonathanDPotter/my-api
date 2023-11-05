import query from "../db/utils";

const getAllRequests = async () => await query("SELECT * FROM logs");

export default { getAllRequests };
