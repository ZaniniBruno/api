const express = require('express');
const router = express.Router();
const User = require('../models/user-model');
const routeAdapter = require('../adapters/express-route-adapter');
const CriarUsuarioController = require('../controllers/criar-usuario');
const ListaUsuarioController = require(' ./controller/listar-usuario')
const EditeUsuarioController = require('../controllers/editar-usuario');


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - nome
 *         - senha
 *         - email
 *       properties:
 *         nome:
 *           type: string
 *           description: O nome de usuário
 *         senha:
 *           type: string
 *           description: A senha do usuário
 *         email:
 *           type: string
 *           description: O email do usuário
 *       example:
 *         id: 1
 *         nome: João da Silva
 *         senha: 123abc
 *         email: joao.silva@dominio.com
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gerenciamento de usuários API
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: O usuário foi criado com sucesso!
 *       500:
 *         description: Algum erro aconteceu
 */
router.post('/users', routeAdapter(new CriarUsuarioController()));

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Cria uma lista de usuário
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Usuário listado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/users', routeAdapter(new ListaUsuarioController()))
    
/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update the user by the id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The user was updated
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Some error happened
 */
router.put('/users/:id', routeAdapter(new EditeUsuarioController()))

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */
router.delete('/users/:id', routeAdapter( DeleteUsuarioController()))

module.exports = router;