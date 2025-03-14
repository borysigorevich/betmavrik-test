# 🚀 Betmawrik Test - Next.js Application

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
docker build -t betmawrik-test .
```

**Explanation:**
- `docker build` → Creates a Docker image.
- `-t betmawrik-test` → Tags the image with the name **`betmawrik-test`**.
- `.` → Uses the current directory as the build context.

---

### **2. Verify the Built Image**
After the build completes, check if the image exists:

```sh
docker images
```

You should see an image named **`betmawrik-test`** in the list.

---

### **3. Run the Docker Container**
Start the container:

```sh
docker run -p 3000:3000 betmawrik-test
```

**Explanation:**
- `docker run` → Runs a new container.
- `-p 3000:3000` → Maps **port 3000** inside the container to **port 3000** on your local machine.
- `betmawrik-test` → Uses the built image.

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
docker run -d -p 3000:3000 betmawrik-test
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
   docker rmi betmawrik-test
   ```

---
