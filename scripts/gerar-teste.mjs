// Gera testes/index.html a partir do index.html do app, trocando a entrada pela versão de teste
import fs from 'node:fs';
let s = fs.readFileSync('index.html', 'utf8');
s = s.replace('<script type="module" src="./src/main.js"></script>', '<script type="module" src="/testes/main.js"></script>');
s = s.replace('<div class="auth" id="auth"', '<div class="auth" id="auth" hidden');
fs.writeFileSync('testes/index.html', s);
console.log('testes/index.html gerado');
