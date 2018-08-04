module.exports = {
  api: {
    baseURL: "http://localhost:3000"
  },
  content: [
    [
      "pages",
      {
        page: "/pages/_slug",
        permalink: "/:slug",
        isPost: false,
        generate: ["get", "getAll"]
      }
    ],
    [
      "menus",
      {
        page: "/menus/_slug",
        isPost: false
      }
    ],
    [
      "data",
      {
        page: "/data/_slug",
        isPost: false
      }
    ]
  ]
};
