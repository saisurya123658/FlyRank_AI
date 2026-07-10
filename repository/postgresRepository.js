const db = require("../db");

async function getAllUsers() {
    const result = await db.query("SELECT * FROM users");
    return result.rows;
}

async function createUser(name, role) {
    const result = await db.query(
        "INSERT INTO users(name, role) VALUES($1,$2) RETURNING *",
        [name, role]
    );

    return result.rows[0];
}

module.exports = {
    getAllUsers,
    createUser
};