<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Check if the 'users' table exists
        if (!Schema::hasTable('users')) {
            Schema::create("users", function (Blueprint $table) {
                $table->id();
                $table->string("name");
                $table->string("email")->unique();
                $table->string("password");
                $table->string("role")->default('user');
                $table->timestamps();
            });
        } else {
            // If table exists, check for missing columns and add them
            Schema::table('users', function (Blueprint $table) {
                if (!Schema::hasColumn('users', 'name')) {
                    $table->string("name")->after('id');
                }
                if (!Schema::hasColumn('users', 'email')) {
                    $table->string("email")->unique()->after('name');
                }
                if (!Schema::hasColumn('users', 'password')) {
                    $table->string("password")->after('email');
                }
                if (!Schema::hasColumn('users', 'role')) {
                    $table->string("role")->default('user')->after('password');
                }
                if (!Schema::hasColumn('users', 'created_at')) {
                    $table->timestamps();
                }
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("users");
    }
};
