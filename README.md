# sayPrompt-organizer

Mod do Claude Code que transforma pedidos longos ditados por voz em um prompt claro e organizado antes de executar.

Quando o pedido tem 350 caracteres ou mais, o mod instrui o modelo a escrever um bloco "Prompt organizado" (Objetivo, Contexto, Requisitos, Restrições, Resultado esperado), perguntar só se algo essencial for ambíguo e então executar. Pedidos curtos e comandos `/` passam sem alteração.

## Instalação

Em um terminal com o Claude Code:

```
/plugin install sayPrompt-organizer --marketplace AfonsohsS/Mod_sayPrompt-organizer
```

Ou, a partir do shell:

```
claude plugin install sayPrompt-organizer --marketplace AfonsohsS/Mod_sayPrompt-organizer
```

No app desktop, onde `/plugin` não funciona: clique em + ao lado da caixa de prompt, depois Plugins, Add marketplace com `AfonsohsS/Mod_sayPrompt-organizer`, e Add plugin.

## Ajuste

O tamanho mínimo está em `MIN_CHARS` em `hooks/register.ts`.
