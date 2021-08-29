const { books } = require("../models");

module.exports = {
  index: (req, res) => {
    books.findAll({}).then((article) => {
      if (article.length !== 0) {
        res.json({
          status: 200,
          message: "sukses",
          data: article,
        });
      } else {
        res.json({
          status: 400,
          message: "DATA KOSONG",
        });
      }
    });
  },
  create: (req, res) => {
    const { isbn, judul, sinopsi, penulis, genre } = req.body;

    books
      .create({
        isbn,
        judul,
        sinopsi,
        penulis,
        genre,
      })
      .then((article) => {
        res.json({
          status: 200,
          message: "DATA BERHASIL DIMASUKKAN",
          data: article,
        });
      });
  },
  update: (req, res) => {
    const { isbn, judul, sinopsi, penulis, genre } =
      req.body;
    const userId = req.params.id;
    const query = {
      where: { id: userId },
    };
    books
      .update(
        { isbn, judul, sinopsi, penulis, genre },
        query
      )
      .then(() => {
        res.status(201).json("Update succesfully");
      })
      .catch((err) => {
        res.status(422).json("Can't update book");
      });
  },
  show: (req, res) => {
    const userId = req.params.id;

    books
      .findOne({
        where: { id: userId },
      })
      .then((data) => {
        res.json({
          status: 200,
          message: "DATA DITEMUKAN",
          data: data,
        });
      })
      .catch((err) => {
        res.json({
          status: 400,
          message: "DATA TIDAK DITEMUKAN",
        });
      });
  },
  delete: (req, res) => {
    const userId = req.params.id;

    books
      .destroy({
        where: { id: userId },
      })
      .then((data) => {
        res.json({
          status: 200,
          message: "DATA BERHASIL DIHAPUS",
          data: userId,
        });
      })
      .catch((err) => {
        res.json({
          status: 400,
          message: "DATA GAGAL DIHAPUS",
        });
      });
  },
};
