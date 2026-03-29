let severity = "High";
let isReproducible = false;
let affectedModule = "Database";

switch (severity) {
    case "Critical":
        if (isReproducible) {
            console.log("Priority: P0 - Assign to Tech Lead");
        } else {
            console.log("Priority: P1 - Assign to Senior QA");
        }
        break;
    default:
        if (affectedModule === "Database") {
            console.log("Assign to DBA Team");
        } else {
            console.log("Priority: P2 - Assign to Developer");
        }
        break;
}
