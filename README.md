# Anota — Versão 2

(antes chamado Minhas notas)

App de notas em formato de chat: escreva como numa conversa e cada item vira um card do seu tipo (texto, lista, agenda, despesa, contato, local, imagem, áudio, documento, link), com marcadores, filtros e resumo do mês.

A Versão 2 roda como **app Android** (com notificações, menu Compartilhar e gravação de áudio) e como **versão web** (para iPhone e computador). As notas ficam sincronizadas no **Supabase**.

## O que fica onde

| Parte | Onde |
| --- | --- |
| Código | Este repositório (público; não contém nenhuma nota) |
| Notas e arquivos | Seu projeto no Supabase, protegido por login e regras de segurança |
| App Android | Gerado automaticamente a cada mudança, em **Releases › ultima-versao** |
| Versão web | Publicada automaticamente no GitHub Pages |

## Configuração (uma vez só)

### 1. Supabase
1. No seu projeto, abra **SQL Editor**, cole o conteúdo de [`supabase/configurar.sql`](supabase/configurar.sql) e clique em **Run**.
2. Em **Project Settings › API**, copie a **Project URL** e a chave **anon / publishable** para [`src/config.js`](src/config.js).
3. Abra o app, toque em **Criar conta** e confirme o e-mail.
4. Depois de criar a sua conta, desative novos cadastros: **Authentication › Sign In / Providers › Allow new users to sign up** (desligado). Assim ninguém mais consegue criar conta no seu app.

### 2. GitHub
1. **Settings › Pages › Build and deployment › Source:** escolha **GitHub Actions**.
2. A cada envio para a branch `main`, o GitHub monta o APK e publica a versão web (aba **Actions** mostra o andamento).

## Instalar no Android
1. No celular, abra a página **Releases** deste repositório e toque em `minhas-notas.apk`.
2. Permita a instalação de "fontes desconhecidas" quando o Android pedir (só para o navegador usado).
3. Para atualizar, baixe e instale de novo o APK mais recente; as notas continuam lá.

## Passar as notas da Versão 1
1. No app da Versão 1 (dentro do Claude), abra **Menu › Exportar backup**.
2. Na Versão 2, abra **Menu › Importar backup** e escolha o arquivo.

Textos, listas, agenda, despesas, contatos, locais, links e marcadores são transferidos. Imagens, áudios e documentos da Versão 1 ficam guardados no Claude e não vêm junto; envie de novo os que quiser manter.

## Princípios de design
1. Capturar continua a 1 toque.
2. A cor sempre significa algo (tipo e situação; vermelho = atenção; marcadores neutros).
3. O chat é o protagonista (nada novo fixo no topo ou embaixo).
4. Começa simples e revela o resto aos poucos ("Mais detalhes").

Gestos: tocar = expandir · toque longo ou "Editar" = editar.

## Desenvolvimento
```bash
npm install
npm run dev      # versão web local
npm run build    # gera a pasta dist
```
O projeto Android (`android/`) é gerado na automação por `npx cap add android` + `scripts/patch-android.mjs`.
A chave em `keystore/debug.keystore` é uma chave de depuração, usada só para que o APK possa ser atualizado sem desinstalar.
