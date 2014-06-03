require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
        // do something
        alert('hello');
    });

    gitbook.events.bind("exercise.submit", function() {
        // do something
    });
});
