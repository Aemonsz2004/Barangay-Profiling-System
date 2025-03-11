#!/bin/bash
set -e

# Optional: Wait for the database to be available (add a loop if needed)

# Run Laravel migrations and seed the database
php artisan migrate --force --seed

# Optionally, create an admin user if one doesn't already exist.
# Using a heredoc to run a tinker script:
php artisan tinker <<'EOF'
if (!App\Models\User::where('email', 'admin123@example.com')->exists()) {
    App\Models\User::create([
        'name' => 'Admin Name',
        'email' => 'admin123@example.com',
        'password' => bcrypt('admin123'),
        'role' => 'admin'
    ]);
}
EOF

# Finally, run the main command (provided via CMD in the Dockerfile)
exec "$@"
