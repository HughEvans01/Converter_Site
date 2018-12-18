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
  }else if (selection1 == "b" && selection2 == "d"){
    //Convert from binary to denary
    for (i=0; i < result.length; i++){
      result[i] = parseInt(result[i], 2);
    }

  } else if (selection1 == "b" && selection2 == "h"){
    //Convert from binary to hex
    for (i=0; i < result.length; i++) {
      result[i] = (+parseInt(result[i],2)).toString(16);
      if (result[i].length % 2 != 0) {
        result[i] = "0" + result[i];
      }
    }

  } else if (selection1 == "b" && selection2 == "t"){
    //Convert from binary to text
    for (i = 0; i < result.length; i++) {
      result[i] = String.fromCharCode(parseInt(result[i], 2));
    }

  } else if (selection1 == "d" && selection2 == "b"){
    //Convert denary to binary
    for (i=0; i<result[i]; i++){
      result[i] = (+result[i]).toString("2");
      while (result[i].length % 8 != 0){
        result[i] = "0" + result[i];
      }
    }


  } else if (selection1 == "d" && selection2 == "h"){
    //Convert denary to hex
    for (i=0; i < result.length; i++){
      result[i] = (+result[i]).toString(16);
    }

  } else if (selection1 == "d" && selection2 == "t"){
    //Convert denary to text
    for (i=0; i < result.length; i++){
      result[i] = String.fromCharCode(result[i]);
    }
  } else if (selection == "h" && selection2 == "b"){
      //Convert hex to Binary
      //for (i=0; i < result.length; i++){
      //  result[i] =
      //}
  //}

  }
  textarea2.val(result.join(""));
}
