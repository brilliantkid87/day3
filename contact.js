function showData() {
    let showName = document.getElementById('input-name').value;
    let showEmail = document.getElementById('input-email').value;
    let showPhone = document.getElementById('input-phone').value;
    let showSubject = document.getElementById('input-subject').value;
    let showMessage = document.getElementById('input-messages').value;
   

    console.log(showName);
    console.log(showEmail);
    console.log(showPhone);
    console.log(showSubject);
    
    if (showName == '') {
        return alert('Name filled')
    }
    if (showEmail == '') {
        return alert('email filled')
    }
    if (showPhone == '') {
        return alert('Phone filled')
    }
    if (showSubject == '') {
        return alert('Subject filled')
    }
    if (showMessage == '') {
        return alert('Message filled')
    }
    
    let emailReceiver = "Brilliantkid87@gmail.com"

    let a = document.createElement('a');
    a.href = ''

    a.click
}


