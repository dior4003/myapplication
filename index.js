function my_converter(krill) {
    let lookup = {А:"A" , а:"a" ,Б:"B"},
    lotin = '',
    i;
    for ( i in lookup ) {
      while ( krill >= lookup[i] ) {
        lotin += i;
      }
    }
    console.log(lotin);
  }
my_converter("АБ")