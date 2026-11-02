# Como colocar o site no ar (passo a passo)

Este site é um clone do Hub Capture com o código de convite **WINHUB**
(cadastro em `https://app.hub.xyz/r/WINHUB`). Ele é independente do site original: repositório
próprio (`dimitrimaia/HubWin`), banco próprio (Supabase) e hospedagem própria (Vercel).

Tudo abaixo é **grátis**. Se alguma tela pedir cartão ou plano pago, pare e confira antes.

> Nos outros guias da pasta `docs/`, onde aparece `https://SEU-SITE`, use o endereço do site
> (o mesmo valor de `NEXT_PUBLIC_SITE_URL`).

---

## 1. Banco de dados (Supabase) — ~10 min

1. Entre em <https://supabase.com> → **Start your project** → crie a conta (pode ser com o GitHub).
2. **New project**:
   - Nome: `hubwin`
   - Senha do banco: clique em **Generate a password** e **guarde num lugar seguro**.
   - Região: **South America (São Paulo)**.
   - Plano: **Free**.
3. Espere o projeto ficar pronto (1 a 2 minutos).
4. No menu da esquerda, abra **SQL Editor** → **New query**.
   Abra o arquivo `db/setup.sql` deste repositório no GitHub, copie **tudo**, cole e clique em **Run**.
   Deve aparecer "Success". (Os arquivos `db/atualizacao-*.sql` **não** são necessários: o `setup.sql` já tem tudo.)
5. Clique em **Connect** (no topo da página do projeto) e copie duas URLs:
   - **Transaction pooler** (porta **6543**) → vai na Vercel como `DATABASE_URL`.
   - **Session pooler** (porta **5432**) → vai no GitHub como `BACKUP_DATABASE_URL` (passo 6).
   - Nas duas, troque `[YOUR-PASSWORD]` pela senha do item 2 (sem os colchetes).
     Se a senha tiver `&` ou `+`, troque por `%26` e `%2B`.

> O plano grátis do Supabase permite **2 projetos ativos** por organização, e um projeto parado
> por 7 dias sem acesso é pausado (é só reativar no painel). Como o site recebe visitas, isso
> normalmente não acontece.

---

## 2. Hospedagem (Vercel) — ~10 min

Sobre o limite: no plano grátis (**Hobby**), a Vercel permite **até 200 projetos** e 100 publicações
por dia, então cabe tranquilo. O limite de "2" que costuma aparecer é o do Supabase (acima).
Atenção: pelas regras da Vercel, o Hobby é para uso **pessoal e não comercial**; se o site passar
a dar dinheiro de forma relevante, o recomendado por eles é o plano Pro (pago).

1. Entre em <https://vercel.com/signup> e crie a conta nova **com o GitHub** (plano **Hobby**).
2. **Add New… → Project** → em "Import Git Repository", autorize o acesso ao repositório
   **`dimitrimaia/HubWin`** e clique em **Import**.
3. Não mude nada em "Build and Output Settings" (a Vercel detecta Next.js e pnpm sozinha).
4. Abra **Environment Variables** e cadastre as variáveis da tabela abaixo (marque **Production**).
5. Clique em **Deploy**. Ao terminar, a Vercel mostra o endereço provisório, algo como
   `https://hubwin.vercel.app` (ou `hubwin-xxxx.vercel.app`).
6. Se o endereço for diferente de `https://hubwin.vercel.app`, vá em
   **Settings → Environment Variables**, ajuste `NEXT_PUBLIC_SITE_URL` para o endereço certo e
   faça **Deployments → ⋯ → Redeploy**.

### Variáveis

A lista completa, com explicação de cada uma, está no arquivo `.env.example`.

**Obrigatórias para o site funcionar bem:**

| Variável | O que colocar |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Endereço do site, sem barra no final. Por enquanto o da Vercel (`https://hubwin.vercel.app`). |
| `NEXT_PUBLIC_CODIGO_INDICACAO` | `WINHUB` |
| `DATABASE_URL` | URL do **Transaction pooler** (porta 6543) do passo 1. |
| `EQUIPE_SENHA` | Uma "chave de instalação" que você inventa (8+ caracteres). Usada para criar o primeiro admin. |
| `GEMINI_API_KEY` | Chave do Gemini (passo 3). Sem ela o chat só usa as respostas prontas. |

**Da marca (opcionais, mas recomendadas):**

| Variável | O que colocar |
| --- | --- |
| `NEXT_PUBLIC_SITE_NOME` | Nome do site (padrão: `Hub Robotics`). |
| `NEXT_PUBLIC_RESPONSAVEL_NOME` | Quem aparece no texto da comunidade (padrão: "a equipe", sem nome de pessoa). |
| `NEXT_PUBLIC_INSTAGRAM_USUARIO` | Perfil do Instagram, sem @ (padrão: `hubcap_oficial`). |
| `NEXT_PUBLIC_COMUNIDADE_URL` | Link da comunidade no WhatsApp (já vem com a comunidade do Hub Robotics; só mude se trocar de grupo). |
| `NEXT_PUBLIC_WHATSAPP_ATENDIMENTO` | Número do atendimento, só dígitos com DDI e DDD (ex.: `5511900000000`). |

