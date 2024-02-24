import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateCategoryController,
  getAllProductOfACategory,
  categoryPhotoController
} from "./../controllers/categoryController.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  formidable(),
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  formidable(),
  updateCategoryController
);

//getALL category
router.get("/get-category", categoryController);

// get category photo
router.get("/category-photo/:cid", categoryPhotoController);

router.get("/:slug", getAllProductOfACategory);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryCOntroller
);

export default router;