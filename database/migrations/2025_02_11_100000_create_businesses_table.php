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
        Schema::create('businesses', function (Blueprint $table) {
            $table->id();
            $table->string('business_name');
            $table->text('business_address');
            $table->string('business_type');
            $table->string('owner_name');
            $table->string('contact_number')->nullable();
            $table->string('email')->nullable();
            $table->string('business_permit_number')->nullable();
            $table->date('permit_issue_date')->nullable();
            $table->date('permit_expiry_date')->nullable();
            $table->enum('business_status', ['Active', 'Inactive', 'Pending'])->default('Active');
            $table->year('registration_year');
            
            // You may want to link businesses to residents
            $table->unsignedBigInteger('resident_id')->nullable();
            $table->foreign('resident_id')->references('id')->on('residents')->onDelete('set null');
            
            $table->softDeletes();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('businesses');
    }
};
