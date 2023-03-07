var btn = document.querySelector('.btn');

btn.addEventListener('click', storeItems);

function storeItems(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    if(name == '' || email == '') {
        alert('Enter all fields');
    }
    else {
        localStorage.setItem('User-name', name);
        localStorage.setItem('User-email', email);
        console.log('Name : ' + localStorage.getItem('User-name'));
        console.log('Email : ' + localStorage.getItem('User-email'));
    }
}