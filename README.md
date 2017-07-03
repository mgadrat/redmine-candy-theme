# Redmine Candy Theme

A sweet redmine theme builded with SASS and love.

## Installation

The redmine theme is in the themes/candy folder.

See [redmine theme installation on redmine](http://www.redmine.org/projects/redmine/wiki/Themes)

## Development

### Using Gulp

1. [Install Gulp](http://gulpjs.com/)
2. Open a terminal in the `tools/` folder
3. Run `npm install` to install dependencies
4. Run `gulp` to start the task manager

### Local environment with Docker

1. [Install Docker and Docker Compose](https://docs.docker.com/engine/installation/)
2. Open a terminal in the `docker/` folder
3. Run `docker-compose -f docker-compose.yml up`
4. visit http://localhost/

notes:
Make sure you firewall don't block incoming requests from yoursel
First time you up the containers the redmine one kind of crash because the SQL one
is not ready yet. You can just up a second time and it will work.

## References and links

### Redmine

[HowTo create a custom Redmine theme](http://www.redmine.org/projects/redmine/wiki/HowTo_create_a_custom_Redmine_theme) 

### Librairies

[Font Awesome v.4.7.0](http://fontawesome.io/)

[Select 2 v.4.0.3](https://github.com/select2/select2/releases/tag/4.0.3)

### Inspirations

[FabriceSalvaire/redmine-improved-theme](https://github.com/FabriceSalvaire/redmine-improved-theme)