import type { Register } from 'claude-code'

const MIN_CHARS = 350

const INSTRUCTION = `[Mod sayPrompt-organizer] O pedido acima é longo e provavelmente foi ditado por voz (pode ter repetições, hesitações, correções no meio da fala e erros de transcrição).
ANTES de executar qualquer coisa, faça isto:
1. Escreva um bloco "📋 Prompt organizado" em português, limpo e fiel ao que foi pedido, com estas seções (omita as vazias):
   - **Objetivo**: uma ou duas frases.
   - **Contexto**: fatos e situação relevantes.
   - **Requisitos**: lista numerada, do mais importante ao menos.
   - **Restrições / preferências**: o que evitar ou respeitar.
   - **Resultado esperado**: como saber que está pronto.
   Resolva autocorreções ("não, na verdade...") ficando com a versão final, remova repetições e corrija termos mal transcritos pelo contexto. Não invente requisitos que não foram ditos.
2. Se algo essencial for ambíguo e não puder ser assumido com segurança, faça no máximo 1 a 3 perguntas curtas e pare até a resposta. Caso contrário, siga em frente.
3. Em seguida, execute o prompt organizado normalmente.`

export const register: Register = on => {
  on('prompt.submit', ($, e, next) => {
    const isLong = e.text.trim().length >= MIN_CHARS
    const isSlash = e.command !== undefined || e.text.trimStart().startsWith('/')

    if (e.isMeta || isSlash || !isLong) {
      return next(e)
    }

    $.ui.toast('Organizando pedido longo em um prompt claro…')

    return next({ ...e, context: [...(e.context ?? []), INSTRUCTION] })
  })
}
