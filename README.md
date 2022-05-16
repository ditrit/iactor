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
