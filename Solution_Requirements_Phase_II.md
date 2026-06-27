# Project Design Phase-II: Solution Requirements (Functional & Non-functional)
**Date**: 31 January 2025  
**Team ID**: Individual  
**Project Name**: Online Complaint Registration System  
**Maximum Marks**: 4 Marks  

---

## 1. Functional Requirements

Below are the functional requirements of the Online Complaint Registration solution, including User Registration, Confirmation, Complaint Filing, and Ticket Allocation.

| FR No. | Functional Requirement (Epic) | Sub Requirement (Story / Sub-Task) |
| :--- | :--- | :--- |
| **FR-1** | User Registration | • Registration through Form<br>• Registration through Gmail<br>• Registration through LinkedIn |
| **FR-2** | User Confirmation | • Confirmation via Email<br>• Confirmation via OTP |
| **FR-3** | Complaint Filing | • File tickets with category & description<br>• Upload media evidence & voice notes |
| **FR-4** | Ticket Allocation | • Auto-assign tickets to support agents<br>• Track progress and update status |

---

## 2. Non-functional Requirements

Below are the non-functional requirements of the proposed solution, detailing Usability, Security, Reliability, Performance, Availability, and Scalability.

| FR No. | Non-Functional Requirement | Description |
| :--- | :--- | :--- |
| **NFR-1** | Usability | Intuitive Web interface with responsive forms, custom dashboards, and IBM Watson Assistant chatbot widget. |
| **NFR-2** | Security | Secure user sessions via JWT in authorization headers and password protection using Bcrypt salting (10 rounds). |
| **NFR-3** | Reliability | Ensured by automatic server restarts under PM2 and structured database validation via Mongoose ODM schemas. |
| **NFR-4** | Performance | Sub-second response times using database index optimization, Express routers, and compressed payloads. |
| **NFR-5** | Availability | 99.9% system availability using MongoDB Atlas cloud replica sets and NGINX reverse-proxy load distribution. |
| **NFR-6** | Scalability | Horizontal scaling of stateless API servers and modular 3-tier decoupling (React / Express / MongoDB). |
