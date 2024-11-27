# Portifólio com HTML e CSS


- No primeiro dia começamos a ver algumas Tags
html

```html
<h1>Titulo de uma Página</h1>

<p>Parágrafo de uma Página</p>

<ul> <!-- Tag de Lista -->
    <li>
        item de uma lista
    </li>
</ul>

<a href="URL da página que quero redirecionar">
    Link de uma Página
</a>
```
- Também vimos algumas estilizações com css
```css
/* Importamos a fonte escolhida no site https://fonts.google.com/  */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

/* Adicionamos uma cor para o fundo da página */
body{
    background-color: blueviolet;
}

/* Mudamos a fonte do nosso título */
h1{
    font-family: "Montserrat", sans-serif;
    font-weight: 100;
}
```

## A Partir daqui vamos iniciar o desenvolvimento do Portfólio
- Daqui pra frente vou estar disponibilizando o código de cada
parte que vamos desenvolver, por isso, primeiro tente acompanhar a aula e em caso de dúvida compare o seu código com o que estiver disponível aqui.

## Aba de Navegação 
- HTML
```html
     <header><!-- Criamos a Tag <header/> para representar a cabeça da nossa página   -->
        <nav> <!--Indicamos que essa é nossa área de navegação-->
            <ul class="navbar"> <!--Iniciamos uma lista com a classe navbar-->
                <!--criamos os itens da lista que vão servir como botões para a navegação, cada um deles com a classe "navbar-link" e a URL do link apontando para um ID ainda não existente-->
                <li>
                    <a href="#sobre" class="navbar-link">Sobre Mim</a>
                </li>

                <li>
                    <a href="#exp" class="navbar-link" >Experiências</a>
                </li>

                <li>
                    <a href="#contatos" class="navbar-link" >Contatos</a>
                </li>
           </ul>
        </nav>
    </header>
``` 
- CSS
```css
/* Importamos a fonte escolhida no site https://fonts.google.com/  */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

/* Adicionamos um reset css para que todas as
propriedades iniciem zeradas */
*, 
*:after,
*:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
/* Definimos algumas características para nossa página, a cor do fundo, a fonte para os textos e
alguns ajustes de tamanho  */
body{
    font-size: 100%;
    list-style-type: none;
    margin: 5rem;
    color: aliceblue; 
    background-color: #0a0a0a;
    height: 100vh;
    font-family: "Inter",serif;
    font-weight: 300;
}
/* Adicionamos o flex-box e direcionamos os itens 
para o centro
mais informações sobre flex-box em https://css-tricks.com/snippets/css/a-guide-to-flexbox/ */
.navbar{
    display: flex;
    justify-content: center;
}
/* adicionamos uma margem a direita e removemos a 
decoração dos links e a bolinha da lista   */
.navbar li{
    margin-right: 5rem;
    text-decoration: none;
    list-style-type: none;
}
/* mudamos a cor do texto, adicionamos uma cor de fundo um pouco mais clara, adicionamos um padding para
dar um efeito de botão, arrendondamos as bordas e 
adicionamos uma transição na mudança da cor do fundo  */
.navbar-link {
    color: #fff;
    background-color: #333;
    padding: 8px 16px;
    border-radius: 1rem;
    transition: background-color 0.5s;
}
/* adicionamos uma ação para mudar a cor do fundo 
quando o mouse passar por cima */
.navbar-link:hover {
    background-color: #555;
}
```
## Introdução 
- HTML

