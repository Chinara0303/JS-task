function Click() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      var x = JSON.parse(this.responseText);
      var y="";
      x.results.forEach((user) => {
       y +=`
      <div class=" box col-lg-3"> 
      <img src="${user.picture.large}" alt="">
      <p>gender: ${ user.gender}</p>
      <p>mail: ${user.email}</p>
      </div>`;
      });
    }
    document.getElementById("users").innerHTML = y;
  }
  xhr.open("GET", "https://randomuser.me/api/?results=100");
  xhr.send();
}

