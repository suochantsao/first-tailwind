module.exports = {
  purge: [
    // 將所有會使用到 Tailwind 的檔案路徑設定在這，讓 Tailwind 可以在生產環境建置時清除沒有使用的樣式
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      // 客製化斷點可以新增在這邊
    },
  },
  variants: {
    extend: {
      // 開關特定功能的 hover 、 active 和 focus 變化模式
    },
  },
  plugins: [],
};
