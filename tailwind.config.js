module.exports = {
  purge: [
    // 將所有會使用到 Tailwind 的檔案路徑設定在這，讓 Tailwind 可以在生產環境建置時清除沒有使用的樣式
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
