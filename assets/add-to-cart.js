function buttonClick(variantId,cartSize){
  let formData = {
    items: [
      {
        id: variantId,
        quantity: 1,
         "properties" : {
          "cart_idex": cartSize
        }
      },
    ],
  };

  fetch("/cart/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
  .then(() => {
    document.location.href = '/cart'
  })
.then((response) => {
    console.log("aiueo")
    return response.json()
  })
.catch((error) => {
    console.error("Error:", error)
  })
}