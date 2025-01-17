# pull the base httpd image
FROM httpd:alpine

# copy the index.html to the document root of the web server
COPY ./index.html /usr/local/apache2/htdocs/index.html

# copy the style.css to the document root of the web server
COPY ./style.css /usr/local/apache2/htdocs/style.css

# copy the login to the document root of the web server
COPY ./login/ /usr/local/apache2/htdocs/login/

# copy the register to the document root of the web server
COPY ./register/ /usr/local/apache2/htdocs/register/

# copy the viewData to the document root of the web server
COPY ./viewData/ /usr/local/apache2/htdocs/viewData/

# copy the welcome to the document root of the web server
COPY ./welcome/ /usr/local/apache2/htdocs/welcome/

# copy the mediaqueries.css to the document root of the web server 
COPY ./mediaqueries.css /usr/local/apache2/htdocs/mediaqueries.css

# expose the port 80
EXPOSE 80
