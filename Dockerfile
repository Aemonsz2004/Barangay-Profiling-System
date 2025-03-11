FROM richarvey/nginx-php-fpm:3.1.6

# Copy the application code
COPY . .

# Disable SKIP_COMPOSER if needed and install dependencies (if not already handled)
ENV SKIP_COMPOSER 1
# You might need to run composer manually or ensure dependencies are installed elsewhere

# Copy the entrypoint script into the image
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Set environment variables
ENV WEBROOT /var/www/html/public
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 1
ENV REAL_IP_HEADER 1

ENV APP_ENV production
ENV APP_DEBUG false
ENV LOG_CHANNEL stderr

ENV COMPOSER_ALLOW_SUPERUSER 1

# Use the custom entrypoint script
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

# Start the server
CMD ["/start.sh"]
