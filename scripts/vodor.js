(function() {
    var phrases = [
        "Vodor",
        "Vodor, Vodor, Vodor",
        "VODOR!",
        "Vodor?",
        "Vodor.... Vodor"
    ];
    module.exports = function(robot) {
        robot.respond(/.*/, function(msg) {
            try {
                msg.send(msg.random(phrases));
            }
            catch (ex) {
                console.log(ex);
            }
        })
    };

}).call(this);
