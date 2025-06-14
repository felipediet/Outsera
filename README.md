# Introdução
Esse é o projeto E2E de testes da UPBET usando Playwright


# Documentação do framework
https://playwright.dev/docs/intro


# Utilizando o Dockerfile da branch

> Instalar o Docker Desktop

> Esse comando cria a imagem do Docker

docker build -t upbet2test .

> Esse comando roda o teste usando a imagem gerada acima

docker run -it --name UPBET_E2E upbet2test npx playwright test -g "@regressao"

docker run -it --name UPBET_E2E -v .\test-results:/app/test-results devupbet/upbet2test npx playwright test -g "@regressao"

docker compose up -d

	apaga os volumes

docker compose down -v



* Instalar o Docker Desktop para rodar o comando acima localmente


# Publicar imagem no Docker da UPBET

> Passo 1: Verificar a imagem
docker images

> Passo 2: Fazer login no Docker com as credenciais dev@upbet.com
docker login

> Passo 3: Reconstruir a imagem
docker build -t upbet2test .
ou
docker build -t devupbet/upbet2test:latest .

> Passo 4: Fazer o push da imagems
docker push devupbet/upbet2test:latest


# Publicar imagem no Docker utilizando Azure

> Passo 1: Verificar a imagem
docker images

> Passo 2: Fazer login no Azure
az login

> Passo 3: Fazer no ambiente de DEV do Azure (Precisa estar com o PIM ativo)
az acr login --name acrdevupbet

> Passo 4: Reconstruir a imagem
docker build -t upbet2test .

> Passo 5: Tag a imagem
docker tag upbet2test:latest acrdevupbet.azurecr.io/upbet2test:latest

> Passo 6: Fazer o push da imagem
docker push acrdevupbet.azurecr.io/upbet2test:latest



# Como instalar o projeto no Windows

0. Instalar as aplicações abaixo

> VSCODE -> https://code.visualstudio.com/download

> GIT -> https://git-scm.com/downloads

* Clonar o projeto/branch

Abrir o POWER SHELL como ADMIN

Executar o comando abaixo

1. > Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

2. > Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows'))

3. > Set-ExecutionPolicy RemoteSigned -Scope CurrentUser


##### Abra o VSCODE como ADMIN e no terminal rode os comandos a seguir

1. Instalar o Chocolatery

> choco install nodejs-lts

2. Reinicia o VSCODE

##### Rodar os comandos abaixo no termninal

3. npm install 

4. npm install --save playwright

5. npm install --save @playwright/test

6. npm install --save @types/node

7. npx playwright install --with-deps

8. No Terminal do VSCODE rodar a linha para testar se tudo deu certo

	npx playwright test -g "Acessar Betuxo"


### Abaixo alguns comandos interessantes

> **Roda todos os testes**

npx playwright test


> **Abre a janela de teste em modo UI**

npx playwright test --ui


> **Roda os testes apenas no Chrome**

npx playwright test --project=chromium


> **Roda os testes de um arquivo especifico**

npx playwright test login.spec.ts


> **Roda os testes em modo debug**

npx playwright test --debug


> **Roda um cenãrio de teste em modo debug**

npx playwright test --debug -g "Acessar Betuxo"


> **Roda testes usando TAG informada nos cenários de teste**

npx playwright test -g "@regressao"


> **Gerador de teste - Isso é SENSACIONAL**

npx playwright codegen https://development.up.bet.br/

npx playwright codegen https://up.bet.br/


> **Comandos rápidos utilizando Scripts do package.json**

##### Roda os testes em modo UI
npm run e2e-ui

##### Abre o relatório Allure
npm run report

##### Abre o relatório do Playwright
npx playwright show-report


> **Relatórios de teste**

##### Utiliza o relatório padrão do Playwright
npx playwright show-report

##### Utiliza o relatório do allure, ele precisa ter o JAVA JDK instalado
npx allure serve
	
	> Após instalar rode o comando abaixo no powershell da sua maquina

		
		# Defina o caminho para o JDK
		$javaHome = "C:\Program Files\Java\jdk-21"

		# Configure a variável de ambiente JAVA_HOME
		[System.Environment]::SetEnvironmentVariable("JAVA_HOME", $javaHome, [System.EnvironmentVariableTarget]::Machine)

		# Adicione JAVA_HOME\bin ao PATH
		$path = [System.Environment]::GetEnvironmentVariable("Path", [System.EnvironmentVariableTarget]::Machine)
		$newPath = "$path;$javaHome\bin"
		[System.Environment]::SetEnvironmentVariable("Path", $newPath, [System.EnvironmentVariableTarget]::Machine)
		

--Para CI
https://playwright.dev/docs/running-tests
https://playwright.dev/docs/test-cli


# Rodar testes definindo o ambiente

$env:ENVIRONMENT="DEV"

npx playwright test -g "Login"

ou

$env:ENVIRONMENT="PRD" 
npx playwright test -g "Login"

$env:ENVIRONMENT="PRD"
npx playwright test --debug -g "Login"

Isso vai fazer com que rode no ambiente de PRD, o padrão é o ambiente de DEV

Caso queira rodar em prod informe:

$env:ENVIRONMENT="PRD"


# Rodar testes pela tag Regressao

npx playwright test -g "@regressao"