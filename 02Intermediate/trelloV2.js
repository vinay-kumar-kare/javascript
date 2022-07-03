let myTodos = {
    day : 'Monday',
    meetings :  0,
    meetDone : 0
}


let addMeeting = function(todo, meet = 0){
    todo.meetings = todo.meetings + meet;
}

// addMeeting(myTodos, 2);


let meetDone = function(todo, meet = 0){
    todo.meetDone = (todo.meetDone-meet);
}

let resetDay = function(todo){
    todo.meetings=0;
    todo.meetDone=0;
}

let getSummaryOfDay = function(todo){
    let meetLeft = todo.meetings+ todo.meetDone;
    return `You are have ${meetLeft} meetings today`
}

addMeeting(myTodos, 4);
addMeeting(myTodos, 3);
meetDone(myTodos,5);



console.log(getSummaryOfDay(myTodos));