const URL = 'https://jsonplaceholder.typicode.com/users'

const getData2 = async (URL) => {
	const res = await fetch(URL);
	const data = await res.json();
	return data;
};

try {
	const data = await getData2(URL);
	console.log(data);
    let list = document.getElementById('list');

    data.forEach(element => {
        let item = document.createElement("li");
        item.appendChild(document.createTextNode(element.name + ' : ' + element.username + " - "  + element.email));

        list.appendChild(item);
    });
} catch (error) {
	console.log(error);
}
