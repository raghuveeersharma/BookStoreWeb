import express from "express";
import {getBooks} from "../controlers/book.controler.js";
const router = express.Router();


router.get("/", getBooks);
export default router;