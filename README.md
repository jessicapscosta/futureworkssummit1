# Future Works Summit — Site responsivo

Versão revisada conforme briefing e referências do evento.

## Como abrir
Abra `index.html` em um navegador moderno. O site funciona como HTML/CSS/JS estático, sem necessidade de instalação ou de compilação.

## Conteúdo e identidade
- Data: **10 e 11 de novembro**
- Local: Centro Olímpico e Paralímpico / Parque da Vaquejada
- Entrada gratuita
- Instagram oficial: https://www.instagram.com/futureworkssummit/
- Logos do Future Works Summit, Instituto DNA Social e Secretaria de Ciência, Tecnologia e Inovação / GDF fornecidas pelo projeto.

## Animações
- Entrada cinematográfica do robô no hero (CSS), movimento contínuo suave e halo animado
- Inclinação de perspectiva conforme o cursor no desktop
- Parallax ao rolar a página
- Revelação suave das seções via IntersectionObserver
- Animações reduzidas para quem ativa `prefers-reduced-motion`

## Seções
Hero em três áreas; sobre; planeta em largura ampla com fade; experiências com recorte PNG do robô lendo jornal; destaques centralizados; local; Instagram; rodapé institucional.

## Arquivos
- `index.html`: página
- `styles.css`: CSS principal
- `refinement.css`: acabamento e movimento
- `script.js`: menu, motion e scroll
- `assets/`: imagens oficiais e novo PNG do robô lendo jornal

Observação: a imagem do robô é um recorte estático com animação 2.5D via CSS. Não há rigging 3D nem animação articulada das mãos/páginas do jornal. As fontes externas dependem de conexão à internet; o site mantém fontes de fallback.


## Revisão de UI da seção Destaques (23/10/2026)
- Grid Bento centralizado em duas colunas no desktop, uma coluna no mobile.
- Cards de Imersão, Carreira, Conexão (imagem humano × máquina) e Propósito.
- Hierarquia tipográfica, espaçamentos, estados de hover, acessibilidade e layout responsivo.
- Nenhuma outra seção, data, logo ou imagem foi alterada nesta revisão.
