
//task1

function outerFunction(){
    let num = 0;
    return function innerFunction(param){
     return num += param
    } 
  }
  
  const sum = outerFunction();
  
  console.log(sum(3))
  console.log(sum(5)) 
  console.log(sum(228))
  
  
  //task2
  
  //availiability div
  const totalBalanceRef = document.querySelector("[name=balance]");
  const beerAvailiabilityRef = document.querySelector("[name=beer]");
  const wineAvailiabilityRef = document.querySelector("[name=wine]");
  const pepsiAvailiabilityRef = document.querySelector("[name=pepsi]");
  
  //central div
  const quantitySelectionRef = document.querySelector("[name=selection]");
  
  //radio buttons
  const beerRadioButtonRef = document.querySelector("[value=beer]");
  const wineRadioButtonRef = document.querySelector("[value=wine]");
  const pepsiRadioButtonRef = document.querySelector("[value=pepsi]");
  
  const addButtonRef = document.querySelector("[name=add-button]");
  const buyButtonRef = document.querySelector("[name=buy-button]");
  
  const preorderPannelRef = document.querySelector("[name=preorder]");
//   console.dir(preorderPannelRef);
  
  //summary div
  
  const summaryFieldRef = document.querySelector("[name=summary]");
  
  quantitySelectionRef.addEventListener("input", inputHandler);
  buyButtonRef.addEventListener("click", buyButtonHandler);
  addButtonRef.addEventListener("click", addButtonHandler);
  
  beerRadioButtonRef.addEventListener("change", beerAvailiabilityHandler);
  wineRadioButtonRef.addEventListener("change", wineAvailiabilityHandler);
  pepsiRadioButtonRef.addEventListener("change", pepsiAvailiabilityHandler);
  
  let orderedQuantity = 0;
  
  let beerNewQuantity =  0;
  let wineNewQuantity = 0;
  let pepsiNewQuantity = 0;
  let totalPrice = 0;
  
  
  let preorderPannelText = "";
  
  function globalFunc(item, newQuantity, itemName) {
    newQuantity = item.defaultValue - orderedQuantity;
  
    if (newQuantity < 0) {
      alert(`На складі залишилось ${item.defaultValue} ${itemName}`);
    } else {
      preorderPannelText = `${itemName} : ${orderedQuantity}`;
      return newQuantity;
    }
  }
  
//   console.log(beerAvailiabilityRef.id)
  
  function inputHandler(e) {
    orderedQuantity = e.target.value;
    // console.dir(quantitySelectionRef.value);
  }
  
  function addButtonHandler(e) {
    if (e) {
      buyButtonRef.disabled = false;
      preorderPannelRef.innerHTML += preorderPannelText + "\n";
      quantitySelectionRef.value = "";
    }
  }
  
  function beerAvailiabilityHandler(e) {
    if (e) {
      beerNewQuantity = globalFunc(
        beerAvailiabilityRef,
        beerNewQuantity,
        e.currentTarget.defaultValue
      );
    }
  }
  
  function wineAvailiabilityHandler(e) {
    if (e) {
      wineNewQuantity = globalFunc(
        beerAvailiabilityRef,
        wineNewQuantity,
        e.currentTarget.defaultValue
      );
    }
  }
  
  function pepsiAvailiabilityHandler(e) {
    if (e) {
      pepsiNewQuantity = globalFunc(
        pepsiAvailiabilityRef,
        pepsiNewQuantity,
        e.currentTarget.defaultValue
      );
    }
  }
  
  function buyButtonHandler(e) {
    if (e) {
      beerAvailiabilityRef.defaultValue = beerNewQuantity;
      wineAvailiabilityRef.defaultValue = wineNewQuantity;
      pepsiAvailiabilityRef.defaultValue = pepsiNewQuantity;
      totalPrice = ((beerAvailiabilityRef.id * orderedQuantity) + (wineAvailiabilityRef.id * orderedQuantity) + ( pepsiAvailiabilityRef.id *orderedQuantity));
      summaryFieldRef.defaultValue = preorderPannelRef.defaultValue + `загальна вартість ${totalPrice}`; 
      preorderPannelRef.defaultValue = "";
      totalBalanceRef.defaultValue = totalBalanceRef.defaultValue - totalPrice;
    }
    if (beerNewQuantity === 0) {
      beerAvailiabilityRef.defaultValue = 100;
    }
  
    if (wineNewQuantity === 0) {
      wineAvailiabilityRef.defaultValue = 100;
    }
    if (pepsiNewQuantity === 0) {
      pepsiAvailiabilityRef.defaultValue = 100;
    }
  }
  