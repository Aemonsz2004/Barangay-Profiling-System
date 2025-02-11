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
        Schema::create('people', function (Blueprint $table) {
            $table->id();
            $table->date('birthdate');
            $table->enum('gender', ['Male', 'Female', 'LGBTQ+']);
            $table->enum('education_level', ['Primary','Lower_Secondary','Upper_Secondary','College','Vocational', 'No_Education'])->default('No_Education');
            $table->enum('occupation', ['IT','Agriculture','Business', 'Government', 'Unemployed']) -> default('Unemployed');
            $table->year('registration_year');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('people');
    }
};
