export class DeveloperInfo {
    name: string;
    address: string;
    linkedIn: string;
    github: string;
    email: string;
    phoneNo: string

    constructor(developer: DeveloperInfo) {
        this.name = developer.name;
        this.address = developer.address;
        this.linkedIn = developer.linkedIn;
        this.github = developer.github;
        this.email = developer.email;
        this.phoneNo = developer.phoneNo;
    }
}