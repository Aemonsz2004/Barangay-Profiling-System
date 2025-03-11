FROM richarvey/nginx-php-fpm:3.1.6

# Copy your project files into the container
COPY . .

# Allow Composer to run (set SKIP_COMPOSER to 0)
ENV SKIP_COMPOSER 0

# Set additional environment variables
ENV WEBROOT /var/www/html/public
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 1
ENV REAL_IP_HEADER 1

# Laravel environment configuration
ENV APP_ENV production
ENV APP_DEBUG false
ENV LOG_CHANNEL stderr
ENV COMPOSER_ALLOW_SUPERUSER 1

# Install PHP dependencies (this creates vendor/autoload.php)
RUN composer install --no-dev --optimize-autoloader

# Install Node dependencies and build production assets using Vite
RUN npm install && npm run build

# Copy the custom entrypoint script into the container and make it executable
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Set the entrypoint so that our script runs before the main command
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

# Use the default start script provided by the base image
CMD ["/start.sh"]
