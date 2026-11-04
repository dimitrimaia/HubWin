import type { Metadata } from 'next'
import { articleMetadata, ArticleLayout } from '@/components/landing/article-layout'
import { CONTATO_EMAIL, PRIVACIDADE_PATH, SITE_HOST, SITE_NAME } from '@/lib/site'

const title = `Política de privacidade | ${SITE_NAME}`
const description = `Quais dados o ${SITE_NAME} coleta no site, no chat e no WhatsApp, para que usa, por quanto tempo guarda e como pedir a exclusão.`

export const metadata: Metadata = articleMetadata(PRIVACIDADE_PATH, title, description)

const toc = [
  { id: 'quem-somos', label: 'Quem somos' },
  { id: 'dados', label: 'Quais dados coletamos' },
  { id: 'uso', label: 'Para que usamos' },
  { id: 'compartilhamento', label: 'Compartilhamento' },
  { id: 'guarda', label: 'Por quanto tempo guardamos' },
  { id: 'exclusao', label: 'Seus direitos e exclusão de dados' },
]

const mailto = `mailto:${CONTATO_EMAIL}?subject=${encodeURIComponent('Exclusão de dados')}`

export default function PrivacidadePage() {
  return (
    <ArticleLayout
      path={PRIVACIDADE_PATH}
      title={title}
      description={description}
      eyebrow="Privacidade"
      heading="Política de privacidade"
      intro={
        <p>
          Esta política explica como o <strong>{SITE_NAME}</strong> ({SITE_HOST}) trata os seus dados, conforme a Lei Geral
          de Proteção de Dados (LGPD, Lei nº 13.709/2018). Última atualização: novembro de 2026.
        </p>
      }
      toc={toc}
      faqs={[]}
    >
      <h2 id="quem-somos">Quem somos</h2>
      <p>
        O {SITE_NAME} é um site independente de divulgação do programa da Hub (Hub Data) por meio de um código de
        convite. Não somos a Hub Data e não temos acesso à sua conta, aos seus vídeos nem aos seus pagamentos na
        plataforma da Hub.
      </p>

      <h2 id="dados">Quais dados coletamos</h2>
      <ul>
        <li>
          <strong>Formulário de cadastro e de parcerias:</strong> nome, WhatsApp e, nas parcerias, e-mail e perfil em
          redes sociais, além da origem da visita (links de campanha).
        </li>
        <li>
          <strong>Chat do site:</strong> as mensagens que você escreve e um código aleatório guardado no seu navegador
          para manter a conversa.
        </li>
        <li>
          <strong>WhatsApp:</strong> quando você nos escreve, recebemos seu número, seu nome de perfil e as mensagens
          trocadas, pela API oficial do WhatsApp (Meta).
        </li>
        <li>
          <strong>Navegação:</strong> estatísticas anônimas de visitas e desempenho (Vercel Analytics), sem cookies de
          publicidade.
        </li>
      </ul>

      <h2 id="uso">Para que usamos</h2>
      <ul>
        <li>Responder suas dúvidas no chat e no WhatsApp, inclusive com um assistente automático.</li>
        <li>Ajudar você a concluir o cadastro na Hub e entrar em contato sobre parcerias, quando você pediu.</li>
        <li>Melhorar o site e medir quais divulgações funcionam.</li>
      </ul>
      <p>Não vendemos seus dados e não enviamos mensagens em massa.</p>

      <h2 id="compartilhamento">Compartilhamento</h2>
      <p>
        Usamos serviços que processam dados em nosso nome: Vercel (hospedagem), Supabase (banco de dados), Google
        (planilhas e o assistente Gemini, que recebe o texto das perguntas para gerar a resposta) e Meta (WhatsApp).
        Não compartilhamos seus dados com a Hub Data nem com terceiros para fins de publicidade.
      </p>

      <h2 id="guarda">Por quanto tempo guardamos</h2>
      <p>
        Guardamos os dados enquanto forem úteis para o atendimento e a divulgação, ou até você pedir a exclusão. A
        memória do assistente no WhatsApp considera só as últimas 24 horas de conversa.
      </p>

      <h2 id="exclusao">Seus direitos e exclusão de dados</h2>
      <p>
        Você pode pedir, a qualquer momento, acesso, correção ou <strong>exclusão dos seus dados</strong>. Para excluir:
      </p>
      <ol>
        <li>
          Envie um e-mail para <a href={mailto}>{CONTATO_EMAIL}</a> com o assunto &quot;Exclusão de dados&quot; e o número
          de WhatsApp ou o nome usado no cadastro; ou
        </li>
        <li>Escreva &quot;apagar meus dados&quot; para nós pelo WhatsApp ou pelo chat do site.</li>
      </ol>
      <p>Respondemos em até 15 dias e confirmamos quando a exclusão for concluída.</p>
    </ArticleLayout>
  )
}
