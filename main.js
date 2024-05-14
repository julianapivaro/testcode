const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images.jpg") 
    {myImage.setAttribute("src", "images2.jpg");
  } else {
    myImage.setAttribute("src", "images.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
myButton.onclick = () => {
    setUserName();
  };
  

  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Juliana loves you, ${myName}`;
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Juliana loves you, ${storedName}`;
  }
  
