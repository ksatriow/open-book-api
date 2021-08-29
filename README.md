# OPEN BOOK API

Publicly available application programming interface book

## Features

- Javascript
- Node
- PostgreSQL
- Express
- Sequalize
- REST API
- Heroku

## Procedure

- Install all dependency -> npm install
- Configure your database in config.json
- Create your database with -> sequelize db:create
- Migrate your table with -> sequelize db:create
- Run the code with -> npm run start

### GET Routes

- base url -> <https://openbookapi.herokuapp.com/>

### Get All Book

- /books

### Get A Book

- /books/id

### Post A Book

- /books/create

    ```json
    {
      "isbn": "111-222-333-4",
      "judul": "Android Expert",
      "sinopsi": "Mastering modullarization",
      "penulis": "Google",
      "genre": "Android"
    }
    ```

### Update A Book

- /books/id

    ```json
    {
      "isbn": "111-222-333-4",
      "judul": "Android Expert",
      "sinopsi": "Mastering modullarization",
      "penulis": "Google",
      "genre": "Android"
    }
    ```

### Delete A Book

- /books/id

## Documentation

[Here is the online backend url](https://openbookapi.herokuapp.com/)
[Here is the online documentation](https://documenter.getpostman.com/view/5826819/TzzHnDMQ)

## Preview

1. Create a book
![POST](/preview/createbook.png)
2. Get a book
![GET](/preview/getabook.png)
3. Get all book
![GET](/preview/getallbook.png)
4. Update book
![PUT](/preview/updatebook.png)
5. After update book
![PUT](/preview/afterupdate.png)
6. Before delete
![DELETE](/preview/beforedelete.png)
7. Delete a book id 3
![DELETE](/preview/delete.png)
8. After delete
![DELETE](/preview/afterdelete.png)
