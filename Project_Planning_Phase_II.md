# Project Design & Planning Phase-II

This document contains all the details required to fill out the Project Planning Phase-II templates (Product Backlog, Sprint Planning, Stories, Story Points, Project Tracker, Velocity, and Burndown Chart) updated for **May 2026**.

---

## 1. Header Information

* **Date**: 15 May 2026
* **Team ID**: Individual (or your specific team identifier)
* **Project Name**: Online Complaint Registration System
* **Maximum Marks**: 5 Marks

---

## 2. Product Backlog, Sprint Schedule, and Estimation (4 Marks)

This table covers the backlog mapping for all User Stories (including the existing ones and new additions to fully build out the project across 4 Sprints). Each sprint is balanced to exactly **20 Story Points**.

| Sprint | Functional Requirement (Epic) | User Story Number | User Story / Task | Story Points | Priority | Team Members |
| :--- | :--- | :--- | :--- | :---: | :--- | :--- |
| **Sprint-1** | Registration | USN-1 | As a user, I can register for the application by entering my email, password, and confirming my password. | 2 | High | Lead Full-Stack Dev / FE & BE Engineers |
| **Sprint-1** | Registration | USN-2 | As a user, I will receive confirmation email once I have registered for the application. | 1 | High | Backend Engineer |
| **Sprint-1** | Registration | USN-4 | As a user, I can register for the application through Gmail. | 2 | Medium | Frontend Engineer |
| **Sprint-1** | Login | USN-5 | As a user, I can log into the application by entering email & password. | 1 | High | Lead Full-Stack Dev / FE & BE Engineers |
| **Sprint-1** | Dashboard | USN-6 | As a mobile user, I can view my dashboard to track my submitted complaints and file new ones. | 3 | High | Frontend Engineer |
| **Sprint-1** | Complaint Management | USN-7 | As a web user, I can file a complaint with category, title, description, and photo attachments. | 5 | High | Lead Full-Stack Dev / FE & BE Engineers |
| **Sprint-1** | Ticket Resolution | USN-8 | As a support agent, I can view complaints assigned to me and update their status. | 3 | High | Backend Engineer |
| **Sprint-1** | Admin Console | USN-9 | As an admin, I can view all system complaints and manually allocate them to active agents. | 3 | High | Frontend Engineer |
| *Sprint-1 Subtotal* | | | | **20** | | |
| **Sprint-2** | Registration | USN-3 | As a user, I can register for the application through Facebook. | 3 | Low | Frontend Engineer |
| **Sprint-2** | Registration | USN-11 | As a user, I can register for the application through LinkedIn. | 2 | Low | Frontend Engineer |
| **Sprint-2** | User Confirmation | USN-12 | As a user, I want to receive and verify an OTP on my mobile phone to complete my registration confirmation. | 5 | Medium | Backend Engineer / SMS Gateway |
| **Sprint-2** | Complaint Management | USN-13 | As a user, I want to upload voice notes and images as attachments with my complaint. | 5 | Medium | Frontend Engineer |
| **Sprint-2** | Analytics Dashboard | USN-10 | As an admin, I can view charts of complaints by category and status to analyze trends. | 5 | Low | Lead Full-Stack Dev / FE & BE Engineers |
| *Sprint-2 Subtotal* | | | | **20** | | |
| **Sprint-3** | File Upload Storage | USN-14 | As a developer, I want to store uploaded complaint attachments on AWS S3 or local disk storage securely. | 5 | High | Backend Engineer |
| **Sprint-3** | Live Chat Integration | USN-15 | As a user/agent, I want to communicate in real-time using live chat on the dashboard to resolve complaints faster. | 8 | Medium | Full-Stack Developer (Socket.io) |
| **Sprint-3** | Notifications | USN-16 | As a user/agent, I want to receive real-time notifications when a complaint status changes or a new message is received. | 5 | Medium | Backend Engineer |
| **Sprint-3** | Live Chat Integration | USN-17 | As a user/agent, I want to view past chat history when opening a complaint so that context is not lost. | 2 | Low | Backend Engineer / DB Admin |
| *Sprint-3 Subtotal* | | | | **20** | | |
| **Sprint-4** | Ticket Allocation | USN-18 | As an administrator, I want the system to auto-assign incoming complaints to support agents based on workload or round-robin. | 5 | High | Backend Engineer |
| **Sprint-4** | Notifications | USN-19 | As a user, I want to receive email updates when my complaint is assigned, updated, or resolved. | 5 | Medium | Backend Engineer (SMTP Integration) |
| **Sprint-4** | Production Deployment | USN-20 | As a DevOps engineer, I want to deploy the application on a production server using PM2 for process management and NGINX for load balancing. | 5 | High | DevOps Engineer |
| **Sprint-4** | Quality Assurance | USN-21 | As a QA engineer, I want to execute unit, integration, and UI tests across all user roles to ensure system stability before launch. | 5 | High | QA Engineer / All Developers |
| *Sprint-4 Subtotal* | | | | **20** | | |

