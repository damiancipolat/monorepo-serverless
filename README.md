<img src="https://github.com/damiancipolat/nodejs_lambda_stack/blob/master/doc/logo.png?raw=true" width="150px" align="right" />

# Monorepo for serverless

This repository was created to be used in nodejs projects using serverless in AWS. 
The idea is to unify in a single repository the entire code of different services.

This work is based on this post: https://seed.run/blog/how-to-structure-a-real-world-monorepo-serverless-app.html

## Why?
With a monorepo, projects can be organized and grouped together in whatever way you find to be most logically consistent, and not just because your version control system forces you to organize things in a particular way. Using a single repo also reduces overhead from managing dependencies.

Some links: 
- https://danluu.com/monorepo/
- https://medium.com/@mattklein123/monorepos-please-dont-e9a279be011b

## Is ok?
Well its depend, I really prefer to  use a repo per service and share the commond code in a private npm/modules.
There may be work scenarios that we have to choose this path, so I set up this repository to analyze this.
