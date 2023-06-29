<p align="center">
  <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://vitejs.dev/logo.svg" alt="Vite logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/npm/v/vite.svg" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vite.svg" alt="node compatibility"></a>
  <a href="https://github.com/vitejs/vite/actions/workflows/ci.yml"><img src="https://github.com/vitejs/vite/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status"></a>
  <a href="https://chat.vitejs.dev"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat"></a>
</p>
<br/>

# This app is created with Vite ⚡

> Next Generation Frontend Tooling

- 💡 Instant Server Start
- ⚡️ Lightning Fast HMR
- 🛠️ Rich Features
- 📦 Optimized Build
- 🔩 Universal Plugin Interface
- 🔑 Fully Typed APIs

# Login, Logout  and private routes using Context and Reducer

## Server App

```bash
$ git clone https://github.com/Jose1i1o/marvel-vs-dc.git
```
## Getting Started

This project was bootstrapped with [Vite and React library](https://vitejs.dev/).

### Available Scripts

In the project directory, you can run:

#### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## License <!-- omit in toc -->

[MIT](https://choosealicense.com/licenses/mit/)



________


Notes for future live-coding
_____________________________

Paso 1. createContext. Saber si el usuario existe o no.

- [x] Crear dos directorios: types and context

Paso 2. Crear el reducer y el createContext.
- [x] Crear types login y logout
- [x] Crear AuthContext. Only import createContext
- [x] Crear AuthProvider.Provider
- [x] Crear authReducer
- [x] Crear nuestro useReducer en AuthProvider con initialState
- [x] Export * from at index y luego hacerlo en el index general
- [x] Luego importarlo y usarlo en HeroesApp


Paso 3. Pasar valores al context Provider
- [x] Explicar porque no enviar el dispatch
- [x] Crear una función ‘login’ con action, type y payload + dispatch en el authProvider
- [x] En el loginPage const { login } = useContext( AuthContext);
- [x] Hacer lo mismo en el NavBar con user?.name

Paso 4. Init useReducer
- [x] getLocalStorage AuthProvider y setItem
- [x] Create logout function localStrage.removeItem and call action 
Paso 5. Public Routes and Private Routes
- [x] Private Routes const { logged } = useContext( AuthContext );
  return ( logged )
  ? children
  : <Navigate to='/login' />
- [x] Nest inside the element the PrivateRoutes
- [x] Public Routes

Paso 6. Volver a la página donde estaba al recargar
- [x] useLocation en privateRoutes
- [x] En el loginPage recoger el lastPath y pasárselo en el loginPage



## 🔗 Authors
This code was developed by Iuliia Nova at a live-coding 🙌💪

| Contributor | Github profile
| ------------------------| -----------------------------------------------------------------------|
| [![](https://avatars.githubusercontent.com/u/115942758?=90&v=4)](https://github.com/IuliiaNova) | [@IuliiaNova](https://github.com/IuliiaNova) |
