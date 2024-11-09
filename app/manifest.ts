import type { MetadataRoute } from "next";

// manifest.json是现代Web应用的一个重要组成部分，它有助于提升应用的用户体验和可访问性。
export default function manifest(): MetadataRoute.Manifest {
  return {
    // 提供应用的全名和简称，这些名称会在浏览器标签页和添加到主屏幕时显示。
    name: "Geyuan",
    short_name: "Geyuan",
    // 提供应用的描述，这有助于搜索引擎优化和用户在浏览器中查找应用时的预览
    description: "Geyuan",
    // 指定应用的启动页面，当用户从主屏幕或快捷方式打开应用时加载。
    start_url: "/",
    // 控制应用在浏览器中的显示方式，例如fullscreen、standalone、minimal-ui或browser。这可以帮助你提供更沉浸的用户体验。
    display: "standalone",
    // 设置应用的背景颜色，这在应用启动时显示。
    background_color: "#fff",
    // 设置浏览器标签页的主题颜色，这会影响浏览器的地址栏和工具栏颜色。
    theme_color: "#fff",
    // 指定应用的主要语言，有助于搜索引擎优化和国际化。
    lang: "zh",
    // 定义应用的图标，这些图标会在浏览器标签页和用户添加到主屏幕时显示。
    icons: [
      {
        src: "./favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
