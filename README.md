# 🚀 Nginx Reverse Proxy for React App 🖥️

Welcome to the **Nginx Reverse Proxy** for your **React app**! 🎉 This project helps you set up an Nginx server to serve your React app, making sure your app is ready for **production**! 💥

---

## 📦 Table of Contents

1. [Getting Started](#getting-started)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [React App Setup](#react-app-setup)
6. [Testing](#testing)
7. [License](#license)

---

## 🏁 Getting Started

These instructions will get your **React app** running behind an **Nginx reverse proxy**. This setup makes sure your app is production-ready, secure, and optimized. 🚀

---

## 📋 Prerequisites

Before you start, ensure you have the following:

- **Ansible** (for configuration management)
- **Nginx** (to serve the React app)
- A **React app** ready to be deployed 💻

---

## 🔧 Installation

To get started, clone this repository:

\`\`\`bash
git clone https://github.com/your-repo/nginx-react-app.git
cd nginx-react-app
\`\`\`

### 🛠️ Install Dependencies:

Install the required **Ansible** roles and dependencies:

\`\`\`bash
ansible-galaxy install -r requirements.yml
\`\`\`

---

## ⚙️ Configuration

1. **Configure the Inventory**: Modify the `inventory/hosts` file to include your server IP.
2. **Configure Nginx**: Ensure your Nginx is set to serve the React app via reverse proxy.

---

## 📲 React App Setup

1. **Build the React App**:

\`\`\`bash
npm run build
\`\`\`

2. **Copy the Build Folder**:

Place the contents of the `build/` directory into the `files/react-app/` directory.

---

## 🧪 Testing

Once you've configured your Nginx and React app, run the playbook:

\`\`\`bash
ansible-playbook site.yml
\`\`\`

Visit your server’s IP address in a browser, and you should see your React app being served through Nginx! 🎉

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🌟 Acknowledgments

- Thanks to the creators of **React**, **Nginx**, and **Ansible**! 👏
- Inspiration from the awesome open-source community. 💡
