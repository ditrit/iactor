# iactor

## Default commands

Explanation of usage of scripts in `package.json`.

### lint:fix

Apply default fix for eslint in project.

### lint:report

Generate report of lint issues for sonar.

### lint:watch

To use in development, to see current lint errors with auto-refresh.

## Development

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
