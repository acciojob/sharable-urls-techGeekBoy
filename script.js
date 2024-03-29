// your code here
let form = getElementById("urlForm")
let urlElement = getElementById("url")

let value = form.addEventListener("submit",urlevent);
  function urlevent(event){
	  event.preventDefault();
	  let name =  getElementById("name")
	  let year =  getElementById("year")

	  // const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
	  //   urlElement.textContent = `https://localhost:8080/${queryString}`;
  }