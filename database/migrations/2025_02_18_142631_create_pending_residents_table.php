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
        Schema::create('pending_residents', function (Blueprint $table) {
            $table->id();
            
            $table->unsignedBigInteger('user_id')->constrained()->onDelete('cascade'); // Link to the user
            $table->string('status')->default('pending'); // pending, approved, rejected


            
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->string('suffix')->nullable();
            $table->string('email_address')->nullable();
            $table->date('birthdate');
            $table->enum('gender', ['Male', 'Female', 'LGBTQ+']);
            $table->string('civil_status');
            $table->enum('education_level', ['Primary','Lower_Secondary','Upper_Secondary','College','Vocational', 'No_Education'])
                ->default('No_Education');
            $table->enum('occupation', ['IT','Agriculture','Business', 'Government', 'Unemployed'])
                ->default('Unemployed');
            $table->string('contact_number')->nullable();
            $table->text('address');
            $table->year('registration_year');

            // New fields
            $table->enum('religion', ['Roman Catholic', 'Iglesia ni Cristo', 'Muslim', 'Protestant', 'Buddhist', 'Others'])->required();
            $table->string('philhealth_id')->unique()->nullable();
            $table->string('sss')->unique()->nullable();
            $table->string('pagibig_id')->unique()->nullable();
            $table->enum('voter_status', ['Registered', 'Unregistered'])->required();
            $table->string('voter_id')->unique()->nullable();
            
            // Foreign Key (after defining all columns)
            $table->unsignedBigInteger('household_id')->nullable();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down() {
        Schema::dropIfExists('pending_residents');
    }
};
