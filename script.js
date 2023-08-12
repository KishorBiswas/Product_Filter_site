let products = {
    data: [
        {
            productName: "Famouse Watch Brand.",
            cetagory: "Watch",
            price: "$" + 85,
            image: "./Image/Watch1.jpg",
        },
        {
            productName: "latest T-shirt Brand.",
            cetagory: "T-shirt",
            price: "$" + 45,
            image: "./Image/T_Shirt1.jpg",
        },
        {
            productName: "latest T-shirt Brand.",
            cetagory: "T-shirt",
            price: "$" + 75,
            image: "./Image/T_Shirt2.jpg",
        },
        {
            productName: "Famouse Watch Brand new.",
            cetagory: "Watch",
            price: "$" + 95,
            image: "./Image/Watch2.jpg",
        },
        {
            productName: "Famouse Watch Brand.",
            cetagory: "Watch",
            price: "$" + 55,
            image: "./Image/Watch3.jpg",
        },
        {
            productName: "Branded head Phone.",
            cetagory: "Head_Phone",
            price: "$" + 65,
            image: "./Image/HeadPhone_1.jpg",
        },
        {
            productName: "New Designe Jewlary.",
            cetagory: "Jewlary",
            price: "$" + 15,
            image: "./Image/jewlary_1.jpg",
        },
        {
            productName: "New Designe Jewlary.",
            cetagory: "Jewlary",
            price: "$" + 15,
            image: "./Image/jewlary_2.jpg",
        },
        {
            productName: "New Designe Shoes.",
            cetagory: "Shoes",
            price: "$" + 55,
            image: "./Image/Shoes_2.jpg",
        },
        {
            productName: "Branded head Phone.",
            cetagory: "Head_Phone",
            price: "$" + 65,
            image: "./Image/HeadPhone_3.jpg",
        },
        {
            productName: "New Designe Shoes.",
            cetagory: "Shoes",
            price: "$" + 55,
            image: "./Image/Shoes_1.jpg",
        },
        {
            productName: "New Designe Jewlary.",
            cetagory: "Jewlary",
            price: "$" + 25,
            image: "./Image/jewlary_3.jpg",
        },
        {
            productName: "latest T-shirt Brand.",
            cetagory: "T-shirt",
            price: "$" + 75,
            image: "./Image/T_Shirt3.jpg",
        },
        {
            productName: "Best Laptop.",
            cetagory: "Laptop",
            price: "$" + 275,
            image: "./Image/Laptop_1.jpg",
        },
        {
            productName: "New Designe Jewlary.",
            cetagory: "Jewlary",
            price: "$" + 25,
            image: "./Image/jewlary_4.jpg",
        },
        {
            productName: "New Designe Jewlary.",
            cetagory: "Jewlary",
            price: "$" + 35,
            image: "./Image/jewlary_5.jpg",
        },
        {
            productName: "Best Laptop.",
            cetagory: "Laptop",
            price: "$" + 275,
            image: "./Image/Laptop_2.jpg",
        },
        {
            productName: "New Designe Shoes.",
            cetagory: "Shoes",
            price: "$" + 75,
            image: "./Image/Shoes_3.jpg",
        },
        {
            productName: "latest T-shirt Brand.",
            cetagory: "T-shirt",
            price: "$" + 45,
            image: "./Image/T_Shirt4.jpg",
        },
        {
            productName: "New Designe Shoes.",
            cetagory: "Shoes",
            price: "$" + 75,
            image: "./Image/Shoes_5.jpg",
        },
        {
            productName: "Famouse Watch Brand new.",
            cetagory: "Watch",
            price: "$" + 55,
            image: "./Image/Watch5.jpg",
        },
        {
            productName: "Famouse Watch Brand new.",
            cetagory: "Watch",
            price: "$" + 75,
            image: "./Image/Watch6.jpg",
        },
        {
            productName: "Best Laptop.",
            cetagory: "Laptop",
            price: "$" + 375,
            image: "./Image/Laptop_3.jpg",
        },
        {
            productName: "Best Laptop.",
            cetagory: "Laptop",
            price: "$" + 205,
            image: "./Image/Laptop_4.jpg",
        },
        {
            productName: "Famouse Watch Brand new.",
            cetagory: "Watch",
            price: "$" + 75,
            image: "./Image/Watch7.jpg",
        },
        {
            productName: "Famouse Watch Brand new.",
            cetagory: "Watch",
            price: "$" + 60,
            image: "./Image/Watch9.jpg",
        },
        {
            productName: "Branded head Phone.",
            cetagory: "Head_Phone",
            price: "$" + 35,
            image: "./Image/HeadPhone_2.jpg",
        },
        {
            productName: "New Designe Shoes.",
            cetagory: "Shoes",
            price: "$" + 55,
            image: "./Image/Shoes_6.jpg",
        }
    ]
}





