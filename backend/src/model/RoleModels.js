import db from "../config/database.js";

const getAllRole = async () => {
  const sql = "SELECT * FROM role";
  const [rows] = await db.execute(sql);
  return rows;
};

const cretaeRole = async (data) => {
  const sql = "INSERT INTO role(role) VALUES (?)";
  const [rows] = await db.execute(sql, [data.role]);
  return rows;
};

const updateAllRoles = async (id, data) => {
  const sql = "UPDATE role SET role= ? WHERE id= ? ";
  const [rows] = await db.execute(sql, [data.role, id]);
  return rows;
};

const deleteRolesByid = async (id) => {
const sql = "DELETE FROM role WHERE id=?";
const [rows] = await db.execute(sql,[id]);
return rows;
}

export { getAllRole, cretaeRole, updateAllRoles,deleteRolesByid};
