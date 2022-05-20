# iactor

Iactor provide a low-environment for infrastructure languages and specifically for Terraform.
At this time, you could add your terraform's files and get a svg representation to the output.
In futur, iactor will become a leto's module. Leto will provide all the development environment.
When iactor will be integrated into leto, you will be able to modified the graphic.

## Get started 

### Install the dependencies

```
npm install
```

### Launch Iactor

```
npm run iactor <FilesPath> <-- This is required
```

### Example with AWS provider

<div align="center">
    <img src="/src/assets/awsExampleReadme.PNG" width="800px" height="400px"</img> 
</div>

### To use a specifique provider

 * Add a folder into `src/plugins/terraform/external`. If the folder `external` do not exist, create it.
 * In this folder, you should made a git clone of your repository git.
 * To define your provider, you just have to add a line in the file `src/plugins/terraform/plugins.json` : `provider metadatas' name : repository git path`
 * Finally, you could add the files you want to compile in a folder and throw the application with the path of the folder you just create.
 * You could find your generate svg in the file `out.svg`.

## Default commands

Explanation of usage of scripts in `package.json`.

### lint:fix

Apply default fix for eslint in project.

### lint:report

Generate report of lint issues for sonar.

### lint:watch

To use in development, to see current lint errors with auto-refresh.

## Development

### Directory structure

This is the default directory structure we use for this project:

```
iactor
├ .github              ⇨ Contains all files for github management
│ ├ ISSUE_TEMPLATE     ⇨ Contains all templates used in github
│ └ workflows          ⇨ Contains all workflows used in github actions
├ src                  ⇨ Contains all files to make the Iactor compilator
│ ├ assets             ⇨ Contains all the default assets
│ ├ listener           ⇨ Contains all listeners used by the compilator
│ ├ metadatas          ⇨ Contains all the files that used for validate provider schema
│ ├ model              ⇨ Contains all the models that describe the modelized object 
│ ├ parser             ⇨ Contains all the files that used for parsing
│   ├ grammar_parsing  ⇨ Contains all the files generated by antlr and used for parse files
│   └ compiler         ⇨ Contains all the files that used for parse terraform files
│ ├ plugins            ⇨ Contains all providers specificities for each languages
│   └ terraform        ⇨ Contains all the terraform providers defined in the project
│     ├ external       ⇨ Initially empty, put your externals providers in it
│     └ internal       ⇨ Contains all the internals providers
│       └ aws          ⇨ Contains all aws specifications
│         └ assets     ⇨ Contains all the assets used to represent aws resources
│ └ utils              ⇨ Contains all utils files of the project
└ tests                ⇨ Contains all files related to the tests

### How to release

We use [Semantic Versioning](https://semver.org/spec/v2.0.0.html) as guideline for the version management.

Steps to release:
- Checkout a branch `release/vX.Y.Z` from the latest `dev`.
- Improve your version number in `package.json`, `package-lock.json` and `changelog.md`.
- Verify the content of the `changelog.md`.
- Commit your modification with this commit's name `Release version X.Y.Z`.
- Create a pull request on github to this branch in `dev`.
- After the previous PR is merged, create a pull request on github to `dev` in `main`.
- After the previous PR is merged, tag the `main` branch with `vX.Y.Z`
- After the tag is push, make the release on the tag in GitHub

### Git: Default branches

There is two default branches on this projecs: `main` and `dev`.

On this two branches, we can't commit on it. We can only make a pull request to add some code.

The branche `main` accept merge from the `dev` branche(except for a `hotfix` branch). Release tag are only on the `main` branch.

### Git: Branch naming policy

There is the branch naming policy: `[BRANCH_TYPE]/[BRANCH_NAME]`

* `BRANCH_TYPE` is a prefix to describe the purpose of the branch, accepted prefix are:
  * `feature`, used for feature development
  * `bugfix`, used for bug fix
  * `improvement`, used for refacto
  * `library`, used for updating library
  * `prerelease`, used for preparing the branch for the release
  * `release`, used for releasing project
  * `hotfix`, used for applying a hotfix on main
* `BRANCH_NAME` is managed by this regex: `[a-z0-9_-]` (`_` is used as space character).

Examples:

```
# BAD
add_some_test
# GOOD
improvement/unit_test

# BAD
feature/adding-some-feature
# GOOD
feature/adding_some_feature
```
