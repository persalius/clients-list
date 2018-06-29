var clientsTitle = document.querySelector(".clients__title"); // блок, куда попадет список с клиентами
var clientsDetail = document.querySelector(".clients__detail"); // блок с полной информацией по выбранному клиенту
var data = []; //данные, полученные от json

var ul = document.createElement("ul"); // список, который попадет в clientsTitle
ul.classList.add("all-list");
var allItems; // все элементы, которые находятся в ul


// =================== ЗАПРОС ======================
var xhr = new XMLHttpRequest();

xhr.open('GET', 'clients.json');
xhr.onreadystatechange = function() {
	if ((xhr.readyState===4) && (xhr.status===200)) {
		data = JSON.parse(xhr.responseText);
		parse(data);
	}
}
xhr.send();
// ============== конец ЗАПРОСА ======================



function parse(data) {
	for(var i = 0; i < data.length; i++) {
		var li = document.createElement("li");
		var img = document.createElement("img");
		var divleft = document.createElement("div");
		var divright = document.createElement("div");
		var pName = document.createElement("p");
		var pTitle = document.createElement("p");
		
		//Вставляем данные
		img.setAttribute("src", data[i].general.avatar);
		pName.textContent = data[i].general.firstName;
		pTitle.textContent = data[i].job.title;
		
		//Задаем классы
		li.classList.add("list-item");
		divleft.classList.add("divleft");
		divright.classList.add("divright");
		pName.classList.add("pName");
		pTitle.classList.add("pTitle");
		
		//Кладем элементы в ul
		divleft.appendChild(img);
		divright.appendChild(pName);
		divright.appendChild(pTitle);
		li.appendChild(divleft);
		li.appendChild(divright);
		ul.appendChild(li);		
	};

	clientsTitle.appendChild(ul);
	allItems = document.querySelectorAll(".list-item");
	allItems = Array.from(allItems);
	
	for(let i = 0; i < allItems.length; i++) {
		let that = i;
		allItems[i].onclick = function() {			
			var detailImg = document.querySelector(".detail__img");
			detailImg.setAttribute("src", data[that].general.avatar);
			
			var detailName = document.querySelector(".detail__name");
			detailName.textContent = data[that].general.firstName + " " + data[that].general.lastName;
			
			var detailJobCompany = document.querySelector(".detail__jobCompany");
			detailJobCompany.innerHTML = "<span>company:</span> " + data[that].job.company;
			
			var detailJobTitle = document.querySelector(".detail__jobTitle");
			detailJobTitle.innerHTML = "<span>title:</span> " + data[that].job.title;
			
			var detailEmail = document.querySelector(".detail__email");
			detailEmail.innerHTML = "<span>email:</span> " + data[that].contact.email;
			
			var detailPhone = document.querySelector(".detail__phone");
			detailPhone.innerHTML = "<span>phone:</span> " + data[that].contact.phone;
			
			var detailStreet = document.querySelector(".detail__street");
			detailStreet.innerHTML = "<span>street:</span> " + data[that].address.street;
			
			var detailCity = document.querySelector(".detail__city");
			detailCity.innerHTML = "<span>city:</span> " + data[that].address.city;
			
			var detailZipcode = document.querySelector(".detail__zipcode");
			detailZipcode.innerHTML = "<span>zipcode:</span> " + data[that].address.zipCode;
			
			var detailCountry = document.querySelector(".detail__country");
			detailCountry.innerHTML = "<span>country:</span> " + data[that].address.country;
			
		};
	};
};


search.onkeyup = function() {
	var search = document.getElementById("search");
	var filter = search.value.toLowerCase();
	
	for (i = 0; i < allItems.length; i++) {
		var p = allItems[i].getElementsByTagName("p")[0];
		if (p.innerHTML.toLowerCase().indexOf(filter) > -1) {
			allItems[i].style.display = "";
		} else {
			allItems[i].style.display = "none";

		}
	};
};













