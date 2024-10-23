// Selecting all required element

const wrapper = document.querySelector(".wrapper"),
toast = wrapper.querySelector('.toast'),
wifiIcon = wrapper.querySelector('.icon'),
title = wrapper.querySelector('span'),
subTitle = wrapper.querySelector('p'),
closeIcon = wrapper.querySelector('.close-icon');

window.onload = () => {
  function ajax() {
    let xhr = new XMLHttpRequest(); //creating new xml object
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts", true); //sending get request to this URL.
    xhr.onload = () => { //once ajax loaded
      if (xhr.status == 200 && xhr.status < 300) {
        toast.classList.remove("offline");
        title.innerText = "You'r online now";
        subTitle.innerText = "Hurray! Internet is connected.";
        wifiIcon.innerHTML = '<i class="fa-solid fa-wifi"></i>';

        closeIcon.onclick = () => {
          wrapper.classList.add("hide");
        }

        setTimeout(() => {
          wrapper.classList.add("hide");
        },5000); //after 5 seconds toast will be hidden automatical.

      } else {
        offline(); //calling offline or may getting something other error.
      }
    }
    xhr.onerror = () => {
      offline(); //calling offline or may getting something other error.
    }
    xhr.send();
  }
  function offline() {
    wrapper.classList.remove("hide"); // if user goes offline the show toast again
    toast.classList.add("offline");
    title.innerText = "You're offline now";
    subTitle.innerText = "Opps! Interneet is disconnected.";
    wifiIcon.innerHTML = '<i class="fa-solid fa-wifi"></i>';
  }
  setInterval(() => {
    ajax(); //calling ajax function
  }, 100);
}
