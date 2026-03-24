import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App'
import ScrollFadeIn from './scrollFadeIn'
import "./style.css";
import { Analytics } from "@vercel/analytics/next"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <ScrollFadeIn>
                <App/>
                <Analytics/>
            </ScrollFadeIn>
        </BrowserRouter>
    </StrictMode>
)

