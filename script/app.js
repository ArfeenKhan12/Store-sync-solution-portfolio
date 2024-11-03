



const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classlist.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// const sideMenu = document.getElementById("sideMenu");

// function openMenu(){
//     sideMenu.style.right = "0";
// }
// function closeMenu(){
//     sideMenu.style.right = "-200px";
// }

const sideMenu = document.getElementById("sideMenu");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}

// Function to manage menu visibility based on screen size
function adjustMenuVisibility() {
    if (window.innerWidth <= 768) { // Adjust the width as needed for mobile
        sideMenu.style.right = "-200px"; // Hide on mobile
    } else {
        sideMenu.style.right = "0"; // Show on desktop
    }
}

// Event listener for window resize
window.addEventListener('resize', adjustMenuVisibility);
adjustMenuVisibility(); // Initial check

document.addEventListener('DOMContentLoaded', () => {

const form = document.getElementById('contactForm');
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = form.Name.value;
            const email = form.email.value;
            const message = form.Message.value;

            try {
                await db.collection('web').add({
                    name: name,
                    email: email,
                    message: message,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
                alert('Message sent successfully!');
                form.reset();
            } catch (error) {
                console.error('Error adding document: ', error);
            }
        });
    });