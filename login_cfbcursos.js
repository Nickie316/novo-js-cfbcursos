// (150) Disponibilizando Conteudo via CDN - Parte 01 Tela de Login - Parte 10

class Login {

   // Replit It
   // https://Login.kakashisuzuki.repl.co/?matricula=123&senha=321
   /* let http = require('http')
   let url = require('url')
   
   http.createServer((req, res) => {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.writeHead(200, { 'Content-Type': 'application/json' })
   
      let parametros = url.parse(req.url, true)
   
      let mat = parametros.query.matricula
      let pas = parametros.query.senha
   
      let dados = null
   
      if(mat === '123' && pas === '321') {
         dados = {
            nome: 'Kaido',
            accesso: 10
         }
      }
   
      res.end(JSON.stringify(dados))
   }) .listen(8080) */

   static logado = false
   static matlogado = null
   static nomelogado = null
   static acessologado = null
   static estilocss = null
   static callback_ok = null
   static callback_naook = null
   static config = {
      cor: '#048',
      img: './logo.png'
   }
   static endpoint = 'https://login.kakashisuzuki.repl.co/'
   // https://Login.kakashisuzuki.repl.co/?matricula=123&senha=321

   static login = (callback_ok, callback_naook, config = null) => {
      if(config !== null) {
         this.config = config
      }
      this.callback_ok = () => { callback_ok() }
      this.callback_naook = () => { callback_naook() }

      this.estilocss = 
      `.fundoLogin { 
         display: flex; 
         justify-content: center; 
         align-items: center;
         width: 100%; 
         height: 100vh; 
         position: absolute; 
         top: 0px; 
         left: 0px; 
         background-color: rgba(0, 0, 0, 0.75); 
         box-sizing: border-box; 
      }` +
      
      `.baseLogin { 
         display: flex;
         justify-content: center; 
         align-items: stretch; 
         width: 50%; 
         box-sizing: inherit; 
      }` +
      
      `.elementosLogin {
         display: flex;
         justify-content: center;
         align-items: flex-start;
         flex-direction: column;
         width: 50%;
         background-color: #EEE;
         padding: 10px;
         border-radius: 10px 0px 0px 10px;
         box-sizing: inherit;
      }` +
      
      `.logoLogin {
         display: flex;
         justify-content: center;
         align-items: center;
         width: 50%;
         background-color: #BBB;
         padding: 10px;
         border-radius: 0px 10px 10px 0px;
         box-sizing: inherit;
      }` +
      
      `.logoLogin img {
         width: 90%;
         box-sizing: inherit;
      }` +
      
      `.campoLogin {
         display: flex;
         justify-content: flex-start;
         align-items: flex-start;
         flex-direction: column;
         box-sizing: inherit;
         width: 100%;
         margin-bottom: 10px;
      }` +
      
      `.campoLogin label {
         font-size: 18px;
      }` +
      
      `.input {
         font-size: 18px;
         padding: 5px;
         background-color: #FFF;
         border-radius: 5px;
         width: 100%;
      }` +
      
      `.botoesLogin { 
         display: flex; 
         justify-content: 
         space-around; 
         align-items: center; 
         width: 100%; 
         box-sizing: inherit; 
      }` +
      
      `.botoesLogin button { 
         cursor: pointer; 
         background-color: ${this.config.cor}; 
         color: #FFF; 
         border-radius: 5px; 
         padding: 10px; 
         width: 100px; 
         box-sizing: inherit; 
      }`

      const styleEstilo = document.createElement("style")
      styleEstilo.setAttribute("id", "id_estiloLogin")
      styleEstilo.setAttribute("rel", "stylesheet")
      styleEstilo.innerHTML = this.estilocss
      document.head.appendChild(styleEstilo)

      //const corpo = document.body

      const fundoLogin = document.createElement('div')
      fundoLogin.setAttribute('id', 'fundoLogin')
      fundoLogin.setAttribute('class', 'fundoLogin')
      document.body.prepend(fundoLogin) // Anexa no inicio

      const baseLogin = document.createElement('div')
      baseLogin.setAttribute('id', 'baseLogin')
      baseLogin.setAttribute('class', 'baseLogin')
      fundoLogin.appendChild(baseLogin) 

      const elementosLogin = document.createElement('div')
      elementosLogin.setAttribute('id', 'elementosLogin')
      elementosLogin.setAttribute('class', 'elementosLogin')
      baseLogin.appendChild(elementosLogin) 

      const campoLoginUsername = document.createElement('div')
      campoLoginUsername.setAttribute('id', 'campoLoginUsername')
      campoLoginUsername.setAttribute('class', 'campoLogin')
      elementosLogin.appendChild(campoLoginUsername) 

      const labelUsername = document.createElement('label')
      labelUsername.innerHTML = 'Username'
      campoLoginUsername.appendChild(labelUsername) 

      const inputLoginUsername = document.createElement('input')
      inputLoginUsername.setAttribute('id', 'f_username')
      inputLoginUsername.setAttribute('type', 'text')
      inputLoginUsername.setAttribute('name', 'f_username')
      inputLoginUsername.setAttribute('class', 'campoLogin input')
      elementosLogin.appendChild(inputLoginUsername) 

      const campoLoginSenha = document.createElement('div')
      campoLoginSenha.setAttribute('id', 'campoLoginSenha')
      campoLoginSenha.setAttribute('class', 'campoLogin')
      elementosLogin.appendChild(campoLoginSenha) 

      const labelSenha = document.createElement('label')
      labelSenha.innerHTML = 'Senha'
      campoLoginSenha.appendChild(labelSenha) 

      const inputLoginSenha = document.createElement('input')
      inputLoginSenha.setAttribute('id', 'f_senha')
      inputLoginSenha.setAttribute('type', 'password')
      inputLoginSenha.setAttribute('name', 'f_Senha')
      inputLoginSenha.setAttribute('class', 'campoLogin input')
      elementosLogin.appendChild(inputLoginSenha) 

      const botoesLogin = document.createElement('div')
      botoesLogin.setAttribute('class', 'botoesLogin')
      elementosLogin.appendChild(botoesLogin)
      
      const btn_login = document.createElement('button')
      btn_login.setAttribute('id', 'btn_login')
      btn_login.innerHTML = 'Login'

      btn_login.addEventListener('click', (evt) => {
         this.verificaLogin()
      })

      botoesLogin.appendChild(btn_login)

      const btn_cancelar = document.createElement('button')
      btn_cancelar.setAttribute('id', 'btn_cancelar')
      btn_cancelar.innerHTML = 'cancelar'

      btn_cancelar.addEventListener('click', (evt) => {
         this.fechar()
      })

      botoesLogin.appendChild(btn_cancelar)

      const logoLogin = document.createElement('div')
      logoLogin.setAttribute('id', 'logoLogin')
      logoLogin.setAttribute('class', 'logoLogin')
      baseLogin.appendChild(logoLogin)

      const imgLogoLogin = document.createElement('img')
      imgLogoLogin.setAttribute('src', this.config.img)
      imgLogoLogin.setAttribute('title', 'CFBCursos')
      logoLogin.appendChild(imgLogoLogin)
   }

   static verificaLogin = () => {
      const mat = document.querySelector('#f_username').value
      const pass = document.querySelector('#f_senha').value
      
      /*if(mat === '123' && pass === '321') {
         return true
      } else {
         false
      }*/
      
      const endpoint = `https://Login.kakashisuzuki.repl.co/?matricula=${mat}&senha=${pass}`

      fetch(endpoint)
         .then(res => res.json())
         .then(res => {
            // console.log(res)
            if (res) {
               this.logado = true,
               this.matlogado = mat,
               this.nomelogado = res.nome,
               this.acessologado = res.acesso
               this.callback_ok()
               this.fechar()
            } else {
               // console.log('Usuário não encontrado')
               this.logado = false,
               this.matlogado = null,
               this.nomelogado = null,
               this.acessologado = null
               this.callback_naook()
            }
         })
   }

   static fechar = () => {
      const fundoLogin = document.querySelector('#fundoLogin')
      fundoLogin.remove()

      const id_estiloLogin = document.querySelector('#id_estiloLogin')
      id_estiloLogin.remove()
   }
}

// export { Login }
