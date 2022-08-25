# Car Management

### Setting Up a Project

#### Install the Angular CLI & HTTP Server globally:

```

npm install -g @angular/cli

npm i -g http-server

Run `cd <project name>`

Run `npm install`

```

#### Run the json server:

```

Run `cd server`

Run `node index.js` # runs in 3000 server

```


#### Development server

```

Run `ng serve` for a dev server. 

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

```

#### Development Build

```

Run `cd carcharter`

Run `npm run dev-build` 

Navigate to `http://127.0.0.1:8000`.

```

#### Production Build

```

Run `npm run prod-build` 

Navigate to `http://127.0.0.1:9000`.

```

--skip-tests



ng generate store State --root --state-path store --module app.module.ts
                        CREATE src/app/store/index.ts (360 bytes)
                        UPDATE src/app/app.module.ts (727 bytes)





ng generate feature user/store/User -m user/user.module.ts 

                    CREATE src/app/user/store/user.actions.ts (329 bytes)
                    CREATE src/app/user/store/user.reducer.spec.ts (326 bytes)
                    CREATE src/app/user/store/user.reducer.ts (443 bytes)
                    CREATE src/app/user/store/user.effects.spec.ts (572 bytes)
                    CREATE src/app/user/store/user.effects.ts (764 bytes)
                    CREATE src/app/user/store/user.selectors.spec.ts (304 bytes)
                    CREATE src/app/user/store/user.selectors.ts (213 bytes)
                    UPDATE src/app/user/user.module.ts (909 bytes)


