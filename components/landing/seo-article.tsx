import Link from 'next/link'
import { CADASTRO_PATH, CONFIAVEL_PATH, GUIA_PATH, QUANTO_PAGA_PATH, REFERRAL_CODE, SIGNUP_URL, SIGNUP_URL_CURTA, TUTORIAIS_PATH } from '@/lib/site'

const link = 'font-medium text-primary underline-offset-4 hover:underline'

export function SeoArticle() {
  return (
    <section aria-labelledby="ganhos-ia-title" className="px-4 py-16 sm:px-6 md:py-20">
      <article className="mx-auto flex max-w-3xl flex-col gap-5 leading-relaxed text-muted-foreground [&_h2]:mt-6 [&_h2]:text-balance [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h2:first-child]:mt-0 [&_li]:ml-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2">
        <h2 id="ganhos-ia-title">HUB renda extra: quanto dá para ganhar treinando IA</h2>
        <p>
          O pagamento é por <strong>hora de gravação aprovada</strong>: até <strong>R$ 50 por hora</strong> no modo
          trabalho (Comercial) e até <strong>R$ 35 por hora</strong> no modo casa (Residencial). São valores máximos,
          que mudam de tarefa para tarefa, e não existe ganho garantido — só conta o tempo que passa na verificação de
          qualidade. O saldo aprovado aparece no painel e o saque é feito via PIX.
        </p>
        <p>
          Quer ver os detalhes da gravação de vídeos remunerada?{' '}
          <Link href={QUANTO_PAGA_PATH} className={link}>
            Veja quanto paga cada modo
          </Link>
          .
        </p>

        <h2>Trabalhar com IA pelo celular: o que você precisa</h2>
        <ul>
          <li>Um celular Android ou iPhone com câmera traseira boa e espaço livre.</li>
          <li>Um lugar bem iluminado para gravar a tarefa.</li>
          <li>
            Um suporte de cabeça para o celular — o <strong>Starter Kit</strong> (faixa e suporte) é enviado de graça
            depois do cadastro.
          </li>
          <li>Nenhuma experiência: não precisa saber editar vídeo, aparecer na câmera nem ter seguidores.</li>
        </ul>
        <p>
          É uma oportunidade de renda extra para quem quer usar o tempo que já gasta com a rotina. A HUB tem sede em
          São Francisco e escritório em São Paulo;{' '}
          <Link href={CONFIAVEL_PATH} className={link}>
            entenda como a empresa funciona
          </Link>
          .
        </p>

        <h2>HUB treinamento de IA: como se cadastrar para treinar IA</h2>
        <ol>
          <li>
            Abra o link oficial{' '}
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className={link}>
              {SIGNUP_URL_CURTA}
            </a>{' '}
            — o código <strong>{REFERRAL_CODE}</strong> já vem aplicado.
          </li>
          <li>Crie a conta com nome, e-mail e senha e peça o Starter Kit.</li>
          <li>Baixe o app Hub Capture, entre com o mesmo e-mail e escolha casa ou trabalho.</li>
          <li>Grave a primeira tarefa e envie para análise.</li>
        </ol>
        <p>
          Prefere ver em vídeo?{' '}
          <Link href={TUTORIAIS_PATH} className={link}>
            Assista aos tutoriais passo a passo
          </Link>{' '}
          ou leia o{' '}
          <Link href={GUIA_PATH} className={link}>
            guia completo do app
          </Link>
          . Se já decidiu,{' '}
          <Link href={CADASTRO_PATH} className={link}>
            comece pelo cadastro
          </Link>
          .
        </p>
      </article>
    </section>
  )
}
