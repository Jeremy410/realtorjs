"use strict";
const Property = require("./model");
const PropertyService = require("./service");

exports.list = async (req, res) => {
  const page = req.params.page || 1;
  const limit = req.params.limit || 10;

  try {
    const properties = await PropertyService.getAll({}, page, limit);
    return res.status(200).json({
      code: 200,
      message: "Succesfully properties retrieved",
      data: properties
    });
  } catch (e) {
    return res
      .status(400)
      .json({ code: 102, message: "There was an error listing properties" });
  }
};

exports.create = async (req, res) => {
  const newProperty = await PropertyService.add(req.body);
  if (newProperty) {
    return res.status(201).json({
      status: 201,
      message: "Property successfully created",
      data: newProperty
    });
  }

  return res
    .status(400)
    .json({ code: 101, message: "There was an error creating the property" });
};

exports.read = async (req, res) => {
  try {
    const property = await PropertyService.findById(req.params.id);
    return res.status(200).json({
      message: "Property successfully retrieved",
      data: property
    });
  } catch (e) {
    return res.status(200).json({
      code: 100,
      message: "No data found"
    });
  }
};

exports.update = async (req, res) => {
  try {
    const property = await PropertyService.update(req.params.id, req.body);
    return res.status(200).json({
      message: "Property successfully updated",
      data: property
    });
  } catch (e) {
    return res.status(200).json({
      code: 102,
      message: "The property could not be updated"
    });
  }
};

exports.delete = async (req, res) => {
  const isDeleted = await PropertyService.delete(req.params.id);
  if (isDeleted) {
    return res.status(200).json({
      message: "Property successfully deleted"
    });
  }

  return res.status(400).json({
    code: 103,
    message: "Property could not be deletedd"
  });
};
