# Frontend Artisan / React #

Frontend Artisan is a react typescript generator to assist in various projects.

### What is this repository for? ###

* Quick summary

It is available to support your development by making commands to auto generate api | components | types | interfaces | hooks | context | hoc.
Initially the idea was to help new and even more experienced developers to speed up daily development. Removing the need to manually create files that will often have standard structures.

* Version [0.0.1](https://github.com/BrunoGaignoux/artisan-frontend/tags#0.0.1)

### How do I get set up? ###

* Summary of set up

First you will need to install the tool in your project of choice, like this:

```shell
$    npm i @frontend-artisan/react
```

* Configuration

Now you will need to put into your `package.json` file, a script to run every time you need. Like this: 

```json
{
  "scripts": {
    "artisan": ""
  }
} 
```

* Dependencies
  * [inquirer](https://github.com/SBoudrias/Inquirer.js#readme)
  * [plop](https://plopjs.com/)
  * [ts-node](https://typestrong.org/ts-node)
  * [typescript](https://www.typescriptlang.org/)

* How to run tests

Test is based on jest, so you just need to contribute and run `npm run test`;

* Deployment instructions

No need to implement none of scripts. If you contribute to the project, 
you only need to run `npm run publish:patch` to publish a tag like `0.0.1`. But if you need to publish a minor or mayor, you just need to
run `npm run publish:minor` or `npm run publish:major`.

### Contribution guidelines ###

* Writing tests

Please follow jest test struct. That's the only requirement.

* Code review

If you found something wrong or witch could be better, fell free to send your pull request for master branch.
The package is public but please keep the order.

* Other guidelines

### Who do I talk to? ###

* Repo owner or admin

[Bruno Gaignoux](mailto:gaignoux@gmail.com)

* Other community or team contact

Discord: [Bruno Gaignoux#3331](mailto:gaignoux@gmail.com)
