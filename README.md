# Jaspreet Kaur - Assignment 14: Portfolio Website

## Overview
This repository contains the Dockerized version of my **portfolio website** built using **React**. It highlights the course work that I have done so far in my program. The site runs in a Docker container, and it is served using **Nginx** for production.

## Requirements
- Docker
- A web browser to view the portfolio site

## Setup Instructions

### 1. Clone the repository
If you haven't cloned the repository yet, you can do so by running:
git clone https://github.com/jkaur207/kaur_jaspreet_final_site.git
cd kaur_jaspreet_final_site

### 2. Build the Docker image
In the project root directory, run the following command to build the Docker image:
docker build -t kaur_jaspreet_coding_assignment14 .

### 3. Run the Docker container
Once the image is built, you can run the container using this command:
docker run -d -p 5575:80 --name kaur_jaspreet_coding_assignment14 kaur_jaspreet_coding_assignment14

### 4. Access the portfolio site
Open your web browser and visit:
http://localhost:5575
Your portfolio website should be displayed!

### Project Details
The portfolio website showcases the following sections:

### Basic Information

Work (Displays details of the course projects I have worked on)

Tech List (Languages, frameworks, tools used)

Skills (Describes my technical skills)

Resources (Links to useful resources and tools)

Developer Setup (Steps to set up the development environment)

### Info
Container Name: kaur_jaspreet_coding_assignment14

Working Directory in Docker: /kaur_jaspreet_final_site

Production Server: Nginx (Serves the React build)
