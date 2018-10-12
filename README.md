# Dictionary Management Application

The application must satisfy the following requirements:

 Functional Requirements
 - Creating and deleting dictionaries
 - Showing available dictionaries in an overview
 - Editing dictionaries (adding, updating and removing rows)
 - Validating the entire dictionary regarding consistency (see above)
     - Validations should be shown as some kind of problem markers 
        next to the offending part of the dictionary.
     - Problem markers have different severities, e.g. a Duplicate Domains/Ranges problem is less
        severe than a Cycle (in which case you cannot go on processing such a dictionary).
Technical Requirements:
 - Single page web application with React (Redux or any other state management library is optional).
 - Typescript or ES6
 - Build tool and dependency management of your choice
 - It can be server-less, e.g. all data is only stored locally, e.g. using HTML 5 local history API or
    equivalent technologies.