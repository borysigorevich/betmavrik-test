This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 🚀 Betmavrik Test - Next.js Application

This is a **Dockerized** Next.js application that can be built and run using Docker.

---

## 📦 Prerequisites

Before running the application, ensure you have:
- [Docker](https://www.docker.com/get-started) installed.
- A valid `Dockerfile` in the project root.

---

## 🛠 Build and Run the Docker Container

### **1. Build the Docker Image**
Navigate to the project root and run:

```sh
docker build -t betmavrik-test .
```

**Explanation:**
- `docker build` → Creates a Docker image.
- `-t betmavrik-test` → Tags the image with the name **`betmavrik-test`**.
- `.` → Uses the current directory as the build context.

---

### **2. Verify the Built Image**
After the build completes, check if the image exists:

```sh
docker images
```

You should see an image named **`betmavrik-test`** in the list.

---

### **3. Run the Docker Container**
Start the container:

```sh
docker run -p 3000:3000 betmavrik-test
```

**Explanation:**
- `docker run` → Runs a new container.
- `-p 3000:3000` → Maps **port 3000** inside the container to **port 3000** on your local machine.
- `betmavrik-test` → Uses the built image.

---

### **4. Check Running Containers**
To see if the container is running:

```sh
docker ps
```

---

### **5. Access the Application**
Once the container is running, open your browser and visit:

```
http://localhost:3000
```

---

### **6. Run in Detached Mode (Optional)**
If you want to run the container in the background:

```sh
docker run -d -p 3000:3000 betmavrik-test
```

- `-d` → Runs the container in **detached mode** (background).

To check running containers:

```sh
docker ps
```

---

### **7. Stop and Remove the Container**
To **stop** the running container:

```sh
docker ps
docker stop <CONTAINER_ID>
```

To **remove** the container after stopping:

```sh
docker rm <CONTAINER_ID>
```

---

### **8. Check Logs (If Issues Occur)**
If the application does not start properly, check the logs with:

```sh
docker logs <CONTAINER_ID>
```

---

### **🔠 Remove the Docker Image (If Needed)**
If you need to delete the built Docker image:

1. **Stop and remove all running containers**:
   ```sh
   docker ps -q | xargs docker stop
   docker ps -aq | xargs docker rm
   ```

2. **Remove the image**:
   ```sh
   docker rmi betmavrik-test
   ```

---
