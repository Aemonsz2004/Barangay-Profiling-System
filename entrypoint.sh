#!/bin/bash
set -e

# Wait for the database to be available (optional: implement a wait loop here)

# Run migrations and seeders
php artisan migrate --force --seed

# Optionally, create an admin user if not exists.
# You can use an Artisan command or a custom script.
# Example using tinker (this may require further logic to avoid duplicate creation):
php artisan tinker <<EOF
if (!App\Models\User::where('email', 'admin123@example.com')->exists()) {
    App\Models\User::create([
        'name' => 'Admin Name',
        'email' => 'admin123@example.com',
        'password' => bcrypt('admin123'),
        'role' => 'admin'
    ]);
}
EOF

exec "$@"