**Opcionais (ligue quando quiser):** planilhas (`CADASTRO_WEBHOOK_URL`, `INFLUENCER_WEBHOOK_URL`,
`PLANILHA_LEITURA_TOKEN`), WhatsApp da Meta (`WHATSAPP_*`, ver `docs/whatsapp.md`), alerta de
erro por e-mail (`RESEND_API_KEY`, `ALERTA_EMAIL`), `GOOGLE_SITE_VERIFICATION` (passo 5).

> Toda vez que mudar uma variável que começa com `NEXT_PUBLIC_`, faça **Redeploy** para valer no site.

---

## 3. Planilhas, Gemini e primeiro admin — ~20 min

1. **Planilhas Google (opcional, cópia de segurança dos cadastros):** crie planilhas **novas**
   (não use as do site original) e siga `docs/google-sheets-webhook.md`. Cole as URLs do Apps Script
   nas variáveis `CADASTRO_WEBHOOK_URL` e `INFLUENCER_WEBHOOK_URL` na Vercel.
2. **Gemini (assistente do chat):** em <https://aistudio.google.com/apikey> (pode ser outra conta
   Google), clique em **Create API key**, copie e cole em `GEMINI_API_KEY` na Vercel.
   Detalhes em `docs/assistente.md`. O nível gratuito basta.
3. Faça **Redeploy**.
4. **Primeiro admin:** abra `https://SEU-SITE/equipe/login`. Como ainda não existe conta, aparece o
   formulário de instalação: informe seu nome, usuário, uma senha (10+ caracteres) e a **chave de
   instalação** (o valor de `EQUIPE_SENHA`). Pronto: você entra no painel e pode criar os outros
   usuários em **Usuários**.

---

## 4. Teste rápido

- Abra o site: os botões "Cadastrar com WINHUB" devem levar para `https://app.hub.xyz/r/WINHUB`.
- Preencha o `/cadastro` com seu nome e WhatsApp → o cadastro aparece no painel em **Cadastros**.
- Abra o chat (botão verde) e pergunte "Como me cadastro?" → a resposta traz o link com WINHUB.
- Escreva "quero falar com um atendente" → a conversa aparece em **Atendimento → Na fila**.

---

## 5. Quando comprar o domínio

1. Compre o domínio (ex.: Registro.br para `.com.br`).
2. Na Vercel: **Settings → Domains → Add** → digite o domínio **sem www** (ex.: `seudominio.com.br`).
   A Vercel oferece adicionar também o `www` redirecionando para ele: aceite.
   Deixe o domínio **sem www como principal** e o `www` com **Redirect** para ele.
3. A Vercel mostra os registros de DNS (tipo A e CNAME). Cadastre-os no painel de onde você comprou
   o domínio (no Registro.br: **DNS → Editar zona**). Pode levar de minutos a algumas horas.
4. Troque `NEXT_PUBLIC_SITE_URL` para `https://seudominio.com.br` e faça **Redeploy**.
   (Isso atualiza canonical, sitemap, Open Graph e os links das mensagens.)
5. **Google Search Console:** em <https://search.google.com/search-console> → **Adicionar
   propriedade** → **Prefixo do URL** → `https://seudominio.com.br` → método **Tag HTML**.
   Copie só o código de `content="..."`, cole em `GOOGLE_SITE_VERIFICATION` na Vercel, faça
   Redeploy e clique em **Verificar**. Depois, em **Sitemaps**, envie `sitemap.xml`.
6. Se usar o WhatsApp da Meta, atualize a URL do webhook para `https://seudominio.com.br/api/whatsapp`.

---

## 6. Backup semanal (GitHub Actions, grátis)

O repositório já tem `.github/workflows/backup.yml`. Falta só cadastrar dois segredos no GitHub:

1. Em `github.com/dimitrimaia/HubWin` → **Settings → Secrets and variables → Actions → New repository secret**:
   - `BACKUP_DATABASE_URL` = URL do **Session pooler** (porta 5432) do passo 1.
   - `BACKUP_SENHA` = uma senha longa que você inventa e **guarda** (sem ela o backup não abre).
2. Em **Actions → Backup do banco → Run workflow** rode uma vez para testar.

Detalhes e como restaurar: `docs/backup.md`.

---

## O que foi mudado em relação ao site original

- Código de convite, link de cadastro, nome do site, Instagram, comunidade, responsável e endereço
  do site ficam todos em `lib/site.ts` e podem ser trocados por variáveis na Vercel, sem mexer no código.
- Nenhuma URL de planilha, Apps Script, Supabase ou verificação do Google do site original foi copiada.
- O histórico do repositório original não veio junto: este repositório começa num commit só.
