  const item =document.querySelector("#item")
  const todobox=document.querySelector("#to-do-box")
  //Selectors are used to "find" (select) HTML elements based on their tag name, id, classes, types, attributes, values of attributes and much more.
  item.addEventListener(
    "keyup",
    function(event){
        if(event.key=="Enter"){
            addToDo(this.value)
            this.value=""
        }
    }
  )
  const addToDo = (item) =>{
      const listItem=document.createElement("li");
      listItem.innerHTML = `
         ${item}
        <i class="fas fa-times"></i>
    `;
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove()
        }
    )

      todobox.appendChild(listItem)
  }