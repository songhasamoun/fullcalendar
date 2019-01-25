$(document).ready(function() {
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      selectable: true,
      selectHelper: true,
      select: function(start, end) {
        var title = prompt('Event Title:');
        var color = '#' + (function co(lor){   
            return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)]) && 
            (lor.length == 6) ?  lor : co(lor); })('');
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end,
            color:color
          };
          $('#calendar').fullCalendar('renderEvent', eventData, true); 
        }
        $('#calendar').fullCalendar('unselect');
      },
      events: [
        {
          title: 'Past is Gone',
          start: '2019-01-01',
          end: '2019-01-05',
          color: "#123456"
        },
        {
          title: 'Conference',
          start: '2019-01-06',
          end: '2019-01-08'
        }
      ]
    });

  });