```html
 <!--Criamos a tag <main> para representar o conteúdo principal  -->
<main>

</main>
``` 
- a partir daqui os outros contéudos estaram dentro da tag main
```html
    <!-- usamos a tag section para representar uma seção da página adicionamos a classe "intro" -->
    <section class="intro">
        <!-- a div faz com que a nossa seção tenha dois blocos, o bloco de texto e o outro com a nossa imagem  -->
        <div>
            <!-- adicionamos um titulo com nosso nome e um parágrafo falando um pouco de quem somos -->
            <h1 class="intro-titulo">Arthur Nunes</h1>
                <p class="intro-texto">
                    Olá! Eu sou Arthur Nunes, um apaixonado por tecnologia e estudante de Ciência da Computação. 
                    Atualmente, estou no terceiro semestre e constantemente busco ampliar meu conhecimento em 
                    desenvolvimento web, inteligência artificial e outras áreas fascinantes da computação. 
                    Vamos explorar o mundo da tecnologia juntos?
                    </p>
            </div>
            <!-- a tag img está apontando para a nossa foto salva no projeto e tem uma mensagem "alt" para casa a imagem não aparece -->
            <img 
                src="img/terno.jpg" 
                alt="Minha Foto"
                class="foto"

                >
        </section>
``` 
- CSS
```css
/* flex-box, adicionando um espaço ao redor dos itens,
adicionamos uma margem em cima */
.intro{
    display: flex;
    justify-content: space-around;
    margin-top: 10rem;
}
/* mudamos a cor do título, o tamanho da letra e uma margem para baixo */
.intro-titulo{
    color: white;
    font-size: 3rem;
    margin-bottom: 20px;
}
/* mudamos a peso/grossura do texto, adicionamos um padding para cima e limitamos a largura do texto */
.intro-texto{
    font-weight: 300;
    padding-top: 1.5rem;
    max-width: 36rem;
}
/* deixamos a bordas da imagem arredondadas */
.foto {
    border-radius: 0.5rem;
}
```
## Divisor
- HTML
```html
<!-- uma div simples para dividir a página -->
<div class="divisor"></div>
```
- CSS
```css
.divisor{
    border-top: 1px solid rgb(23, 23, 23); /* Cria uma linha no topo */
    width: 100%; /* Garante que a linha ocupe toda a largura */
    /* adiciona uma margem em cima e em baixo */
    margin-top: 9rem;
    margin-bottom: 9rem;
}
```
## Sobre Mim
- HTML
```html
    <!-- criamos outra seção, agora para o SOBRE, identificamos o ID igual ao do Botão de navegação -->
        <section class="sobre" id="sobre">
            <!-- parecido com a INTRO, criamos dois blocos, 1 com o titulo e outro com as informações, um em baixo do outro -->
            <h1 class="sobre-titulo">Sobre Mim</h1>
            <div class="sobre-conteudo" >
                <!-- aqui fizemos da mesma forma que na intro, dois blocos 1 do lado do outro, uma tag com a imagem e outra com o texto -->
                <img 
                src="img/fantasia.jpg" 
                alt="Minha Foto"
                class="foto"
                >
              
                <p class="sobre_texto">
                    Meu nome é Arthur Nunes, e desde jovem sou fascinado por como a tecnologia pode transformar vidas. 
                    Estou atualmente cursando Ciência da Computação e participo de projetos e oficinas que envolvem 
                    HTML, CSS e outras tecnologias. Além de estudar, gosto de compartilhar conhecimentos e ajudar outras 
                    pessoas a se apaixonarem pelo mundo da programação. Adoro desafios e acredito no poder da colaboração 
                    para alcançar grandes objetivos.
                </p>
            </div>

        </section>
```
- CSS
```css
/* adicionamos uma margem para baixo, alinhamos o texto para o centro e alteramos o tamanho da fonte */
.sobre-titulo{
    margin-bottom: 5rem;
    text-align: center;
    font-size: 2.25rem;
}
/* adicionamos o flex-box com um espaço ao redor dos itens */
.sobre-conteudo{
    display: flex;
    justify-content: space-around;
}
/* mudamos o peso/grossura da fonte, adicionamos uma margem em cima, mudamos a cor do texto, adicionamos um padding para cima e limitamos a largura  */
.sobre_texto{
    font-weight: 700;
    margin-top: 4rem;
    color: #a3a3a3;
    padding-top: 1.5rem;
    max-width: 36rem;
}

```
## Experiências
- HTML
```html
<!-- mais um divisor para separar a página -->
  <div class="divisor"></div>
        <!-- criamos uma sessão para experiências com o mesmo ID 
         do Botão de navegação -->
        <section class="exp" id="exp">
            <!-- Parecido com a sessão SOBRE, criamos dois blocos que 
             ficam um em baixo do outro, o titulo e o 
             resto das informações -->
            <h2 class="exp-titulo">Experiências</h2>
                    <div class="exp-conteudo">
                    <!-- dentro de "exp-conteudo" temos um parágrafo
                        para o período da experiência e uma
                        outra div com outras informações -->
                        <p class="exp-periodo">2024.02</p>
                
                        <div style="max-width: 36rem;">
                            <!-- o h5 é o titulo da nossa experiência -->
                            <h5 class="exp-func">
                                    <!-- a tag span é utilziada para
                                     marcar um texto ou componente sem
                                     fazer nada com ele, usamos isso para
                                     mudar esse texto no css depois -->
                                Palestrante - <span class="exp-emp">IFPA</span>
                            </h5>
                            <!-- um parágrafo com a descrição -->
                            <p class="exp-descr">
                                Trabalhei como monitor ajudando estudantes a resolver problemas de lógica de programação 
                                e desenvolvendo pequenos projetos em Python e Java. Esta experiência me permitiu aprimorar 
                                minhas habilidades de comunicação e mentoria.
                            </p>
                            <!-- aqui adicionamos mais uma div para fazer
                             com que as tecnologias usadas fiquem 
                             organizadas uma ao lado da outra -->
                            <div class="exp-tech-list">
                                <span class="exp-tech-item">html</span>
                                <span class="exp-tech-item">css</span>
                            </div>
                        </div>
                    </div>
        </section>
```
- CSS 
```css
/* adicionamos uma margem para baixo */
.exp{
    margin-bottom: 5rem;
}
/* alinhamos o texto no centro e mudamos o tamanho 
da fonte */
.exp-titulo{
    text-align: center;
    font-size: 2.25rem;
}
/* adicionamos  o flex-box com um espaço ao redor dos 
itens, adicionamos uma margem para cima e para baixo */
.exp-conteudo{
    display: flex;
    justify-content: space-around;
    margin-top: 5rem;
    margin-bottom: 2rem;
    /* o flex-wrap faz com que o nosso texto mude de 
    linha caso ele seja muito longo */
    flex-wrap: wrap;
}
/* adicionamos uma margem para cima, alteramos o 
tamanho da fonte e mudamos a cor do texto */
.exp-periodo{
    margin-top: 0.5rem;
    font-size: 0.8rem;
    color: #a3a3a3;
}
/* adicionamos uma margem para cima e mudamos
o peso/grossura da fonte */
.exp-func{
    margin-top: 0.5rem;
    font-weight: 600;
}
/* mudamos o tamanho da fonte e a cor do texto */
.exp-emp{
    font-size: 0.875rem;
    color: #f3e8ff;
}
/* adicionamos uma margem em cima e em baixo 
e mudamos a cor do texto*/
.exp-descr{
    margin-top: 1rem;
    margin-bottom: 2rem;
    color: #a3a3a3;
}
/* adicionamos um flex-box para os itens ficarem lado a lado
e adicionamos um flex-wrap para mudar a linha caso o texto fique grande */
.exp-tech-list{
    display: flex;
    flex-wrap: wrap;
}
/* aqui estamos adicionando um efeito para que a experiência fique 
com um efeito de botão */
.exp-tech-item{
    margin-right: 0.5rem; /* margem a direita */
    border-radius: 0.25rem; /* deixa as bordas arredondadas */
    background-color: #171717; /* muda a cor de fundo */
    padding-left: 0.5rem; /* adiciona uma padding a esquerda */
    padding-right: 0.5rem; /* adiciona uma padding a direita */
    padding-top: 0.25rem; /* adiciona uma padding para cima */
    padding-bottom: 0.25rem; /* adiciona uma padding para baixo */
    font-weight: 500; /* muda o peso/grossura da fonte */
    color: #6b21a8; /* muda a cor do texto */
}
```

