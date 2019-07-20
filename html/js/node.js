let save = document.getElementById('save');
save.addEventListener('click', function(e){
    e.preventDefault()
    let username = document.getElementById('username').value;
    let sname = document.getElementById('schoolname').value;
    let contact = document.getElementById('contact').value;
    let patt = /[^a-z]/gi;
    let pattSchool = /[^a-z \s]/gi;
    let pattContact = /[^0-9]/gi;
    let msgResult = document.getElementById('usermsg');
    let sResult = document.getElementById('smsg');
    let cMsg = document.getElementById('phonemsg');

    let information = {
        username: username,
        school: sname,
        contact: contact
    }
    let uValidate
    let sValidate
    let cValidate
    //match 
    //valiate on username text field
    if (username.match(patt) != null){
        msgResult.innerHTML = "*user input number or other character beside a -z"
        msgResult.style.color = 'red'
        uValidate = false
    }
    if (username.match(patt) == null){
        msgResult.innerHTML = "*correct username"
        msgResult.style.color = 'green'
        uValidate = true
    }
    if (username == "" || username == null){
        msgResult.innerHTML = "*cannot blank"
        msgResult.style.color = 'red'
        uValidate = false
    }
    //validate school name text field
    if(sname.match(pattSchool) != null){
        console.log("incorrect school name")
        sResult.innerHTML = "*incorrect school name"
        sResult.style.color = 'red'
        sValidate = false
    }
    if (sname.match(pattSchool) == null){
        sResult.innerHTML = "correct school name"
        sResult.style.color = 'green'
        sValidate = true
    }
    if (sname == "" || sname == null){
        sResult.innerHTML = "*cannot blank school"
        sResult.style.color = 'red'
        sValidate = false
    }
    if (contact.length < 9 || contact.length > 10){
        cMsg.innerHTML = "*invalid contact"
        cMsg.style.color = 'red';
        cValidate = false
    }
    if (contact.match(pattContact) != null){

        cMsg.innerHTML = "*invalid contact"
        cMsg.style.color = 'red';
        cValidate = false
    }
    if (contact[0] == '0' && contact.match(pattContact) == null){
        cMsg.innerHTML = "correct"
        cMsg.style.color = "green"
        cValidate = true
    }
    if (uValidate && sValidate && cValidate){
        addToTable(information);
        document.getElementById('save').setAttribute('data-dismiss', "modal")
    }
    
    
})
function addToTable(info){
    let row = document.createElement('tr'); // <tr></tr>
    let column1 = document.createElement('td'); // <td></td>
    let column2 = document.createElement('td');
    let column3 = document.createElement('td');
    let column4 = document.createElement('td');
    let b = document.createElement('button'); //<button></button>
    b.setAttribute("onclick", "removeInfo(this)")
    // console.log(b)
    b.className = "btn btn-outline-primary waves-effect";
    // <button class="btn btn-outline-primary waves-effect"></button>
    //-------------text to be textnode---------
    let usr = document.createTextNode(info.username);
    let sname = document.createTextNode(info.school);
    let contact = document.createTextNode(info.contact);
    let title = document.createTextNode('DELETE');
    //-------------------- append child------------
    column1.appendChild(usr); //<td>text</td>
    column2.appendChild(sname);
    column3.appendChild(contact);
    b.appendChild(title)
    column4.appendChild(b);

    row.appendChild(column1); //<tr> <td>text</td></tr>
    row.appendChild(column2);
    row.appendChild(column3);
    row.appendChild(column4)
    let tbody = document.getElementsByTagName('tbody')[0];
    tbody.appendChild(row);

    //<tbody><tr><td>text</td></tr></tbody>
}
function removeInfo(btn){
    // console.log(btn)
    let r = confirm('jong delete men?')
    if (r==true){
        let parent = btn.parentNode.parentNode.parentNode
        let curentRow = btn.parentNode.parentNode
        parent.removeChild(curentRow)
    }
    
    console.log(parent)
}


