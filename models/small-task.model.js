class SmallTask {
    job_name = "";
    assigned_person = "";
    start_date = new Date();
    deadline = new Date();

    constructor(job_name, assigned_person, start_date, deadline) {
        this.job_name = job_name;
        this.assigned_person = assigned_person;
        this.start_date = start_date;
        this.deadline = deadline;
    }
}
