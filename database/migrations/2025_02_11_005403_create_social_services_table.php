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
        Schema::create('social_services', function (Blueprint $table) {
            $table->id();
            $table->enum('service_type', ['Healthcare', 'Education', 'Social Welfare']);
            $table->string('name')->required();
            $table->text('description')->nullable();
            $table->string('contact')->nullable();
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('social_services');
    }
};
