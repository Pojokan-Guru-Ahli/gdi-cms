# Strapi Test

# Local Development

## Install MongoDB on Ubuntu

```
sudo apt update
sudo apt install mongodb
```

## Install MongoDB on macOS

```
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### MongoDB GUI Client

```
sudo apt install snap
sudo snap install robo3t-snap
```

### Default Login Detail

- Port `27017`
- Username and Password Empty (For local development only)

## Backup and Restore MongoDB Database

- You can find backup database on folder `dump`

- Backup

```
mongodump --db=strapi
```

- Restore

```
mongorestore
```

## Start developing

- `yarn install`
- `yarn develop`
  - Access Public : `http://localhost:1337`
  - Access Admin : `http://localhost:1337/admin`
    - User : JuniYadi
    - Password : qweasd
  - Documentation : `http://localhost:1337/documentation/`

If you already restore a database, access url `http://localhost:1337/blogs`

# Production

- `yarn install`
- `NODE_ENV=production yarn build`
- `NODE_ENV=production APP_HOST=your-domain.com yarn start`
  - Access Admin : `/gdidashboard`

## Strapi CLI

- `node_modules/.bin/strapi`
- Ref: https://strapi.io/documentation/3.0.0-beta.x/cli/CLI.html

## GraphQL

- Endpoint : `http://localhost:1337/graphql`

### GraphQL Example Query :

#### List All Data

- Request :

```
query {
  blogs {
    title,
    body
  }
}
```

- Response

```
{
  "data": {
    "blogs": [
      {
        "title": "Tutorial Cara Memasak",
        "body": "Ini tutorial cara memasak PART 1 :\nSiapkan bahan ini itu dahulu"
      },
      {
        "title": "Tutorial NodeJS",
        "body": "Ini tutorial nodejs ya, bisa mulai aja dari part 1"
      }
    ]
  }
}
```

#### Find Data By ID

- Request :

```
query {
  blog(id: "5dbcf71d8fdd201986c699ea") {
    title,
    body
  }
}
```

- Response

```
{
  "data": {
    "blog": {
      "title": "Tutorial Cara Memasak",
      "body": "Ini tutorial cara memasak PART 1 :\nSiapkan bahan ini itu dahulu"
    }
  }
}
```

### Notes GraphQL

- For Schema GraphQL, you can find in folders `exports` => `graphql` => `schema.graphql`

Reference :

- https://strapi.io/documentation/3.0.0-beta.x/getting-started/introduction.html#strapi-documentation
- https://docs.mongodb.com/manual/tutorial/backup-and-restore-tools/


# Token Decrypt
POST /token/decrypt
- form : token
- header : bearer token