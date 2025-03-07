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

        
        Schema::create('economic_activities', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('business_name')->required();
            $table->enum('business_type', ['Sari-sari store', 'Internet cafe', 'Restaurant', 'Hardware store', 'Bakery', 'Salon', 'Barber shop', 'Tailoring shop', 'Laundry shop', 'Carpentry shop', 'Vulcanizing shop', 'Auto repair shop', 'Gasoline station', 'Pharmacy', 'Clinic', 'Hospital', 'School', 'Church', 'Others'] )->default(null)->required();
            $table->string('owner_name')->required();
            $table->text('address')->required();
            $table->string('contact_number')->required();
            $table->string('email_address')->required();
            $table->string('business_permit')->required();
            $table->integer('number_of_employees');

            // date_established ? add : timestamps();
            $table->string('gross_annual_income')->nullable();
            $table->string('description')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('economic_activities');
    }
};
