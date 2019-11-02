# Strapi Test

# Local Development
## Install MongoDB on Ubuntu
```
sudo apt update
sudo apt install mongodb
```

## Backup and Restore MongoDB Database
* You can find backup database on folder `dump`

* Backup
```
mongodump --db=strapi
```

* Restore
```
mongorestore
```

## Start developing
* `yarn install`
* `yarn develop`
  * Access Public : `http://localhost:1337`
  * Access Admin : `http://localhost:1337/admin`
    * User : JuniYadi
    * Password : qweasd

If you already restore a database, access url `http://localhost:1337/blogs`

Reference :
* https://docs.mongodb.com/manual/tutorial/backup-and-restore-tools/