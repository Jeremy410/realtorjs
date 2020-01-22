"use strict";
var Property = require("./model");

exports.getAll = async (query, page, limit) => {
  try {
    const property = await Property.find(query);
    return property;
  } catch (e) {
    throw Error(e);
  }
};

exports.add = async property => {
  try {
    const newProperty = new Property(property);
    newProperty.save((err, property) => {
      if (err) return err;
    });
    return newProperty;
  } catch (e) {
    throw Error(e);
  }
};

exports.findById = async id => {
  try {
    return await Property.findById(id, (err, property) => {
      if (err) return err;
    });
  } catch (e) {
    throw Error(e);
  }
};

exports.update = (id, property) => {
  const conditions = { _id: id };
  const returnNewObject = { new: true };
  try {
    Property.findOneAndUpdate(
      conditions,
      property,
      returnNewObject,
      (err, property) => {
        if (err) return err;
      }
    );

    return property;
  } catch (e) {
    throw Error(e);
  }
};

exports.delete = function(id) {
  try {
    const conditions = { _id: id };
    Property.deleteOne(conditions, (err, property) => {
      if (err) return err;
    });
  } catch (e) {
    throw Error(e);
  }

  return true;
};
