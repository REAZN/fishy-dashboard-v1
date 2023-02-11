import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import 'virtual:windi.css';
import Home from "./pages/home";

createRoot(document.getElementById('app')).render(<Home/>)
// createInertiaApp({
  // resolve: name => {
    // const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
    // return pages[`./pages/${name}.tsx`]
  // },
  // setup({ el, App, props }) {
    // createRoot(el).render(<App {...props} />)
  // },
// })