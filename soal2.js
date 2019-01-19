function is_username_valid(username){
	if (!hasUpperCase(username) && hasUnderscore(username) && username.length==8) {
		console.log(true);
	}
};

function hasUpperCase(username){
	for (var i = 0; i < username.length; i++) {
		if (username[i] === username[i].toUpperCase()) {
			return true;
		}
	}
}

function hasUnderscore(username){
	for (var i = 0; i < username.length; i++) {
		if (username[i] === '_') {
			return true;
		}
	}
}


