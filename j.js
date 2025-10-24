document.getElementById('jobForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const company = document.getElementById('company').value;
    const position = document.getElementById('position').value;
    const dateApplied = document.getElementById('dateApplied').value;
  
    if (company && position && dateApplied) {
      const jobList = document.getElementById('jobList');
      const li = document.createElement('li');
  
      li.innerHTML = `
        <div>
          <strong>${position}</strong> at ${company}<br>
          <span>Applied on: ${new Date(dateApplied).toLocaleDateString()}</span>
        </div>
        <button class="delete">Delete</button>
      `;
  
      jobList.appendChild(li);
  
      // Clear form fields
      document.getElementById('jobForm').reset();
    }
  });
  
  // Event delegation for delete buttons
  document.getElementById('jobList').addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
      e.target.parentElement.remove();
    }
  });
  