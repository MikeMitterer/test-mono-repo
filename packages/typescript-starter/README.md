# TypeScript - Starter
> [Live-Example](http://tsstarter.example.mikemitterer.at/) | [GitHub-Home](https://github.com/MikeMitterer/typescript-starter)

## Puppeteer
> [12 examples to play with](https://www.aymen-loukil.com/en/blog-en/google-puppeteer-tutorial-with-examples/)

Read HTML: https://github.com/GoogleChrome/puppeteer/issues/2913

### Install

    yarn add @types/expect-puppeteer @types/puppeteer jest-puppeteer puppeteer -D

## QUnit
> [QUnit](http://qunitjs.com/)

Install:
    yarn add qunit @types/qunit -D
    
`tsconfig.json`:

    {
        include: [
        
            // QUnit scheint sonst nicht zu funktionieren
            "node_modules/@types/qunit/index.d.ts"
        ]
    }

`src/types/global.d.ts`:

    import 'qunit';    

## Klonen in neues Dir

    git clone git@github.com:MikeMitterer/typescript-starter.git <new project> 
    cd <new project>
    rm -rf .git
    git init

    # GH Repo anlegen e.g. ts-signer
    git remote add origin git@github.com:MikeMitterer/ts-signer.git
    
    # Repo in package.json anpassen
    "repository": {
        "type": "git",
        "url": "https://github.com/MikeMitterer/typescript-training"
    },    
    
In README.md und package.json die GH-Url anpassen
    
    # Version auf 0.1.0 ziehen
    sed -i '' -e "s/\"version\": \".*\"/\"version\": \"0.1.0\"/" package.json | cat package.json | grep '"version'
    
    # Package-Name, Description und REPO-Url anpassen
    ws package.json
    
    # Deploy evtl. auf restricted umstellen
    "deploy": "yarn version --new-version patch && yarn publish --access restricted --non-interactive",
    "deploy": "yarn version --new-version patch && yarn publish --access public --non-interactive",
    
    # README rudimentär anpassen (Title + Home) 
    Repo bei README einfügen
    
    # .rsync, .deployWebApp.conf, tools, TODO löschen
    rm -rf .rsync tools TODO     

    LICENCE anpassen
    > https://docs.npmjs.com/files/package.json#license
    
        # Evtl. (verhindert das publishen)    
        "private": true,
        
        # Wenn die Licence private ist
        "license": "UNLICENSED",
               
    build.jenkins anpassen (Builds in 'Test' können alle entfernt werden)
    
    Check ob die default-Dependencies benötigt werden
        
    # Auf GIT pushen
    git add . && git commit -am "Initial release" && git push -u origin master       
     
## Deploy-Varianten aus packages.json

   - yarn clean
   
   - yarn deploy 
   Erstellt die nötigen Files in `lib`
   
   - yarn deploy:node
   Erstellt im `bin`-Folder das File app.js dass mit `node bin app.js` aufgerufen werden kann
   
   - yarn deploy:web
   Browser-Part wird in `dist` veröffentlicht. Kann mit `simplehttpserver dist/` getestet werden
   
   - yarn test | jest
   Führt die Unit-Tests aus
   
   
## Upgrade aller packages

    yarn-upgrade-latest
    
## CI

    # Kill Browser
    ps | grep -i -C 0 "[/]webpack-dev-server" | awk '{print $1}' | while read psid; do echo "kill -HUP ${psid}"; done    






