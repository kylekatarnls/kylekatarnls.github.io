import { Component } from '@angular/core';
import { RepositoriesService } from "./repositories.service";
import { OnInit } from '@angular/core';
import { Repository, REPOSITORIES } from "./repository";

@Component({
    selector: 'projects',
    template: `
        <p *ngFor="let project of projects">
            <a href="{{project.html_url}}" title="{{project.full_name}}" target="_blank">{{project.name}}</a>
            {{project.getDates()}}<br />
            <span *ngIf="project.language">
                Language: <em>{{project.language}}</em>, size: {{project.getHumanSize()}}
            </span>
            <span *ngIf="!project.language">
                Size: {{project.getHumanSize()}}
            </span>
        </p>
    `,
    styles: [
        `
            p {
                margin: 20px 0;
                padding: 20px;
                border: 1px solid #d8d8d8;
            }
            a {
                color: #336699;
                font-weight: bold;
                text-decoration: none;
            }
            a:hover {
                color: #70b9d5;
            }
            em {
                color: #444444;
            }
        `
    ]
})
export class ProjectsComponent implements OnInit {
    projects: Repository[] = [];
    constructor(private repositoriesService: RepositoriesService) { }
    getProjects(): void {
        let projectsMap: Object = {};
        let usersErase: Object = {
            kylekatarnls: false,
            pug: true
        };
        let addProjects: Function = (user: string, erase: boolean) => {
            return (projects: Repository[]) => {
                for (let project of projects) {
                    let name: string = project.name;
                    if (~REPOSITORIES.indexOf(name) && (erase || !projectsMap[name])) {
                        projectsMap[name] = project;
                    }
                }
                delete usersErase[user];
                if (!Object.keys(usersErase).length) {
                    this.projects = [];
                    for (let projectName in projectsMap) {
                        this.projects.push(new Repository(projectsMap[projectName]));
                    }
                }
            };
        };
       for(let user in usersErase) {
           let erase: boolean = usersErase[user];
           this.repositoriesService.getUserRepositories(user).then(addProjects(user, erase));
       }
    }
    ngOnInit(): void {
        this.getProjects();
    }
}
