# **React Desafios** 🖥️

Bem-vindo ao repositório **React Desafios**! 🚀 Este projeto reúne desafios práticos desenvolvidos em **React.js** para reforçar conceitos como componentes, hooks, estado, e estilos modernos de interface.

## **Menu**
- [Sobre o Projeto](#sobre-o-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Desafios](#desafios)
  - [1. Contador Simples](#1-contador-simples)
  - [2. Alteração de Cor de Fundo](#2-alteração-de-cor-de-fundo)
  - [3. Lista de Tarefas](#3-lista-de-tarefas)
  - [4. Temporizador com useEffect](#4-temporizador-com-useeffect)
  - [5. Filtro de Lista](#5-filtro-de-lista)
  - [6. Formulário de Registro Simples](#6-formulário-de-registro-simples)
  - [7. Aplicação de Requisição de Dados](#7-aplicação-de-requisição-de-dados)
  - [8. Galeria de Imagens com Modal](#8-galeria-de-imagens-com-modal)
  - [9. Timer com Intervalo e Alerta](#9-timer-com-intervalo-e-alerta)
  - [10. Tabs Navegáveis](#10-tabs-navegáveis)
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

### **1. Contador Simples**
Um componente que exibe um número na tela e permite incrementá-lo ou decrementá-lo. O valor não pode ser menor que 0. [Saiba mais](./src/components/ContadorSimples)

### **2. Alteração de Cor de Fundo**
Altere a cor de fundo da página ao clicar em um botão, gerando cores aleatórias. [Saiba mais](./src/components/AlteracaoCorDeFundo)

### **3. Lista de Tarefas**
Uma lista de tarefas onde o usuário pode adicionar, remover, concluir e filtrar tarefas pendentes. [Saiba mais](./src/components/ListaDeTarefas)

### **4. Temporizador com useEffect**
Um temporizador que conta o tempo em segundos, com botões para pausar e reiniciar. [Saiba mais](./src/components/TemporizadorComUseEffect)

### **5. Filtro de Lista**
Filtre uma lista de nomes digitando no campo de busca. [Saiba mais](./src/components/FiltroDeLista)

### **6. Formulário de Registro Simples**
Um formulário que captura nome, e-mail e senha, exibindo uma mensagem de boas-vindas após o envio. [Saiba mais](./src/components/FormularioDeRegistroSimples)

### **7. Aplicação de Requisição de Dados**
Consuma uma API pública (JSONPlaceholder) para exibir uma lista de posts com recarregamento dinâmico. [Saiba mais](./src/components/RequisicaoDeDados)

### **8. Galeria de Imagens com Modal**
Exiba uma galeria de imagens clicáveis que abrem em um modal com navegação. [Saiba mais](./src/components/GaleriaDeImagens)

### **9. Timer com Intervalo e Alerta**
Defina um tempo de contagem regressiva e receba um alerta ao término. [Saiba mais](./src/components/TimerComIntervalo)

### **10. Tabs Navegáveis**
Uma interface de abas para exibir diferentes conteúdos ao clicar. [Saiba mais](./src/components/TabsNavegaveis)

---

