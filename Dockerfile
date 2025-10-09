FROM php:8.2-apache

RUN apt-get update && apt-get install -y \
    zip unzip curl git libzip-dev && \
    docker-php-ext-install zip pdo pdo_mysql

RUN a2enmod rewrite

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copy everything including public folder
COPY . .

# Set Apache DocumentRoot to /var/www/html/public
RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf

RUN if [ -f composer.json ]; then composer install --no-dev --optimize-autoloader; fi

EXPOSE 80

CMD ["apache2-foreground"]
