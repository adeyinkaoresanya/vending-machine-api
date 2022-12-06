# vending-machine-api

### Goal
---
This is an api for a vending machine that allows users with the role of “seller” to add, update or remove products, while users with the role of “buyer” role can deposit coins into the machine and make purchases. 


### Set up
---

- Install [Node.js](https://nodejs.org/en/download/), [MongoDB](https://www.mongodb.com/docs/manual/installation/)
- Install project dependencies
- clone this repo
- update env with example.env
- run `npm run start:dev`


#### How to clone this repo

```sh
git clone https://github.com/adeyinkaoresanya/vending-machine-api.git
```

#### Install project dependencies

```sh
npm install
```

#### Update .env with example.env

#### Run a development server

```sh
npm run start:dev
```

### Models
---

### users
| Name | Type | Comments |
| --- | --- | --- |
| `id` | autoincrement |  |
| `uuid` | string | 
| `username` | string |  |
| `role` | string | 
| `password` | string | |
| `created_at` | timestamp |  |
| `updated_at` | timestamp |  |

<br/>

### products
| Name | Type | Comments |
| --- | --- | --- |
| `id` | autoincrement |  |
| `uuid` | string | 
| `title` | string | Title of the product  |
| `cost` | int | Price of the product |
| `sellerId` | string | ID of the seller who created the product |
| `created_at` | timestamp |  |
| `updated_at` | timestamp |  |
| `deleted_at` | timestamp |  |
 
 <br/>

### deposits
| Name | Type | Comments |
| --- | --- | --- |
| `id` | autoincrement |  |
| `uuid` | string | 
| `buyerId` | string | ID of the buyer  |
| `amount` | int | How much the product was bought for |
| `created_at` | timestamp |  |
| `updated_at` | timestamp |  |


## Usage
---

### Creating a user

- Route: /api/vd/user/create
- Method: POST
- Body

```json
{
"firstName": "Jane",
"lastName": "Bakes",
"userName": "janebakes",
"email": "janebakes@gmail.com",
"password": "janebakes236"

}
```

Response

```json
{"firstName":"Jane",
"lastName":"Bakes",
"userName":"janebakes",
"email":"janebakes@gmail.com"}

```


### Get a list of users

- Route: /api/vd/user/list
- Method: GET

```

Response

```json
[{"firstName":"Jane",
"lastName":"Bakes",
"userName":"janebakes",
"email":"janebakes@gmail.com"},

{"firstName":"John,
"lastName":"Doe",
"userName":"johndoe",
"email":"johndoe@gmail.com"}]

```
### Get a single user

- Route: /api/vd/user/:id
- Method: GET

```

Response

```json

{"firstName":"Jane",
"lastName":"Bakes",
"userName":"janebakes",
"email":"janebakes@gmail.com"}



```

## Contributor

---

Adeyinka Oresanya



