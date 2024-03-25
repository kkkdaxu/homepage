import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/homepage/",

  lang: "zh-CN",
  title: "个人主页",
  description: "JoeyYang博客的个人主页",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
