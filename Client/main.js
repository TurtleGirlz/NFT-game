	/** Connect to Moralis server */
    const serverUrl = "https://fvmqi2hfazhl.usemoralis.com:2053/server";
    const appId = "st4vWqEAqZ2fkfJIuVJBzznxO1sD7lVb16kpNdJS";
    Moralis.start({ serverUrl, appId });

    /** Add from here down */
    async function login() {
      let user = Moralis.User.current();
      if (!user) {
       try {
          user = await Moralis.authenticate({ signingMessage: "Hello World!" })
          console.log(user)
          console.log(user.get('ethAddress'))
       } catch(error) {
         console.log(error)
       }
      }
    }
    
    async function logOut() {
      await Moralis.User.logOut();
      console.log("logged out");
    }
    
    document.getElementById("btn-login").onclick = login;
    document.getElementById("btn-logout").onclick = logOut;
    
    /** Useful Resources  */
    
    // https://docs.moralis.io/moralis-server/users/crypto-login
    // https://docs.moralis.io/moralis-server/getting-started/quick-start#user
    // https://docs.moralis.io/moralis-server/users/crypto-login#metamask
    
    /** Moralis Forum */
    
    // https://forum.moralis.io/