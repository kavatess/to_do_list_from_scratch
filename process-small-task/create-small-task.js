const SmallTask = require("../models/small-task.model");

function createSmallTask(job_name, assigned_person, start_date, deadline) {
    const smallTask = new SmallTask(job_name, assigned_person, start_date, deadline);
    return;
}
