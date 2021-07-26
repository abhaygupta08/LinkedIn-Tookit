window.onload = () => {
	window.location = "https://www.linkedin.com/mynetwork/";
}

const homepage = document.querySelector("#extn-popup-homepage");
const autoRequestpage = document.querySelector("#extn-popup-auto-request");
const autoAcceptPage = document.querySelector("#extn-popup-auto-accept");
const rejectPending = document.querySelector("#extn-popup-auto-reject-pending");
const progress = document.querySelector("#extn-popup-inprogress");

document.querySelector("#go-to-homepage").addEventListener('click', () => {
	homepage.classList.remove("hide");
	autoRequestpage.classList.add("hide");
	autoAcceptPage.classList.add("hide");
	rejectPending.classList.add("hide");
	progress.classList.add("hide");
})


document.querySelector("#auto-request").addEventListener('click', () => {
	homepage.classList.add("hide");
	autoRequestpage.classList.remove("hide");
	autoAcceptPage.classList.add("hide");
	rejectPending.classList.add("hide");
	progress.classList.add("hide");

	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			"requestType": "redirect", "url": "https://www.linkedin.com/mynetwork/"
		})
	});
	setTimeout(() => {
		document.querySelector("#perform-auto-request").removeAttribute("disabled");
	}, 10000)


})

document.querySelector("#auto-accept").addEventListener('click', () => {
	homepage.classList.add("hide");
	autoRequestpage.classList.add("hide");
	autoAcceptPage.classList.remove("hide");
	rejectPending.classList.add("hide");
	progress.classList.add("hide");

	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			"requestType": "redirect", "url": "https://www.linkedin.com/mynetwork/" })
	});
	setTimeout(() => {
		document.querySelector("#perform-auto-accept").removeAttribute("disabled");
	},10000)


})

document.querySelector("#auto-delete-pending").addEventListener('click', () => {
	homepage.classList.add("hide");
	autoRequestpage.classList.add("hide");
	autoAcceptPage.classList.add("hide");
	rejectPending.classList.remove("hide");
	progress.classList.add("hide");

	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			"requestType": "redirect", "url": "https://www.linkedin.com/mynetwork/invitation-manager/sent/"
		})
	});
	setTimeout(() => {
		document.querySelector("#perform-auto-reject-pending").removeAttribute("disabled");
	}, 10000)


})

const loading = document.querySelector("#extn-popup-inprogress h3");

var c = Number(0);

var addDOTS = setInterval(() => {
	if (c == 3) {
		loading.innerHTML = "All Done. Process Initiated";
		c = 0;
	}
	loading.innerHTML += String(".");
	c++;
}
, 700);

document.querySelectorAll(".perform").forEach(ele => {
	
	ele.setAttribute("disabled", true);

	ele.addEventListener('click',() => {
		homepage.classList.add("hide");
		autoRequestpage.classList.add("hide");
		autoAcceptPage.classList.add("hide");
		rejectPending.classList.add("hide");
		progress.classList.remove("hide");
	})
})

// PERFORM
document.querySelector("#perform-auto-accept").addEventListener('click', () => {
	// alert("btn click")
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, { "requestType": "acceptConnections"});
	});
});


document.querySelector("#perform-auto-request").addEventListener('click', () => {
	// alert("btn click")
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, { "requestType": "sendConnections", "countCCCC": document.querySelector('#send-number').value} );
	});
});


document.querySelector("#perform-auto-reject-pending").addEventListener('click', () => {
	// alert("btn click")
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, { "requestType": "cancelConnections"});
	});
});


document.querySelector("#contact-link").addEventListener('click', () => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			"requestType": "redirect", "url": "https://www.github.com/abhaygupta08/"})
	});

});