function schedule (deadlines, meetings){
	deadlines =  deadlines.sort(function(a, b){return a.dueBy - b.dueBy}); //sort with earliest dueBy first
	meetings = startingBeforeDeadline(meetings, deadlines[0]);
	for (var i = deadlines.length - 1; i >= 0; i--) { //iterate backwards through deadlines
		deadlines[i] = findTimeBetween(deadlines[i], meetings, deadlines[i].dueBy);
	};
	return deadlines;
}

function findTimeBetween(dead, meetings, endTime){
	dead.startTime = endTime - dead.totalTime;
	while(offender = conflictsWith(dead, meetings)){
		dead.startTime = offender.startTime - offender.buffer - dead.totalTime;
		if (dead.startTime < currentTime){
			RIP();
		}
		while(deadOffender = conflictsWith(dead, deadlines)){
			dead.startTime = deadOffender.startTime - dead.totalTime;
			if (dead.startTime < currentTime){
				RIP();
			}
		}
	}
	return dead;
}

function conflictsWith(dead, meetings){
	meetings = startingBeforeDeadline(meetings, dead);
	var finished = dead.startTime + dead.totalTime;
	for (var i = meetings.length - 1; i >= 0; i--) {
		if(meetings[i].startTime <= dead.startTime && meetings[i].endTime >= dead.startTime ||
			meetings[i].startTime <= finished && meetings[i].endTime >= finished){
			return meetings[i];
		}
	};
	return false;
}

function startingBeforeDeadline(meetings, dead){
	meetings.sort(function(a, b){return a.startTime-b.startTime}); //earliest start first
	var meet = [];
	for (var i = 0; meetings[i].startTime < dead.dueBy; i++) {
		meet.push(meetings[i]);
	};
	return meet;
}

module.exports = schedule;