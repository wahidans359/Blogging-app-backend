API routes 
================


Test this on Postman
-------------------


### To create a post

* **POST METHOD**: `http://localhost:4000/api/v1/posts/create`
* **Request Body**:
```json
{
  "title": "This is a Title",
  "body": "This is a body"
}
```


### To fetch all posts

* **GET METHOD**: `http://localhost:4000/api/v1/getAllPost`


### To comment a post

* **POST METHOD**: `http://localhost:4000/api/v1/comments/create`
* **Request Body**:
```json
{
  "post": "661fbd3295af854f4659fcf6",
  "user": "This is a user",
  "body": "This is a body"
}
```

### To like a post
* **POST METHOD**: `http://localhost:4000/api/v1/like`
* **Request Body**:
```json
{
  "post": "661fbd3295af854f4659fcf6",
  "user": "This is a user",
}
```

### To unlike a post
* **POST METHOD**: `http://localhost:4000/api/v1/likes/unlike`
* **Request Body**:
```json
{
  "post": "661fbd3295af854f4659fcf6",
  "like": "6704d5546ba71db4afd914d2"
}
```