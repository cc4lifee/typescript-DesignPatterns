import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

import './BehaviouralDesignPatterns/chainOfResponsability'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <h2>Design Patterns</h2>
    
  </div>
`

