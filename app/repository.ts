export const REPOSITORIES = [
    'js-phpize',
    'pug-minify',
    'pug-assets',
    'pug-demo',
    'pug-phalcon',
    'pug-filter-stylus',
    'pug-filter-sbp',
    'pug-filter-markdown',
    'pug-filter-coffee-script',
    'pug-filter-base',
    'pug-symfony',
    'ci-pug-engine',
    'ci-pug',
    'pug',
    'kylekatarnls.github.io',
    'nodejs-php-fallback',
    'csrfprotect',
    'smart-thumbs',
    'sgame',
    'hotnode',
    'vicopo',
    'connect4',
    'insearch'
];

export class Repository {
    id: number;
    name: string;
    html_url: string;
    full_name: string;
    created_at: string;
    updated_at: string;
    language: string;
    size: number;

    constructor(data: Object = {}) {
        for (var i in data) {
            this[i] = data[i];
        }
    }

    getDates(): string {
        var created = new Date(this.created_at);
        var updated = new Date(this.updated_at);

        return `
            created at: ${created.toLocaleDateString()},
            last update: ${updated.toLocaleDateString()}
        `;
    }

    getHumanSize(): string {
        let units = ['K', 'M', 'G', 'T', 'P'];
        for (var size = this.size; size >= 1024; size /= 1024) {
            units.shift();
        }
        size = Math.round(size * 10) / 10;
        let unit = units.shift();

        return `${size} ${unit}B`;
    }
}