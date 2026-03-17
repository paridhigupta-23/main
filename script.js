function toggleDarkMode(){
  document.body.classList.toggle("dark");
}


const tips = [
  "Drink 8 glasses of water daily",
  "Exercise regularly",
  "Eat healthy food",
  "Sleep well",
  "Stay stress-free"
];

let i = 0;

setInterval(()=>{
  let tip = document.getElementById("tip");
  if(tip){
    tip.innerText = tips[i];
    i = (i+1)%tips.length;
  }
},3000);

const doctors = [
  {
    name: "Dr. Sharma",
    spec: "Cardiologist",
    img: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Dr. Mehta",
    spec: "Neurologist",
    img: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Dr. Patel",
    spec: "Pediatrician",
    img: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Dr. Khan",
    spec: "Dermatologist",
    img: "https://randomuser.me/api/portraits/women/4.jpg"
  }
];

function displayDoctors(data){
  let list = document.getElementById("doctorList");
  if(!list) return;

  list.innerHTML = "";

  data.forEach(d => {
    list.innerHTML += `
      <div class="col-md-3 mb-4">
        <div class="card doctor-card shadow">
          <img src="${d.img}" class="card-img-top">
          <div class="card-body text-center">
            <h5>${d.name}</h5>
            <p class="text-muted">${d.spec}</p>
            <button class="btn btn-primary">View Profile</button>
          </div>
        </div>
      </div>
    `;
  });
}

// Search function
function searchDoctor(){
  let input = document.getElementById("searchDoctor").value.toLowerCase();

  let filtered = doctors.filter(d =>
    d.name.toLowerCase().includes(input) ||
    d.spec.toLowerCase().includes(input)
  );

  displayDoctors(filtered);
}

// Load all doctors initially
displayDoctors(doctors);

function login(){
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  if(email==="" || pass===""){
    alert("Fill all fields");
    return;
  }

  let user = {email, pass};

  localStorage.setItem("user", JSON.stringify(user));

  alert("Login successful!");
  window.location.href = "dashboard.html";
}