## Contato
- HTML
```html
    <!-- adicionamos mais um divisor, porém com uma classe
     diferente -->
    <div class="divisor-3"></div>
    <!-- criamos mais uma sessão e com o mesmo ID do botão de navegação -->
    <section class="contato" id="contatos">
        <!-- h2 para representar nosso titulo -->
        <h2 class="contato-titulo">Entre em Contato</h2>
        <!-- um link que ao clicar vai abrir o aplicativo
         de email para o email adicionado no "href" -->
        <a href="mailto:arthurnunes@gmail.com" class="contato-mail">
            arthurnunes@gmail.com
        </a>
        <!-- um parágrafo com o número de telefone -->
        <p class="contato-tel">+55 (91) 91283-3234</p>
    </section>
```
- CSS
```css
/* tem a mesma configuração que os outros divisores,
com exceção da margem para baixo, que nesse é menor */
.divisor-3{
    border-top: 1px solid rgb(23, 23, 23); /* Cria uma linha no topo */
    width: 100%; /* Garante que a linha ocupe toda a largura */
    margin-top: 9rem;
    margin-bottom: 3rem;
}
/* alinha os campos no centro e adiciona uma margem para baixo*/
.contato{
    text-align: center;
    margin-bottom: 2.5rem;
}
/* mudamos o tamanho do texto e adicionamos uma margem para baixo */
.contato-titulo{
    font-size: 2.25rem;
    margin-bottom: 3rem;
}

/* mudamos a cor do texto e adicionamos um efeito de underline nele */
.contato-mail{
   color: #6b21a8;
   text-decoration: underline;
}
/* adicionamos uma margem em cima e em baixo */
.contato-tel{
    margin-top: 1rem;
    margin-bottom: 1rem;
}

```

