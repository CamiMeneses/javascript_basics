function MinWindowSubstring(strArr) {
  nString = strArr[0];
  kString = strArr[1];

  let charCount = kString.length;
  let minLength = nString.length;
  let minStartIndex = 0;
  const char = {};

  //map para los caracteres de la palabra
  for(let i = 0; i < kString.length; i++){
    const current = kString[i];
    char[current] = (char[current] || 0)+ 1;
  }


  for(let l = 0, r = 0; r < nString.length; ){
    // pointer 1
    if (char[nString[r]] > 0) charCount--;
    char[nString[r]]--;
    r++;

    //pointer 2
    while (charCount === 0){
      //miramos si la ventana que tenemos es menor al minimo que ya tengo
      if (( r - l ) < minLength ){
        minLength = r - l;
        minStartIndex = l;
      }

      //pointer 2
      char[nString[l]]++;
      if(char[nString[l]] > 0) charCount++;
      l++;
    }
  }

  res = nString.substr(minStartIndex, minLength)

  return res;
}

// keep this function call here
console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"]));
