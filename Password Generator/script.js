const button = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");
const show = document.querySelector(".show");
const passwordInput = document.getElementById("Password");

generateButton.onclick = function generatePassword(){

      const character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_";


      const pwdLength = 10;
      let Password = "";

      for(let i = 0; i < pwdLength; i++){
        let generatePwd = Math.floor(Math.random() * character.length);
        Password += character.substring(generatePwd, generatePwd + 1)
      }


      passwordInput.value = Password;



}


copyButton.onclick = function copyPwd(){

        const passwordValue = passwordInput.value;

        if(passwordValue.trim() === ""){
          alert("Password is empty. Generate a password first.")
        }else{navigator.clipboard.writeText(passwordValue).then(function(){
          show.innerHTML = "Your new Password is:<br>" + passwordValue;
          show.classList.add("active");
          setTimeout(() => {
            show.classList.remove("active");
          }, 2000);
          passwordInput.value = "";
        });
      }
}