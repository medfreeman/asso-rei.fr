module.exports = {
  content: [
    [
      "pages",
      {
        page: "/pages/_slug",
        permalink: ":slug",
        isPost: false,
        generate: ["getAll"]
      }
    ],
    [
      "menus",
      {
        page: "/menus/_slug",
        isPost: false
      }
    ]
  ]
};
