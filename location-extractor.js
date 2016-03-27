
function extract_locations(text) {
//    console.log("starting extract_locations");
    locations = new Set();

    for (var language in keywords) {
        switch(language) {
            case "English":
                titled = "((?:(?:[A-Z][a-z]+) )?[A-Z][a-z]+|[A-Z]{2,})";

                //before keywords
                regexp = new RegExp("(?:(?:[^A-Za-z]|^)(?:" + keywords.English.before.join("|") + ") )" + titled, 'g');
                while(match = regexp.exec(text)) {
                    locations.add(match[1])
                }

                //after keywords
                regexp = new RegExp(titled + " (?:" + keywords.English.after.join("|") + ")", 'g');
                while(match = regexp.exec(text)) {
                    locations.add(match[1])
                }

                //location_pattern + ur"'s (?:" + "|".join(d['possessed']) + ")"
                regexp = new RegExp(titled + "'s (?:" + keywords.English.possessed.join("|") + ")", 'g');
                while(match = regexp.exec(text)) {
                    locations.add(match[1])
                }

            case "Spanish":

            nonlocations = ["January","February","March","April","May","June","July","August","September","October","November","December","AP","BBC","Pictures","You","The",];

            // convert locations from a set to an array
            locations = Array.from(locations);

            locations = locations.filter(function(location){ return nonlocations.indexOf(location) == -1 });

            return locations;

        }
    }

}
