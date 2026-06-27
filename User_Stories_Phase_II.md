# Project Design Phase-II: Data Flow Diagram & User Stories
**Date**: 31 January 2025  
**Team ID**: Individual  
**Project Name**: Online Complaint Registration System  
**Maximum Marks**: 4 Marks  

---

## User Stories

Below are the detailed user stories mapped to the Online Complaint Registration solution, including roles for Customer (Mobile/Web), Support Agent (Customer Care Executive), and System Administrator.

| User Type | Functional Requirement (Epic) | User Story Number | User Story / Task | Acceptance criteria | Priority | Release |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Customer** *(Mobile user)* | Registration | USN-1 | As a user, I can register for the application by entering my email, password, and confirming my password. | I can access my account / dashboard | High | Sprint-1 |
| | | USN-2 | As a user, I will receive confirmation email once I have registered for the application. | I can receive confirmation email & click confirm | High | Sprint-1 |
| | | USN-3 | As a user, I can register for the application through Facebook. | I can register & access the dashboard with Facebook Login | Low | Sprint-2 |
| | | USN-4 | As a user, I can register for the application through Gmail. | I can register & access the dashboard with Google/Gmail Login | Medium | Sprint-1 |
| | Login | USN-5 | As a user, I can log into the application by entering email & password. | I am authenticated, a JWT token is stored, and I am redirected to my dashboard | High | Sprint-1 |
| | Dashboard | USN-6 | As a mobile user, I can view my dashboard to track my submitted complaints and file new ones. | I can see a list of my active complaints with real-time status badges (Pending/Resolved). | High | Sprint-1 |
| **Customer** *(Web user)* | Complaint Management | USN-7 | As a web user, I can file a complaint with category, title, description, and photo attachments. | Complaint is saved, confirmation alert is displayed, and agent auto-assignment is triggered. | High | Sprint-1 |
| **Customer Care Executive** *(Support Agent)* | Ticket Resolution | USN-8 | As a support agent, I can view complaints assigned to me and update their status. | Dashboard table renders assigned complaints and provides a status change dropdown. | High | Sprint-1 |
| **Administrator** | Admin Console | USN-9 | As an admin, I can view all system complaints and manually allocate them to active agents. | Admin dashboard shows a list of all tickets with an agent assignment dropdown. | High | Sprint-1 |
| | Analytics Dashboard | USN-10 | As an admin, I can view charts of complaints by category and status to analyze trends. | Visual charts render successfully with dynamic totals from the database. | Low | Sprint-2 |
