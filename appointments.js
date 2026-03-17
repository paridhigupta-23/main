document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let doctor = document.getElementById("doctor").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  if(name === "" || email === "" || doctor === "Select Doctor"){
    alert("Please fill all required fields!");
    return;
  }

  let appointment = {name, email, doctor, date, time};

  try{
    let data = JSON.parse(localStorage.getItem("appointments")) || [];
    data.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(data));

    alert("✅ Appointment booked successfully!");
    document.getElementById("form").reset();

  } catch(error){
    alert("❌ Error saving data");
  }
});
function toggleTheme(){
  document.body.classList.toggle("dark");

  // Save preference
  if(document.body.classList.contains("dark")){
    localStorage.setItem("theme","dark");
  } else {
    localStorage.setItem("theme","light");
  }
}

window.onload = function(){
  let doc = localStorage.getItem("selectedDoctor");

  if(doc){
    document.getElementById("doctor").value = doc;
  }
}

function validateForm(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if(name === "" || email === ""){
    alert("Please fill all fields ❗");
    return false;
  }

  if(!email.includes("@")){
    alert("Invalid email ❗");
    return false;
  }

  return true;
}
function confirmBooking(){
  return confirm("Do you want to confirm appointment?");
}
