document.getElementById("addButton").addEventListener("click", function () 
{
    const input = document.getElementById("newItem");
    const newItemText = input.value.trim();
    if(newItemText) 
    {
        const newListItem = document.createElement("li");
        newListItem.textContent = newItemText;

        document.getElementById("list").appendChild(newListItem);
        input.value = ""; 
    }
});