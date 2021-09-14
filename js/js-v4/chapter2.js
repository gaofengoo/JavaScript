function sayScript () {
	console.log('<\/script>');
}

let script = document.createElement('script');
script.src = 'js/json.js';
script.async = false;
document.head.appendChild(script);