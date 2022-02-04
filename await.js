async function hello() {
    return await Promise.resolve("Hello");
  };
  hello().then(console.log);



  function mainfunc() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function childfunc() {
    console.log('calling');
    const result = await mainfunc();
    console.log(result);
  }
  
  childfunc();
  