## EXTRA
- Se você conseguiu realizar os passos anteriores de forma correta

- Vou deixar algumas sugestões

No momento atual seu html deve estar mais ou menos assim :
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arthur Nunes</title>
    <link rel="icon" href="img/favicon.ico">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <ul class="navbar">
                <li>
                    <a href="#sobre" class="navbar-link">Sobre Mim</a>
                </li>

                <li>
                    <a href="#exp" class="navbar-link" >Experiências</a>
                </li>

                <li>
                    <a href="#contatos" class="navbar-link" >Contatos</a>
                </li>
           </ul>
        </nav>
    </header>

    <main>
        <section class="intro">
            <div>
                <h1 class="intro-titulo">Arthur Nunes</h1>
                    <p class="intro-texto">
                        Olá! Eu sou Arthur Nunes, um apaixonado por tecnologia e estudante de Ciência da Computação. 
                        Atualmente, estou no terceiro semestre e constantemente busco ampliar meu conhecimento em 
                        desenvolvimento web, inteligência artificial e outras áreas fascinantes da computação. 
                        Vamos explorar o mundo da tecnologia juntos?
                    </p>
            </div>
            <img 
                src="img/terno.jpg" 
                alt="Minha Foto"
                class="foto"

                >
        </section>

        <div class="divisor"></div>
        
        <section class="sobre" id="sobre">
            <h1 class="sobre-titulo">Sobre Mim</h1>
            <div class="sobre-conteudo" >
                <img 
                src="img/fantasia.jpg" 
                alt="Minha Foto"
                class="foto"
                >
              
                <p class="sobre_texto">
                    Meu nome é Arthur Nunes, e desde jovem sou fascinado por como a tecnologia pode transformar vidas. 
                    Estou atualmente cursando Ciência da Computação e participo de projetos e oficinas que envolvem 
                    HTML, CSS e outras tecnologias. Além de estudar, gosto de compartilhar conhecimentos e ajudar outras 
                    pessoas a se apaixonarem pelo mundo da programação. Adoro desafios e acredito no poder da colaboração 
                    para alcançar grandes objetivos.
                </p>
            </div>

        </section>

        <div class="divisor"></div>

        <section class="exp" id="exp">
            <h2 class="exp-titulo">Experiências</h2>
                    <div class="exp-conteudo">
                        <p class="exp-periodo">2024.02</p>
                
                        <div style="max-width: 36rem;">
                            <h5 class="exp-func">
                                Palestrante - <span class="exp-emp">IFPA</span>
                            </h5>
                            <p class="exp-descr">
                                Trabalhei como monitor ajudando estudantes a resolver problemas de lógica de programação 
                                e desenvolvendo pequenos projetos em Python e Java. Esta experiência me permitiu aprimorar 
                                minhas habilidades de comunicação e mentoria.
                            </p>
                            <div class="exp-tech-list">
                                <span class="exp-tech-item">html</span>
                                <span class="exp-tech-item">css</span>
                            </div>
                        </div>
                    </div>
        </section>
        <div class="divisor-3"></div>
        <section class="contato" id="contatos">
            <h2 class="contato-titulo">Entre em Contato</h2>
            <p class="contato-descr" style="margin-bottom: 1rem;">
                Adoraria ouvir de você! Seja para discutir ideias, colaborar em projetos, <br> ou apenas dizer olá, 
                sinta-se à vontade para me contatar.
            </p>
            <a href="mailto:arthurnunes@gmail.com" class="contato-mail">arthurnunes@gmail.com</a>
            <p class="contato-tel">+55 (91) 91283-3234</p>
        </section>
    </main>
