# Use the official Nginx base image
FROM nginx

# Optional: Copy custom Nginx configuration if needed
COPY nginx.conf /etc/nginx/nginx.conf

# Optional: Copy your website files into the Nginx HTML directory
# COPY ./your-website-files /usr/share/nginx/html

# Expose port 80, which Nginx uses by default
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
