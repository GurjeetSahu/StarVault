<div align="center">
<a href="https://www.producthunt.com/products/starvault/launches/starvault?embed=true&amp;utm_source=badge-featured&amp;utm_medium=badge&amp;utm_campaign=badge-starvault" target="_blank" rel="noopener noreferrer"><img alt="StarVault - Manage your GitHub Stars with ease | Product Hunt" width="250" height="54" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1066146&amp;theme=neutral&amp;t=1776774418627"></a>
<img src="logo.png" width="100" height="100" />

# StarVault

A **local solution to organize your GitHub stars**. Built for developers who want more ways to categorize and manage their starred repositories on their own machine.

</div>

---
## Features

* Organize your GitHub stars into custom categories locally.
* Fully **local-first**, powered by IndexedDB via **Dexie.js**.
* Clean, modern UI built with **React + Next.js** and **shadcn/ui**.
* Uses OAuth for GitHub authentication — no live hosting or server-side storage required.

---
## Screenshots
<img width="1846" height="925" alt="Screenshot" src="https://github.com/user-attachments/assets/24058082-3493-4878-a552-768ae9a8e80f" />

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/GurjeetSahu/StarVault.git
   cd StarVault
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a GitHub Personal Access Token(PAT)**

   * Go to [GitHub Developer Settings](https://github.com/settings/personal-access-tokens) → Fine-Grained Token → Generate New Token.
   * Under Account Permissions, Select "Starring".
   * Copy the **Token**.

   
4. **Add your credentials:**
   On `.env.local` file:

   ```env
   PAT=<YOUR PAT TOKEN>
   ```

5. **Run the app:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Tech Stack

* **React + Next.js** – UI and app logic
* **Dexie.js** – Local IndexedDB management
* **shadcn/ui** – Accessible, modern components

---

## Acknowledgements

* Thanks to **[shadcn/ui](https://github.com/shadcn/ui)** for their clean and accessible UI components.
* Thanks to **[Dexie.js](https://dexie.org/)** for making IndexedDB easy to work with.
* Inspired by developers and open-source projects that make building tools like this possible.

---


## Contributing

Contributions, feedback, and suggestions are welcome! Please open issues or submit pull requests.

---

## License

MIT License © 2025 \[gurjeetsahu]

---