</body>
</html>
```
- Entre o final da tag main e body
```html
    </main>
    <!-- aqui -->
</body>
```
- Adicione um footer com o seu nome, colocando os direitos
autorais de quem fez o projeto
```html
    <footer>
        &copy; 2024 Arthur Nunes
    </footer>
```
- Agora vamo adicionar no final do seu arquivo **style.css** o seguinte código
```css
/* alinhamos o conteúdo do footer no centro
e adicionamos uma margem para cima */
footer{
    text-align: center;
    margin-top: 5rem;
}

/* nesse pedaço estamos fazendo algumas alterações em umas de nossas classes,
com a condição do tamanho da tela ter 768 pixels para menos

dessa forma nossa página fica acessível para quem for ver no celular
*/
@media (max-width: 768px) {
    .intro, .sobre-conteudo, .exp-conteudo {
        flex-direction: column;
        align-items: center;
    }

    .navbar {
        flex-direction: column;
    }

    .navbar li{
        margin-bottom: 2rem;
    }
}
```
- **BRINDE**
- Para trazer um efeito bacana em seus botões de navegação,
adicione no final do seu arquivo html seguinte código javascript
```html
<script>
    document.querySelectorAll('.navbar-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
</script>
```

# Projeto final 
- seguindo todos os passos anteriores e adaptando as informações com suas informações pessoais
- seu código completo deve estar mais ou menos assim

**Arquivo index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arthur Nunes</title>
    <link rel="icon" href="img/favicon.ico">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <ul class="navbar">
                <li>
                    <a href="#sobre" class="navbar-link">Sobre Mim</a>
                </li>

                <li>
                    <a href="#exp" class="navbar-link" >Experiências</a>
                </li>

                <li>
                    <a href="#contatos" class="navbar-link" >Contatos</a>
                </li>
           </ul>
        </nav>
    </header>

    <main>
        <section class="intro">
            <div>
                <h1 class="intro-titulo">Arthur Nunes</h1>
                    <p class="intro-texto">
                        Olá! Eu sou Arthur Nunes, um apaixonado por tecnologia e estudante de Ciência da Computação. 
                        Atualmente, estou no terceiro semestre e constantemente busco ampliar meu conhecimento em 
                        desenvolvimento web, inteligência artificial e outras áreas fascinantes da computação. 
                        Vamos explorar o mundo da tecnologia juntos?
                    </p>
            </div>
            <img 
                src="img/terno.jpg" 
                alt="Minha Foto"
                class="foto"

                >
        </section>

        <div class="divisor"></div>
        
        <section class="sobre" id="sobre">
            <h1 class="sobre-titulo">Sobre Mim</h1>
            <div class="sobre-conteudo" >
                <img 
                src="img/fantasia.jpg" 
                alt="Minha Foto"
                class="foto"
                >
              
                <p class="sobre_texto">
                    Meu nome é Arthur Nunes, e desde jovem sou fascinado por como a tecnologia pode transformar vidas. 
                    Estou atualmente cursando Ciência da Computação e participo de projetos e oficinas que envolvem 
                    HTML, CSS e outras tecnologias. Além de estudar, gosto de compartilhar conhecimentos e ajudar outras 
                    pessoas a se apaixonarem pelo mundo da programação. Adoro desafios e acredito no poder da colaboração 
                    para alcançar grandes objetivos.
                </p>
            </div>

        </section>

        <div class="divisor"></div>

        <section class="exp" id="exp">
            <h2 class="exp-titulo">Experiências</h2>
                    <div class="exp-conteudo">
                        <p class="exp-periodo">2024.02</p>
                
                        <div style="max-width: 36rem;">
                            <h5 class="exp-func">
                                Palestrante - <span class="exp-emp">IFPA</span>
                            </h5>
                            <p class="exp-descr">
                                Trabalhei como monitor ajudando estudantes a resolver problemas de lógica de programação 
                                e desenvolvendo pequenos projetos em Python e Java. Esta experiência me permitiu aprimorar 
                                minhas habilidades de comunicação e mentoria.
                            </p>
                            <div class="exp-tech-list">
                                <span class="exp-tech-item">html</span>
                                <span class="exp-tech-item">css</span>
                            </div>
                        </div>
                    </div>
        </section>
        <div class="divisor-3"></div>
        <section class="contato" id="contatos">
            <h2 class="contato-titulo">Entre em Contato</h2>
            <p class="contato-descr" style="margin-bottom: 1rem;">
                Adoraria ouvir de você! Seja para discutir ideias, colaborar em projetos, <br> ou apenas dizer olá, 
                sinta-se à vontade para me contatar.
            </p>
            <a href="mailto:arthurnunes@gmail.com" class="contato-mail">arthurnunes@gmail.com</a>
            <p class="contato-tel">+55 (91) 91283-3234</p>
        </section>
    </main>
    <footer>
        &copy; 2024 Arthur Nunes
    </footer>
</body>
</html>
<script>
    document.querySelectorAll('.navbar-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
</script>
```

**Arquivo style.css**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

*, 
*:after,
*:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
body{
    font-size: 100%;
    list-style-type: none;
    margin: 5rem;
    color: aliceblue; 
    background-color: #0a0a0a;
    height: 100vh;
    font-family: "Inter",serif;
    font-weight: 300;
}

.navbar{
    display: flex;
    justify-content: center;
}

.navbar li{
    margin-right: 5rem;
    text-decoration: none;
    list-style-type: none;
}

.navbar-link {
    color: #fff;
    background-color: #333;
    padding: 8px 16px;
    border-radius: 1rem;
    transition: background-color 0.5s;
}

.navbar-link:hover {
    background-color: #555;
}

.intro{
    display: flex;
    justify-content: space-around;
    margin-top: 10rem;
}

.intro-titulo{
    color: white;
    font-size: 3rem;
    margin-bottom: 20px;
}

.intro-texto{
    font-weight: 300;
    padding-top: 1.5rem;
    max-width: 36rem;
}

.foto {
    border-radius: 0.5rem;
}

.divisor{
    border-top: 1px solid rgb(23, 23, 23); /* Cria uma linha no topo */
    width: 100%; /* Garante que a linha ocupe toda a largura */
    margin-top: 9rem;
    margin-bottom: 9rem;
}

.sobre-titulo{
    margin-bottom: 5rem;
    text-align: center;
    font-size: 2.25rem;
}

.sobre-conteudo{
    display: flex;
    justify-content: space-around;
}



.sobre_texto{
    font-weight: 700;
    margin-top: 4rem;
    color: #a3a3a3;
    padding-top: 1.5rem;
    max-width: 36rem;
}

.exp{
    margin-bottom: 5rem;
}

.exp-titulo{
    text-align: center;
    font-size: 2.25rem;
}

.exp-conteudo{
    display: flex;
    justify-content: space-around;
    margin-top: 5rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.exp-periodo{
    margin-top: 0.5rem;
    font-size: 0.8rem;
    color: #a3a3a3;
}

.exp-func{
    margin-top: 0.5rem;
    font-weight: 600;
}

.exp-emp{
    font-size: 0.875rem;
    color: #f3e8ff;
}

.exp-descr{
    margin-top: 1rem;
    margin-bottom: 2rem;
    color: #a3a3a3;
}

.exp-tech-list{
    display: flex;
    flex-wrap: wrap;
}

.exp-tech-item{
    margin-right: 0.5rem;
    border-radius: 0.25rem;
    background-color: #171717;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    font-weight: 500;
    color: #6b21a8;
}

.divisor-3{
    border-top: 1px solid rgb(23, 23, 23); /* Cria uma linha no topo */
    width: 100%; /* Garante que a linha ocupe toda a largura */
    margin-top: 9rem;
    margin-bottom: 3rem;
}

.contato{
    text-align: center;
    margin-bottom: 2.5rem;
}

.contato-titulo{
    font-size: 2.25rem;
    margin-bottom: 3rem;
}

.contato-mail{
   color: #6b21a8;
   text-decoration: underline;
}

.contato-tel{
    margin-top: 1rem;
    margin-bottom: 1rem;
}

footer{
    text-align: center;
    margin-top: 5rem;
}


@media (max-width: 768px) {
    .intro, .sobre-conteudo, .exp-conteudo {
        flex-direction: column;
        align-items: center;
    }

    .navbar {
        flex-direction: column;
    }

    .navbar li{
        margin-bottom: 2rem;
    }
}
```