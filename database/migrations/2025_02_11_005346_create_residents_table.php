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
            // $table->foreignId('user_id')->nullable()->constrained()->onDelete('cascade');

            
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
            $table->enum('religion', ['Roman Catholic', 'Iglesia ni Cristo', 'Muslim', 'Protestant', 'Buddhist', 'Others'])->required();
            $table->string('philhealth_id')->unique()->nullable();
            $table->string('sss')->unique()->nullable();
            $table->string('pagibig_id')->unique()->nullable();
            $table->enum('voter_status', ['Registered', 'Unregistered'])->required();
            $table->string('voter_id')->unique()->nullable();
            
            // Foreign Key (after defining all columns)
            $table->unsignedBigInteger('household_id')->nullable();


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
