/* import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/RfO6N5HGi9H5oqBA/scene.splinecode');


document.getElementById('submit').addEventListener('click', function() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
   
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
       alert('All fields are required');
       return false;
    }
   
    if (password !== confirmPassword) {
       alert('Passwords do not match');
       return false;
    }
   
    // Check for a valid email address
    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
       alert('Please enter a valid email address');
       return false;
    }
   
    // Perform AJAX call to submit form data
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'signup', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
       if (xhr.readyState === 4 && xhr.status === 200) {
         alert('Sign up successful');
         window.location.href = 'dashboard';
       } else if (xhr.readyState === 4) {
         alert('Sign up failed. Please try again.');
       }
    };
   
    var data = JSON.stringify({
       email: email,
       password: password
    });
    xhr.send(data);
   
    return false;
   });
   */