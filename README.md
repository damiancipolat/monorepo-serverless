<img src="https://github.com/damiancipolat/nodejs_lambda_stack/blob/master/doc/logo.png?raw=true" width="150px" align="right" />

# Monorepo for serverless

This repository was created to be used in nodejs projects using serverless in AWS. 
The idea is to unify in a single repository the entire code of different services.

#### This work is based on this post:
https://seed.run/blog/how-to-structure-a-real-world-monorepo-serverless-app.html

**Scaffolding**:
```sh
/
  package.json
  config.yml
  libs/
  services/
    purchase-api/
      package.json
      serverless.yml
      handler.js
    confirmation-job/
      serverless.yml
      handler.js
    shipping-job/
      serverless.yml
      handler.js
```

## Why?:

With a monorepo, projects can be organized and grouped together in whatever way you find to be most logically consistent, and not just because your version control system forces you to organize things in a particular way. Using a single repo also reduces overhead from managing dependencies.

**Some readings**: 
- https://danluu.com/monorepo/
- https://medium.com/@mattklein123/monorepos-please-dont-e9a279be011b

## Benefits:
These are some benefits that I found to build this project.

- Share code.
- Separate dependencies.
- Multiple package.json.
- Configuration separated by namespace.
- Simple to use.
- Best serverless files order.

## Decisions to be made:

#### **Do I use one or multiple package.json files?** 
`Multiple` files, one root file and others files per service.

#### **How do I share common code and config between services?** 
You share the common code, creating a lib for reutilizable code, that isused in the differents projects.
The configuraton is splitted in namespace, the /config folder is located in the root path.

#### **How do I share common config between the various serverless.yml?**
We have separate serverless.yml configs for our services. However, we end up needing to share some config across all of our serverless.yml files. To do that:

- Place the shared config values in a common yaml file at the root level.
- And reference them in your individual serverless.yml files.

#### **How do I reference resources across services?**
Create a resource in each service or in the root serverless or you can create a resource for one service and use the outputs in the file. Use the clausule Fn::ImportValue... to import **outputs** from other sls files. Is important to respect the order.
