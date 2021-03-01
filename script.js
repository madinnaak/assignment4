function MyCalculateFunction() {
	let name = document.getElementById("name").value;
	let love_letter = document.getElementById("love_is...").value
	if (name=="" && document.getElementById("bid")== ""){
		return "it does not work, please enter groom's name and startingBid"
	}
	
	//StartingBid
	const startingBid = document.getElementById("bid"); 
	const calculate = () => {
		let price = Number(startingBid.value) 
		price = getCheckboxValuesForLoop(startingBid, price)
		price = getCheckboxValuesForLoop(skills, price)
		price = getCheckboxValuesForLoop(reputation, price)
		price = getRadioValue(age, price);
        document.getElementById("result").innerHTML = 'The price for your bride ${person.groom_name} is ${person.groom_price}. Your love letter is "${person.letter_to_groom}"';
    }

	//Skills&Reputation 
	const skills = document.getElementsByClassName("skills");
	const reputation = document.getElementsByClassName("reputation");
	 const getCheckboxValuesForLoop = (html_collection, price) => { 
	for (let i=0; i < html_collection.length; i++) {  
		if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) {
			price = price + Number(html_collection[i].value)
			}
		else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) {
			price = price * Number(html_collection[i].value)
			}
		}
	return price;
	}
	
	
	//Education
    const education = document.getElementById("educationlevel");
	let price = Number(education.value) 
    price = getCheckboxValuesForLoop(education, price)
	
	FamilyNetWorth = document.getElementById("familynet");
	 price = Number(FamilyNetWorth.value);
    price = getCheckboxValuesForLoop(FamilyNetWorth, price);
    
	//Age value
    const age = document.getElementsByName("age"); 
      
    const getRadioValue = (node_list, price) => {  
      node_list.forEach(item => {
        if (item.checked) {
            price = price * Number(item.value)
        }
      })
    return price;
    }
	
	let person = {
       groom_name: name,
       groom_price: price,
	letter_to_groom: love_letter}

//document.getElementById("myBtn").addEventListener("click", MyCalculateFunction);
//document.getElementById("result").innerHTML = `The price for your bride ${person.groom_name} is ${person.groom_price}. Your love letter is "${person.letter_to_groom}"`;
//alert ("The price for your groom ${person.groom_name} is ${person.groom_price}. Your love letter is ${person.letter_to_groom}");
}