# Background Remover

## Live Site

**Frontend:** https://wezy18.github.io/background-remover/frontend/

**API Health Endpoint:** https://background-remover-999520341103.us-central1.run.app/health

---

## Overview

The Background Remover is a full-stack web application that allows users to upload an image, automatically remove its background using AI-powered image processing, preview the result instantly, and download the transparent PNG.

This project was built to explore the full workflow of developing and deploying a modern web application, from frontend interaction and responsive UI design to backend API development, Docker containerization, and cloud deployment.

The application focuses on keeping the experience simple, approachable, and responsive while still handling real image processing through a deployed backend service.

---

## About the Project

This project combines a lightweight frontend interface with a Python-based API backend to create a smooth image processing workflow.

### What Users Can Do

- Upload an image directly from the browser
- Send the image to a deployed FastAPI backend
- Process the image using AI-powered background removal
- Preview the finished transparent PNG
- Download the processed image instantly

### Real-World Development Concepts

The project covers several modern development and deployment concepts:

- REST API development with FastAPI
- Handling file uploads between frontend and backend systems
- Docker containerization
- Deploying cloud services with Google Cloud Run
- Configuring CORS between deployed services
- Responsive frontend design and UX improvements
- Integrating GitHub Pages with a cloud-hosted API

---

## Features

✨ AI-powered background removal using rembg  
📤 Image upload and processing directly in the browser  
👁️ Instant image preview after processing  
⬇️ Downloadable transparent PNG output  
📱 Responsive design for desktop and mobile devices  
🎨 Custom upload interface with visual feedback  
☁️ Cloud-hosted backend API using Google Cloud Run  
🐳 Dockerized backend deployment workflow  
📄 GitHub Pages frontend deployment  

---

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Google Fonts (Montserrat)

### Backend
- Python
- FastAPI
- rembg
- Pillow
- ONNX Runtime
- Uvicorn

### Deployment & Tooling
- Docker
- Google Cloud Run
- GitHub Pages
- GitHub

---

## Project Structure

```
background-remover/
│
├── backend/
│   ├── api/
│   │   └── main.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── runtime.txt
│
├── frontend/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   └── images/
│
└── README.md
```

---

## How It Works

### Frontend Flow

1. The user selects an image through the custom upload interface
2. JavaScript creates a FormData object containing the uploaded file and sends it to the FastAPI backend using a POST request
3. Once the backend returns the processed PNG image, the frontend:
   - Creates a temporary object URL
   - Displays the processed image in the interface
   - Enables the download button for saving the transparent PNG

### Backend Flow

1. The FastAPI backend receives the uploaded image through the `/remove-bg` endpoint
2. The image is processed using the rembg library, which uses ONNX-based machine learning models to separate the foreground subject from the background
3. The backend then:
   - Converts the processed image into PNG format
   - Streams the result back to the frontend
   - Allows the frontend to preview and download the output

---

## Running the Project Locally

### Clone the Repository

```bash
git clone https://github.com/Wezy18/background-remover.git
cd background-remover
```

### Backend Setup

Navigate into the backend folder:

```bash
cd backend
```

#### Create a Virtual Environment

```bash
python -m venv env
```

#### Activate the Environment

**Windows PowerShell:**
```bash
.\env\Scripts\Activate.ps1
```

#### Install Dependencies

```bash
pip install -r requirements.txt
```

#### Start the FastAPI Server

```bash
python -m uvicorn api.main:app --reload
```

The backend will run at: `http://127.0.0.1:8000`

### Frontend Setup

1. Open the frontend folder in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

The frontend will communicate with the backend API through the configured fetch endpoint.

---

## API Endpoint

### Remove Background

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/remove-bg` | Remove background from uploaded image |

#### Request

**Form Data:**
| Field | Type |
|-------|------|
| file | image file |

#### Response

Returns a processed PNG image with the background removed.

---

## Deployment

### Frontend Deployment

The frontend is deployed using GitHub Pages.

### Backend Deployment

The backend is containerized using Docker and deployed through Google Cloud Run.

**Deployment workflow includes:**
- GitHub repository integration
- Docker image builds
- Automatic Cloud Run deployments
- Public API routing
- CORS configuration between frontend and backend services

---

## Challenges & Learning Experience

One of the main goals of this project was gaining hands-on experience with deployment workflows and cloud-hosted backend services.

During development, I worked through:

- Configuring FastAPI for cloud deployment
- Resolving Cloud Run container startup issues
- Setting up Docker for Python applications
- Handling CORS between local and deployed environments
- Debugging deployment and networking errors
- Integrating a frontend hosted separately from the backend API

This project helped strengthen both frontend development skills and understanding of backend deployment pipelines.

---

## Possible Future Improvements

- 🎯 Drag-and-drop image uploads
- 🔄 Before-and-after comparison slider
- ⏳ Loading animations and progress indicators
- ♿ Improved accessibility and keyboard navigation
- 📦 Batch image processing
- 🌙 Dark mode support
- 🛠️ Additional image editing tools
- 👤 User accounts and saved uploads
- 📊 File size optimization and compression settings

---

## Purpose & Career Focus

This project was built to strengthen experience with full-stack development and cloud deployment workflows while creating a practical, user-focused application.

It reflects:

- Growing experience across frontend and backend development
- Ability to integrate multiple technologies into a complete application
- Interest in responsive, approachable UI design
- Experience debugging and deploying real-world web applications
- Ability to work through infrastructure and deployment challenges independently

---

## Author

**Rebecca Corder**
