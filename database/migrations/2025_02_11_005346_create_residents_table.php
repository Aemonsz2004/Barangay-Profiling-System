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
        Schema::create('residents', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->string('suffix')->nullable();
            $table->date('birthdate');
            $table->enum('gender', ['Male', 'Female', 'LGBTQ+']);
            $table->string('civil_status');
            $table->enum('education_level', ['Primary','Lower_Secondary','Upper_Secondary','College','Vocational', 'No_Education'])->default('No_Education'); // Primary, High School, College, etc.
            $table->enum('occupation', ['IT','Agriculture','Business', 'Government', 'Unemployed']) -> default('Unemployed');
            $table->string('contact_number')->nullable();
            $table->text('address');
            $table->year('registration_year');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('residents');
    }
};
