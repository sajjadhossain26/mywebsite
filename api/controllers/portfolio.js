import Contact from "../models/Contact.js";
import Portfolio from "../models/Portfolio.js";
import createError from "../utility/createError.js";
import { contactMail } from "../utility/sendMail.js";

/**
 * create portfolio
 */

export const createPortfolio = async (req, res, next) => {
  try {
    await Portfolio.create({
      ...req.body,
      image: req.file.filename,
    });
    res.status(200).json({
      message: "Portfolio item created successful",
    });
  } catch (error) {
    next(createError(401, "Product failed"));
  }
};

/**
 * Single portfolio
 */

export const singlePortfolio = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Portfolio.findById(id);
    res.status(200).json(product);
  } catch (error) {
    next(createError(error));
  }
};

/**
 * Get all product
 */

export const allPortfolio = async (req, res, nex) => {
  try {
    const portfolio = await Portfolio.find();
    res.status(200).json(portfolio);
  } catch (error) {
    createError(404, error);
  }
};

/**
 * Edit portfolio
 */

export const editPortfolio = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Portfolio.findByIdAndUpdate(id, req.body);
    if (product) {
      res.status(200).json({
        message: "Product updated successful",
      });
    }
  } catch (error) {
    next(createError(error));
  }
};

/**
 * Delete portfolio
 */

export const deletePortfolio = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Portfolio.findByIdAndDelete(id);
    if (product) {
      res.status(200).json({
        message: "Product deleted successful",
      });
    }
  } catch (error) {
    next(createError(error));
  }
};

/**
 * Contact form mail
 */

export const sendMail = async (req, res, next) => {
  try {
    const { name, email, description } = req.body;
    await Contact.create(req.body);
    await contactMail(email, { name, description });
    res.status(200).json({
      message: "Product deleted successful",
    });
  } catch (error) {
    next(createError(error));
  }
};
