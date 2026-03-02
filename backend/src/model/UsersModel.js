import db from "../config/database.js";

const getAllUsers = async () => {
  const sql =
    "SELECT u.id,u.username,u.email,u.password,u.role_id,u.created_at,r.role FROM users as u JOIN role AS r ON r.id = u.role_id ORDER BY u.id DESC ";
  const [rows] = await db.execute(sql);
  return rows;
};

const getUsersByEmail = async (email) => {
  const sql =
    "SELECT users.*,role.role FROM users JOIN role ON role.id = users.role_id WHERE users.email= ? limit 1";
  const [rows] = await db.execute(sql, [email]);
  return rows;
};

const insertUsers = async (data) => {
  const sql =
    "INSERT INTO users(username, email, password, role_id) VALUES (?,?,?,?)";
  const [rows] = await db.execute(sql, [
    data.username,
    data.email,
    data.password,
    data.role_id,
  ]);
  return rows;
};

const updateUsers = async (id, data) => {
  const keys = Object.keys(data);

  if (keys.length === 0) {
    throw new Error("Tidak ada data untuk diupdate");
  }

  const fields = keys.map((key) => `${key} = ?`);
  const values = keys.map((key) => data[key]);


  const sql = `
    UPDATE users
    SET ${fields.join(", ")}
    WHERE id = ?
  `;
  const [rows] = await db.execute(sql, [...values, id]);
  return rows;
};

const getUsersById = async (id) => {
  const sql =
    "SELECT users.id, users.username, users.email,role.role FROM users JOIN role ON role.id = users.role_id WHERE users.id=?";
  const [rows] = await db.execute(sql, [id]);
  return rows[0] || null;
};

const deleteUser = async (id) => {
  const sql = "DELETE FROM users WHERE id = ?";
  const [rows] = await db.execute(sql, [id]);
  return rows;
};
export {
  getAllUsers,
  insertUsers,
  updateUsers,
  getUsersById,
  getUsersByEmail,
  deleteUser,
};
