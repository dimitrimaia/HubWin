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

/**
 * Link de convite da comunidade no WhatsApp (NEXT_PUBLIC_COMUNIDADE_URL). PROVISÓRIO: enquanto não
 * existir, os botões de comunidade levam ao WhatsApp do atendimento ou, sem ele, ao Instagram.
 */
export const WHATSAPP_COMMUNITY_URL = env(
  process.env.NEXT_PUBLIC_COMUNIDADE_URL,
  WHATSAPP_ATENDIMENTO ? `https://wa.me/${WHATSAPP_ATENDIMENTO}` : INSTAGRAM_URL,
)

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
export const SITE_URL = env(process.env.NEXT_PUBLIC_SITE_URL, 'https://hubwin.vercel.app').replace(/\/+$/, '')
/** Domínio sem "https://", para mostrar em textos e exemplos. */
export const SITE_HOST = SITE_URL.replace(/^https?:\/\//, '')

/** Só a produção é indexável; previews da Vercel e dev local ficam com noindex. */
export const IS_INDEXABLE = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === 'production' : process.env.NODE_ENV === 'production'

export const HUB_DASHBOARD_URL = 'https://app.hub.xyz/train'

export const faqs = [
  {
    question: 'O que é o Hub Capture?',
    answer:
      'Hub Capture é o app oficial da Hub (Hub Data) para gravar tarefas em primeira pessoa com o celular e ganhar por hora aprovada. Também é chamado de Hub App. Você instala o app, grava a tarefa com o celular preso na cabeça e acompanha os pagamentos pelo painel. Além das tarefas do próprio Hub Capture, você pode vincular o app Minute para liberar tarefas extras, somadas no mesmo saldo.',
  },
  {
    question: 'Onde baixar o app Hub Capture?',
    answer:
      'O Hub Capture (Hub App) é gratuito no Google Play para Android e na App Store para iPhone. Os links oficiais de download estão no menu e no rodapé deste site.',
  },
  {
    question: 'O que é o Minute e como vinculo ao Hub Capture?',
    answer:
      'O Minute é um segundo app com mais tarefas pagas da Hub. No painel do Hub Capture, em "Gravar e ganhar" → "Vincule sua conta do Minute", copie o e-mail e o código de convite pessoal, baixe o Minute pelos botões do painel e entre (ou cadastre-se uma única vez) com esse mesmo e-mail e código. Não crie uma segunda conta. A vinculação aparece em até cerca de 20 minutos após a primeira gravação.',
  },
  {
    question: 'O que é a Hub Data?',
    answer:
      'A Hub (também conhecida como Hub Data ou HubData) é uma startup de inteligência artificial com sede em São Francisco e escritório em São Paulo. A plataforma paga pessoas reais para gravar tarefas do dia a dia em primeira pessoa, com o celular preso a uma faixa de cabeça. Esses vídeos viram dados de treino para robôs e modelos de IA.',
  },
  {
    question: 'Quanto a Hub Data paga por hora?',
    answer:
      'Até R$ 35 por hora aprovada em tarefas em casa (modo Residencial) e até R$ 50 por hora aprovada em atividades profissionais (modo Comercial). Só o tempo aprovado na verificação de qualidade é pago. Os valores são máximos e podem variar por tarefa.',
  },
  {
    question: `O que é o código ${REFERRAL_CODE}?`,
    answer:
      `${REFERRAL_CODE} é o código de convite oficial para se cadastrar na Hub. Ao criar sua conta com o código ${REFERRAL_CODE}, você entra com acesso ao Starter Kit grátis e participa dos sorteios exclusivos divulgados neste site.`,
  },
  {
    question: 'Como recebo o pagamento?',
    answer:
      'O tempo aprovado entra no seu saldo e você saca via PIX ou transferência bancária, conforme o calendário de pagamentos semanais mostrado na sua conta.',
  },
  {
    question: 'Preciso pagar alguma coisa para participar?',
    answer:
      'Não. O cadastro é gratuito e o Starter Kit (faixa de cabeça e suporte para celular) é enviado sem custo, mas pode demorar a chegar. Quem preferir pode comprar o Suporte Oficial HubCap (boné com suporte), que é opcional e chega bem mais rápido. Você não precisa indicar amigos, assistir anúncios nem comprar nada para receber.',
  },
  {
    question: 'Preciso aparecer nos vídeos ou ter seguidores?',
    answer:
      'Não. A câmera fica na altura dos olhos e grava suas mãos e a tarefa, não o seu rosto. Os vídeos não são publicados em redes sociais, então seguidores e curtidas não importam.',
  },
  {
    question: 'Qual celular preciso para gravar?',
    answer:
      'Um smartphone Android ou iPhone com câmera traseira em bom estado, espaço livre de armazenamento e bateria carregada. Você grava pelo app Hub Capture (App Store e Google Play) e também pode gravar tarefas extras no app Minute.',
  },
  {
    question: 'Posso gravar no meu trabalho?',
    answer:
      'Sim, no modo Comercial. Grave atividades profissionais reais durante o expediente, sempre com autorização do responsável pelo local. A plataforma tem mais de 100 tarefas em 14 setores, como construção, manutenção, oficina, varejo, restaurantes e limpeza.',
  },
]
