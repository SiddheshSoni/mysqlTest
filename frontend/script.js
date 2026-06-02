    

const userForm = document.getElementById("userForm");
const usersList = document.getElementById("usersList");

const deleteBtnHandler = async (id) =>{
    try{
        const response = await axios.delete(`http://localhost:3000/users/${id}`);
        loadUsers();
    }catch(err){
        console.log(err);
    }
}

const editBtnHandler = async (id) => {
    try {
        const response = await axios.patch(`http://localhost:3000/users/${id}`);
        loadUsers();
    } catch (error) {
        console.log(error);
    }
}

const loadUsers = async () => {
    try {
        const response = await axios.get('http://localhost:3000/users');
        usersList.innerHTML = ''; 
        const users = Array.isArray(response.data) ? response.data : [];
        
        if (users.length > 0) {
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.name} - ${user.email} - ${user.phone}`;
                li.id= user.id;
                
                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";
                deleteBtn.addEventListener('click', ()=> deleteBtnHandler(user.id));
                
                const editBtn = document.createElement("button");
                editBtn.textContent = "Edit";
                editBtn.addEventListener('click', ()=> editBtnHandler(user.id));
                li.appendChild(deleteBtn);
                usersList.appendChild(li);
            });
        } else {
            usersList.innerHTML = '<li>No users found</li>';
        }
    } catch (error) {
        console.error('Error loading users:', error);
        usersList.innerHTML = '<li>Error loading users</li>';
    }
};

const submitHandler = async (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    
    try {
        const response = await axios.post('http://localhost:3000/users', { name, email, phone });
        alert('User added successfully!');
        userForm.reset();
        loadUsers(); // Reload users list after adding
    } catch (error) {
        console.error('Error:', error);
        alert('Error: ' + (error.response?.data || error.message));
    }
};

userForm.addEventListener('submit', submitHandler);

// Load users when page loads
loadUsers();


