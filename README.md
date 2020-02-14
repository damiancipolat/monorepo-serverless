<img src="https://github.com/damiancipolat/nodejs_lambda_stack/blob/master/doc/logo.png?raw=true" width="150px" align="right" />

# Monorepo for serverless

This repository was created to be used in nodejs projects using serverless in AWS. 
The idea is to unify in a single repository the entire code of different services.

This work is based on this post:

https://seed.run/blog/how-to-structure-a-real-world-monorepo-serverless-app.html


### Why?:

With a monorepo, projects can be organized and grouped together in whatever way you find to be most logically consistent, and not just because your version control system forces you to organize things in a particular way. Using a single repo also reduces overhead from managing dependencies.

Some readings: 
- https://danluu.com/monorepo/
- https://medium.com/@mattklein123/monorepos-please-dont-e9a279be011b

### Benefits:
These are some benefits that I found to build this project.

- Share code.
- Separate dependencies.
- Multiple package.json.
- Configuration separated by namespace.
- Simple to use.
- Best serverless files order.

### Decisions to be made:

- **Do I use one or multiple package.json files?**

sdfdsfds dgdf g

- **How do I share common code and config between services?**

sdfsdfdsfdsfdsfdsf

- **How do I share common config between the various serverless.yml?**

sdfdsfdsfdsfdsfdgdfgdfg

- **How do I reference resources across services?**

fsadfadsfadsfadsfdsfadsfasdfdsafads

- **How do I automate deployments for services that depend on other services?**

dfadsdsfds
