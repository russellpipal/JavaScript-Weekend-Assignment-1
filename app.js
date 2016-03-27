var claim1 = {
	patientName: 'John Doe',
	visitType: 'Specialist',
	visitCost: 1100
};

var claim2 = {
	patientName: 'Jane Doe',
	visitType: 'Optical',
	visitCost: 100
};

var claim3 = {
	patientName: 'Joe Johnson',
	visitType: 'Emergency',
	visitCost: 31000
};

var claim4 = {
	patientName: 'Sharon Smith',
	visitType: 'Emergency',
	visitCost: 1300
};

var claim5 = {
	patientName: 'Steve Wright',
	visitType: 'Primary Care',
	visitCost: 770
};

var initialList = [claim1, claim2, claim3, claim4, claim5];

var totalPaidOut = 0;

function Claim(name, type, cost) {
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

//adds new claim to list
function addClaim(list, name, type, cost) {
	var newClaim = new Claim(name, type, cost);
	return list.push(newClaim);
}

//Add five more claims, as instructed
addClaim(initialList, 'Jimmy Clem', 'Optical', 110);
addClaim(initialList, 'Coleman Francis', 'Emergency', 140000);
addClaim(initialList, 'Zap Rowsdower', 'Specialist', 5000.01);
addClaim(initialList, 'Flint Ironstag', 'Primary Care', 22000);
addClaim(initialList, 'Mitchell', 'Emergency', 200000);

// determine percentage of claim covered
function claimPercent(aClaim) {
	switch (aClaim.visitType) {
		case 'Optical':
			return 0;
		case 'Specialist':
			return 0.1;
		case 'Emergency':
			return 1;
		case 'Primary Care':
			return 0.5;
		default:
			return 0;
	}
}

//processes claims list
function processClaims(claims) {
	var amtPaid = 0;
	var message = '';
	var jMessage = '';
	for ( var i=0; i<claims.length; i++ ) {
		amtPaid = Math.round(claimPercent(claims[i]) * claims[i].visitCost);
		message = 'Paid out $' + amtPaid.toLocaleString() + ' for ' + claims[i].patientName;
		console.log(message);
		jMessage = '<p>' + message + '</p>';
		$('main').append(jMessage);
		totalPaidOut += amtPaid;
	}
}

$(document).ready(function(){
	processClaims(initialList);
	var totalMessage = 'Total amount paid: $' + totalPaidOut.toLocaleString();
	console.log(totalMessage);
	var jTotalMessage = '<h3>' + totalMessage + '</h3>';
	$('main').append(jTotalMessage);
});
