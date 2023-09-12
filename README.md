# Getting Started

  This is a simple **CRUD** application
  ## Prerequisite
    1. node(npm)
    2. curl
  ## Setup
> Note: Ensure you are within the HNGX_BS2 folder
   
```bs
    //Install the dependencies
    $ npm install

    // start the server
    $ npm start
```

# API REFERENCES

`POST /api`

#### Creates a new person

#### Sample Request
```bash
$ curl -H "Content-Type: application/json" -d "{\"name\": \"philip\"}" http://localhost:3000/api
```
#### Response 
```json
{
    "message":"Person created successfully",
    "newPerson":{
        "name":"david",
        "_id":"64ff4375a4c23d8fcb95a4f5",
        "__v":0
        }
}
```


`GET /api/:user_id`

 #### Returns detail of Person

 #### Sample Request
 ```bash
$ curl -X GET http://localhost:3000/api/64ff4375a4c23d8fcb95a4f5
 ```

#### Response

```json
 {
  "person": [
    {
        "_id":"64ff0452929d96e499f25901",
        "name":"Henry",
        "__v":0
    }
  ]
 }
```

`PATCH /api/:user_id`

#### Modify person detail

#### Sample Request

```bash
$ curl -X PATCH -H "Content-Type: application/json" -d '{\"name\": \"tomson\"}' http://localhost:3000/api/64ff4375a4c23d8fcb95a4f5
```

#### Response

```json
 {
    "message":"Successfully Updated",
    "updatedPerson": {
        "_id":"64ff0452929d96e499f25901",
        "name":"tomson",
        "__v":0
    }
}
```

`DELETE /api/:user_id`

##### Delete a person

#### Sample Request

```bash
$ curl -X DELETE http://localhost:3000/api/64ff4375a4c23d8fcb95a4f5
```

#### Response
```json
{
    "message":"Person successfully deleted",
    "deletedPerson":{
        "_id":"64ff0452929d96e499f25901",
        "name":"tomson",
        "__v":0
    }
}

```
### Author
  Gray

### Acknowledgement
  HNGX
