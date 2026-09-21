# Seletor de idioma e espanhol

## Resultado
- Substituir os botões PT/EN por um dropdown compacto e acessível no menu lateral e no cabeçalho móvel.
- Adicionar espanhol à lista de idiomas e ao dicionário da interface.
- Definir inglês como idioma padrão e fallback, mantendo a preferência já escolhida no navegador.
- Traduzir para espanhol o conteúdo educacional que já possui versões por idioma; algoritmos permanecem universais.

## Detalhes técnicos
- Usar o componente de seleção acessível já disponível nas dependências, integrado aos tokens visuais atuais.
- Atualizar o idioma inicial do documento e os fallbacks de `LocalizedText` para inglês.
- Preservar a detecção automática: uma preferência salva prevalece; sem preferência, espanhol/português seguem o navegador e os demais recebem inglês.
- Validar desktop e celular, incluindo troca entre EN, ES e PT e persistência após recarregar.
