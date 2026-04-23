async function controllacredenziali() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
     if (!username || !password ) 
         return alert("Scrivi un nome! e password");


    const res = await fetch(`/login?username=${username}&password=${password}`);
    const dati = await res.json();
     document.getElementById('Risultato').innerText = dati.messaggio;
     if (dati.messaggio === 1) {
        document.getElementById('Risultato').innerText = "Benvenuto nel sito"
        document.getElementById('username').style.display = 'none';
        document.getElementById('password').style.display = 'none';
        document.getElementById('btn-registrati').style.display = 'none';
     } else {
        document.getElementById('Risultato').innerText = "hai sbagliato qualcosa"
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
     }
    }
    document.getElementById('btn-registrati').addEventListener('click',controllacredenziali)

    async function loggati() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password)
        return alert("Scrivi lo username e password");

    const res = await fetch("/login2", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `username=${username}&password=${password}`
    });

    const json = await res.json();

    if (json.messaggio == 1){
        document.getElementById("risultato").innerText = "Accesso effettuato";
    }
    else {
        document.getElementById("risultato").innerText = "Accesso negato";
    }
}

document.getElementById('btn-registrati2').addEventListener('click', loggati);

