$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultView: 'month',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'Event Title',
                start: '2023-05-01',
                end: '2023-05-03'
            },
            // Add more events here
        ]
    });
});
