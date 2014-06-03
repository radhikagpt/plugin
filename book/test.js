require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
        // do something
        response.write('hello');
    });

    gitbook.events.bind("exercise.submit", function() {
        // do something
    });
});
