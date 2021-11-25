const router = require("express").Router();
const express = require("express");
const Movie = require("../models/Movie.model");

router.get("/", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      console.log("All the films:", movies);
      res.render("movies", { movies });
    })
    .catch((err) => {
      console.log("Error showing movies", err);
    });
});

router.post("/:id", (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((movie) => {
      console.log("Here's your movie:", movie);
      res.render("movie/details", { movie });
    })
    .catch((err) => {
      console.log("Error finding film", err);
    });
});

module.exports = router;

