import db from "../config/database.js";

const getAllSize = async () => {
  const sql = "SELECT * FROM sizes ORDER BY name DESC";
  const [rows] = await db.execute(sql);
  return rows;
};



export {getAllSize}
