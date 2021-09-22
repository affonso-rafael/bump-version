# Bump version action

This action bumps version tags.

## Inputs

## `environment`

**Required** The envronment to run (`dev`, `qa`, `sandbox` or `prod`.

## `type`

**Required** The type of bump to run (`major`, `minor` or `patch`.

## Outputs

## `previous-version`

The version before the bump.

## `new-version`

The new version after the bump.

## Example usage

uses: actions/hello-world-javascript-action@v1.1
with:
  environment: 'prod'
  type: 'patch'