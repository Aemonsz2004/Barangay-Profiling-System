#    ---- PHP Base Image ----
FROM php:8.2-fpm AS app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    unzip \
    curl \
    git \
    vim \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libzip-dev \
    nodejs \
    npm

# Set working directory
WORKDIR /var/www

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Install Composer
COPY --from=composer/composer:2 /usr/bin/composer /usr/local/bin/composer
COPY docker/dev/php.ini /usr/local/etc/php/php.ini

# Copy application files
COPY . .

# Install Laravel dependencies
RUN composer install --optimize-autoloader


# Install dependencies and build frontend
RUN npm install

RUN npm run build

# Expose ports
EXPOSE 8000 5173

# Start both Laravel and React

CMD ["sh", "-c", "php artisan migrate --seed && php-fpm && npm run dev"]