---

## 3. Project Tracker, Velocity & Burndown Chart (4 Marks)

### Project Tracker Table

This table tracks the completion of each Sprint's planned story points with dates in **May 2026**.

| Sprint | Total Story Points | Duration | Sprint Start Date | Sprint End Date (Planned) | Story Points Completed (as on Planned End Date) | Sprint Release Date (Actual) |
| :--- | :---: | :--- | :--- | :--- | :---: | :--- |
| **Sprint-1** | 20 | 6 Days | 04 May 2026 | 09 May 2026 | 20 | 09 May 2026 |
| **Sprint-2** | 20 | 6 Days | 11 May 2026 | 16 May 2026 | 20 | 16 May 2026 |
| **Sprint-3** | 20 | 6 Days | 18 May 2026 | 23 May 2026 | 20 | 23 May 2026 |
| **Sprint-4** | 20 | 6 Days | 25 May 2026 | 30 May 2026 | 20 | 30 May 2026 |

---

## 4. Velocity Calculations

### Sample Calculation (from Template Prompt)
Given a hypothetical 10-day sprint with 20 story points of velocity, the Average Velocity (AV) per iteration unit (story points per day) is:

$$\text{AV} = \frac{\text{Velocity}}{\text{Sprint Duration}} = \frac{20}{10} = 2 \text{ story points per day}$$

### Actual Project Velocity Calculation
For our actual project, each sprint has a duration of **6 days** with **20 story points** completed:

$$\text{Actual AV} = \frac{20 \text{ story points}}{6 \text{ days}} \approx 3.33 \text{ story points per day}$$

---

## 5. Burndown Chart Data (Guidance)

A Burndown Chart tracks the remaining work (story points) over time. For a 6-day sprint with 20 story points, the ideal progress (burndown) looks like this:

### Daily Sprint Burndown Data (Sprint-1 to Sprint-4)

| Day | Date (Sprint-1) | Date (Sprint-2) | Date (Sprint-3) | Date (Sprint-4) | Story Points Remaining (Ideal) | Story Points Remaining (Actual - Sample) |
| :---: | :--- | :--- | :--- | :--- | :---: | :---: |
| **0** | 04 May 2026 | 11 May 2026 | 18 May 2026 | 25 May 2026 | 20.0 | 20 |
| **1** | 05 May 2026 | 12 May 2026 | 19 May 2026 | 26 May 2026 | 16.7 | 17 |
| **2** | 06 May 2026 | 13 May 2026 | 20 May 2026 | 27 May 2026 | 13.3 | 14 |
| **3** | 07 May 2026 | 14 May 2026 | 21 May 2026 | 28 May 2026 | 10.0 | 11 |
| **4** | 08 May 2026 | 15 May 2026 | 22 May 2026 | 29 May 2026 | 6.7 | 6 |
| **5** | 09 May 2026 | 16 May 2026 | 23 May 2026 | 30 May 2026 | 3.3 | 3 |
| **6** | 09 May 2026 (End) | 16 May 2026 | 23 May 2026 | 30 May 2026 | 0.0 | 0 |
