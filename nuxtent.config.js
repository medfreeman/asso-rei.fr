module.exports = {
  content: [
    [
      "pages",
      {
        page: "/pages/_slug",
        permalink: ":slug",
        isPost: false,
        generate: ["get", "getAll"]
      }
    ]
  ]
};
