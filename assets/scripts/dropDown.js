// dropdownModule.js
export function createDropdown(apiUrl, newBoxElement) {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        var dropdown = document.createElement("select");
        dropdown.setAttribute("class", "dropdown");
  
        var options = data.options; // Modify this according to the API response structure
        data.forEach((data) => {
            var dataElement = document.createElement("dropDown");
            dataElement.value = data.value;
            dataElement.textContent = data.label;
            dropdown.appendChild(dataElement);
        });
  
        newBoxElement.appendChild(dropdown);
      })
      .catch((error) => console.log(error));
  }
  