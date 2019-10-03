	var link = document.querySelector("div.contacts a.button");
	var popup = document.querySelector(".modal-contact");
	var form = popup.querySelector("form");
	var close = document.querySelector(".modal-close");
	var fio = popup.querySelector("[name=fio]");
	var email = popup.querySelector("[name=email]"); 
	var fioValue = localStorage.getItem("fio");
	var emailValue = localStorage.getItem("email");
	
	var mapLink = document.querySelector(".js-button-map");
    var mapPopup = document.querySelector(".modal-map");
    var mapClose = mapPopup.querySelector(".modal-close");
	
	var isStorageSupport = true;
    var fioValue = ""; 
	var emailValue = ""; 
	
	try {
      fioValue = localStorage.getItem("fio");
    } catch (err) {
      isStorageSupport = false;
    }
	
	link.addEventListener("click", function (evt) {
	  evt.preventDefault();
	  popup.classList.add("modal-show");
	  fio.focus();
	  
	  if (fioValue) {
	    fio.value = fioValue;
		email.focus(); 
		
		if (emailValue) {
			email.value = emailValue;
			comment.focus();
		} else {
			email.focus();
		}	
	  } else {
	    fio.focus();
	  }  
	});
	
	close.addEventListener("click", function (evt) {
	  evt.preventDefault();
	  popup.classList.remove("modal-show");
	  popup.classList.remove("modal-error");
	});
	
	form.addEventListener("submit", function (evt) {
	  if (!fio.value || !email.value) { 
	    evt.preventDefault();
		popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth; 
        popup.classList.add("modal-error"); 
	  } else {
	    if  (isStorageSupport) {
	      localStorage.setItem("fio", fio.value);
		  localStorage.setItem("email", email.value);
	    }
	  }
    }); 
	
	window.addEventListener("keydown", function (evt) { 
	  if (evt.keyCode === 27) {
	    evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
           popup.classList.remove("modal-show");
		   popup.classList.remove("modal-error"); 
        }
      } 
	});
	
	
	mapLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-show");
    });
   
    mapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    });
	
    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
		
        if (mapPopup.classList.contains("modal-show")) {
           mapPopup.classList.remove("modal-show"); 
        }
      }
    });
	
	document.querySelectorAll(".item-content").forEach(function(item){
		item.addEventListener("mouseover", function() {
		   this.nextElementSibling
		      .classList.toggle("item__toggler--on");
		})
	});
	
	document.querySelectorAll(".item-toggler").forEach(function(item){
		item.addEventListener("mouseout", function() {
		   this.classList.toggle("item__toggler--on");
		})
	});

   