module.exports = function (app) {
  const express = require('express');
  const path = require('path');
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, '..', 'views'));
};
