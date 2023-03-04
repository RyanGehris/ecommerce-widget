# Ecommerce-widget for Paige Denim

## Product List Page
### /product-list
![Screenshot 2023-03-03 at 4 00 58 PM](https://user-images.githubusercontent.com/105510284/222860526-a6129fb2-3c7e-4dcf-8278-0eb044dfc7e4.png)

## Product Detail Page
### /product-detail/{sku}
![Screenshot 2023-03-03 at 4 01 16 PM](https://user-images.githubusercontent.com/105510284/222860529-b151baf4-ca49-402d-baf7-5b5eca7a86e8.png)

## Video Demos
<details>
<summary>Edit Product Details</summary>
  
![edit-paige](https://user-images.githubusercontent.com/105510284/222860943-09f1493f-27ea-4046-8099-c3e4ad9c695f.gif)
  
</details>
<details>
<summary>Delete Product</summary>

![delete-paige-trim](https://user-images.githubusercontent.com/105510284/222860946-89471629-dac5-4585-b227-8c15a75a6958.gif)

</details>
<details>
<summary>Filter Products by Color</summary>
  
![filter-paige-trim](https://user-images.githubusercontent.com/105510284/222860940-98c90e63-2cf8-484d-ab59-b27ced2551ff.gif)

</details>
<details>
<summary>List Pagination</summary>
  
![pagination-paige](https://user-images.githubusercontent.com/105510284/222860931-2aa1fd9b-36e1-4df7-8c82-dc3c7408733e.gif)

</details>

## Directions to Clone Repo and Run Project

```
git clone https://github.com/RyanGehris/ecommerce-widget.git
cd paige-denim
npm install
npm start
```

The `npm start` calls the `serve:all` command which is a convenience method that runs the `serve:api` and `serve:web` commands concurrently. You can run each command separately if you need to.

```
"start": "npm run serve:all",
"serve:web": "ng serve --port 4200 --open",
"serve:api": "json-server server/db.json",
"serve:all": "concurrently \"npm run serve:api\" \"npm run serve:web\"",
```

The web application will open to [http://localhost:4200](http://localhost:4200) in your browser.

You can see the API by navigating to [http://localhost:3000/](http://localhost:3000/) in your browser.

> Note: the above terminal commands are for Mac. Remember to substitute the appropriate commands for your OS.
