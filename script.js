//Computing Data Converter JS
//Hugh Evans

function convert(box1,box2){
  //Get textarea elements (box1 is mostly recently edited element)
  var textarea1 = $("#"+box1+">textarea");
  var textarea2 = $("#"+box2+">textarea");
  //Get value of checked radio buttons
  var selection1 = $("#"+box1+">input[type='radio']:checked").val();
  var selection2 = $("#"+box2+">input[type='radio']:checked").val();

  var result = textarea1.val().split(" ");
  if (textarea1.val() == ""){
    result = [""];
  } else if (selection1 == "b" && selection2 == "d"){
    //Convert from Binary to Denary
    for (i=0; i < result.length; i++){
      result[i] = parseInt(result[i], 2);
    }

  } else if (selection1 == "b" && selection2 == "h"){
    //Convert from Binary to Hexadecimal
    for (i=0; i < result.length; i++) {
      result[i] = (+parseInt(result[i],2)).toString(16);
      if (result[i].length % 2 != 0) {
        result[i] = "0" + result[i];
      }
    }

  } else if (selection1 == "b" && selection2 == "t"){
    //Convert from Binary to Text
    for (i = 0; i < result.length; i++) {
      result[i] = String.fromCharCode(parseInt(result[i], 2));
    }

  } else if (selection1 == "d" && selection2 == "b"){
    //Convert Denary to Binary
    for (i=0; i<result[i]; i++){
      result[i] = (+result[i]).toString("2");
      while (result[i].length % 8 != 0){
        result[i] = "0" + result[i];
      }
    }

  } else if (selection1 == "d" && selection2 == "h"){
    //Convert Denary to Hexadecimal
    for (i=0; i < result.length; i++){
      result[i] = (+result[i]).toString(16);
    }

  } else if (selection1 == "d" && selection2 == "t"){
    //Convert Denary to Text
    for (i=0; i < result.length; i++){
      result[i] = String.fromCharCode(result[i]);
    }

  } else if (selection1 == "h" && selection2 == "d"){
    //Convert Hexadecimal to Denary
    for (i=0; i < result.length; i++){
      result[i] = parseInt(result[i], 16);
    }

  } else if (selection1 == "h" && selection2 == "b"){
    //Convert Hexadecimal to Binary
    for (i=0; i < result.length; i++){
      result[i] = (+parseInt(result[i], 16)).toString("2");
      while (result[i].length % 8 != 0){
        result[i] = "0" + result[i];
      }
    }

  } else if (selection1 == "h" && selection2 == "t"){
    //Convert Hexadecimal to Text
    for (i=0; i < result.length; i++){
      result[i] = String.fromCharCode(parseInt(result[i], 16));
    }

  } else if (selection1 == "t" && selection2 == "d"){
    //Convert Text to Denary
    for (i=0; i < result.length; i++){
      result[i] = result[i].charCodeAt(0);
    }

  } else if (selection1 == "t" && selection2 == "b"){
    //Convert Text to Binary
    for (i=0; i < result.length; i++){
      result[i] = (+result[i].charCodeAt(0)).toString("2");
      while (result[i].length % 8 != 0){
        result[i] = "0" + result[i];
      }
    }

  } else if (selection1 == "t" && selection2 == "h"){
    //Convert Text to Hexadecimal
    for (i=0; i < result.length; i++){
      result[i] = (+result[i].charCodeAt(0)).toString(16);
    }
  }
  //Output result to page
  textarea2.val(result.join(""));
}
