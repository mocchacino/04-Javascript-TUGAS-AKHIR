function buat_login(){
    var getIdButton = document.getElementById("X")
    getIdButton.parentElement.removeChild(getIdButton)

    var p = document.createElement("p")
    p.className = "tulisan_login"
    p.innerHTML = "Silahkan Mendaftar"
    
    var element = document.getElementsByTagName("div")[0]
    element.appendChild(p)

    var form = document.createElement("form")
    element.appendChild(form)

    var label = document.createElement("label")
    label.innerHTML = "Nama User"
    form.appendChild(label)

    var input_nama = document.createElement("input")
    input_nama.type = "text"
    input_nama.name = "nama"
    input_nama.placeholder = "Nama User.."
    input_nama.className = "form_login"
    form.appendChild(input_nama)

    var label2 = document.createElement("label")
    label2.innerHTML = "Nomor Handphone"
    form.appendChild(label2)

    var input_hp = document.createElement("input")
    input_hp.type = "telp"
    input_hp.name = "nohp"
    input_hp.placeholder = "Nomor Handphone.."
    input_hp.className = "form_login"
    form.appendChild(input_hp)

    var label3 = document.createElement("label")
    label3.innerHTML = "Username"
    form.appendChild(label3)

    var input_username = document.createElement("input")
    input_username.type = "text"
    input_username.name = "username"
    input_hp.placeholder = "Username atau email.."
    input_username.className = "form_login"
    form.appendChild(input_username)

    var label4 = document.createElement("label")
    label4.innerHTML = "Password"
    form.appendChild(label4)

    var input_password = document.createElement("input")
    input_password.type = "password"
    input_password.name = "password"
    input_hp.placeholder = "Password.."
    input_password.className = "form_login"
    form.appendChild(input_password)

    var tombol = document.createElement("input")
    tombol.type = "submit"
    tombol.className = "tombol_login"
    tombol.value = "DAFTAR SEKARANG"
    form.appendChild(tombol)
}