# Git e GitHub Tutorial: Guia Completo

**Publicado em:** Novembro 29, 2023

O Git é um dos sistemas de controle de versão mais populares, enquanto o GitHub é uma plataforma amplamente usada para hospedar repositórios Git e colaborar em projetos. Neste tutorial, vamos explorar os comandos essenciais para configurar, inicializar e trabalhar com o Git, além de aprender como interagir com o GitHub.

---

## 1. Configurando o Git

Antes de começar a usar o Git, é importante configurá-lo com seu nome de usuário e e-mail. Estes serão associados aos seus commits.

```bash
git config --global user.name "seu_nome_de_usuário"
git config --global user.email "seu_email"
```

---

## 2. Inicializando um Repositório Git

Agora que o Git está configurado, podemos inicializar um repositório. Isso permite que o Git comece a rastrear as alterações no seu projeto.

```bash
git init          # Inicializa o repositório Git
git status        # Verifica o status das alterações no repositório
git add .         # Adiciona todos os arquivos para staging
git commit -m "mensagem do commit"   # Faz o commit das alterações com uma mensagem
```

Dica: Para fazer um commit diretamente de arquivos modificados (sem precisar rodar `git add`), você pode usar:

```bash
git commit -am "mensagem do commit"
```

---

## 3. Comandos Básicos do Git

### 3.1. Visualizando Diferenças

O comando `git diff` permite visualizar as diferenças entre o estado atual dos arquivos e a última versão salva no Git:

```bash
git diff
```

### 3.2. Adicionando Arquivos para Rastreamento

O Git só rastreia arquivos que você explicitamente adiciona ao repositório. Para adicionar todos os arquivos não rastreados, use:

```bash
git add -A
```

### 3.3. Salvando Repositórios Vazios

Se você deseja adicionar uma pasta vazia ao seu repositório, use um arquivo `.gitkeep` dentro dela. O Git não adiciona pastas vazias por padrão:

```bash
touch pasta_vazia/.gitkeep
```

### 3.4. Visualizando o Histórico de Commits

Para visualizar o histórico de commits, use:

```bash
git log
```

### 3.5. Modificando o Último Commit

Você pode adicionar mudanças ao último commit sem criar um novo, com o comando `git commit --amend --no-edit`:

```bash
git commit --amend --no-edit
```

---

## 4. Recuperando Arquivos

### 4.1. Recuperando um Arquivo Apagado

#### Arquivo apagado localmente

Se você apagou um arquivo acidentalmente da sua máquina, o Git pode restaurá-lo com:

```bash
git checkout -- nomeDoArquivo
```

#### Arquivo removido do Git

Se você apagou um arquivo do Git (mas não localmente) e deseja desfazer a remoção:

```bash
git rm nomeDoArquivo
git reset HEAD nomeDoArquivo
```

Depois, você pode recuperá-lo com `git checkout`.

---

## 5. Revertendo Commits

### 5.1. Voltando para um Commit Anterior

Para desfazer um commit e voltar ao estado anterior, use o comando `git reset`:

```bash
git reset --hard HEAD^
```

### 5.2. Revertendo o Último Commit

Se você quer desfazer as mudanças do último commit sem perder o histórico, use:

```bash
git revert --no-edit HEAD
```

---

## 6. Trabalhando com Repositórios Remotos no GitHub

### 6.1. Criando um Repositório e Fazendo o Push

Depois de configurar e comitar suas alterações, você pode criar um repositório no GitHub e fazer o push:

```bash
git remote add origin "url_do_repositorio"
git branch -M main   # Renomeia a branch principal para 'main'
git push origin main # Envia o commit para o GitHub
```

### 6.2. Clonando um Repositório do GitHub

Para clonar um repositório já existente do GitHub para sua máquina:

```bash
git clone "url_do_repositorio"
git pull origin nomeDaBranch
```

### 6.3. Criando e Clonando Branches

Para criar e alternar para uma nova branch:

```bash
git checkout -b nomeDaNovaBranch
```

Para clonar uma branch específica de um repositório:

```bash
git clone "url_do_repositorio" --branch nomeDaBranch --single-branch
```

---

## 7. Gerando uma Chave SSH para GitHub

Usar SSH é uma maneira segura de se conectar ao GitHub. Para gerar uma chave SSH, execute:

```bash
ssh-keygen -t rsa -b 4096 -C "seu_email_do_github"
```

Após gerar a chave, siga estas etapas:

1. Salve a chave no caminho padrão (`~/.ssh/id_rsa`).
2. Se não quiser adicionar uma senha, apenas pressione **Enter**.

Para acessar a chave pública e copiá-la para o GitHub:

```bash
# Linux ou macOS:
cat ~/.ssh/id_rsa.pub

# Windows:
type C:\Users\SeuNomeDeUsuario\.ssh\id_rsa.pub
```

Copie a chave pública e adicione-a nas configurações de SSH no GitHub.

---