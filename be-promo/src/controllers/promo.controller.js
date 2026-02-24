const pool = require("../../config/db");

// GET ALL
exports.getAllPromos = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM promos ORDER BY id DESC");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET BY ID
exports.getPromoById = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM promos WHERE id = $1",
      [req.params.id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Promo not found" });

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE
exports.createPromo = async (req, res) => {
  try {
    const { title, description, image, expiry_date, voucher_code, terms } =
      req.body;

    const result = await pool.query(
      `INSERT INTO promos 
      (title, description, image, expiry_date, voucher_code, terms)
      VALUES ($1,$2,$3,$4,$5,$6)
      RETURNING *`,
      [title, description, image, expiry_date, voucher_code, JSON.stringify(terms)]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updatePromo = async (req, res) => {
  try {
    const { title, description, image, expiry_date, voucher_code, terms } =
      req.body;

    const result = await pool.query(
      `UPDATE promos SET
      title=$1,
      description=$2,
      image=$3,
      expiry_date=$4,
      voucher_code=$5,
      terms=$6
      WHERE id=$7
      RETURNING *`,
      [
        title,
        description,
        image,
        expiry_date,
        voucher_code,
        JSON.stringify(terms),
        req.params.id,
      ]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Promo not found" });

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deletePromo = async (req, res) => {
  try {
    const result = await pool.query(
      "DELETE FROM promos WHERE id=$1 RETURNING *",
      [req.params.id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Promo not found" });

    res.json({ message: "Promo deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};