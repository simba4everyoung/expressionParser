test();

function parser (str) {

	var strArr = str.split(" ");
	var temp = new Array();

	//----Split the calcultation according to the position of "+" or "-"----
	for (var i = 1, j = 1, t = 0 ; i <= strArr.length; i += 2){
		if((strArr[i] == "+") || (strArr[i] == "-") || (i == strArr.length)){
			for (var tem = parseInt(strArr[j - 1]); j != i; j += 2) {
				if(strArr[j] == "*"){
					tem *= parseInt(strArr[j + 1]);
				}
				else if(strArr[j] == "/"){
					tem /= parseInt(strArr[j + 1]);
				}	
			}
			temp[t] = tem;
			temp[t + 1] = strArr[i];
			t += 2;
			j += 2; 
		}
	}

	temp.pop();

	for (var t = 1, result = temp[t - 1]; t < temp.length; t++){
		if(temp[t] == "+") {
			result += temp[t + 1]; 
		}
		else if(temp[t] == "-") {
			result -= temp[t + 1];
		}
	}

	return result;
}

function test () {
	var testArr = new Array('3', 
							'3 + 7', 
							'6 + 6 / 2', 
							'7 * 3', 
							'6 * 2 + 8 / 2 - 4', 
							'3 + 4 * 7 / 2 - 3 + 9 / 3 * 4');
	var resultArr = new Array(parser(testArr[0]), 
							  parser(testArr[1]), 
							  parser(testArr[2]), 
							  parser(testArr[3]), 
							  parser(testArr[4]), 
							  parser(testArr[5]));
	
	console.log('Test data: ' 
				+ '\n\t\t\t' + testArr[0] 
				+ '\n\t\t\t' + testArr[1] 
				+ '\n\t\t\t' + testArr[2] 
				+ '\n\t\t\t' + testArr[3] 
				+ '\n\t\t\t' + testArr[4] 
				+ '\n\t\t\t' + testArr[5]);
	console.log('Result: ' + resultArr);
	
	if (resultArr = (3, 10, 9, 21, 12)) {
		console.log('PASS');
	}
	else {
		console.log('FAIL');
	}
}