
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
  
