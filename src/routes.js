const express = require('express');
const pool = require('./db');

const router = express.Router();

/**
 * @swagger
 * /api/produtos:
 *   get:
 *     summary: Lista todos os produtos
 *     responses:
 *       200:
 *         description: Lista de produtos
 */
router.get('/produtos', async (req, res) => {
  const result = await pool.query('SELECT * FROM produtos');
  res.json(result.rows);
});

/**
 * @swagger
 * /api/produtos:
 *   post:
 *     summary: Cadastra um produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *     responses:
 *       201:
 *         description: Produto criado
 */
router.post('/produtos', async (req, res) => {
  const { nome, preco } = req.body;
  await pool.query(
    'INSERT INTO produtos (nome, preco) VALUES ($1, $2)',
    [nome, preco]
  );
  res.status(201).send();
});

module.exports = router;