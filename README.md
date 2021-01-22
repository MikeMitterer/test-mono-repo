# Lerna monorepo with TypeScript tutorial
> [Lerna](https://lerna.js.org/)
> [Lerna monorepo with TypeScript incremental builds](https://betterstack.dev/blog/lerna-typescript-monorepo/)
> [Monorepo testing using jest projects](http://orlandobayo.com/blog/monorepo-testing-using-jest/)

## Setup

    # lerna run <script> will run <script> in each package 
    # that has that script defined in itspackage.json
    
    # Die nötigen dependencies werden installiert
    lerna exec yarn
    
    # Fügt die jest-types bei allen Packages hinzug
    yarn lerna add @types/jest
    
    # Nur bei einem package
    lerna add is-plain-obj --scope logger 
    lerna add is-plain-obj --scope logger -D
    
    # Entfernt ein package
    lerna exec yarn remove @types/jest
    
    # Sonst funktioniert "compile" nicht
    lerna add node  -D
    lerna add @types/node  -D

[lerna bootstrap](https://github.com/lerna/lerna/tree/master/commands/bootstrap#usage)
    
    # Räumt auf
    lerna bootstrap
    
## Usage

    # Tests
    lerna run test
        
## Nice

    # Legt ein Dir in allen Packages an
    lerna exec mkdir test    
