# Outsera E2E - Teste Técnico com Playwright

Projeto de testes end-to-end (E2E) para a Outsera utilizando o framework [Playwright](https://playwright.dev/docs/intro).

---

## 🖥️ Pré-requisitos

- [VSCode](https://code.visualstudio.com/download)
- [Git](https://git-scm.com/downloads)
- [Node.js LTS](https://nodejs.org/)
- Chocolatey (para facilitar instalações no Windows)

---

## 🚀 Instalação no Windows

1. **Clone o repositório**
   ```sh
   git clone <url-do-repositorio>
   cd <pasta-do-projeto>
   ```

2. **Instale o Chocolatey (caso ainda não tenha)**
   -  Execute no PowerShell como Administrador:
   ```sh
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
   ```

3. **Instale o Node.js LTS**
   ```sh
   choco install nodejs-lts
   ```

4. **Reinicie o VSCode**
>

5. **Instale as dependências do projeto**
   ```sh
   npm install
   ```

6. **Teste a instalação rodando**
   ```sh
   npx playwright test
   ```

---

## 🧪 Comandos Úteis

- **Rodar todos os testes**
  ```sh
  npx playwright test
  ```

- **Abrir o modo UI dos testes**
  ```sh
  npx playwright test --ui
  ```

- **Rodar testes apenas no Chrome**
  ```sh
  npx playwright test --project=chromium
  ```

- **Rodar testes de um arquivo específico**
  ```sh
  npx playwright test login.spec.ts
  ```

- **Rodar testes em modo debug**
  ```sh
  npx playwright test --debug
  ```

- **Rodar um cenário específico em modo debug**
  ```sh
  npx playwright test --debug -g "Login with invalid credentials"
  ```

- **Rodar testes por TAG**
  ```sh
  npx playwright test -g "@regressao"
  ```

- **Gerador de teste (Playwright Codegen)**
  ```sh
  npx playwright codegen https://practicesoftwaretesting.com/
  ```

---

## 📊 Relatórios

- **Abrir relatório do Playwright**
  ```sh
  npx playwright show-report
  ```


- ##### Para utilizar o relatório do Allure, ele precisa ter o JAVA JDK instalado
  ```sh
  npx allure serve
  ```

- Após instalar rode o comando abaixo no powershell da sua maquina

  ```sh
  # Defina o caminho para o JDK
  $javaHome = "C:\Program Files\Java\jdk-21"

  # Configure a variável de ambiente JAVA_HOME
  [System.Environment]::SetEnvironmentVariable("JAVA_HOME", $javaHome, [SystemEnvironmentVariableTarget]::Machine)

  # Adicione JAVA_HOME\bin ao PATH
  $path = [System.Environment]::GetEnvironmentVariable("Path", [SystemEnvironmentVariableTarget]::Machine)
  $newPath = "$path;$javaHome\bin"
  [System.Environment]::SetEnvironmentVariable("Path", $newPath, [SystemEnvironmentVariableTarget]::Machine)
  ```

- **Abrir relatório Allure**
  ```sh
  npm run report
  ```

---

## ℹ️ Observações

- Para rodar em ambiente de DEV, utilize as variáveis de ambiente conforme necessário.
- Consulte a [documentação oficial do Playwright](https://playwright.dev/docs/intro) para mais detalhes e customizações.

---