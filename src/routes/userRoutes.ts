import { Router } from "express";
const express = require ('express');
import UserController from "../controllers/UserController";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - phone
 *         - email
 *         - password
 * 
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the User
 *         name:
 *           type: string
 *           description: The User name
 *         phone:
 *           type: string
 *           description: The phone number of User
 *         email:
 *           type: string
 *           description: The email address of User 
 *         passsword:
 *           type: string
 *           description: The secret password of User 
 *       example:
 *          id:1
 *          name"summi
 *          phone:8448131010
 *          email:summich12@gmail.com
 *          password:summi12
 */

/**
  * @swagger
  * tags:
  *   name: User
  *   description: The User managing API
  */

 /**
 * @swagger
 * /createUser:
 *   post:
 *     summary: Create a new User
 *     tags: {User}
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The User was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */

router.post("/createUser", UserController.createUser);
router.get("/getUsers", UserController.getUsers);
router.get("/getUsers/:id/:phone", UserController.getUsers);
router.put("/updateUser/:id/:phone", UserController.updateUser);
router.delete("/deleteUser/:id/:phone", UserController.deleteUser);
export default router;