// create card here

let rootProduct = document.querySelector(".Products");


for(let i of products.data){
    // Create card
    let cardElm = document.createElement("div");

    // Add tow class name and one same is catagory
    cardElm.classList.add("card", i.cetagory.toUpperCase(), "hide");
    cardElm.setAttribute("data-aos", "zoom-in");
    



    let imageBox = document.createElement("div");
    imageBox.classList.add("imageBox");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.setAttribute("alt", "Product_Image");
    imageBox.appendChild(image);


    let productName = document.createElement("h4");
    productName.classList.add("productName");
    let text = document.createTextNode(i.productName);
    productName.appendChild(text);

    let price = document.createElement("p");
    let Rupess = document.createTextNode(` Price: ${i.price}`);
    price.appendChild(Rupess);
   

    let buyNowBtn = document.createElement("button");
    let btnText = document.createTextNode("Buy Now");
    buyNowBtn.appendChild(btnText);
   
    cardElm.appendChild(imageBox);
    cardElm.appendChild(productName);
    cardElm.appendChild(price);
    cardElm.appendChild(buyNowBtn);
    
    rootProduct.appendChild(cardElm);


    // console.log( productName);
}

// ----------------------------------



// Add active class on the Top Product Indecetor
let indicat_Btn = document.querySelectorAll(".button_value");
let allCard = document.querySelectorAll(".card");


for(let i=0; i<indicat_Btn.length; i++){
    
    indicat_Btn[i].addEventListener("click",function(){
        for(let j=0; j<indicat_Btn.length; j++){
            indicat_Btn[j].classList.remove("active");
        }
    
        this.classList.add("active");
        let butText = this.innerText.toUpperCase();
        
        // Do Empty the Input value
        search_input.value = "";

        // Pass the clicked button text
        cardShow(butText);
        
    })

}


// ----------------



// Card show code here
let cardShow = (value) => {
    let passValue = value.toUpperCase();

    allCard.forEach((card) => {
        // Display all card in the first time and when click the all button
        if(passValue == "ALL"){
            card.classList.remove("hide");
        }else{
            // Check if the card have same catagory class is shown
            if(card.classList.contains(passValue)){
                card.classList.remove("hide");
            }else{
                card.classList.add("hide");
            }
        }
        
    })

   
}





// Submite Event here
let search_Btn = document.getElementById("search_Btn");
let search_input = document.getElementById("search_input");


search_Btn.addEventListener("click", () => {
    let inputValue = search_input.value.toUpperCase();
    let productName = document.querySelectorAll(".productName");

    



    // Change the indicate button style whene search the same tag
    for(let i=0; i<indicat_Btn.length; i++){
        indicat_Btn[i].classList.remove("active");
        let butName = indicat_Btn[i].innerText.toUpperCase();

        // if inpute this type text
        if(inputValue.includes("HEAD PHONE")){
            inputValue = "Head_Phone";
          
        }else if(inputValue.includes("TSHIRT")){
            inputValue = "T-Shirt";
            
        }
     
        
        // Add Active class for another class
        if(inputValue.toUpperCase() == butName){
            indicat_Btn[i].classList.add("active");
            
        }


    }


    productName.forEach((element, index) => {
        if(inputValue.includes( "Head_Phone")){
            inputValue = "HEAD PHONE";
          
        }else if(inputValue.includes("T-Shirt")){
            inputValue = "T-SHIRT";
        }

        if(element.innerText.toUpperCase().includes(inputValue)){
            allCard[index].classList.remove("hide");
        }else{
            allCard[index].classList.add("hide");
        }

    })

    console.log(inputValue);

})



// -------------------



// whene the window is oppen all time show the all Items
window.onload = () => {cardShow("All")};

