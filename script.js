
function toggleMenu(){
   const hambur=document.querySelector('.nav-container');
   hambur.classList.toggle('show');
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll('.about-buttons button');
  buttons.forEach(btn => btn.classList.remove('active-button'));
  button.classList.add('active-button');
}

function showEducation(button){
  setActiveButton(button);
   const container=document.getElementById("about-info");
   container.innerHTML = `
    <h3>🎓 Education</h3>
    <ul class="edu-list">
      <li><strong>Bachelor's Degree:</strong>Computer Science & Engineering - CMR Engineering College (2022-2026), 8.33 CGPA</li>
      <li><strong>Intermediate:</strong> MPC - TTWUR Junior College (2020-2022), 88.6 %</li>
      <li><strong>SSC:</strong> Government High School - (2015-2020), 9.3 CGPA</li>
    </ul>
  `;
  container.style.display = 'block';
}

function showSocial(button){
  setActiveButton(button);
  const container=document.getElementById("about-info");
  container.innerHTML=`
  <h3>🌐 Social Media</h3>
    <ul class="edu-list">
      <li><i class="fa-brands fa-github"></i><strong>GitHub:</strong> <a href="https://github.com/rakeshnayak19" target="_blank">github.com/Katravath Rakesh</a></li>
      <li><i class="fa-brands fa-linkedin"></i><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/katravath-rakesh-6b75712a5/" target="_blank">linkedin.com/Katravath Rakesh</a></li>
      <li><i class="fa-brands fa-instagram"></i><strong>Instagram:</strong> <a href="https://www.instagram.com/rakeshnaik__/following/?next=%2F&hl=en" target="_blank">instagram.com/Katravath Rakesh</a></li>
    </ul>
  
  `;

  container.style.display = 'block';
}

function openLeetCode(button) {
  setActiveButton(button);
  window.open('https://leetcode.com/u/rakeshnayak19/', '_blank');
}


function openModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        message.textContent = "Thanks for reaching out!";
        message.style.color = "lightgreen";
        form.reset();
      } else {
        const data = await response.json();
        message.textContent = data.error || "Oops! Something went wrong.";
        message.style.color = "red";
      }
    } catch (error) {
      message.textContent = "Network error. Please try again later.";
      message.style.color = "red";
    }
  });
});
