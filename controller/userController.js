let users = [
  { id: 1, name: "junikone", email: "junikone@gmail.com" },
  { id: 2, name: "koneJuni", email: "konejuni@gmail.com" },
];

module.exports = {
  index: function (req, res) {
    if (users.length > 0) {
      res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
      });
    } else {
      res.json({
        status: false,
        message: "Data User Kosong Oii...",
      });
    }
    //   res.send("Get User Menggunakan Route Group")
  },

  store: function (req, res) {
    // console.log(req.body)
    users.push(req.body);

    res.send({
      status: true,
      data: users,
      message: "data user berhasil di tambahkan",
      method: req.method,
      url: req.url,
    });
    //   res.send("Post Menggunakan Route Group")
  },

  update: function (req, res) {
    const id = req.params.id;
    let isUserFound = false; // tambahkan variabel isUserFound untuk mengecek apakah user ditemukan atau tidak
    users = users.map((user) => {
      // gunakan method map() untuk memodifikasi array users
      if (user.id == id) {
        user.name = req.body.name;
        user.email = req.body.email;
        isUserFound = true; // set isUserFound menjadi true karena user ditemukan
      }
      return user;
    });
    if (isUserFound) {
      // jika user ditemukan, kirim response dengan data yang telah diubah
      res.json({
        status: true,
        data: users,
        message: "Data user berhasil di edit",
        method: req.method,
        url: req.url,
      });
    } else {
      // jika user tidak ditemukan, kirim response dengan pesan error
      res.status(404).json({
        status: false,
        message: "User dengan id tersebut tidak ditemukan",
        method: req.method,
        url: req.url,
      });
    }
  },

  delete: function (req, res) {
    let id = req.params.id;
    users = users.filter((user) => user.id != id);
    res.send(users);
  },
};
