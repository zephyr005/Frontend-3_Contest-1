let employees = [];

function addEmployee(name, profession, age) {
    const id = employees.length + 1;
    const employee = { id, name, profession, age };
    employees.push(employee);

    document.getElementById('name').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('age').value = '';

    const errorSuccessMessage = document.getElementById('error-success-message');
    errorSuccessMessage.innerHTML = '';
    const successMessage = document.createElement('p');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Success : Employee Added!';
    errorSuccessMessage.appendChild(successMessage);

    displayEmployees();
}

//Display employees on the screen
function displayEmployees() {
    const employeesList = document.getElementById('employees-list');
    employeesList.innerHTML = '';

    if (employees.length === 0) {
        const noEmployeesMessage = document.createElement('p');
        noEmployeesMessage.textContent = 'You have 0 Employees.';
        noEmployeesMessage.style.color = "rgb(128,128,128)"
        employeesList.appendChild(noEmployeesMessage);
    } else {
        employees.forEach((employee) => {
            const employeesContainer = document.createElement('div');
            employeesContainer.className = "employees-container"
            employeesContainer.style.display = "flex";

            const employeeDiv = document.createElement('div');
            employeeDiv.className = "employee-list";
            employeeDiv.style.display = "flex";

            const idDiv = document.createElement('div');
            const nameDiv = document.createElement('div');
            const professionDiv = document.createElement('div');
            const ageDiv = document.createElement('div');

            idDiv.textContent = `${employee.id}.`;
            nameDiv.textContent = `Name: ${employee.name}`;
            professionDiv.textContent = `Profession: ${employee.profession}`
            ageDiv.textContent = `Age: ${employee.age}`;

            employeeDiv.appendChild(idDiv);
            employeeDiv.appendChild(nameDiv);
            employeeDiv.appendChild(professionDiv);
            employeeDiv.appendChild(ageDiv);

            const deleteButton = document.createElement('button');
            deleteButton.className = "delete-button";
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                deleteEmployee(employee.id);
                displayEmployees();
            });

            employeesContainer.appendChild(employeeDiv);
            employeesContainer.appendChild(deleteButton);

            employeesList.appendChild(employeesContainer);
        });
    }
}

//Delete employee 
function deleteEmployee(id) {
    const index = employees.findIndex((employee) => employee.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
    }
    const employeesList = document.getElementById('employees-list');
    employeesList.innerHTML = '';
    if (employees.length === 0) {
        const noEmployeesMessage = document.createElement('p');
        noEmployeesMessage.textContent = 'You have 0 Employees.';
        employeesList.appendChild(noEmployeesMessage);
    }
    const errorSuccessMessage = document.getElementById('error-success-message');
    errorSuccessMessage.innerHTML = '';
    const successMessage = document.createElement('p');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Success : Employee Deleted!';
    errorSuccessMessage.appendChild(successMessage);
}


//Taking input and adding it to the mapping
const adduserBtn = document.getElementById('adduser-btn');

adduserBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;

    if (name && profession && age) {
        if (age <= 0) {
            document.getElementById('age').value = '';
            const errorSuccessMessage = document.getElementById('error-success-message');
            errorSuccessMessage.innerHTML = '';
            const errorMessage = document.createElement('p');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'Error : Please Make sure All the fields are filled before adding in an employee !';
            errorSuccessMessage.appendChild(errorMessage);
        }
        else {
            addEmployee(name, profession, age);
        }
    }
    else {
        const errorSuccessMessage = document.getElementById('error-success-message');
        errorSuccessMessage.innerHTML = '';
        const errorMessage = document.createElement('p');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'Error : Please Make sure All the fields are filled before adding in an employee !';
        errorSuccessMessage.appendChild(errorMessage);
    }
});


// Initial display of employees
displayEmployees();
