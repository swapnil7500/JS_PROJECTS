       const Hitesh_API = 'https://api.github.com/users/hiteshchoudhary';
         const followers = document.getElementById('followers');
         const button= document.querySelector('.button');
        const info = function(){
        const req = new XMLHttpRequest();
        req.open('GET',Hitesh_API)
        req.onreadystatechange= function(){
            if (req.readyState == 4 && req.status===200) {
                const data = JSON.parse(req.responseText)
                console.log(data)
                console.log(data.followers);
                followers.innerHTML = `<p>Followers: ${data.followers}</p>`;
                
            }
        }
        req.send();
    }
   
    button.addEventListener('click',info);