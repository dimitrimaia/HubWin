import { Database } from 'lucide-react'
import { redirect } from 'next/navigation'
import { Logo } from '@/components/landing/logo'
import { lerSessao } from '@/lib/equipe'
import { explicarErroBanco } from '@/lib/leads'
import { contarUsuarios } from '@/lib/usuarios'
import { LoginForm, PrimeiroAdminForm } from './login-form'

export default async function LoginPage() {
  if (await lerSessao()) redirect('/equipe/fila')
  let erroBanco = 'A variável DATABASE_URL não está configurada nesta implantação. Cadastre na Vercel e faça Redeploy.'
  const usuarios = process.env.DATABASE_URL
    ? await contarUsuarios().catch((error) => {
        erroBanco = explicarErroBanco(error).dica
        return null
      })
    : null

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="glass w-full max-w-sm rounded-3xl p-6 sm:p-8">
        <Logo tagline="Equipe" />
        <h1 className="mt-6 text-2xl font-semibold tracking-tight">{usuarios === 0 ? 'Configurar o painel' : 'Área da equipe'}</h1>
        <p className="mt-1 mb-6 text-sm text-muted-foreground">Leads, fila de chamadas, colab e administração.</p>
        {usuarios === null ? (
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Database className="size-6 text-primary" aria-hidden="true" />
            <p>O painel ainda não conseguiu usar o banco de dados.</p>
            <p className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-foreground">{erroBanco}</p>
            <p className="text-xs">Guia: docs/implantacao-clone.md (passo 1).</p>
          </div>
        ) : usuarios === 0 ? (
          <PrimeiroAdminForm />
        ) : (
          <LoginForm />
        )}
      </div>
    </main>
  )
}
