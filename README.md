# **React Desafios** 🖥️

Bem-vindo ao repositório **React Desafios**! 🚀 Este projeto reúne desafios práticos desenvolvidos em **React.js** para reforçar conceitos como componentes, hooks, estado, e estilos modernos de interface.

## **Menu**
- [Sobre o Projeto](#sobre-o-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Desafios](#desafios)
  - [1. Menu Principal](#1-menu-principal)
  - [2. Contador Simples](#2-contador-simples)
  - [3. Alteração de Cor de Fundo](#3-alteração-de-cor-de-fundo)
  - [4. Lista de Tarefas](#4-lista-de-tarefas)
  - [5. Temporizador com useEffect](#5-temporizador-com-useeffect)
  - [6. Filtro de Lista](#6-filtro-de-lista)
  - [7. Formulário de Registro Simples](#7-formulário-de-registro-simples)
  - [8. Aplicação de Requisição de Dados](#8-aplicação-de-requisição-de-dados)
  - [9. Galeria de Imagens com Modal](#9-galeria-de-imagens-com-modal)
  - [10. Timer com Intervalo e Alerta](#10-timer-com-intervalo-e-alerta)
  - [11. Tabs Navegáveis](#11-tabs-navegáveis)
---

## **Sobre o Projeto**

Este repositório contém uma coleção de **10 desafios React.js** que abordam conceitos como:
- **useState** e **useEffect**
- Manipulação de eventos
- Requisições API (usando **Axios**)
- Modais e navegação
- Layouts responsivos e estilização com **CSS** modular

O objetivo é melhorar a compreensão de React e criar componentes reutilizáveis e dinâmicos.

---

## **Pré-requisitos**

Certifique-se de ter as seguintes ferramentas instaladas:
- **Node.js** >= 16
- **npm** ou **yarn**
- Editor de texto (como **VS Code**)

---

## **Instalação**

Siga os passos abaixo para configurar o projeto localmente:

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/react-desafios.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd react-desafios
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
   ou
   ```bash
   yarn start
   ```

5. Acesse no navegador:
   ```
   http://localhost:3000
   ```

---

## **Estrutura do Projeto**

```plaintext
react-desafios/
├── public/                # Arquivos estáticos
├── src/                   # Código-fonte
│   ├── components/        # Componentes React (um para cada desafio)
│   │   ├── ContadorSimples/
│   │   ├── AlteracaoCorDeFundo/
│   │   ├── ListaDeTarefas/
│   │   ├── TemporizadorComUseEffect/
│   │   ├── FiltroDeLista/
│   │   ├── FormularioDeRegistroSimples/
│   │   ├── RequisicaoDeDados/
│   │   ├── GaleriaDeImagens/
│   │   ├── TimerComIntervalo/
│   │   ├── TabsNavegaveis/
│   ├── App.jsx            # Menu principal
│   ├── index.js           # Ponto de entrada
├── .gitignore             # Arquivos ignorados pelo Git
├── README.md              # Documentação do projeto
└── package.json           # Dependências e scripts do projeto
```

---

## **Desafios**

### **1. Menu Principal**

O Menu Principal serve como ponto de entrada para acessar cada um dos desafios. Ele foi projetado com foco em uma experiência amigável e interativa, permitindo que os usuários escolham o desafio desejado de forma intuitiva. 

#### **Características do Menu:**
- **Popup Interativo**: O menu é exibido em um modal estilizado, que aparece ao clicar no botão "Abrir Menu".
- **Design Responsivo**: O menu se adapta a diferentes tamanhos de tela, mantendo uma interface limpa e organizada.
- **Lista de Desafios**: Cada desafio está listado com seu nome e pode ser acessado com um clique.
- **Botão de Fechar**: Um botão claro e acessível para fechar o modal do menu.

![Menu Principal](https://github.com/ijbs-dev/React_Challenges-App/blob/main/src/img/menu.png)

### **1. Contador Simples**
Um componente que exibe um número na tela e permite incrementá-lo ou decrementá-lo. O valor não pode ser menor que 0. [Saiba mais](./src/components/ContadorSimples)

![Contador](https://github.com/ijbs-dev/React_Challenges-App/blob/main/src/img/contador.png)

### **2. Alteração de Cor de Fundo**
Altere a cor de fundo da página ao clicar em um botão, gerando cores aleatórias. [Saiba mais](./src/components/AlteracaoCorDeFundo)

![Cor de Fundo](https://github.com/ijbs-dev/React_Challenges-App/blob/main/src/img/corFundo.png)

### **3. Lista de Tarefas**
Uma lista de tarefas onde o usuário pode adicionar, remover, concluir e filtrar tarefas pendentes. [Saiba mais](./src/components/ListaDeTarefas)

![Lista de Tarefas](https://github.com/ijbs-dev/React_Challenges-App/blob/main/src/img/Tarefas.png)

### **4. Temporizador com useEffect**
Um temporizador que conta o tempo em segundos, com botões para pausar e reiniciar. [Saiba mais](./src/components/TemporizadorComUseEffect)

![Temporizador](https://github.com/ijbs-dev/React_Challenges-App/blob/main/src/img/Temporiz.png)

### **5. Filtro de Lista**
Filtre uma lista de nomes digitando no campo de busca. [Saiba mais](./src/components/FiltroDeLista)

![Filtro De Lista](https://github.com/ijbs-dev/React_Challenges-App/blob/main/src/img/Filtro.png)

### **6. Formulário de Registro Simples**
Um formulário que captura nome, e-mail e senha, exibindo uma mensagem de boas-vindas após o envio. [Saiba mais](./src/components/FormularioDeRegistroSimples)

![Formulario De Registro Simples](https://github.com/ijbs-dev/React_Challenges-App/blob/main/src/img/formulario.png)

### **7. Aplicação de Requisição de Dados**
Consuma uma API pública (JSONPlaceholder) para exibir uma lista de posts com recarregamento dinâmico. [Saiba mais](./src/components/RequisicaoDeDados)

![Requisicao De Dados](https://github.com/ijbs-dev/React_Challenges-App/blob/main/src/img/ListaPosts.png)

### **8. Galeria de Imagens com Modal**
Exiba uma galeria de imagens clicáveis que abrem em um modal com navegação. [Saiba mais](./src/components/GaleriaDeImagens)

![Galeria De Imagens](https://github.com/ijbs-dev/React_Challenges-App/blob/main/src/img/galeriaImg.png)

### **9. Timer com Intervalo e Alerta**
Defina um tempo de contagem regressiva e receba um alerta ao término. [Saiba mais](./src/components/TimerComIntervalo)

![Timer Com Intervalo](https://github.com/ijbs-dev/React_Challenges-App/blob/main/src/img/Timer.png)

### **10. Tabs Navegáveis**
Uma interface de abas para exibir diferentes conteúdos ao clicar. [Saiba mais](./src/components/TabsNavegaveis)

![Tabs Navegaveis](https://github.com/ijbs-dev/React_Challenges-App/blob/main/src/img/tabs.png)

---

