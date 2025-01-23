# LocationApp

LocationApp is a simple Angular-based frontend application designed to interact with a Django backend. The application allows users to browse hierarchical location data (Country → State → City → Zip Code) and filter data dynamically.

---

## Background and Purpose

The purpose of this project is to demonstrate the integration of a Django backend with an Angular frontend while implementing performance-optimized APIs and frontend interaction. The project tests the ability to create functional and maintainable full-stack applications using Django Rest Framework (DRF) and Angular.

### Features

- Display hierarchical location data (Country → State → City → Zip Code).
- Dynamic filtering for each level of the hierarchy.
- Support for searching and displaying partial matches.
- Horizontal scrolling for better UX when browsing data.
- Optimized pagination for efficient data handling.

---

## Project Structure

The project has the following key components:

- **Frontend**: Built using Angular.
- **Backend**: A Django REST framework providing the APIs.
- **Data**: Imported from an SQLite database into Django models and served through APIs.

---

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [Angular CLI](https://angular.io/cli) (version 19 or higher)
- A running instance of the Django backend

---

## Setup and Installation

### 1. Clone the Repository
Clone the project from your version control system:

```bash
git clone https://github.com/deaprog/Location-app-Angular.git
```
### 2. Navigate to the location-app directory:

```bash
cd location-app
```

### 3. Install Dependencies

```bash
npm install
```
## Running the Application

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Unit Testing

```bash
ng test
```
