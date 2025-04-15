# WebApi_Vue Workspace

This workspace contains:
- **PizzaStoreAPI/**: ASP.NET Core WebAPI backend
- **pizza-frontend/**: Vue.js frontend (Vite)

## Getting Started

### Backend (PizzaStoreAPI)
1. Open a terminal in the `PizzaStoreAPI` folder.
2. Run:
   ```sh
   dotnet run
   ```
3. The API will be available at `http://localhost:5000` (or as shown in the terminal).

### Frontend (pizza-frontend)
1. Open a terminal in the `pizza-frontend` folder.
2. Run:
   ```sh
   npm install
   npm run dev
   ```
3. The app will be available at `http://localhost:5173`.

## Development Notes
- CORS is enabled in the backend for `http://localhost:5173`.
- Update API endpoints in your Vue app to point to the backend URL.

---

For more details, see the README files in each project folder.
