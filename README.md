# Ecommerce-widget for Paige Denim

## /product-list

## /product-detail/:sku
![Screenshot 2023-03-03 at 4 00 58 PM](https://user-images.githubusercontent.com/105510284/222860526-a6129fb2-3c7e-4dcf-8278-0eb044dfc7e4.png)


## Web: Getting Started
![Screenshot 2023-03-03 at 4 01 16 PM](https://user-images.githubusercontent.com/105510284/222860529-b151baf4-ca49-402d-baf7-5b5eca7a86e8.png)

<details>
<summary>Video Demos</summary>

### List Pagination
https://user-images.githubusercontent.com/105510284/222860689-2aae414a-3077-43c1-ae7a-c236ec63bd74.mov

### Delete Product
https://user-images.githubusercontent.com/105510284/222860732-d354dc82-9513-45bb-a6c9-c774a795b779.mov

### Filter Product List by Color
https://user-images.githubusercontent.com/105510284/222860753-61cd39be-848a-446b-9217-9180ba18be09.mov

### Edit Product Details
https://user-images.githubusercontent.com/105510284/222860780-e0bbd32f-2a1d-4d28-9e5e-c7c2f34341aa.mov



</details>

```
git clone https://github.com/onehungrymind/angular13-fundamentals-workshop
cd angular13-fundamentals-workshop
npm i
npm start
```

The `npm start` calls the `serve:all` command which is a convenience method that runs the `serve:api` and `serve:web` commands concurrently. You can run each command separately if you need to.

```
"start": "npm run serve:all",
"serve:web": "ng serve --port 4300 --open",
"serve:api": "json-server server/db.json",
"serve:all": "concurrently \"npm run serve:api\" \"npm run serve:web\"",
```

The web application will open to [http://localhost:4200](http://localhost:4200) in your browser.

You can see the API by navigating to [http://localhost:3000/](http://localhost:3000/) in your browser.

> Note: the above terminal commands are for Mac. Remember to substitute the appropriate commands for your OS.
