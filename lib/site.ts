// ─────────────────────────────────────────────────────────────────────────────────────────────
// CONFIGURAÇÃO DA MARCA · tudo que muda de um site para outro fica aqui.
// Cada valor pode ser trocado na Vercel (Settings → Environment Variables) sem mexer no código.
// Os valores marcados com "PROVISÓRIO" ainda precisam ser confirmados pelo dono do site.
// ─────────────────────────────────────────────────────────────────────────────────────────────

const env = (valor: string | undefined, padrao: string) => (valor && valor.trim() ? valor.trim() : padrao)

/** Código de convite da Hub usado em todo o site (textos, FAQ, chat, SEO e link de cadastro). */
export const REFERRAL_CODE = env(process.env.NEXT_PUBLIC_CODIGO_INDICACAO, 'WINHUB').toUpperCase()

/** Nome do site/marca (aba do navegador, rodapé, Open Graph). */
export const SITE_NAME = env(process.env.NEXT_PUBLIC_SITE_NOME, 'Hub Robotics')

/** Quem atende, no texto da comunidade. Sem nome de pessoa de propósito. */
export const RESPONSAVEL_NOME = env(process.env.NEXT_PUBLIC_RESPONSAVEL_NOME, 'a equipe')

/** Perfil do Instagram, sem @. */
export const INSTAGRAM_USUARIO = env(process.env.NEXT_PUBLIC_INSTAGRAM_USUARIO, 'hubcap_oficial').replace(/^@/, '')
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_USUARIO}`

/** Número do atendimento (só dígitos, com DDI). Vem da Vercel: NEXT_PUBLIC_WHATSAPP_ATENDIMENTO. */
export const WHATSAPP_ATENDIMENTO = (process.env.NEXT_PUBLIC_WHATSAPP_ATENDIMENTO ?? '').replace(/\D/g, '')

/** Link de convite da comunidade no WhatsApp (pode ser trocado por NEXT_PUBLIC_COMUNIDADE_URL). */
export const WHATSAPP_COMMUNITY_URL = env(process.env.NEXT_PUBLIC_COMUNIDADE_URL, 'https://chat.whatsapp.com/GCaMBK8OFOaGqMXK7pyCSz')

export const PARTNER_TAGLINE = 'Parceiro oficial'

/** Link oficial de cadastro na Hub, já com o código aplicado. */
export const SIGNUP_URL = `https://app.hub.xyz/r/${REFERRAL_CODE}`
/** O mesmo link sem "https://", para mostrar em textos. */
export const SIGNUP_URL_CURTA = SIGNUP_URL.replace(/^https?:\/\//, '')

export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=xyz.hub.mobile&hl=pt_BR'
export const APP_STORE_URL = 'https://apps.apple.com/br/app/hub-capture/id6772285040'
export const APP_STORE_ID = '6772285040'
export const HUBCAP_URL = 'https://www.mercadolivre.com.br/up/MLBU5339859880'

export const CADASTRO_PATH = '/cadastro'
export const TUTORIAIS_PATH = '/tutoriais'
export const GUIA_PATH = '/hub-capture-app'
export const QUANTO_PAGA_PATH = '/hub-data-quanto-paga'
export const CONFIAVEL_PATH = '/hub-data-e-confiavel'

/**
 * Endereço oficial do site: canonical, sitemap e Open Graph apontam sempre para cá.
 * DOMÍNIO AINDA NÃO COMPRADO: enquanto isso vale o endereço provisório da Vercel.
 * Quando comprar o domínio, troque NEXT_PUBLIC_SITE_URL na Vercel (ex.: https://seudominio.com.br)
 * e faça Redeploy · passo a passo em docs/implantacao-clone.md.
 */
export const SITE_URL = env(process.env.NEXT_PUBLIC_SITE_URL, 'https://hub-win.vercel.app').replace(/\/+$/, '')
/** Domínio sem "https://", para mostrar em textos e exemplos. */
export const SITE_HOST = SITE_URL.replace(/^https?:\/\//, '')

/** Só a produção é indexável; previews da Vercel e dev local ficam com noindex. */
export const IS_INDEXABLE = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === 'production' : process.env.NODE_ENV === 'production'

export const HUB_DASHBOARD_URL = 'https://app.hub.xyz/train'

export const faqs = [
  {
    question: 'É verdade que dá para ganhar dinheiro treinando IA?',
    answer:
      'Sim. A HUB (Hub Data) paga pessoas para gravar tarefas reais em primeira pessoa, e esses vídeos viram dados de treinamento para robôs e inteligência artificial. O pagamento é por hora de gravação aprovada, via PIX. Os valores variam por tarefa e não há ganho garantido: só conta o tempo aprovado na verificação de qualidade.',
  },
  {
    question: 'Como trabalhar treinando robôs pelo celular?',
    answer:
      'Você prende o celular numa faixa de cabeça, na altura dos olhos, abre o app Hub Capture, escolhe uma tarefa (em casa ou no trabalho) e grava a atividade do começo ao fim. Depois envia o vídeo para análise. A câmera mostra suas mãos e a tarefa, não o seu rosto.',
  },
  {
    question: 'Quanto paga o treinamento de robôs?',
    answer:
      'Até R$ 50 por hora aprovada no modo trabalho (Comercial) e até R$ 35 por hora aprovada no modo casa (Residencial). São valores máximos, que variam de tarefa para tarefa. O saldo aprovado aparece no painel e o saque é feito via PIX, conforme o calendário semanal da sua conta.',
  },
  {
    question: 'Precisa de experiência para treinar inteligência artificial?',
    answer:
      'Não. Basta um celular Android ou iPhone com câmera boa, um lugar bem iluminado e o suporte de cabeça (o Starter Kit é enviado de graça, mas pode demorar). Não precisa editar vídeos, aparecer na câmera nem ter seguidores: nada é publicado em redes sociais.',
  },
  {
    question: 'O que é a HUB e como funciona a renda extra?',
    answer:
      'A HUB, também chamada de Hub Data, é uma empresa de inteligência artificial com sede em São Francisco e escritório em São Paulo. O app dela, o Hub Capture (Hub App), paga por hora de vídeo aprovado. Você grava quando quiser, no seu ritmo, e pode vincular o app Minute (mesmo e-mail) para liberar tarefas extras somadas ao mesmo saldo.',
  },
  {
    question: `Como se cadastrar para treinar IA com o código ${REFERRAL_CODE}?`,
    answer:
      `Abra o link oficial ${SIGNUP_URL_CURTA}, que já aplica o código ${REFERRAL_CODE}, crie sua conta com nome, e-mail e senha e peça o Starter Kit. Depois baixe o app Hub Capture e entre com o mesmo e-mail. O cadastro é gratuito, e quem usa o código ${REFERRAL_CODE} participa dos sorteios divulgados neste site.`,
  },
  {
    question: 'Preciso pagar alguma coisa?',
    answer:
      'Não. O cadastro e o Starter Kit são gratuitos. Quem não quiser esperar o kit pode comprar o Suporte Oficial HubCap (boné com suporte para o celular), que é opcional. Você não precisa indicar ninguém nem assistir anúncios para receber.',
  },
  {
    question: 'Posso gravar no meu trabalho?',
    answer:
      'Sim, no modo Comercial, sempre com autorização do responsável pelo local. Há mais de 100 tarefas em 14 setores, como construção, manutenção, oficina, varejo, restaurantes e limpeza.',
  },
]
