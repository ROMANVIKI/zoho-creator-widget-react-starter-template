```md
# 🔧 Zoho Creator Widget React + Tailwind Starter Template

This is a starter template for building **Zoho Creator Widgets** using **React + Tailwind CSS + Vite**, with support for **ZET CLI** for validation and packaging.

> 📌 Built to streamline Zoho Creator widget development using modern tools.

---

## 📁 Folder Structure

```

.
├── public/                     # Vite public assets
├── src/                       # React source files
│   ├── assets/
│   ├── components/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── widget/                    # Vite build output folder (set in vite.config.js)
├── vchat/                     # ZET project folder
│   └── app/                   # Where widget files are copied
│       ├── assets/
│       ├── translations/
│       ├── index.html
│       └── widget.html
├── vite.config.js             # Vite + Tailwind config
├── package.json
└── README.md                  # You're here!

````

---

## 🚀 Tech Stack

- ⚛️ **React** (via Vite)
- 🎨 **Tailwind CSS**
- 🔧 **ZET CLI** (for validation & packaging)
- 📦 **Zoho Creator Widget SDK v2**

---

## ✅ Prerequisites

Make sure you have:

- Node.js (v16+ recommended)
- `zet` CLI installed globally

Install `zet`:

```bash
npm install -g @zoho/zet
````

---

## 🛠️ Setup Instructions

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
```

---

### 2. Add Zoho Widget SDK

Add this **script tag** to the `<head>` of `public/index.html`:

```html
<script src="https://js.zohostatic.com/creator/widgets/version/2.0/widgetsdk-min.js"></script>
```

> ⚠️ Don't use the older V1 SDK (`creator-sdk.min.js`) — it's incompatible with JS API v2.

---

### 3. Tailwind + Vite Configuration

Already preconfigured in `vite.config.js`:

```js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  build: {
    outDir: "widget", // Build output to "widget" directory
  },
});
```

---

### 4. Build the React App

```bash
npm run build
```

This will generate the production files inside the `widget/` folder.

---

### 5. Create a ZET Widget Project

If not already done:

```bash
zet init vchat
```

This creates the `vchat/` folder with a valid widget project structure.

---

### 6. Copy Build Files to ZET App Directory

```bash
cp -r widget/* vchat/app/
```

---

### 7. Validate the Widget

```bash
cd vchat
zet validate
```

If there are no errors, your widget is valid and ready to pack.

---

### 8. Package the Widget

```bash
zet pack
```

This will create a `dist/` folder inside `vchat/`, containing a `.zip` file you can upload to **Zoho Creator > Page > Add Widget**.

---

## 📄 Notes

* Always test your widget inside **Zoho Creator** — the Widget SDK does not run properly outside the Creator environment (like localhost).
* The correct API usage for V2 looks like this:

```js
var config = {
  app_name: "zylker",
  report_name: "All-Timesheet"
};
ZOHO.CREATOR.DATA.getRecords(config).then(function (response) {
  console.log(response);
});```

* No need to use `ZOHO.CREATOR.init()` in JS API v2.


## 🧪 Future Enhancements

* Add reusable API hooks
* Add state management (e.g., Zustand or Context)
* Create CLI to auto-copy and validate widget

---

## 🧑‍💻 Author

* 🧠 Created by \ romanviki
* 🐙 GitHub: [@ROMANVIKI
](https://github.com/ROMANVIKI)
