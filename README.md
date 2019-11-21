## Configuração desse repositório
##### Criar diretório com o WebStorm usando `creact-react-app <nome-do-app>`;
##### Instalar preprocessador de estilo com `npm install node-sass -S`;
##### Renomear extesões de `.css` para `.scss`;
##### Instalar formatadar de editor com `npm install --save husky lint-staged prettier`;
##### Adicionar em `package.json`:
    "husky": {
      "hooks": {
        "pre-commit": "lint-staged"
      }
    },
    
    E entre dependencies e scripts
    
    "lint-staged": {
      "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
        "prettier --write",
        "git add"
      ]
    },
##### Formatar o código pela primeira vez:
    • ir até a pasta `<nome-do-app>`
    • clicar com o botão direito, segurando shift, e abrir o 
    Git Bash ou CMD e executar
    
    ./node_modules/.bin/prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"
##### Reestruturar diretório da seguinte forma:
    • <nome-do-app>/
        .gitinore
        LICENSE
        package.json
        README.md
        public/
            favicon.icon
            index.html
            logo192.png
            logo512png
            manifest.json
            robots.txt
        src/
            index.js
            index.scss
            asset/
                icon.svg
            component/
                Icon/
                    _index.scss
                    index.js
                App/
                    _index.scss
                    index.js
            library/
                _config.scss
                _dimension.scss
                _mixin.scss
                _theme.scss
            utility/
                serviceWorker.js
                
    PS.: arquivos iniciados com _ são chamados como "partials", sendo não pré-processados.
                    
##### Adicionar as linhas de código em .gitignore:
    .css
    .css.map
    /.idea
##### Criar repositório `<nome-do-app>` no Github;
##### Copiar URL do repositório no `Github`
##### Em `Sublime Merge`
    • File > Open Repository e abrir o diretório
    • após revisar arquivos para stage: Pull
    • colar URL do repositório no `Github`, digitar o `<nome-do-app>` e: Pull
##### Problemas esperados e soluções
    • ! [rejected] master -> master (fetch first)
        Utilizar [command palette] do Sublime Merge e dar
        • Fetch
        • Rebase

## Configuração com esse repositório
##### Clone ou realize o download para arquivos locais;
##### Execute `npm install` para instalação de pacotes usados no projeto;
##### No webstorm ir em `File > Settings > File Watchers` e adicionar para SCSS e Prettier.

## Configuração de ícone
##### Criar ícone no `Adobe Illustrator` em prancheta 24x24 com sangria igual a 3 (área do desenho será igual a 21);
##### Utilizar ferramenta de caneta com espessura de linha igual a 2;
##### Ao final da peça, exportar como SVG e copiar apenas o código das tags `<Path />`;
##### Colar no bloco de código em `src/asset/icon.svg`:
    <svg style="display: none">
        <defs>
            <symbol id="icone_nome" viewBox="0 0 24 24">
                // colar aqui
            </symbol>
            <symbol id="icone_outroNome" viewBox="0 0 24 24">
                // colar aqui
            </symbol>
        </defs>
    </svg>
##### Para usar o ícone, importar `Icon` de `src/component/Icon` e utilizar como `<Icon name="nome" />`;

## Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and to learn React, check out the [React documentation](https://reactjs.org/).
In the project directory, you can run:
##### `npm start` Runs the app in the development mode.
##### `npm test` Interactive watch mode.<br />
##### `npm run build` Builds the app for production to the `build` folder.<br />
External links:

[Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

[Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

[Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

[Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

[Deployment](https://facebook.github.io/create-react-app/docs/deployment)