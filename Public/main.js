// -------------------login/register form----------------------

const toggleLogin = document.getElementById('toggleLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

const postinpt = document.getElementById('postInpt')

toggleLogin.addEventListener('change',  (event) => {
  if (event.target.checked) {
    loginForm.classList.remove('d-none');
    registerForm.classList.add('d-none');
  } else {
    loginForm.classList.add('d-none');
    registerForm.classList.remove('d-none');
  }
});



// Handle register form submission
registerForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const username = document.getElementById('usernameRegister').value;
  const password = document.getElementById('passwordRegister').value;


    console.log(username);
    console.log(password);

    

  
  

  if(username==="" || password ===""){
    alert("Enter Valid Username and String");
    
    return;
  }

  // Prepare data for backend (adjust based on your backend requirements)
  const data = {
    username,
    password,
  };

  // Send data to backend using fetch API 
  try {
    const response = await fetch('/register', {
      method: 'POST',
      headers : {'Content-Type':'application/json'},
      body: JSON.stringify(data)}
    );
    

    if (response.ok) {
      // Handle successful registration (e.g., show success message, redirect)
      document.getElementById('usernameRegister').value = "";
      document.getElementById('passwordRegister').value = "";
      
      console.log('Registration successful!');
      

      // You can redirect to another page or display a success message here
    } else {
      // Handle registration errors (e.g., display error message)
      alert('invalid username or password');
      

      // You can display an error message to the user here
    }
  } catch (error) {
    console.error('Error:', error);
    // Handle any errors during the fetch request
  }
});

// Handle register form submission
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const username = document.getElementById('usernameRegister').value;
  const password = document.getElementById('passwordRegister').value;

    console.log(username);
    console.log(password);

  if(username==="" || password ===""){
    alert("Enter Valid Username and String");
    
    return;
  }

  // Prepare data for backend (adjust based on your backend requirements)
  const data = {
    username,
    password,
  };

  // Send data to backend using fetch API 
  try {
     fetch('/login', {
      method: 'POST',
      headers : {'Content-Type':'application/json'},
      body: JSON.stringify(data)}
    )
    .then((res)=>{
    })
    .then((auth)=>{})
    


  } catch (error) {
    console.error('Error:', error);
    // Handle any errors during the fetch request
  }
});