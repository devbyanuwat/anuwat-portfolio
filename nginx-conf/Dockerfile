# Use an official Nginx image as a parent image
FROM nginx:latest

# Copy your Nginx configuration file(s) to the container
COPY nginx.conf /etc/nginx/nginx.conf
COPY conf.d/default.conf /etc/nginx/conf.d/default.conf

# (Optional) Copy your static web content to the container if needed
# COPY /path/to/your/static/content /usr/share/nginx/html

# Expose the port on which Nginx will run (default is 80)
EXPOSE 80

# Start Nginx when the container is launched
CMD ["nginx", "-g", "daemon off;"]
