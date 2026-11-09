# Neon Snake 🐍 — Hadryn Games

Jogo Snake moderno feito em **HTML5, CSS3 e JavaScript puro**. Roda em navegadores modernos, sem instalação, compilação ou dependências.

**Versão:** 1.1.0 — Speed Boost Update

## 🎮 Jogar

https://hadryndev.github.io/Neon-Snake-Hadryn-Games/

## Controles

- **Setas** ou **WASD**: movimentar
- **Espaço**: pausar e continuar
- **Celular:** deslizar na tela ou usar botões direcionais
- **Reiniciar:** botão dedicado na interface

## Mecânicas

- Bolinhas rosas: **+10 pontos** e a cobra cresce
- **Raio dourado ⚡**: surge a cada quatro bolinhas coletadas, enquanto não houver outro raio nem boost ativo. Desaparece se não for coletado em 9 segundos de jogo
- Ao pegar o raio, ativa **Speed Boost** por **5 segundos de jogo**: cobra mais rápida, rastro luminoso e **pontuação ×2** para cada bolinha rosa consumida (**+20 pontos**)
- O cronômetro do boost pausa junto com o jogo
- Progressão de nível com aumento gradual de velocidade
- Recorde salvo no navegador usando `localStorage`
- Colisão com paredes ou com a própria cobra encerra a partida

## Histórico

- **v1.1.0:** Speed Boost, rastro luminoso, multiplicador temporário ×2 e indicador de tempo
- **v1.0.0:** versão inicial com Snake clássico, níveis, pontuação, recorde, pausa e controles móveis

## Desenvolvimento local

Abra `index.html` em um navegador. Para publicar, configure o GitHub Pages com a branch `main` e a pasta `/ (root)`.

Projeto Hadryn Games.
