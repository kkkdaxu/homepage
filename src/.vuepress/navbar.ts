import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "C++学习笔记",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "笔记",
        icon: "pen-to-square",
        prefix: "Cpp/",
        children: [
          { text: "C++专题笔记", icon: "pen-to-square", link: "cpp专题笔记" },
          { text: "C++内存管理", icon: "pen-to-square", link: "cpp内存管理" },
        ],
      },

    ],
  },
  {
    text: "计算机网络",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "笔记",
        icon: "pen-to-square",
        prefix: "Cpp/",
        children: [
          { text: "图解计算机网络", icon: "pen-to-square", link: "图解计算机网络" },

        ],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
