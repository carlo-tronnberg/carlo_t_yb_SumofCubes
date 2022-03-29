[![Run Tests](https://github.com/carlo-tronnberg/carlo_t_yb_SumofCubes/actions/workflows/main.yml/badge.svg)](https://github.com/carlo-tronnberg/carlo_t_yb_SumofCubes/actions/workflows/main.yml/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_carlo_t_yb_SumofCubes&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_carlo_t_yb_SumofCubes)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_carlo_t_yb_SumofCubes&metric=bugs)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_carlo_t_yb_SumofCubes)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_carlo_t_yb_SumofCubes&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_carlo_t_yb_SumofCubes)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_carlo_t_yb_SumofCubes&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_carlo_t_yb_SumofCubes)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_carlo_t_yb_SumofCubes&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_carlo_t_yb_SumofCubes)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_carlo_t_yb_SumofCubes&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_carlo_t_yb_SumofCubes)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_carlo_t_yb_SumofCubes&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_carlo_t_yb_SumofCubes)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_carlo_t_yb_SumofCubes&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_carlo_t_yb_SumofCubes)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_carlo_t_yb_SumofCubes&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_carlo_t_yb_SumofCubes)
[![Open Issues](https://img.shields.io/github/issues/carlo-tronnberg/badge.svg)](https://github.com/carlo-tronnberg/carlo_t_yb_SumofCubes/issues)

[![Build Status](coverage/badge-branches.svg)](coverage/badge-branches.svg)
[![Build Status](coverage/badge-functions.svg)](coverage/badge-functions.svg)
[![Build Status](coverage/badge-lines.svg)](coverage/badge-lines.svg)
[![Build Status](coverage/badge-statements.svg)](coverage/badge-statements.svg)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[Metrics report](metrics.md) -
[Complexity report](complexity-report.md)

# Sum of Cubes 
[Link to Kata in Code Wars](https://www.codewars.com/kata/59a8570b570190d313000037) 
 
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples: **(Input --> output)**

    2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
    3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
 


---

## Installation

To set up the project, you need node installed.

To install dependencies, run the following:

```sh
npm install
```

## Run the tests

To run the tests, there is a script in the project root called `test`. It calculates code coverage, incorporates
watch mode, and prints in verbose mode, so all test file's test report will be visible. Alternatively, you
can achieve the same with the command the script contains:

```sh
npm test -- --watchAll --collect-coverage --verbose
```

## Stories with few scenarios

## UAT Scenario

UAT description (what the user would accept)
The given name will be converted to a greeting format

### User story #1 - <Short description>
```
As a ... [context, who is the user, whom this story provides value for ]
I want to ... [steps]
So that ... [motivation, value]
```

#### Scenario #1
```
  Given ...
  When ... (action you want to do)
  Then ...
```

#### Scenario #2
```
  Given ...
  When ... (action you want to do)
  Then ...
```

