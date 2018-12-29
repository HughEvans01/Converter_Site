//Computing Data Converter JS
//Hugh Evans

function convert(box1,box2){
  //Get textarea elements (box1 is mostly recently edited element)
  var textarea1 = $("#"+box1+">textarea");
  var textarea2 = $("#"+box2+">textarea");
  //Get value of checked radio buttons
  var selection1 = $("#"+box1+">input[type='radio']:checked").val();
  var selection2 = $("#"+box2+">input[type='radio']:checked").val();

  if (selection1 == "b" && selection2 == "d"){
    var result = textarea1.val().split(" ");
    //Convert from Binary to Denary
    for (i=0; i < result.length; i++){
      result[i] = parseInt(result[i], 2);
    }
    result=result.join(" ");
  } else if (selection1 == "b" && selection2 == "h"){
    var result = textarea1.val().split(" ");
    //Convert from Binary to Hexadecimal
    for (i=0; i < result.length; i++) {
      result[i] = (+parseInt(result[i],2)).toString(16);
      if (result[i].length % 2 != 0) {
        result[i] = "0" + result[i];
      }
    }
    result=result.join(" ");
  } else if (selection1 == "b" && selection2 == "t"){
    var result = textarea1.val().split(" ");
    //Convert from Binary to Text
    for (i = 0; i < result.length; i++) {
      result[i] = String.fromCharCode(parseInt(result[i], 2));
    }
    result=result.join("");
  } else if (selection1 == "d" && selection2 == "b"){
    var result = textarea1.val().split(" ");
    //Convert Denary to Binary
    for (i=0; i<result[i]; i++){
      result[i] = (+result[i]).toString("2");
      while (result[i].length % 8 != 0){
        result[i] = "0" + result[i];
      }
    }
    result=result.join(" ");
  } else if (selection1 == "d" && selection2 == "h"){
    var result = textarea1.val().split(" ");
    //Convert Denary to Hexadecimal
    for (i=0; i < result.length; i++){
      result[i] = (+result[i]).toString(16);
    }
    result=result.join(" ");
  } else if (selection1 == "d" && selection2 == "t"){
    var result = textarea1.val().split(" ");
    //Convert Denary to Text
    for (i=0; i < result.length; i++){
      result[i] = String.fromCharCode(result[i]);
    }
    result=result.join("");
  } else if (selection1 == "h" && selection2 == "d"){
    var result = textarea1.val().split(" ");
    //Convert Hexadecimal to Denary
    for (i=0; i < result.length; i++){
      result[i] = parseInt(result[i], 16);
    }
    result=result.join(" ");
  } else if (selection1 == "h" && selection2 == "b"){
    var result = textarea1.val().split(" ");
    //Convert Hexadecimal to Binary
    for (i=0; i < result.length; i++){
      result[i] = (+parseInt(result[i], 16)).toString("2");
      while (result[i].length % 8 != 0){
        result[i] = "0" + result[i];
      }
    }
    result=result.join(" ");
  } else if (selection1 == "h" && selection2 == "t"){
    var result = textarea1.val().split(" ");
    //Convert Hexadecimal to Text
    for (i=0; i < result.length; i++){
      result[i] = String.fromCharCode(parseInt(result[i], 16));
    }
    result=result.join("");
  } else if (selection1 == "t" && selection2 == "d"){
    var result = textarea1.val().split("");
    //Convert Text to Denary
    for (i=0; i < result.length; i++){
      result[i] = result[i].charCodeAt(0);
    }
    result=result.join(" ");
  } else if (selection1 == "t" && selection2 == "b"){
    var result = textarea1.val().split("");
    //Convert Text to Binary
    for (i=0; i < result.length; i++){
      result[i] = (+result[i].charCodeAt(0)).toString("2");
      while (result[i].length % 8 != 0){
        result[i] = "0" + result[i];
      }
    }
    result=result.join(" ");
  } else if (selection1 == "t" && selection2 == "h"){
    var result = textarea1.val().split("");
    //Convert Text to Hexadecimal
    for (i=0; i < result.length; i++){
      console.log(result[i]);
      result[i] = (+result[i].charCodeAt(0)).toString(16);
      console.log(result[i]);
    }
    result=result.join(" ");
    console.log(result);
  } else {
    var result = "";
  }
  //Output result to page
  textarea2.val(result);
}
