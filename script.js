function addAddress(){
  let number = document.querySelector("input[name='number']").value
  let bairro = document.querySelector("input[name='neighborhood']").value
  let city = document.querySelector("input[name='city']").value
  let rua = document.querySelector("input[name='street']").value
  if(rua != "" && bairro != "" && number != "" && city != ""){
  let newAddress = document.createElement("li")
  newAddress.innerText = "Rua " + rua + ", Bairro " + bairro + ", " + number + ", " + city
  let removeB = document.createElement("button")
  removeB.type = "button"
  removeB.innerText = "Remover"
  removeB.setAttribute("onclick", "removeAddress(this)")
  newAddress.appendChild(removeB) 
  document.getElementById("list").appendChild(newAddress)
  document.querySelector("input[name='number']").value = ""
  document.querySelector("input[name='neighborhood']").value = ""
  document.querySelector("input[name='city']").value = ""
  document.querySelector("input[name='area']").value = ""
  }else{
    try{
      throw new Error("Preencha todos os campos");
    } catch(e){
      alert(e)
    }
  }
}
function removeAddress(button){
  let liRem = button.parentNode
  document.getElementById("list").removeChild(liRem)
}