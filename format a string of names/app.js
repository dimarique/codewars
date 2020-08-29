function list(names){
    let w = [];
    for (const name of names) {
         w.push(Object.values(name).toString());
        //  console.log(w);
    }
    console.log(w);
  }