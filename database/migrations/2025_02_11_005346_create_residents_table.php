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

        //  residents table
        Schema::create('residents', function (Blueprint $table) {
            $table->id();

            // Create user_id column without constraint
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->string('suffix')->nullable();
            $table->string('email_address')->nullable();
            $table->date('birthdate');
            $table->enum('gender', ['Male', 'Female', 'LGBTQ+']);
            $table->string('civil_status')->default('Single');
            $table->enum('education_level', ['Primary','Lower_Secondary','Upper_Secondary','College','Vocational', 'No_Education'])
                ->default('No_Education');
            $table->enum('occupation', ['IT','Agriculture','Business', 'Government', 'Unemployed'])
                ->default('Unemployed');
            $table->string('contact_number')->nullable();
            $table->text('address');
            $table->year('registration_year');

            // New fields
            $table->enum('religion', ['Roman Catholic', 'Iglesia ni Cristo', 'Muslim', 'Buddhist', 'Others'])->required();
            $table->string('philhealth_id')->nullable()->default('N/A');
            $table->string('sss')->nullable()->default('N/A');
            $table->string('pagibig_id')->nullable()->default('N/A');
            $table->enum('voter_status', ['Registered', 'Unregistered'])->default('Unregistered');
            $table->string('voter_id')->nullable()->default('N/A');

            $table->string('avatar')->nullable();

            // Foreign Key (after defining all columns)
            $table->unsignedBigInteger('household_id')->nullable();

            $table->softDeletes();
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
